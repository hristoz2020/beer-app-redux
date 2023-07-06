import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRandomBeer } from "../redux/slices/randomBeerSlice";
import { RootState } from "../redux/store";
import { getRandomBeer } from "../services/beerService";
import BeerCard from "../components/BeerCard";
import Loader from "../components/Loader";
import { Beer } from "../types/beerTypes";

const Random = () => {
	const randomBeer = useSelector<RootState, Beer[]>(
		(state) => state.randomBeer.randomBeer
	);
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const isFirstRender = useRef(true);

	const fetchData = useCallback(() => {
		getRandomBeer()
			.then((beer) => {
				dispatch(setRandomBeer(beer));
				setIsLoading(false);
			})
			.catch((err) => console.log(err));
	}, [dispatch]);

	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return;
		}
		fetchData();
	}, [fetchData]);

	const displayBeer = isLoading ? (
		<Loader />
	) : (
		 <BeerCard key={randomBeer[0].id} beer={randomBeer[0]} />
	);

	return (
		<div className="d-flex justify-content-center mt-5">{displayBeer}</div>
	);
};

export default Random;

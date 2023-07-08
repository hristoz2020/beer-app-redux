import { useCallback, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import BeerCard from "../components/BeerCard";
import Loader from "../components/Loader";
import { Beer } from "../types/beerTypes";
import { getRandomBeer } from "../redux/slices/randomBeerSlice";

const Random = () => {
	const dispatch = useAppDispatch();
	const randomBeer = useAppSelector<Beer[]>(
		(state) => state.randomBeer.randomBeer
	);
	const isLoading = useAppSelector((state) => state.randomBeer.isLoading);
	const isFirstRender = useRef(true);

	const fetchData = useCallback(() => {
		dispatch(getRandomBeer());
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

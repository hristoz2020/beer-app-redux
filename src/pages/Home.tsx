import { useAppDispatch, useAppSelector } from "../redux/store";
import BeerCard from "../components/BeerCard";
import { Beer } from "../types/beerTypes";
import { useEffect } from "react";
import { getBeers } from "../redux/slices/beersSlice";

const Home = () => {
	const dispatch = useAppDispatch();
	const beers = useAppSelector((state) => state.beers.beers);

	useEffect(() => {
		dispatch(getBeers());
	}, [dispatch]);

	const displayBeers = beers.map((beer: Beer) => {
		return <BeerCard key={beer.id} beer={beer} />;
	});

	return (
		<>
			<h1 className="text-center m-3">Welcome to Beer App</h1>
			<div className="d-flex justify-content-center flex-wrap">
				{displayBeers}
			</div>
		</>
	);
};

export default Home;

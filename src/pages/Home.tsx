import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BeerCard from "../components/BeerCard";
import { setBeers } from "../redux/slices/beersSlice";
import { RootState } from "../redux/store";
import { getBeers } from "../services/beerService";
import { Beer } from "../types/beerTypes";

const Home = () => {
	const beers = useSelector<RootState, Beer[]>((state) => state.beers.beers);
	const dispatch = useDispatch();

	useEffect(() => {
		getBeers().then((res) => {
			const beersResponse: Beer[] = res;
			dispatch(setBeers(beersResponse));
		});
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

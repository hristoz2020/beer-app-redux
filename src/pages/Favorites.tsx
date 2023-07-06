import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import BeerCard from "../components/BeerCard";
import { Beer } from "../types/beerTypes";

const Favorites = () => {
	const favoriteBeers = useSelector<RootState, Beer[]>(
		(state) => state.favoriteBeers.data
	);

	const displayBeers =
		favoriteBeers.length > 0 ? (
			favoriteBeers.map((beer: Beer) => {
				return <BeerCard key={beer.id} beer={beer} />;
			})
		) : (
			<h2 className="mt-5">Please add beer to the list!</h2>
		);

	return (
		<>
			<h1 className="text-center m-3">Favorite Beers</h1>
			<div className="d-flex justify-content-center flex-wrap">
				{displayBeers}
			</div>
		</>
	);
};

export default Favorites;

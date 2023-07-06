import { Beer } from "../types/beerTypes";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
	addFavoriteBeer,
	removeFavoriteBeer,
} from "../redux/slices/favoriteBeersSlice";

const BeerCard = ({ beer }: { beer: Beer }) => {
	const { image_url, id } = beer;
	const dispatch = useDispatch();
	const favoriteBeers = useSelector<RootState, Beer[]>(
		(state) => state.favoriteBeers.favoriteBeers
	);
	const beerIsFavorite = favoriteBeers.some(
		(favBeer) => favBeer.id === beer.id
	);
	const editText = (text: string, maxLength: number): string =>
		text.length > maxLength ? text.slice(0, maxLength).concat("...") : text;
	const name = editText(beer.name, 25);
	const tagline = editText(beer.tagline, 30);
	const handleAddFavorite = () => {
		dispatch(addFavoriteBeer([beer]));
	};
	const handleRemoveFavorite = () => {
		dispatch(removeFavoriteBeer(beer));
	};

	const buttonForFavorites = beerIsFavorite ? (
		<span onClick={handleRemoveFavorite}>
			<i className="fa-solid fa-heart text-danger fs-3"></i>
		</span>
	) : (
		<span onClick={handleAddFavorite}>
			<i className="fa-regular fa-heart text-danger fs-3"></i>
		</span>
	);

	return (
		<div className="card card-container d-flex justify-content-center align-items-center m-2 border border-4 w-25 h-25">
			<img src={image_url} className="beer-img p-4" alt="beer" />
			{buttonForFavorites}
			<h6 className="text-center">{name}</h6>
			<p className="text-center">{tagline}</p>
			<Link to={`/details/${id}`} className="btn btn-primary mb-3">
				Details
			</Link>
		</div>
	);
};

export default BeerCard;

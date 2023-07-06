import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
	addFavoriteBeer,
	removeFavoriteBeer,
} from "../redux/slices/favoriteBeersSlice";
import { Beer } from "../types/beerTypes";
import NotFoundBeer from "../assets/images/beer_not_found.png";

const BeerCard = ({ beer }: { beer: Beer }) => {
	const dispatch = useDispatch();
	const favoriteBeers = useSelector<RootState, Beer[]>(
		(state) => state.favoriteBeers.data
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

	const image = beer.image_url !== null ? beer.image_url : NotFoundBeer;

	const handleFavorite = beerIsFavorite ? handleRemoveFavorite : handleAddFavorite
	const handleFavoriteIcon = beerIsFavorite ? "fa-solid" : "fa-regular"

	return (
		<div className="card card-container d-flex justify-content-center align-items-center m-2 border border-4 w-25 h-25">
			<img src={image} className="beer-img p-4" alt="beer" />
			<span onClick={handleFavorite}>
				<i className={`${handleFavoriteIcon} fa-heart text-danger fs-3`}></i>
			</span>
			<h6 className="text-center">{name}</h6>
			<p className="text-center">{tagline}</p>
			<Link to={`/details/${beer.id}`} className="btn btn-primary mb-3">
				Details
			</Link>
		</div>
	);
};

export default BeerCard;

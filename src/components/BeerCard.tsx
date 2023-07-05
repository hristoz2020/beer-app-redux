import { Beer } from "../types/beerTypes";
import { Link } from "react-router-dom";

const BeerCard = ({ beer }: { beer: Beer }) => {
	const { image_url, id } = beer;
	const name =
		beer.name.length > 25
			? beer.name.slice(0, 25).concat("...")
			: beer.name;
	const tagline =
		beer.tagline.length > 30
			? beer.tagline.slice(0, 30).concat("...")
			: beer.tagline;
	
	return (
		<div className="card card-container d-flex justify-content-center align-items-center m-2 border border-4 w-25 h-25">
			<img src={image_url} className="beer-img p-4" alt="beer" />
			<h6>{name}</h6>
			<p className="card-text">{tagline}</p>
			<Link to={`/beers/details/${id}`} className="btn btn-primary mb-3">
				Details
			</Link>
		</div>
	);
};

export default BeerCard;

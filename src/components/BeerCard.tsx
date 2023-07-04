import { Beer } from "../types/beerTypes";
import { Link } from "react-router-dom";

const BeerCard = ({ beer }: { beer: Beer }) => {
	return (
		<div className="card card-container d-flex align-items-center m-4 border border-4 w-25">
			<img src={beer.image_url} className="beer-img p-4" alt="beer" />
			<div className="card-body">
				<h5 className="card-title">{beer.name}</h5>
				<p className="mb-0">{beer.tagline}</p>
				<div className="d-flex justify-content-between align-items-center pt-2">
					<Link to={`/beers/details/${beer.id}`} className="btn btn-primary">
						Details
					</Link>
				</div>
			</div>
		</div>
	);
};

export default BeerCard;

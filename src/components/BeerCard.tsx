import { Beer } from "../types/beerTypes";

const BeerCard = ({ beer }: { beer: Beer }) => {
	return (
		<div className="card card-container d-flex align-items-center m-4 border border-4 w-25">
			<img src={beer.image_url} className="beer-img p-4" alt="beer" />
			<div className="card-body">
				<h5 className="card-title">{beer.name}</h5>
				<p className="mb-0">{beer.tagline}</p>
				<div className="d-flex justify-content-between align-items-center pt-2">
					<button type="button" className="btn btn-primary">
						Details
					</button>
				</div>
			</div>
		</div>
	);
};

export default BeerCard;

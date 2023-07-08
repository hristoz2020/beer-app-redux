import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { Beer } from "../types/beerTypes";
import NotFoundBeer from "../assets/images/beer_not_found.png";
import { useAppDispatch, useAppSelector } from "../redux/store";
import {
	getSingleBeer,
	resetSingleBeer,
} from "../redux/slices/singleBeerSlice";

const Details = () => {
	const { id } = useParams<{ id: string | undefined }>();
	const beer = useAppSelector<Beer[]>((state) => state.singleBeer.beer);
	const isLoading: boolean = useAppSelector(
		(state) => state.singleBeer.isLoading
	);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const isAvailableBeer: boolean = beer.length > 0;

	useEffect(() => {
		dispatch(getSingleBeer(id));
		return () => {
			dispatch(resetSingleBeer([]));
		};
	}, [dispatch, id]);

	const image =
		isAvailableBeer && beer[0].image_url !== null
			? beer[0].image_url
			: NotFoundBeer;


	return (
		<div className="container mt-5">
			<div className="card">
				<div className="card-body">
					{isLoading && <Loader />}
					{isAvailableBeer && (
						<div className="row">
							<div className="col-md-4 d-flex justify-content-center align-items-center">
								<img
									src={image}
									alt="beer"
									className="beer-img p-4"
								/>
							</div>
							<div className="col-md-8">
								<h3 className="card-header bg-light text-dark p-3 mb-3 rounded">
									{beer[0].name}
								</h3>
								<h4 className="mb-3">{beer[0].tagline}</h4>
								<h4>{beer[0].description}</h4>
								<h4>First Brewed: {beer[0].first_brewed}</h4>
								<h4>pH: {beer[0].ph}</h4>
								<h4>Food Pairing:</h4>
								<ul className="list-group list-group-flush">
									{beer[0].food_pairing.map(
										(food: string, index: number) => (
											<li
												className="list-group-item p-1"
												key={index}
											>
												<h5>{food}</h5>
											</li>
										)
									)}
								</ul>
								<h4 className="mt-3">{beer[0].brewers_tips}</h4>
								<button
									onClick={() => navigate(-1)}
									className="btn btn-primary mt-3"
								>
									Back
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Details;

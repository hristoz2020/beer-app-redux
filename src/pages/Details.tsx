import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Beer } from "../types/beerTypes";
import { getSingleBeer } from "../services/beerService";
import Loader from "../components/Loader";

const Details = () => {
	const [currentBeer, setCurrentBeer] = useState<Beer>();
	const { id } = useParams<{ id: string | undefined }>();
	const navigate = useNavigate();

	useEffect(() => {
		const getBeer = async () => {
			await getSingleBeer(id)
				.then((res) => {
					setCurrentBeer(res[0]);
				})
				.catch((error) => console.error(error));
		};
		getBeer();
	}, [id]);

	if (!currentBeer) {
		return <Loader />;
	}

	return (
		<div className="container mt-5">
			<div className="card">
				<div className="card-body">
					<div className="row">
						<div className="col-md-4 d-flex justify-content-center align-items-center">
							<img
								src={currentBeer.image_url}
								alt="beer"
								className="img-fluid beer-img p-4"
							/>
						</div>
						<div className="col-md-8">
							<h3 className="card-header bg-light text-dark p-3 mb-3 rounded">
								{currentBeer.name}
							</h3>
							<h4 className="mb-3">{currentBeer.tagline}</h4>
							<h4>{currentBeer.description}</h4>
							<h4>First Brewed: {currentBeer.first_brewed}</h4>
							<h4>pH: {currentBeer.ph}</h4>
							<h4>Food Pairing:</h4>
							<ul className="list-group list-group-flush">
								{currentBeer.food_pairing.map((food, index) => (
									<li
										className="list-group-item p-1"
										key={index}
									>
										<h5>{food}</h5>
									</li>
								))}
							</ul>
							<h4 className="mt-3">{currentBeer.brewers_tips}</h4>
							<button
								onClick={() => navigate(-1)}
								className="btn btn-primary mt-3"
							>
								Back
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;

import { FC } from "react";
import { useSelector } from "react-redux";
import BeerCard from "../components/BeerCard";
import Loader from "../components/Loader";
import { RootState } from "../redux/store";
import { Beer } from "../types/beerTypes";

const Beers: FC = () => {
	const beers = useSelector<RootState, Beer[]>((state) => state.beers.beers);

	return (
		<div>
			<h1>Beers page</h1>
			{beers.length <= 0 && <Loader />}
			<div className="d-flex justify-content-center flex-wrap">
				{beers.map((beer: Beer) => (
					<BeerCard beer={beer} key={beer.id} />
				))}
			</div>
		</div>
	);
};

export default Beers;

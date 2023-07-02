import { FC } from "react";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import { RootState } from "../redux/store";
import { Beer } from "../types/beerTypes";

const Beers: FC = () => {
	const beers = useSelector<RootState, Beer[]>((state) => state.beers.beers);

	return (
		<div>
			<h1>Beers page</h1>
			{beers.length <= 0 && <Loader />}
			{beers.map((beer) => (
				<h1 key={beer.id}>{beer.name}</h1>
			))}
		</div>
	);
};

export default Beers;

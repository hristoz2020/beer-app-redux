import { useState, useEffect, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import BeerCard from "../components/BeerCard";
import Loader from "../components/Loader";
import { RootState } from "../redux/store";
import { Beer } from "../types/beerTypes";
import ReactPaginate from "react-paginate";
import { paginationBeers } from "../services/beerService";
import { setBeers } from "../redux/slices/beersSlice";

const Beers = () => {
	const dispatch = useDispatch();
	const beers = useSelector<RootState, Beer[]>((state) => state.beers.beers);
	const [pageNumber, setPageNumber] = useState<number>(1);
	const [beersPerPage, setBeersPerPage] = useState<number>(10);
	const pagesVisited = pageNumber * beersPerPage;
	const pagesCount = Math.ceil(325 / beersPerPage);
	const displayBeers = beers
		.slice(pagesVisited, pagesVisited + beersPerPage)
		.map((beer: Beer) => {
			return <BeerCard key={beer.id} beer={beer} />;
		});

	const changePage = ({ selected }: { selected: number }) => {
		setPageNumber(selected + 1); //add 1 because in react-pagination start from 0 and in request start from 1
	};

	const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const selectedValue: number = Number(e.target.value);
		setBeersPerPage(selectedValue);
	};

	useEffect(() => {
		paginationBeers(pageNumber, beersPerPage).then((res) => {
			const beersResponse: Beer[] = res;
			dispatch(setBeers(beersResponse));
		});
	}, [beersPerPage, pageNumber, dispatch]);

	return (
		<div>
			{beers.length <= 0 && <Loader />}
			<div className="d-flex justify-content-center flex-wrap">
				{beers.map((beer: Beer) => (
					<BeerCard beer={beer} key={beer.id} />
				))}

				{beers.length < 1 && <h1>No beers found!</h1>}
				{beers.length > 0 && displayBeers}
			</div>
			<div className="paginationBttns d-flex flex-wrap">
				<select
					value={beersPerPage}
					onChange={handleSelectChange}
					className="mb-4"
				>
					<option value="10">10</option>
					<option value="25">25</option>
					<option value="50">50</option>
				</select>
				{beers.length > 0 && (
					<ReactPaginate
						previousLabel={"Previous"}
						nextLabel={"Next"}
						pageCount={pagesCount}
						onPageChange={changePage}
						containerClassName={"pagination justify-content-center"}
						previousLinkClassName={"previousBttn"}
						nextLinkClassName={"nextBttn"}
						disabledClassName={"paginationDisabled"}
						activeClassName={"paginationActive"}
					/>
				)}
			</div>
		</div>
	);
};

export default Beers;

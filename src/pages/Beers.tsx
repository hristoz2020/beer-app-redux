import { useState, useEffect, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import BeerCard from "../components/BeerCard";
import Loader from "../components/Loader";
import { RootState } from "../redux/store";
import { Beer } from "../types/beerTypes";
import ReactPaginate from "react-paginate";
import { getBeerByName, paginationBeers } from "../services/beerService";
import { setPaginationBeers } from "../redux/slices/paginationBeersSlice";

const Beers = () => {
	const dispatch = useDispatch();
	const beers = useSelector<RootState, Beer[]>((state) => state.paginationBeers.paginationBeers);
	const [pageNumber, setPageNumber] = useState<number>(1);
	const [beersPerPage, setBeersPerPage] = useState<number>(10);
	const [searchInput, setSearchInput] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const isAvailableBeers = beers.length > 0;
	const pagesCount =
		searchInput.length > 0
			? Math.ceil(beers.length / beersPerPage)
			: Math.ceil(325 / beersPerPage);

	useEffect(() => {
		searchInput.length > 0 &&
			getBeerByName(searchInput).then((res) => {
				setIsLoading(true);
				const beersResponse: Beer[] = res;
				dispatch(setPaginationBeers(beersResponse));
			});
		searchInput.length === 0 &&
			paginationBeers(pageNumber, beersPerPage).then((res) => {
				setIsLoading(true);
				const beersResponse: Beer[] = res;
				dispatch(setPaginationBeers(beersResponse));
			});
	}, [beersPerPage, pageNumber, dispatch, searchInput]);

	const changePage = ({ selected }: { selected: number }) => {
		setPageNumber(selected + 1); //add 1 because in react-pagination start from 0 and in request start from 1
	};

	const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const selectedValue: number = Number(e.target.value);
		setBeersPerPage(selectedValue);
	};

	const displayBeers = beers.map((beer: Beer) => {
		return <BeerCard key={beer.id} beer={beer} />;
	});

	const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setSearchInput(e.target.value);
	};

	return (
		<>
			{!isAvailableBeers && !isLoading && <Loader />}
			<div className="w-25 m-auto p-3">
				<label className="d-flex align-items-center">
					<input
						type="text"
						className="form-control"
						value={searchInput}
						placeholder="Search beer..."
						onChange={onSearch}
					/>
				</label>
			</div>
			<div className="d-flex justify-content-center flex-wrap">
				{!isAvailableBeers && isLoading && <h1>No beers found!</h1>}
				{isAvailableBeers && displayBeers}
			</div>
			<div className="paginationBttns d-flex justify-content-center align-items-center flex-wrap mb-3">
				{isAvailableBeers && (
					<h4 className="mb-3 me-1 pb-1">Beers per page:</h4>
				)}
				{isAvailableBeers && (
					<select
						value={beersPerPage}
						onChange={handleSelectChange}
						className="mb-3 p-1"
					>
						<option value="10">10</option>
						<option value="25">25</option>
						<option value="50">50</option>
					</select>
				)}
				{isAvailableBeers && (
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
		</>
	);
};

export default Beers;

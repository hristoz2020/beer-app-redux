import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Beers from "./pages/Beers";
import Home from "./pages/Home";
import { setBeers } from "./redux/slices/beersSlice";
import { paginationBeers } from "./services/beerService";
import { Beer } from "./types/beerTypes";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		async function getBeers() {
			let response = [];
			for (let i = 1; i <= 5; i++) {
				response.push(paginationBeers(i, 65));
			}
			response = await Promise.all(response);
			const flattenedResult: Beer[] = response.flat();
			dispatch(setBeers(flattenedResult));
		}
		getBeers();
	}, [dispatch]);

	return (
		<div className="App">
			<Navigation />
			<Routes>
				<Route path="/beer-app" element={<Home />} />
				<Route path="/beers" element={<Beers />} />
			</Routes>
		</div>
	);
}

export default App;

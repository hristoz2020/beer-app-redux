import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Beers from "./pages/Beers";
import Details from "./pages/Details";
import Home from "./pages/Home";

function App() {
	return (
		<div className="App">
			<Navigation />
			<Routes>
				<Route path="/beer-app" element={<Home />} />
				<Route path="/beers" element={<Beers />} />
				<Route path="/beers/details/:id" element={<Details />} />
			</Routes>
		</div>
	);
}

export default App;

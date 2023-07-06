import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Beers from "./pages/Beers";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Random from "./pages/Random";

function App() {
	return (
		<div className="App">
			<Navigation />
			<Routes>
				<Route path="/beer-app" element={<Home />} />
				<Route path="/beers" element={<Beers />} />
				<Route path="/details/:id" element={<Details />} />
				<Route path="/random" element={<Random />} />
			</Routes>
		</div>
	);
}

export default App;

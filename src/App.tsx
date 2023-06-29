import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";

function App() {
	return (
		<div className="App">
			<Navigation />
			<Routes>
				<Route path="/beer-app" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;

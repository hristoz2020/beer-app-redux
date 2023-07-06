import { FC, useState } from "react";
import { Link } from "react-router-dom";

const Navigation: FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleMenuOptionClick = () => {
		setIsMenuOpen(false);
	};

	const route = [
		{
			path: "/beer-app",
			title: "Home",
		},
		{
			path: "/favorites",
			title: "Favorites",
		},
		{
			path: "/beers",
			title: "Beers",
		},
		{
			path: "/random",
			title: "Random Beer",
		},
	];

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark p-1">
			<div className="container">
				<Link className="navbar-brand me-auto" to="/beer-app">
					Punk API
				</Link>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded={isMenuOpen ? "true" : "false"}
					aria-label="Toggle navigation"
					onClick={handleMenuToggle}
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div
					className={`collapse navbar-collapse ${
						isMenuOpen ? "show" : ""
					}`}
					id="navbarNav"
				>
					<ul className="navbar-nav ms-auto">
						{route.map((liItem) => (
							<li className="nav-item">
								<Link
									className="nav-link"
									to={liItem.path}
									onClick={handleMenuOptionClick}
								>
									{liItem.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;

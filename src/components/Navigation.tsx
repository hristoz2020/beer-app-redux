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

	const routes = [
		{
			id: 0,
			path: "/beer-app",
			title: "Home",
		},
		{
			id: 1,
			path: "/favorites",
			title: "Favorites",
		},
		{
			id: 2,
			path: "/beers",
			title: "Beers",
		},
		{
			id: 3,
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
						{routes.map((liItem) => (
							<li className="nav-item" key={liItem.id}>
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

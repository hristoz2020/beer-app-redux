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
						<li className="nav-item">
							<Link
								className="nav-link"
								to="/beer-app"
								onClick={handleMenuOptionClick}
							>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								to="/favorites"
								onClick={handleMenuOptionClick}
							>
								Favorites
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								to="/beers"
								onClick={handleMenuOptionClick}
							>
								Beers
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								to="/random"
								onClick={handleMenuOptionClick}
							>
								Random Beer
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;

import React from "react";
import { NavLink } from "react-router-dom";
import "./LoggedInNavbar.css";

const Navbar = ({ currentUser, setCurrentUser }) => {
	function handleLogout() {
		fetch("/logout", {
			method: "DELETE",
		});
		setCurrentUser(null);
	}

	return (
		<div>
			<nav className="nav-header">
				<ul className="navbar">
					<li>
						<NavLink to="/" className="nav-logo">
							🌊
						</NavLink>
					</li>
					<li>
						<NavLink to="/" className="nav-item">
							HOME
						</NavLink>{" "}
					</li>
					<li>
						<NavLink to="/new" className="nav-item">
							POST NEW NFT
						</NavLink>
					</li>
					<li>
						<NavLink to="/about" className="nav-item">
							ABOUT
						</NavLink>
					</li>
				</ul>

				<button className="logout-button" onClick={handleLogout}>
					LOG OUT
				</button>
			</nav>
		</div>
	);
};

export default Navbar;

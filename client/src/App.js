import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoggedInNavbar from "./components/LoggedInNavbar";
import LoggedInHome from "./components/LoggedInHome";
import NewNft from "./components/NewNft";
import About from "./components/About";

function App() {
	const [nfts, setNfts] = useState([]);
	const [currentUser, setCurrentUser] = useState(null);
	const [authChecked, setAuthChecked] = useState(false);

	useEffect(() => {
		fetch("/me").then((resp) => {
			if (resp.ok) {
				resp.json().then((user) => setCurrentUser(user));
			}
		});
	}, []);

	function handlePostAdd(nft) {
		fetch("/nfts", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(nft),
		})
			.then((resp) => resp.json())
			.then((nft) => {
				setNfts([...nfts, nft]);
			});
	}

	if (!currentUser)
		return (
			<div className="App">
				<>
					<Navbar />
					<div className="container">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route
								path="/login"
								element={<Login setCurrentUser={setCurrentUser} />}
							/>
							<Route
								path="/signup"
								element={<Signup setCurrentUser={setCurrentUser} />}
							/>
						</Routes>
					</div>
				</>
			</div>
		);
	if (currentUser)
		return (
			<div>
				<LoggedInNavbar setCurrentUser={setCurrentUser} />
				<Routes>
					<Route
						path="/"
						element={<LoggedInHome currentUser={currentUser} />}
					/>
					<Route path="/new" element={<NewNft onPostAdd={handlePostAdd} />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</div>
		);
}

export default App;

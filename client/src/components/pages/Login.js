import React, { useState } from "react";
import { login } from "../../features/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setCurrentUser }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState([]);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	function loginUser(e) {
		e.preventDefault();
		fetch("/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password }),
		}).then((res) => {
			if (res.ok) {
				res.json().then((user) => {
					dispatch(login(user));
					setCurrentUser(user);
					navigate("/");
				});
			} else {
				res.json().then((json) => setError(json.error));
				alert("Invalid Username or Password");
			}
		});
		setUsername("");
		setPassword("");
	}

	return (
		<div className="login">
			<h2 className="unauth-header">LOGIN</h2>
			<form onSubmit={loginUser}>
				<br />
				<label>Username</label>
				<br />
				<input
					type="text"
					name="username"
					value={username}
					placeholder="Username"
					onChange={(e) => setUsername(e.target.value)}
				/>
				<br />
				<br />
				<label>Password</label>
				<br />
				<input
					type="password"
					name=""
					value={password}
					placeholder="Password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<br />
				<br />
				<button className="login-btn">LOG IN</button>
			</form>
			{error ? <div>{error}</div> : null}
		</div>
	);
};

export default Login;

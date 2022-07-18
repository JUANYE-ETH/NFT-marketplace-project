import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = ({ setCurrentUser }) => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSubmit = async (e) => {
		e.preventDefault();
		const user = {
			username: username,
			password: password,
			email: email,
		};
		let resp = await fetch("/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		}).then((resp) => resp);
		if (resp.ok) {
			resp.json().then((user) => dispatch(login(user)));
			navigate("/Login");
		}
	};

	return (
		<div className="signup">
			<h2 className="unauth-header">CREATE AN ACCOUNT</h2>
			<form onSubmit={onSubmit}>
				<br />
				<label className="userFormItem">Username</label>
				<br />
				<input
					type="text"
					name="Username"
					placeholder="Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<br />
				<br />
				<label className="userFormItem">Email</label>
				<br />
				<input
					type="text"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<br />
				<br />
				<label className="userFormItem">Password</label>
				<br />
				<input
					type="password"
					name="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<br />
				<br />
				<label className="userFormItem">Confirm Password</label>
				<br />
				<input
					type="password"
					name="password"
					placeholder="Confirm Password"
					value={passwordConfirmation}
					onChange={(e) => setPasswordConfirmation(e.target.value)}
				/>
				<br />
				<br />

				<button type="submit" className="signup-btn">
					CREATE ACCOUNT
				</button>
			</form>
		</div>
	);
};

export default Signup;

import React, { useState } from "react";

const Signup = ({ setCurrentUser }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	function createUser(e) {
		e.preventDefault();
		const user = {
			username,
			password,
			password_confirmation: passwordConfirmation,
		};
		fetch("/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		}).then((res) => {
			if (res.ok) {
				res.json().then((user) => {
					setCurrentUser(user);
				});
			} else {
				res.json().then((error) => {
					console.log(error);
					alert("This user already exists");
				});
			}
		});
	}

	return (
		<div className="signup">
			<h2 className="unauth-header">CREATE AN ACCOUNT</h2>
			<form onSubmit={createUser}>
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

				<button type="submit" className="unauth-button">
					CREATE ACCOUNT
				</button>
			</form>
		</div>
	);
};

export default Signup;

import React from "react";
import "./About.css";

function About() {
	return (
		<div className="about">
			<h2 id="about">About LookSea 🌊</h2>
			<div className="text">
				<p>
					This is an application that is designed to mimic the basic
					functionality of Opensea. A user can create an account or login to
					their existing account, create NFTs and check out current NFTs that
					have been posted by other users. When a user creates a new NFT, only
					then will that user have permission to edit or delete that post. An
					admin can have permission to edit or delete any post. This application
					will be expanded upon soon!
					<br />
					Thanks for visiting!
				</p>
			</div>
		</div>
	);
}

export default About;

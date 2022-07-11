import React, { useEffect, useState } from "react";
import NftItem from "./NftItem";
import "./LoggedInHome.css";

function LoggedInHome({ currentUser }) {
	const [nfts, setNfts] = useState([]);

	useEffect(() => {
		fetch("/nfts")
			.then((resp) => resp.json())
			.then((nfts) => setNfts(nfts));
	}, [setNfts]);

	function handlePostDelete(id) {
		const updatedNfts = nfts.filter((nft) => nft.id !== id);
		setNfts(updatedNfts);
	}

	function handleEditPost(updatedPost) {
		const updatedNft = nfts.map((nft) => {
			if (nft.id === updatedPost.id) {
				return updatedPost;
			} else {
				return nft;
			}
		});
		setNfts(updatedNft);
	}

	function handleSortAlpha() {
		fetch("/nfts_by_order")
			.then((resp) => resp.json())
			.then((nfts) => setNfts(nfts));
	}

	function handleSortDate() {
		fetch("/nfts_by_date")
			.then((resp) => resp.json())
			.then((nfts) => setNfts(nfts));
	}

	function handleSortPrice() {
		fetch("/nfts_by_price")
			.then((resp) => resp.json())
			.then((nfts) => setNfts(nfts));
	}

	return (
		<div className="authpage">
			<div className="header">
				<h2 id="feed">NFT Feed</h2>
				<h3 id="user_welcome" className="user_welcome">
					Welcome to LookSea{" "}
					{currentUser.username[0].toUpperCase() +
						currentUser.username.substring(1)}
					!
				</h3>
			</div>
			<div className="filter-buttons">
				<button onClick={handleSortAlpha} className="filter-alpha">
					FILTER A-Z
				</button>
				<br />
				<button onClick={handleSortDate} className="filter-date">
					FILTER BY DATE
				</button>
				<br />
				<button onClick={handleSortPrice} className="filter-price">
					FILTER BY PRICE
				</button>
			</div>
			{nfts.map((nft) => (
				<NftItem
					key={nft.id}
					post={nft}
					onItemDelete={handlePostDelete}
					onEditItem={handleEditPost}
					setNfts={setNfts}
					currentUser={currentUser}
				/>
			))}
		</div>
	);
}

export default LoggedInHome;

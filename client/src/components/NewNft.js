import React, { useState } from "react";
import "./NewNft.css";

function NewNft({ onPostAdd }) {
	const [nft_name, setNftName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	const [image, setImage] = useState("");
	const [collection_id, setCollectionId] = useState("");

	// const nft_collect = nfts.map((nft) => nft.nft_collection);

	function submitNewPost(e) {
		e.preventDefault();

		const post = {
			nft_name: nft_name,
			description: description,
			price: price,
			image: image,
			collection_id: collection_id,
		};
		onPostAdd(post);
		setNftName("");
		setDescription("");
		setPrice("");
		setImage("");
		setCollectionId("");
	}

	function handleNftChange(e) {
		setNftName(e.target.value);
	}

	function handleDescriptionChange(e) {
		setDescription(e.target.value);
	}

	function handlePriceChange(e) {
		setPrice(e.target.value);
	}

	function handleCollectionChange(e) {
		setCollectionId(e.target.value);
	}

	function handleImageChange(e) {
		setImage(e.target.value);
	}

	return (
		<div className="new-nft-page">
			<form onSubmit={submitNewPost} className="newpost">
				<h4 id="new_nft">POST YOUR NFT</h4>
				<br />
				<input
					type="text"
					placeholder="NFT Name"
					id="nft_name"
					onChange={handleNftChange}
					value={nft_name}
				/>
				<br />
				<input
					type="text"
					placeholder="Image URL"
					id="image"
					onChange={handleImageChange}
					value={image}
				/>
				<br />
				<input
					type="text"
					placeholder="Describe your NFT"
					className="nft-description"
					id="description"
					onChange={handleDescriptionChange}
					value={description}
				/>
				<br />
				<input
					type="integer"
					placeholder="Price"
					id="price"
					onChange={handlePriceChange}
					value={price}
				/>
				<br />
				<select onChange={handleCollectionChange}>
					<option id="collection_id" value="">
						Select the NFT Collection
					</option>
					<option id="collection_id" value="1">
						Sporting
					</option>
					<option id="collection_id" value="2">
						Tools
					</option>
					<option id="collection_id" value="3">
						Misc
					</option>
					<option id="collection_id" value="4">
						Free
					</option>
				</select>
				<br />
				<button className="add-btn">ADD NFT</button>
			</form>
		</div>
	);
}

export default NewNft;

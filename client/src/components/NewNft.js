import React, { useState, useEffect } from "react";
import "./NewNft.css";
import { useNavigate } from "react-router-dom";

function NewNft({ onPostAdd }) {
	const [nft_name, setNftName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	const [image, setImage] = useState("");
	const [collection_id, setCollectionId] = useState("");
	const [nft_collections, setNft_collections] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		fetch("/nft_collections")
			.then((response) => response.json())
			.then(setNft_collections);
	}, []);

	function submitNewPost(e) {
		e.preventDefault();

		const post = {
			nft_name: nft_name,
			description: description,
			price: price,
			image: image,
			nft_collection_id: collection_id,
		};
		onPostAdd(post);
		setNftName("");
		setDescription("");
		setPrice("");
		setImage("");
		setCollectionId(0);

		navigate("/");
	}
	console.log(collection_id);

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
				<select value={collection_id} onChange={handleCollectionChange}>
					<option id="collection_id" value="">
						Select the NFT Collection
					</option>
					{nft_collections.map((nft_collection) => (
						<option value={nft_collection.id}>{nft_collection.made_by}</option>
					))}
				</select>
				<br />
				<button className="add-btn">ADD NFT</button>
			</form>
		</div>
	);
}

export default NewNft;

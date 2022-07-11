import React, { useState } from "react";

function EditForm({ onEditItem, post, toggleEditItem }) {
	const { id, nft } = post;
	const [updatedNft, setUpdatedNft] = useState(nft);

	function handleFormSubmit(e) {
		e.preventDefault();
		toggleEditItem();

		fetch(`/nfts/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				nft: updatedNft,
			}),
		})
			.then((r) => r.json())
			.then((updatedNft) => {
				onEditItem(updatedNft);
			});
	}

	return (
		<div>
			<form className="edit">
				<input
					className="description-field"
					type="text"
					placeholder={nft}
					value={updatedNft}
					onChange={(e) => setUpdatedNft(e.target.value)}
				></input>

				<br />

				<button type="submit" className="edit-btn" onClick={handleFormSubmit}>
					{" "}
					Confirm Edit
				</button>
			</form>
		</div>
	);
}

export default EditForm;

import React, { useState } from "react";
import EditForm from "./EditForm";
import "./NftItem.css";

const NftItem = ({ post, onItemDelete, onEditItem, currentUser }) => {
	const [showEdit, setShowEdit] = useState(false);
	const [isFavorite, setIsFavorite] = useState(false);

	const {
		id,
		nft_name,
		description,
		price,
		user,
		image,
		user_can_modify,
		nft_collection,
		comments,
	} = post;

	function toggleEditItem() {
		setShowEdit(!showEdit);
	}

	function submitNewEdit(updatedNft) {
		onEditItem(updatedNft);
	}

	function handleDelete() {
		fetch(`nfts/${id}`, {
			method: "DELETE",
		}).then((r) => {
			if (r.ok) {
				onItemDelete(id);
			}
		});
	}

	function handleFavorite() {
		setIsFavorite(!isFavorite);
	}

	return (
		<div className="each_post">
			<h3> {nft_name} </h3>
			<img src={image} alt="Random pic" />
			<h4> Description: {description}</h4>
			<h4>Price: ${price}</h4>
			<h4>Made By: {nft_collection.made_by}</h4>
			<h4>Owner: {user.username}</h4>
			<h4>Comments: {comments.content}</h4>

			{showEdit ? (
				<EditForm
					onEditItem={submitNewEdit}
					post={post}
					toggleEditItem={toggleEditItem}
				/>
			) : null}

			{user_can_modify ? (
				<div>
					<button onClick={toggleEditItem} className="each-post-btn">
						EDIT ITEM
					</button>
					<button onClick={handleDelete} className="each-post-btn">
						DELETE
					</button>
				</div>
			) : null}

			{isFavorite ? (
				<button onClick={handleFavorite} className="each-post-btn">
					💜
				</button>
			) : (
				<button onClick={handleFavorite} className="each-post-btn">
					♡
				</button>
			)}
			<div className="separator">
				______________________________________________________________
			</div>
		</div>
	);
};

export default NftItem;

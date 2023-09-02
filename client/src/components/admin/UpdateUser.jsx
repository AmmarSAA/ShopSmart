/******************************
* File Name: UpdateUser.jsx   *
* Author: Ammar S.A.A         *
* Output: Update User Modal   *
******************************/
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from 'axios';
import { storage } from "../../utils/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { SERVER } from "../../App";

export default function UpdateUser({ setUsers, user, Variant, ClassForButton, Name, ClassForName, Icon, ClassForIcon }) {
	const [show, setShow] = useState(false);
	const [updatedName, setUpdatedName] = useState("");
	const [updatedEmail, setUpdatedEmail] = useState("");
	const [updatedImage, setUpdatedImage] = useState(null);
	const [userID, setUserID] = useState("");
	const [alertMessage, setAlertMessage] = useState("");

	useEffect(() => {
		if (user) {
			setUserID(user._id);
			setUpdatedName(user.name);
			setUpdatedEmail(user.email);
		} else {
			setUserID(null);
			setUpdatedName("");
			setUpdatedEmail("");
		}
	}, [user]);

	const handleClose = () => {
		setShow(false);
		setAlertMessage("");
	};

	const handleShow = () => {
		setShow(true);
	};

	const updateUser = async (e) => {
		e.preventDefault();

		if (userID && (updatedName || updatedImage || updatedEmail)) {
			if (updatedName.trim() && updatedEmail.trim()) {
				try {
					let imageURL = ""; // Initialize imageURL as an empty string
					
					if (updatedImage) {
						// Upload the new image to Firebase Storage
						const imageRef = ref(storage, `images/profile/${userID}/${updatedImage.name}`);
						const snapshot = await uploadBytes(imageRef, updatedImage);
						imageURL = await getDownloadURL(snapshot.ref);
					}

					// Create the user data object
					const userData = {
						_id: userID,
						name: updatedName,
						email: updatedEmail,
						profilePic: imageURL, // Set imageURL whether empty or with a value
					};

					console.log(userData);

					// Send a PUT request to update the user details
					await axios.put(`${SERVER}api/users/updateUser`, userData);

					setAlertMessage("User updated successfully.");

					// Update the user list with the updated user details
					setUsers((prevUsers) =>
						prevUsers.map((u) =>
							u._id === user._id ? { ...u, name: updatedName, email: updatedEmail, profilePic: imageURL } : u
						)
					);
					setShow(false);
				} catch (error) {
					console.error("Error updating user:", error.message);
				}
			} else {
				setAlertMessage("Please provide an updated name and email.");
			}
		}
	};

	return (
		<>
			<Button variant={Variant} className={ClassForButton} onClick={handleShow}>
				{Icon && <Icon className={ClassForIcon} />}
				{Name && <span className={ClassForName}> {Name}</span>}
			</Button>

			<Modal show={show} onHide={handleClose} centered>
				<Modal.Body className="d-flex align-items-center justify-content-center">
					<form className="form1">
						<label>
							<input
								className="input1 pb-1"
								type="text"
								placeholder="Enter User ID"
								value={userID}
								disabled
							/>
						</label>
						<label>
							<input
								className="input1 pb-1"
								type="text"
								placeholder="Enter Updated Name"
								value={updatedName}
								onChange={(e) => setUpdatedName(e.target.value)}
								required
							/>
						</label>
						<label>
							<input
								className="input1 pb-1"
								type="email"
								placeholder="Enter Updated Email"
								value={updatedEmail}
								onChange={(e) => setUpdatedEmail(e.target.value)}
								required
							/>
						</label>
						<label>
							<input
								className="input1 pt-3 pb-1 form-control"
								type="file"
								onChange={(e) => setUpdatedImage(e.target.files[0])}
							/>
						</label>
						<button className="submit1" onClick={updateUser}>
							Update
						</button>
						{alertMessage && <div className="alert alert-success mt-3">{alertMessage}</div>}
					</form>
				</Modal.Body>
			</Modal>
		</>
	);
}

/********************************
* File Name: TrackOrder.jsx     *
* Author: Ammar S.A.A           *
* Output: Order Tracking Modal  *
********************************/

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { storage } from "../../utils/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import UpdateUser from "./UpdateUser"; // Replace with the correct path
import { SERVER } from "../App";

export default function TrackOrder({ Variant, ClassForButton, Name, ClassForName, Icon, ClassForIcon }) {
  const [show, setShow] = useState(false);
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const addUser = () => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("Name", userName);
    formData.append("Password", userPassword);

    if (!userImage || !userName) {
      setError("Please fill in all fields.");
      setIsLoading(false);
      return; // Exit the function if fields are not filled
    }

    if (userImage && userName) {
      const storageRef = ref(storage, `images/user/${userImage.name}`);
      uploadBytes(storageRef, userImage).then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            formData.append("Image", url);
            axios
              .post(
                `${SERVER}api/user/createUser`,
                formData
              )
              .then((json) => {
                setMessage(json.data.message);
              })
              .catch((err) => setError(err.message))
              .finally(() => {
                setIsLoading(false);
                setShow(false);
              });
          })
          .catch((error) => {
            setError(error.message);
            setIsLoading(false);
          });
      });
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleUserImageChange = (event) => {
    setUserImage(event.target.files[0]);
  };

  const handlePasswordChange = (event) => {
    setUserPassword(event.target.value);
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
            {isLoading ? (
              <h4 className="alert alert-info text-center text-capitalize">
                Creating User...
              </h4>
            ) : message ? (
              <h4 className="alert alert-success text-center text-capitalize">
                {message}
              </h4>
            ) : error ? (
              <h4 className="alert alert-danger text-center text-capitalize">
                {error}
              </h4>
            ) : null}
            <p className="title1">User</p>
            <p className="message1">Add New User.</p>
            <label>
              <input
                className="input1 pb-1"
                type="text"
                placeholder=""
                required={true}
                value={userName}
                onChange={handleUserNameChange}
              />
              <span>Tracking ID</span>
            </label>
            <label>
              <input
                className="input1 pb-1"
                type="password"
                placeholder=""
                required={true}
                value={userPassword}
                onChange={handlePasswordChange}
              />
              <span>Password</span>
            </label>
            <label>
              <input
                className="input1 pt-3 pb-1 form-control"
                type="file"
                placeholder=""
                required={true}
                onChange={handleUserImageChange}
              />
              <span>Profile Picture</span>
            </label>
            <button className="submit1" onClick={addUser}>
              Add New
            </button>
            <p className="signin1">
              Wanna Update User?{" "}
              <a href="#" className="btn-sm">
                <UpdateUser />
              </a>
            </p>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
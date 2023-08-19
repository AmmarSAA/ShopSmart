/****************************
* File Name: AddBrand.jsx 	*
* Author: Ammar S.A.A       *
* Output: Add Brand Modal   *
****************************/

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { storage } from "../../utils/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import UpdateBrand from "./UpdateBrand";

function AddBrand({ Variant, ClassForButton, Name, ClassForName, Icon, ClassForIcon }) {
  const [show, setShow] = useState(false);
  const [brandName, setBrandName] = useState("");
  const [brandImage, setBrandImage] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const addBrand = () => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("Name", brandName);

    if (!brandImage || !brandName) {
      setError("Please fill in all fields.");
      setIsLoading(false);
      return; // Exit the function if fields are not filled
    }

    if (brandImage && brandName) {
      const storageRef = ref(storage, `images/brand/${brandImage.name}`);
      uploadBytes(storageRef, brandImage).then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            formData.append("Image", url);
            axios
              .post(
                `http://localhost:5000/api/brand/createBrand`,
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

  const handleBrandNameChange = (event) => {
    setBrandName(event.target.value);
  };

  const handleBrandImageChange = (event) => {
    setBrandImage(event.target.files[0]);
  };

  return (
    <>

      <Button variant={Variant} className={ClassForButton} onClick={handleShow}>
        {Icon && <Icon className={ClassForIcon} />} {/* Conditional rendering of the icon */}
        {Name && <span className={ClassForName}> {Name}</span>} {/* Conditional rendering of the name */}
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="d-flex align-items-center justify-content-center">
          <form className="form1">
            {isLoading ? (
              <h4 className="alert alert-info text-center text-capitalize">
                Creating Brand...
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
            <p className="title1">Brand</p>
            <p className="message1">Add New Brand.</p>
            <label>
              <input
                className="input1 pb-1"
                type="text"
                placeholder=""
                required={true}
                value={brandName}
                onChange={handleBrandNameChange}
              />
              <span>Brand</span>
            </label>
            <label>
              <input
                className="input1 pt-3 pb-1 form-control"
                type="file"
                placeholder=""
                required={true}
                onChange={handleBrandImageChange}
              />
              <span>Image</span>
            </label>
            <button className="submit1" onClick={addBrand}>
              Add New
            </button>
            <p className="signin1">
              Wanna Update Brand?{" "}
              <a href="#" className="btn-sm">
                <UpdateBrand />
              </a>
            </p>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddBrand;

/******************************
* File Name: AddCategory.jsx  *
* Author: Ammar S.A.A         *
* Output: Add Category Modal  *
******************************/

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { storage } from "../../utils/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import UpdateCategory from "./UpdateCategory";

function AddCategory({ Variant, ClassForButton, Name, ClassForName, Icon, ClassForIcon }) {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const addCategory = () => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("Name", categoryName);

    if (!categoryImage || !categoryName) {
      setError("Please fill in all fields.");
      setIsLoading(false);
      return; // Exit the function if fields are not filled
    }

    if (categoryImage && categoryName) {
      const storageRef = ref(storage, `images/category/${categoryImage.name}`);
      uploadBytes(storageRef, categoryImage).then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            formData.append("Image", url);
            axios
              .post(
                `http://localhost:5000/api/category/createCategory`,
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

  const handleCategoryNameChange = (event) => {
    setCategoryName(event.target.value);
  };

  const handleCategoryImageChange = (event) => {
    setCategoryImage(event.target.files[0]);
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
                Creating Category...
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
            <p className="title1">Category</p>
            <p className="message1">Add New Category.</p>
            <label>
              <input
                className="input1 pb-1"
                type="text"
                placeholder=""
                required={true}
                value={categoryName}
                onChange={handleCategoryNameChange}
              />
              <span>Category</span>
            </label>
            <label>
              <input
                className="input1 pt-3 pb-1 form-control"
                type="file"
                placeholder=""
                required={true}
                onChange={handleCategoryImageChange}
              />
              <span>Image</span>
            </label>
            <button className="submit1" onClick={addCategory}>
              Add New
            </button>
            <p className="signin1">
              Wanna Update Category?{" "}
              <a href="#" className="btn-sm">
                <UpdateCategory />
              </a>
            </p>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddCategory;

/**********************************
* File Name: UpdateCategory.jsx   *
* Author: Ammar S.A.A 			      *
* Output: Update Category Modal   *
**********************************/

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./style.css";
import axios from 'axios';
import { SERVER } from "../../App";

function UpdateCategory({ setCategories, category, Variant, ClassForButton, Name, ClassForName, Icon, ClassForIcon }) {
  const [show, setShow] = useState(false);
  const [updatedName, setUpdatedName] = useState(""); // State to hold the updated category name
  const [updatedImage, setUpdatedImage] = useState(null); // State to hold the updated image file
  const [categoryID, setCategoryID] = useState(""); // State to hold the category ID

  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (category) {
      setCategoryID(category._id); // Set the category ID when the modal is shown
    } else {
      setCategoryID(null);
    }
    setShow(true);
  };

  const updateCategory = () => {
    if (categoryID && (updatedName || updatedImage)) {
      const formData = new FormData();
      formData.append('image', updatedImage);

      axios.put(`${SERVER}api/category/updateCategory`, {
        _id: categoryID,
        Name: updatedName,
        Image: updatedImage ? formData : category.image
      })
        .then((response) => {
          console.log(response.data.message);
          setCategories(prevCategories => prevCategories.map(b => b._id === category._id ? { ...b, name: updatedName } : b));
          setShow(false);
        })
        .catch((error) => {
          console.error("Error updating category:", error.message);
        });
    }
  }

  return (
    <>

      <Button variant={Variant} className={ClassForButton} onClick={handleShow}>
        {Icon && <Icon className={ClassForIcon} />} {/* Conditional rendering of the icon */}
        {Name && <span className={ClassForName}> {Name}</span>} {/* Conditional rendering of the name */}
      </Button>
      {/* <Button variant="white" className="btn align-items-center" onClick={handleShow}>
        <BsPencilFill className="navbar-icon" />
        <span className="d-none d-lg-inline"> Update Category</span>
      </Button> */}

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="d-flex align-items-center justify-content-center">
          <form className="form1">
            <p className="title1">Category</p>
            <p className="message1">Update Existing Category.</p>
            <label>
              <input
                className="input1 pb-1"
                type="text"
                placeholder="Enter Category ID to Update"
                value={categoryID}
                onChange={(e) => setCategoryID(e.target.value)}
                required={true}
              />
              <span>Category ID</span>
            </label>
            <label>
              <input
                className="input1 pb-1"
                type="text"
                placeholder="Enter Updated Category Name"
                value={updatedName || category?.name}
                onChange={(e) => setUpdatedName(e.target.value)}
                required
              />
              <span>Category</span>
            </label>
            <label>
              <input
                className="input1 pt-3 pb-1 form-control"
                type="file"
                placeholder=""
                onChange={(e) => setUpdatedImage(e.target.files[0])}
              />
              <span>Image</span>
            </label>
            <button className="submit1" onClick={updateCategory}>Update</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UpdateCategory;

/******************************
* File Name: UpdateBrand.jsx 	*
* Author: Ammar S.A.A 			  *
* Output: Update Brand Modal  *
******************************/

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./style.css";
import axios from 'axios';
import { SERVER } from "../../App";

function UpdateBrand({ setBrands, brand, Variant, ClassForButton, Name, ClassForName, Icon, ClassForIcon }) {
  const [show, setShow] = useState(false);
  const [updatedName, setUpdatedName] = useState(""); // State to hold the updated brand name
  const [updatedImage, setUpdatedImage] = useState(null); // State to hold the updated image file
  const [brandID, setBrandID] = useState(""); // State to hold the brand ID

  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (brand) {
      setBrandID(brand._id); // Set the brand ID when the modal is shown
    } else {
      setBrandID(null);
    }
    setShow(true);
  };

  const updateBrand = () => {
    if (brandID && (updatedName || updatedImage)) {
      const formData = new FormData();
      formData.append('image', updatedImage);

      axios.put(`${SERVER}api/brand/updateBrand`, {
        _id: brandID,
        Name: updatedName,
        Image: updatedImage ? formData : brand.image
      })
        .then((response) => {
          console.log(response.data.message);
          setBrands(prevBrands => prevBrands.map(b => b._id === brand._id ? { ...b, name: updatedName } : b));
          setShow(false);
        })
        .catch((error) => {
          console.error("Error updating brand:", error.message);
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
        <span className="d-none d-lg-inline"> Update Brand</span>
      </Button> */}

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="d-flex align-items-center justify-content-center">
          <form className="form1">
            <p className="title1">Brand</p>
            <p className="message1">Update Existing Brand.</p>
            <label>
              <input
                className="input1 pb-1"
                type="text"
                placeholder="Enter Brand ID to Update"
                value={brandID}
                onChange={(e) => setBrandID(e.target.value)}
                required={true}
              />
              <span>Brand ID</span>
            </label>
            <label>
              <input
                className="input1 pb-1"
                type="text"
                placeholder="Enter Updated Brand Name"
                value={updatedName || brand?.name}
                onChange={(e) => setUpdatedName(e.target.value)}
                required
              />
              <span>Brand</span>
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
            <button className="submit1" onClick={updateBrand}>Update</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UpdateBrand;

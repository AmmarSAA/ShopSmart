/******************************
* File Name: DeleteBrand.jsx 	*
* Author: Ammar S.A.A 			  *
* Output: Delete Brand Modal  *
******************************/

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './style.css';
import axios from 'axios';

export default function DeleteBrand({ setBrands, brandID, initialBrandName, Variant, ClassForButton, Name, ClassForName, Icon, ClassForIcon }) {
  const [show, setShow] = useState(false);
  const [brandName, setBrandName] = useState(initialBrandName || ''); // Use the initialBrandName if available
  const handleClose = () => {
    setShow(false);
    setBrandName(initialBrandName || ''); // Reset the brandName input on close
  };

  const handleShow = () => setShow(true);

  const deleteBrand = () => {
    axios.delete(`http://localhost:5001/api/brand/deleteBrand`, {
      data: { Name: brandName } // Sending the _id to delete the brand
    })
      .then((response) => {
        console.log(response.data.message);
        // Update the state after successful deletion
        setBrands(prevBrands => prevBrands.filter(brand => brand._id !== brandID));
        setShow(false);
      })
      .catch((error) => {
        console.error("Error deleting brand:", error.message);
      });
  }

  return (
    <>

      <Button variant={Variant} className={ClassForButton} onClick={handleShow}>
        {Icon && <Icon className={ClassForIcon} />} {/* Conditional rendering of the icon */}
        {Name && <span className={ClassForName}> {Name}</span>} {/* Conditional rendering of the name */}
      </Button>
      {/* <Button variant="white" className="btn align-items-center" onClick={handleShow}>
        <AiFillDelete className="navbar-icon" />
        <span className="d-none d-lg-inline"> Delete Brand</span>
      </Button> */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="d-flex align-items-center justify-content-center">
          <form className="form1">
            <p className="title1">Brand</p>
            <p className="message1">Delete Existing Brand.</p>
            <input
              hidden="true"
              value={brandID}
            />
            <label>
              <input
                className="input1 pb-1"
                type="text"
                placeholder="Enter Brand Name"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
              />
              <span>Name</span>
            </label>
            <button className="submit1" onClick={deleteBrand}>Delete</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

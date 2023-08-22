/******************************
* File Name: DeleteProduct.jsx 	*
* Author: Ammar S.A.A 			  *
* Output: Delete Product Modal  *
******************************/

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './style.css';
import axios from 'axios';

export default function DeleteProduct({ setProducts, productID, initialProductName, Variant, ClassForButton, Name, ClassForName, Icon, ClassForIcon }) {
  const [show, setShow] = useState(false);
  const [productName, setProductName] = useState(initialProductName || ''); // Use the initialProductName if available
  const handleClose = () => {
    setShow(false);
    setProductName(initialProductName || ''); // Reset the productName input on close
  };

  const handleShow = () => setShow(true);

  const deleteProduct = () => {
    axios.delete(`http://localhost:5001/api/product/deleteProduct`, {
      data: { Name: productName } // Sending the _id to delete the product
    })
      .then((response) => {
        console.log(response.data.message);
        // Update the state after successful deletion
        setProducts(prevProducts => prevProducts.filter(product => product._id !== productID));
        setShow(false);
      })
      .catch((error) => {
        console.error("Error deleting product:", error.message);
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
        <span className="d-none d-lg-inline"> Delete Product</span>
      </Button> */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="d-flex align-items-center justify-content-center">
          <form className="form1">
            <p className="title1">Product</p>
            <p className="message1">Delete Existing Product.</p>
            <input
              hidden="true"
              value={productID}
            />
            <label>
              <input
                className="input1 pb-1"
                type="text"
                placeholder="Enter Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
              <span>Name</span>
            </label>
            <button className="submit1" onClick={deleteProduct}>Delete</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

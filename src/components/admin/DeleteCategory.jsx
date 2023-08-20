/******************************
* File Name: DeleteCategory.jsx 	*
* Author: Ammar S.A.A 			  *
* Output: Delete Category Modal  *
******************************/

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './style.css';
import axios from 'axios';

export default function DeleteCategory({ setCategories, categoryID, initialCategoryName, Variant, ClassForButton, Name, ClassForName, Icon, ClassForIcon }) {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState(initialCategoryName || ''); // Use the initialCategoryName if available
  const handleClose = () => {
    setShow(false);
    setCategoryName(initialCategoryName || ''); // Reset the categoryName input on close
  };

  const handleShow = () => setShow(true);

  const deleteCategory = () => {
    axios.delete(`http://localhost:5000/api/category/deleteCategory`, {
      data: { Name: categoryName } // Sending the _id to delete the category
    })
      .then((response) => {
        console.log(response.data.message);
        // Update the state after successful deletion
        setCategories(prevCategories => prevCategories.filter(category => category._id !== categoryID));
        setShow(false);
      })
      .catch((error) => {
        console.error("Error deleting category:", error.message);
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
        <span className="d-none d-lg-inline"> Delete Category</span>
      </Button> */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="d-flex align-items-center justify-content-center">
          <form className="form1">
            <p className="title1">Category</p>
            <p className="message1">Delete Existing Category.</p>
            <input
              hidden="true"
              value={categoryID}
            />
            <label>
              <input
                className="input1 pb-1"
                type="text"
                placeholder="Enter Category Name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
              <span>Name</span>
            </label>
            <button className="submit1" onClick={deleteCategory}>Delete</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

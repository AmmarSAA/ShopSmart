/******************************
* File Name: DeleteUser.jsx 	*
* Author: Ammar S.A.A 			  *
* Output: Delete User Modal  *
******************************/

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

export default function DeleteUser({ setUsers, userID, initialUserEmail, Variant, ClassForButton, Name, ClassForName, Icon, ClassForIcon }) {
  const [show, setShow] = useState(false);
  const [userEmail, setUserEmail] = useState(initialUserEmail || ''); // Use the initialUserEmail if available

  const handleClose = () => {
    setShow(false);
    setUserEmail(initialUserEmail || ''); // Reset the userEmail input on close
  };

  const handleShow = () => setShow(true);

  const deleteUser = () => {
    axios.delete(`http://localhost:5000/api/users/deleteUser`, {
      data: { _id: userID } 
    })
      .then((response) => {
        console.log(response.data.message);
        // Update the state after successful deletion
        setUsers(prevUsers => prevUsers.filter(user => user._id !== userID));
        setShow(false);
      })
      .catch((error) => {
        console.error("Error deleting user:", error.message);
      });
  }

  return (
    <>
      <Button variant={Variant} className={ClassForButton} onClick={handleShow}>
        {Icon && <Icon className={ClassForIcon} />}
        {Name && <span className={ClassForName}> {Name}</span>}
      </Button>
      
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="d-flex align-items-center justify-content-center">
          <form className="form1">
            <p className="title1">User</p>
            <p className="message1">Delete Existing User.</p>
            <label>
              <input
                className="input1 pb-1"
                type="text"
                placeholder="Enter User ID"
                value={userID}
                onChange={(e) => setUserID(e.target.value)}
              />
              <span>User ID</span>
            </label>
            <label>
              <input
                className="input1 pb-1"
                type="text"
                placeholder="Enter User Email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
              <span>Email</span>
            </label>
            <button className="submit1" onClick={deleteUser}>Delete</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

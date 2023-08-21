/******************************
* File Name: UpdateUser.jsx   *
* Author: Ammar S.A.A         *
* Output: Update User Modal   *
******************************/
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from 'axios';

function UpdateUser({ setUsers, user, Variant, ClassForButton, Name, ClassForName, Icon, ClassForIcon }) {
  const [show, setShow] = useState(false);
  const [updatedName, setUpdatedName] = useState(""); 
  const [updatedImage, setUpdatedImage] = useState(null); 
  const [userID, setUserID] = useState(""); 

  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (user) {
      setUserID(user._id); 
    } else {
      setUserID(null);
    }
    setShow(true);
  };

  const updateUser = () => {
    if (userID && (updatedName || updatedImage)) {
      const formData = new FormData();
      formData.append('image', updatedImage);

      // Send a PUT request to update the user details
      axios.put(`http://localhost:5000/api/users/updateUser`, {
        _id: userID,
        name: updatedName,
        ProfilePic: updatedImage ? formData : user.profilePic
      })
        .then((response) => {
          console.log(response.data.message);
          // Update the user list with the updated user details
          setUsers(prevUsers => prevUsers.map(u => u._id === user._id ? { ...u, name: updatedName } : u));
          setShow(false);
        })
        .catch((error) => {
          console.error("Error updating user:", error.message);
        });
    }
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
            {/* Rest of the form */}
            <label>
              <input
                className="input1 pb-1"
                type="text"
                placeholder="Enter User ID to Update"
                value={userID}
                onChange={(e) => setUserID(e.target.value)}
                required={true}
              />
              <span>User ID</span>
            </label>
            <label>
              <input
                className="input1 pb-1"
                type="text"
                placeholder="Enter Updated User Name"
                value={updatedName || user?.name}
                onChange={(e) => setUpdatedName(e.target.value)}
                required
              />
              <span>User</span>
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
            <button className="submit1" onClick={updateUser}>Update</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UpdateUser;

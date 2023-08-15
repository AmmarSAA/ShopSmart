/******************************
* File Name: DeleteBrand.jsx 	*
* Author: Ammar S.A.A 			  *
* Output: Delete Brand Modal  *
******************************/

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './style.css'

function DeleteBrand() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="white" onClick={handleShow}>
        Delete Brand
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="d-flex align-items-center justify-content-center">
          <form className="form1">
            <p className="title1">Brand </p>
            <p className="message1">Delete Existing Brand. </p>
            {/* <div className="flex1">
              <label>
                <input className="input1" type="text" placeholder="" required="" />
                <span>Firstname</span>
              </label>
              <label>
                <input className="input1" type="text" placeholder="" required="" />
                <span>Lastname</span>
              </label>
            </div> */}
            <label>
              <input
                className="input1 pb-1"
                type="text"
                placeholder=""
                required=""
              />
              <span>ID</span>
            </label>
            {/* <label>
              <input
                className="input1 pt-3 pb-1 form-control"
                type="file"
                placeholder=""
                required=""
              />
              <span>Image</span>
            </label> */}
            <button className="submit1">Delete</button>
            {/* <p className="signin1">
              Wanna Update Brand? <a href="#" className="btn-sm"><UpdateBrand /></a>{" "}
            </p> */}
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DeleteBrand;
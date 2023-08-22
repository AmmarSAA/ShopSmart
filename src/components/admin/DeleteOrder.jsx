import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function DeleteOrder({ Variant, ClassForButton, Name, ClassForName, Icon, ClassForIcon }) {
  const [show, setShow] = useState(false);
  const [orderId, setOrderId] = useState(""); // State to hold the order ID
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const deleteOrder = () => {
    setIsLoading(true);

    if (!orderId) {
      setError("Please enter the Order ID.");
      setIsLoading(false);
      return;
    }

    axios
      .delete("http://localhost:5001/api/order/delete-order", {
        data: { _id: orderId } // Sending the _id to delete the order
      })
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((err) => setError(err.message))
      .finally(() => {
        setIsLoading(false);
        setShow(false);
      });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant={Variant} className={ClassForButton} onClick={handleShow}>
        {Icon && <Icon className={ClassForIcon} />}
        {Name && <span className={ClassForName}> {Name}</span>}
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="d-flex align-items-center justify-content-center">
          <form className="form1">
            {isLoading ? (
              <h4 className="alert alert-info text-center text-capitalize">
                Deleting Order...
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
            <p className="title1">Order</p>
            <p className="message1">Delete Existing Order.</p>
            <label>
              <input
                className="input1 pb-1"
                type="text"
                placeholder=""
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                required={true}
              />
              <span>Order ID</span>
            </label>
            <button className="submit1" onClick={deleteOrder}>Delete</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DeleteOrder;

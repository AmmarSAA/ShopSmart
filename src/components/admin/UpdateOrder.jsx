import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function UpdateOrder({ Variant, ClassForButton, Name, ClassForName, Icon, ClassForIcon }) {
  const [show, setShow] = useState(false);
  const [orderId, setOrderId] = useState(""); // State to hold the order ID
  const [updatedItems, setUpdatedItems] = useState([]);
  const [updatedTotalBill, setUpdatedTotalBill] = useState(0);
  const [updatedCustomerAddress, setUpdatedCustomerAddress] = useState("");
  const [updatedCustomerContact, setUpdatedCustomerContact] = useState("");
  const [updatedCustomerName, setUpdatedCustomerName] = useState("");
  const [updatedCustomerEmail, setUpdatedCustomerEmail] = useState("");
  const [updatedStatus, setUpdatedStatus] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const updateOrder = () => {
    setIsLoading(true);

    if (
      !orderId ||
      !updatedItems.length ||
      !updatedTotalBill ||
      !updatedCustomerAddress ||
      !updatedCustomerContact ||
      !updatedCustomerName ||
      !updatedCustomerEmail ||
      !updatedStatus
    ) {
      setError("Please fill in all fields.");
      setIsLoading(false);
      return;
    }

    const orderData = {
      _id: orderId,
      items: updatedItems,
      totalBill: updatedTotalBill,
      customerAddress: updatedCustomerAddress,
      customerContact: updatedCustomerContact,
      customerName: updatedCustomerName,
      customerEmail: updatedCustomerEmail,
      status: updatedStatus,
    };

    axios
      .put("http://localhost:5001/api/order/update-order", orderData)
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

  const statusOptions = ["Pending", "Delivered"]; // Add more options if needed

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
                Updating Order...
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
            <p className="message1">Update Existing Order.</p>
            <label>
              <input
                className="input1 pb-1"
                type="text"

                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                required={true}
              />
              <span>Order ID</span>
            </label>
            <label>
              <input
                className="input1 pb-1"
                type="text"

                value={updatedItems}
                onChange={(e) => setUpdatedItems(e.target.value)}
                required={true}
              />
              <span>Updated Items</span>
            </label>
            <label>
              <input
                className="input1 pb-1"
                type="text"

                value={updatedTotalBill}
                onChange={(e) => setUpdatedTotalBill(e.target.value)}
                required={true}
              />
              <span>Total Bill</span>
            </label>
            <label>
              <input
                className="input1 pb-1"
                type="text"

                value={updatedCustomerAddress}
                onChange={(e) => setUpdatedCustomerAddress(e.target.value)}
                required={true}
              />
              <span>Customer Address</span>
            </label>
            <label>
              <input
                className="input1 pb-1"
                type="text"

                value={updatedCustomerContact}
                onChange={(e) => setUpdatedCustomerContact(e.target.value)}
                required={true}
              />
              <span>Customer Contact</span>
            </label>
            <label>
              <input
                className="input1 pb-1"
                type="text"

                value={updatedCustomerName}
                onChange={(e) => setUpdatedCustomerName(e.target.value)}
                required={true}
              />
              <span>Customer Name</span>
            </label>
            <label>
              <input
                className="input1 pb-1"
                type="text"

                value={updatedCustomerEmail}
                onChange={(e) => setUpdatedCustomerEmail(e.target.value)}
                required={true}
              />
              <span>Customer Email</span>
            </label>
            <label>
              <select
                className="input1 pt-3 pb-1"
                required={true}
                value={updatedStatus}
                onChange={(e) => setUpdatedStatus(e.target.value)}
              >
                <option value="">Select Status</option>
                {statusOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            {/* ... Other input fields for order details ... */}
            <button className="submit1" onClick={updateOrder}>
              Update
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UpdateOrder;

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import UpdateOrder from "./UpdateOrder";

function AddOrder({ Variant, ClassForButton, Name, ClassForName, Icon, ClassForIcon }) {
  const [show, setShow] = useState(false);
  const [items, setItems] = useState([]);
  const [totalBill, setTotalBill] = useState(0);
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerContact, setCustomerContact] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const createOrder = () => {
    setIsLoading(true);

    if (
      !items.length ||
      !totalBill ||
      !customerAddress ||
      !customerContact ||
      !customerName ||
      !customerEmail ||
      !status
    ) {
      setError("Please fill in all fields.");
      setIsLoading(false);
      return;
    }

    const orderData = {
      items,
      totalBill,
      customerAddress,
      customerContact,
      customerName,
      customerEmail,
      status,
    };

    axios
      .post("http://localhost:5001api/order/createOrder", orderData)
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

  const handleOrderEmailChange = (e) => {
    setCustomerEmail(e.target.value);
  }

  const handleOrderBillChange = (e) => {
    setTotalBill(e.target.value);
  }

  const handleOrderItemsChange = (e) => {
    setItems(e.target.value);

  }

  const handleOrderAddressChange = (e) => {
    setCustomerAddress(e.target.value);
  }

  const handleOrderContactChange = (e) => {
    setCustomerContact(e.target.value);
  }

  const handleOrderNameChange = (e) => {
    setCustomerName(e.target.value);
  }

  const statusOptions = ["Pending", "Delivered"]; // Add more options if needed

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };
  // Handle input changes

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
                Creating Order...
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
            <p className="message1">Add New Order.</p>
            <label>
              <input
                className="input1 pt-3 pb-1"
                type="text"
                placeholder=""
                required={true}
                value={items}
                onChange={handleOrderItemsChange}
              />
              <span className="text-success">Items</span>
            </label>
            <label>
              <input
                className="input1 pb-1"
                type="text"
                placeholder=""
                required={true}
                value={totalBill}
                onChange={handleOrderBillChange}
              />
              <span className="text-success">Total Bill</span>
            </label>
            <label>
              <input
                className="input1 pb-1"
                type="text"
                placeholder=""
                required={true}
                value={customerAddress}
                onChange={handleOrderAddressChange}
              />
              <span className="text-success">Customer Address</span>
            </label>
            <label>
              <input
                className="input1 pb-1"
                type="text"
                placeholder=""
                required={true}
                value={customerContact}
                onChange={handleOrderContactChange}
              />
              <span className="text-success">Customer Contact</span>
            </label>
            <label>
              <input
                className="input1 pb-1"
                type="text"
                placeholder=""
                required={true}
                value={customerName}
                onChange={handleOrderNameChange}
              />
              <span className="text-success">Customer Name</span>
            </label>
            <label>
              <input
                className="input1 pt-3 pb-1"
                type="email"
                placeholder=""
                required={true}
                value={customerEmail}
                onChange={handleOrderEmailChange}
              />
              <span className="text-success">Email</span>
            </label>
            <label>
            <select
              className="input1 pt-3 pb-1"
              required={true}
              value={status}
              onChange={handleStatusChange}
            >
              <option value="">Select Status</option>
              {statusOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
            <p className="signin1">
              Wanna Update Order?{" "}
              <a href="#" className="btn-sm">
                <UpdateOrder /> 
              </a>
            </p>
            <button className="submit1" onClick={createOrder}>
              Create Order
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddOrder;

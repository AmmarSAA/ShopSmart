import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import DeleteOrder from "./DeleteOrder"; // Import the DeleteOrder component
import UpdateOrder from "./UpdateOrder";
import "./style.css"; // Import a CSS file for custom styles
import { AiFillDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";

function ShowOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/order/getOrders")
      .then((json) => setOrders(json.data.orders))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="table-responsive">
      <Table striped bordered hover className="w-100 table-fluid">
        <thead>
          <tr>
            <th className="text-center w-25">ID</th>
            <th className="text-center">Total Bill</th>
            <th className="text-center">Customer Name</th>
            <th className="text-center">Customer Email</th>
            <th className="text-center">Customer Address</th>
            <th className="text-center">Customer Contact</th>
            <th className="text-center">Status</th>
            <th className="text-center">Creation Date</th>
            <th className="text-center">Updation Date</th>
            <th colSpan={2} className="text-center justify-content-center align-items-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((val, key) => (
            <tr key={key}>
              <td className="text-truncate">{val._id}</td>
              <td>{val.totalBill}</td>
              <td>{val.customerName}</td>
              <td>{val.customerEmail}</td>
              <td>{val.customerAddress}</td>
              <td>{val.customerContact}</td>
              <td>{val.status}</td>
              <td>{val.createdAt}</td>
              <td>{val.updatedAt}</td>
              <td className="text-center justify-content-center align-items-center">
                <DeleteOrder
                  Variant="danger"
                  ClassForButton="btn-sm custom-button align-items-center mt-2"
                  Name=""
                  ClassForName="d-none d-lg-inline"
                  Icon={AiFillDelete}
                  ClassForIcon="navbar-icon"
                  setOrders={setOrders}
                  orderId={val._id}
                />
              </td>
              <td className="text-center justify-content-center align-items-center">
                <UpdateOrder
                  Variant="primary"
                  ClassForButton="btn-sm custom-button align-items-center mt-2"
                  Name=""
                  ClassForName="d-none d-lg-inline"
                  Icon={BsFillPencilFill}
                  ClassForIcon="navbar-icon"
                  setOrders={setOrders}
                  order={val}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ShowOrders;

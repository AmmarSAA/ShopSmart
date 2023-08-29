/****************************
* File Name: ShowOrder.jsx  *
* Author: Ammar S.A.A       *
* Output: Show All Orders   *
****************************/

import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import DeleteOrder from "./DeleteOrder";
import UpdateOrder from "./UpdateOrder";
import "./style.css";
import { AiFillDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";

function ShowOrder() {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    axios
      .get("api/order/getOrder")
      .then((json) => setOrder(json.data.order))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="table-responsive">
      <Table striped bordered hover className="w-100 table-fluid">
        <thead>
          <tr>
            <th className="text-center w-25">ID</th>
            <th className="text-center">Total Bill</th>
            <th className="text-center">Name</th>
            <th className="text-center">Email</th>
            <th className="text-center">Address</th>
            <th className="text-center">Contact</th>
            <th className="text-center">Status</th>
            <th className="text-center">Creation Date</th>
            <th className="text-center">Updation Date</th>
            <th colSpan={2} className="text-center justify-content-center align-items-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {order && order.length > 0 ? (
            order.map((val, key) => (
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
                    setOrder={setOrder}
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
                    setOrder={setOrder}
                    order={val}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="11" className="bg-light text-center text-capitalize">Oops! No orders found.</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default ShowOrder;

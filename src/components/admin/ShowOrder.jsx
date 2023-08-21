/********************************
* File Name: ShowOrder.jsx   *
* Author: Ammar S.A.A           *
* Output: Show All Orders   *
********************************/

import axios from 'axios';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import DeleteOrder from './DeleteOrder';
import UpdateOrder from './UpdateOrder';
import './style.css';
import { AiFillDelete } from 'react-icons/ai';
import { BsFillPencilFill } from "react-icons/bs";

function ShowOrders() {

  const [orders, setOrders] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/order/getOrder')
      .then((json) => setOrders(json.data.orders))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="table-responsive">
      <Table striped bordered hover className='w-100 table-fluid'>
        <thead>
          <tr>
            <th className='text-center w-25'>ID</th>
            <th className='text-center'>Name</th>
            <th className='text-center'>Picture</th>
            <th className='text-center'>Creation Date</th>
            <th className='text-center'>Updation Date</th>
            <th colSpan={2} className='text-center justify-content-center align-items-center'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            orders?.map((val, key) =>
              <tr key={key}>
                <td className='text-truncate'>{val._id}</td>
                <td>{val.name}</td>
                <td><img src={val.image} alt={val.name} className='order-image' /></td>
                <td>{val.createdAt}</td>
                <td>{val.updatedAt}</td>
                <td className='text-center justify-content-center align-items-center'>
                  <DeleteOrder
                    Variant="danger"
                    ClassForButton="btn-sm custom-button align-items-center mt-2"
                    Name=""
                    ClassForName="d-none d-lg-inline"
                    Icon={AiFillDelete}
                    ClassForIcon="navbar-icon"
                    setOrders={setOrders}
                    orderID={val._id}
                    initialOrderName={val.name}
                  />
                </td>
                <td className='text-center justify-content-center align-items-center'>
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
              </tr>)
          }
        </tbody>
      </Table>
    </div>
  );
}

export default ShowOrders;

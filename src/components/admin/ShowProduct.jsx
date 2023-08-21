/******************************
* File Name: ShowProduct.jsx  *
* Author: Ammar S.A.A         *
* Output: Show All Products   *
******************************/

import axios from 'axios';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import DeleteProduct from './DeleteProduct';
import UpdateProduct from './UpdateProduct';
import './style.css';
import { AiFillDelete } from 'react-icons/ai';
import { BsFillPencilFill } from "react-icons/bs";

function ShowProducts() {

  const [orders, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/product/getProduct')
      .then((json) => setProducts(json.data.orders))
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
                  <DeleteProduct
                    Variant="danger"
                    ClassForButton="btn-sm custom-button align-items-center mt-2"
                    Name=""
                    ClassForName="d-none d-lg-inline"
                    Icon={AiFillDelete}
                    ClassForIcon="navbar-icon"
                    setProducts={setProducts}
                    orderID={val._id}
                    initialProductName={val.name}
                  />
                </td>
                <td className='text-center justify-content-center align-items-center'>
                  <UpdateProduct
                    Variant="primary"
                    ClassForButton="btn-sm custom-button align-items-center mt-2"
                    Name=""
                    ClassForName="d-none d-lg-inline"
                    Icon={BsFillPencilFill}
                    ClassForIcon="navbar-icon"
                    setProducts={setProducts}
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

export default ShowProducts;

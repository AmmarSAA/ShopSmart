/****************************
* File Name: ShowBrand.jsx  *
* Author: Ammar S.A.A 			*
* Output: Show All Brands   *
****************************/

import axios from 'axios';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import DeleteBrand from './DeleteBrand'; // Import the DeleteBrand component
import UpdateBrand from './UpdateBrand';
import './style.css'; // Import a CSS file for custom styles
import { AiFillDelete } from 'react-icons/ai';
import { BsFillPencilFill } from "react-icons/bs";

function ShowBrands() {

  const [brands, setBrands] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/brand/getBrand')
      .then((json) => setBrands(json.data.brands))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="table-responsive"> {/* Wrap the Table component in a responsive container */}
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
            brands?.map((val, key) =>
              <tr key={key}>
                <td className='text-truncate'>{val._id}</td>
                <td>{val.name}</td>
                <td><img src={val.image} alt={val.name} className='brand-image' /></td>
                <td>{val.createdAt}</td>
                <td>{val.updatedAt}</td>
                <td className='text-center justify-content-center align-items-center'>
                  <DeleteBrand
                    Variant="danger"
                    ClassForButton="btn-sm custom-button align-items-center mt-2"
                    Name=""
                    ClassForName="d-none d-lg-inline"
                    Icon={AiFillDelete}
                    ClassForIcon="navbar-icon"
                    setBrands={setBrands}
                    brandID={val._id}
                    initialBrandName={val.name}
                  />
                </td>
                <td className='text-center justify-content-center align-items-center'>
                  <UpdateBrand
                    Variant="primary"
                    ClassForButton="btn-sm custom-button align-items-center mt-2"
                    Name=""
                    ClassForName="d-none d-lg-inline"
                    Icon={BsFillPencilFill}
                    ClassForIcon="navbar-icon"
                    setBrands={setBrands}
                    brand={val}

                  />
                </td>
              </tr>)
          }
        </tbody>
      </Table>
    </div>
  );
}

export default ShowBrands;

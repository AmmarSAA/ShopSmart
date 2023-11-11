/********************************
* File Name: ShowCategory.jsx   *
* Author: Ammar S.A.A           *
* Output: Show All Categories   *
********************************/

import axios from 'axios';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import DeleteCategory from './DeleteCategory';
import UpdateCategory from './UpdateCategory';
import './style.css';
import { AiFillDelete } from 'react-icons/ai';
import { BsFillPencilFill } from "react-icons/bs";
import { SERVER } from '../../App';

function ShowCategories() {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get(`${SERVER}api/category/getCategory`)
      .then((json) => setCategories(json.data.categories))
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
          {categories && categories.length > 0 ? (
            categories?.map((val, key) =>
              <tr key={key}>
                <td className='text-truncate'>{val._id}</td>
                <td>{val.name}</td>
                <td><img src={val.image} alt={val.name} className='category-image' /></td>
                <td>{val.createdAt}</td>
                <td>{val.updatedAt}</td>
                <td className='text-center justify-content-center align-items-center'>
                  <DeleteCategory
                    Variant="danger"
                    ClassForButton="btn-sm custom-button align-items-center mt-2"
                    Name=""
                    ClassForName="d-none d-lg-inline"
                    Icon={AiFillDelete}
                    ClassForIcon="navbar-icon"
                    setCategories={setCategories}
                    categoryID={val._id}
                    initialCategoryName={val.name}
                  />
                </td>
                <td className='text-center justify-content-center align-items-center'>
                  <UpdateCategory
                    Variant="primary"
                    ClassForButton="btn-sm custom-button align-items-center mt-2"
                    Name=""
                    ClassForName="d-none d-lg-inline"
                    Icon={BsFillPencilFill}
                    ClassForIcon="navbar-icon"
                    setCategories={setCategories}
                    category={val}

                  />
                </td>
              </tr>
            )) : (
            <tr>
              <td colSpan="7" className="bg-light text-center text-capitalize">Oops! No categories found.</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default ShowCategories;

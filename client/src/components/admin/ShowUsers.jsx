/****************************
* File Name: ShowUser.jsx  *
* Author: Ammar S.A.A 			*
* Output: Show All Users   *
****************************/

import axios from 'axios';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import DeleteUser from './DeleteUser';
import UpdateUser from './UpdateUser';
import './style.css';
import { AiFillDelete } from 'react-icons/ai';
import { BsFillPencilFill } from "react-icons/bs";
import { SERVER } from '../../App';

function ShowUsers() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get(`${SERVER}api/users/getUsers`)
      .then((json) => setUsers(json.data.users))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="table-responsive">
      <Table striped bordered hover className='w-100 table-fluid'>
        <thead>
          <tr>
            <th className='text-center w-25'>ID</th>
            <th className='text-center'>Name</th>
            <th className='text-center'>Email</th>
            <th className='text-center'>Profile Picture</th>
            <th className='text-center'>Role</th>
            <th className='text-center'>Creation Date</th>
            <th className='text-center'>Updation Date</th>
            <th colSpan={2} className='text-center justify-content-center align-items-center'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            users?.map((val, key) =>
              <tr key={key}>
                <td className='text-truncate'>{val._id}</td>  
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td><img src={val.profilePic} alt={val.name} className='user-image' /></td>
                <td>{val.role}</td>
                <td>{val.createdAt}</td>
                <td>{val.updatedAt}</td>
                <td className='text-center justify-content-center align-items-center'>
                  <DeleteUser
                    Variant="danger"
                    ClassForButton="btn-sm custom-button align-items-center mt-2"
                    Name=""
                    ClassForName="d-none d-lg-inline"
                    Icon={AiFillDelete}
                    ClassForIcon="navbar-icon"
                    setUsers={setUsers}
                    userID={val._id}
                    initialUserEmail={val.email}
                    initialUserName={val.name}
                  />
                </td>
                <td className='text-center justify-content-center align-items-center'>
                  <UpdateUser
                    Variant="primary"
                    ClassForButton="btn-sm custom-button align-items-center mt-2"
                    Name=""
                    ClassForName="d-none d-lg-inline"
                    Icon={BsFillPencilFill}
                    ClassForIcon="navbar-icon"
                    setUsers={setUsers}
                    user={val}

                  />
                </td>
              </tr>)
          }
        </tbody>
      </Table>
    </div>
  );
}

export default ShowUsers;

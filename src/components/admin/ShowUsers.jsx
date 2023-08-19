import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';

export default function ShowUsers() {

  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/api/users/getUsers')
      .then((json) => setUsers(json.data.users))
      .catch((err) => console.log(err))
  }, [users])

  return (
    <Table striped bordered hover className='w-100'>
      <thead>
        <tr>
          <th>_id</th>
          <th>Username</th>
          <th>Email</th>
          <th>Profile Pic</th>
          <th>Role</th>
          <th>Created Date</th>
          <th>Updated Date</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((val, key) =>
            <tr key={key}>
              <td>{val._id}</td>
              <td>{val.name}</td>
              <td>{val.email}</td>
              <td><img src={val.profilepic} /></td>
              <td>{val.role}</td>
              <td>{val.createdAt}</td>
              <td>{val.updatedAt}</td>
            </tr>)
        }
      </tbody>
    </Table>
  );
}
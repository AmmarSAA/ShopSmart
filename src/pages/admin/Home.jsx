import axios from 'axios';
import { useContext } from 'react';
import { useEffect } from 'react';
import { LoginContext } from '../../Context/Login-Context/login-context'
import Table from 'react-bootstrap/Table';

function AdminHome() {
  const { state } = useContext(LoginContext);
  return (
    <>
      <div className="container">
        <h4 className='p-3'>{state.userName}'s Dashboard</h4>
        <Table striped bordered hover className='w-100'>
          <thead>
            <tr>
              <th>No of products</th>
              <th>No of users</th>
              <th>No of admin</th>
              <th>No of orders</th>
              <th>Profit</th>
              <th>Loss</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>20</td>
              <td>240</td>
              <td>02</td>
              <td>34</td>
              <td>12,933$</td>
              <td>12,000 PKR</td>
              <td>Super Admin</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default AdminHome;
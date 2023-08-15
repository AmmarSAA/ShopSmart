import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function ShowBrands() {

  const [brands, setBrands] = useState([])
  useEffect(() => {
    axios.get('https://shopsmart-api.cyclic.app/api/brand/getBrand')
      .then((json) => setBrands(json.data.brand))
      .catch((err) => console.log(err))
  }, [brands])

  return (
    <Table striped bordered hover className='w-100'>
      <thead>
        <tr>
          <th>_id</th>
          <th>Name</th>
          <th>Picture</th>
          <th>Created Date</th>
          <th>Updated Date</th>
        </tr>
      </thead>
      <tbody>
        {
          brands?.map((val, key) =>
            <tr key={key}>
              <td>{val._id}</td>
              <td>{val.name}</td>
              <td><img src={val.profilepic} /></td>
              <td>{val.createdAt}</td>
              <td>{val.updatedAt}</td>
            </tr>)
        }
      </tbody>
    </Table>
  );
}

export default ShowBrands;
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function Products() {

  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get('https://shopsmart-api.cyclic.app/api/product/getProduct')
      .then((json) => console.log(json))
      .catch((err) => console.log(err))
  }, [products])

  return (
    <Table striped bordered hover className='w-100'>
      <thead>
        <tr>
          <th>_id</th>
          <th>Name</th>
          <th>Stock</th>
          <th>Retail Price</th>
          <th>Purchase Price</th>
          <th>Discount Percentage</th>
          <th>Picture</th>
          <th>Description</th>
          <th>Updated Date</th>
          <th>Update/Delte</th>
        </tr>
      </thead>
      <tbody>
        {/* {
          products.map((val, key) =>
            <tr key={key}>
              <td>{val._id}</td>
              <td>{val.name}</td>
              <td>{val.email}</td>
              <td><img src={val.profilepic} /></td>
              <td>{val.role}</td>
              <td>{val.createdAt}</td>
              <td>{val.updatedAt}</td>
            </tr>)
        } */}
      </tbody>
    </Table>
  );
}

export default Products;
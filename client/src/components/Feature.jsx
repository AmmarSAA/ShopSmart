import React from 'react'
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';

export default function Feature() {
  return (
    <div className="container-fluid feature">
      <div className="container">
        <div className="row justify-content-evenly">
          <div className="col-md-5 col-5 feature-img">
            <img src="../images/feature.jpg" alt="" className='img-fluid' />
          </div>
          <div className="col-md-4 col-4 feature-det">
            <h1>FEATURE PRODUCT</h1>
            <Badge bg="danger" className='mt--md-3'>SALE</Badge>
            <h3 className='my-md-4'>GENERATION</h3>
            <h4>ANNUAL SUMMER SALE</h4>
            <h4 className='my--md-4'>UPTO 50% OFF</h4>
            <Link to="/products/category/mens-watches">
              <button className='custom-button'>Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

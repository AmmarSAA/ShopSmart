import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <div className="container">
        <div className="row my-5 categories justify-content-evenly">
          <div className="col-md-4">
            <div className='image-cat'>
              <img src="../images/mobile.jpeg" alt="" className='img-fluid' />
            </div>
            <div>
              <h4 className='my-3'>Mobile Phones</h4>
              <Link to="/products/category/smartphones"><button className='custom-button'>Shop Now</button></Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className='image-cat'>
              <img src="../images/headphone.avif" alt="" className='img-fluid' />
            </div>
            <div>
              <h4 className='my-3'>Head Phones</h4>
              <Link to="/products/category/lighting"><button className='custom-button'>Shop Now</button></Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className='image-cat'>
              <img src="../images/laptops.jpeg" alt="" className='img-fluid' />
            </div>
            <div>
              <h4 className='my-3'>Best Laptops</h4>
              <Link to="/products/category/laptops"><button className='custom-button'>Shop Now</button></Link>
            </div>
          </div>
        </div>
        <div className="row my-5 categories justify-content-evenly">
            <div className="col-md-4">
                <div className='image-cat'>
                    <img src="../images/grocery.jpg" alt="" className='img-fluid' />
                </div>
                <div>
                    <h4 className='my-3'>Grocery</h4>
                    <Link to="/products/category/groceries"><button className='custom-button'>Shop Now</button></Link>
                </div>
            </div>
            <div className="col-md-4">
                <div className='image-cat'>
                    <img src="../images/fragrance.jpeg" alt="" className='img-fluid' />
                </div>
                <div>
                    <h4 className='my-3'>Fragrance</h4>
                    <Link to="/products/category/fragrances"><button className='custom-button'>Shop Now</button></Link>
                </div>
            </div>
            <div className="col-md-4">
                <div className='image-cat'>
                    <img src="../images/shoes.webp" alt="" className='img-fluid' />
                </div>
                <div>
                    <h4 className='my-3'>Best Shoes</h4>
                    <Link to="/products/category/mens-shoes"><button className='custom-button'>Shop Now</button></Link>
                </div>
            </div>
        </div>
        </div>
  )
}

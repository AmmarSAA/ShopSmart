/****************************
* File Name: Home.jsx       *
* Author: Ammar S.A.A       *
* Output: User Landing Page *
****************************/

import React from 'react';

const Home = () => {
  return (
    <div className="container">
      <header className="jumbotron mt-5">
        <h1 className="display-4">Welcome to ShopSmart</h1>
        <p className="lead">Discover Your Style, Shop with Ease</p>
        <hr className="my-4" />
        <p>Explore our wide range of high-quality products.</p>
        <a className="btn btn-outline-primary btn-lg" href="/products" role="button">Browse Products</a>
      </header>

      <section className="my-5">
        <h2>Featured Products</h2>
        <div className="row">
          {/* Display featured products */}
          <div className="col-md-4">
            <div className="card mb-4">
              <img src="/path/to/product-image.jpg" className="card-img-top" alt="Product" />
              <div className="card-body">
                <h5 className="card-title">Product Name</h5>
                <p className="card-text">Product description goes here.</p>
                <a href="/product-details" className="btn btn-outline-primary">View Details</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-5">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec dui euismod, consectetur ipsum in, fringilla mi. Donec viverra eros non lectus fringilla, nec vulputate felis eleifend.</p>
        <a className="btn btn-outline-secondary" href="/about" role="button">Learn More</a>
      </section>

      <section className="my-5">
        <h2>Contact Us</h2>
        <p>If you have any questions or inquiries, feel free to reach out to us.</p>
        <a className="btn btn-outline-secondary" href="/contact" role="button">Contact</a>
      </section>
    </div>
  );
};

export default Home;

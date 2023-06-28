/*************************
* File Name: About.jsx   *
* Author: Ammar S.A.A    *
* Output: About Us Page  *
*************************/

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../services/apiService';
import { BiInfoSquare, BiSupport } from 'react-icons/bi';
import { MdOutlinePrivacyTip } from 'react-icons/md';
import { FaRegHandshake } from 'react-icons/fa';

export default function About() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from the API
    fetchCategories()
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  return (
    <div className="container container-fluid">
      <h1 className='diaply-1'>ShopSmart</h1>
      <h2 className='diaplay-2'>Discover Your Style, Shop with Ease</h2>
      <h2>About Us</h2>
      <p>
      ShopSmart is an e-commerce platform that aims to provide users with a seamless shopping experience. Our platform offers a wide range of products from various categories, allowing users to discover their style and shop with ease. Whether you're looking for fashion, electronics, home decor, or any other product, ShopSmart has you covered.
      </p>
      <div className="text-center">
        <div className="d-flex justify-content-center">
          <Link to="/about" className="text-decoration-none mx-2">
            <button className="btn btn-outline-dark d-none d-sm-flex align-items-center">
              <BiInfoSquare color="light" size={24} />
              <span className="ms-2 d-none d-lg-inline">Info</span>
            </button>
            <button className="btn btn-outline-dark d-flex d-sm-none">
              <BiInfoSquare color="light" size={32} />
            </button>
          </Link>
          <Link to="/contact" className="text-decoration-none mx-2">
            <button className="btn btn-outline-dark d-none d-sm-flex align-items-center">
              <BiSupport color="light" size={24} />
              <span className="ms-2 d-none d-lg-inline">Contact Us</span>
            </button>
            <button className="btn btn-outline-dark d-flex d-sm-none">
              <BiSupport color="light" size={32} />
            </button>
          </Link>
          <Link to="/privacy-policy" className="text-decoration-none mx-2">
            <button className="btn btn-outline-dark d-none d-sm-flex align-items-center">
              <MdOutlinePrivacyTip color="light" size={24} />
              <span className="ms-2 d-none d-lg-inline">Privacy Policy</span>
            </button>
            <button className="btn btn-outline-dark d-flex d-sm-none">
              <MdOutlinePrivacyTip color="light" size={32} />
            </button>
          </Link>
          <Link to="/terms-of-service" className="text-decoration-none mx-2">
            <button className="btn btn-outline-dark d-none d-sm-flex align-items-center">
              <FaRegHandshake color="light" size={24} />
              <span className="ms-2 d-none d-lg-inline">Terms Of Service</span>
            </button>
            <button className="btn btn-outline-dark d-flex d-sm-none">
              <FaRegHandshake color="light" size={32} />
            </button>
          </Link>
        </div>
      </div>
      <h3>Our Categories</h3>
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </div>
  );
}

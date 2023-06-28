/*************************
* File Name: Footer.jsx  *
* Author: Ammar S.A.A    *
* Output: Footer         *
*************************/


import React, { useEffect, useState } from 'react';
import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaRegHandshake } from 'react-icons/fa';
import { BiSupport } from 'react-icons/bi';
import { MdOutlinePrivacyTip } from 'react-icons/md';
import { BiInfoSquare } from 'react-icons/bi';
import { fetchCategories } from '../services/apiService';

const Footer = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from the API
    const fetchCategoriesData = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategoriesData();
  }, []);

  const columnCount = 3; // Number of columns for categories

  // Divide categories into multiple arrays based on the column count
  const dividedCategories = Array.from({ length: columnCount }, (_, index) =>
    categories.filter((_, i) => i % columnCount === index)
  );

  return (
    <footer className="bg-dark text-light py-4" style={{ position: 'relative', bottom: 0, top: '25vh', width: '100%' }}>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-sm-5 col-md-4 col-lg-6">
            <h4>Company</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/about" className="text-decoration-none text-light"><BiInfoSquare color='light' size={'5%'} /> Info</a>
              </li>
              <li>
                <a href="/contact" className="text-decoration-none text-light"><BiSupport color='light' size={'5%'} /> Contact Us</a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-decoration-none text-light"><MdOutlinePrivacyTip color='light' size={'5%'} /> Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-decoration-none text-light"><FaRegHandshake color='light' size={'5%'} /> Terms Of Service</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-7 col-md-8 col-lg-6 text-center mt-4 mt-md-0">
            <h4>Categories</h4>
            <div className="row justify-content-center">
              {dividedCategories.map((column, columnIndex) => (
                <div key={columnIndex} className="col">
                  <ul className="list-unstyled">
                    {column.map((category) => (
                      <li key={category}>
                        <a href={`products/category/${category}`} className="text-decoration-none text-light">{category}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 text-start">&copy; 2023 ShopSmart. All rights reserved.</div>
          <div className="col-md-6 text-end">
            <span>Follow Us: </span>
            <a href="https://www.facebook.com" className="text-decoration-none text-light mx-2"><FaFacebookSquare /></a>
            <a href="https://www.twitter.com" className="text-decoration-none text-light mx-2"><FaTwitterSquare /></a>
            <a href="https://www.instagram.com" className="text-decoration-none text-light mx-2"><FaInstagramSquare /></a>
            <a href="https://www.linkedin.com" className="text-decoration-none text-light mx-2"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

//A footer suggestion
{/* <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
  <p className="col-md-4 mb-0 text-muted">© 2023 Your Company Name</p>

  <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
    <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
  </a>

  <ul className="nav col-md-4 justify-content-end">
    <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
    <li className="nav-item"><a href="/features" className="nav-link px-2 text-muted">Features</a></li>
    <li className="nav-item"><a href="/pricing" className="nav-link px-2 text-muted">Pricing</a></li>
    <li className="nav-item"><a href="/faqs" className="nav-link px-2 text-muted">FAQs</a></li>
    <li className="nav-item"><a href="/about" className="nav-link px-2 text-muted">About</a></li>
  </ul>
</footer> */}

/**********************
* File Name: 404.jsx  *
* Author: Ammar S.A.A *
* Output: 404 Error   *
**********************/

import React from "react";
import { Link } from "react-router-dom";
import { BsExclamationCircle } from "react-icons/bs";

const NotFoundPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <BsExclamationCircle size={80} color="#dc3545" />
      <h1 className="mt-4">Oops! Page Not Found</h1>
      <p className="text-center">The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary mt-4">Go to Home</Link>
    </div>
  );
};

export default NotFoundPage;

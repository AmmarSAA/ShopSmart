/**********************
* File Name: 404.jsx  *
* Author: Ammar S.A.A *
* Output: 404 Error   *
**********************/

import React from "react";
import { Link } from "react-router-dom";
import { BsExclamationCircle, BsHouse } from "react-icons/bs";
import LoginForm from "./LoginForm";
import SignupForm from "./SignUpForm";

const NotFoundPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <BsExclamationCircle size={80} color="#dc3545" />
      <h1 className="mt-4">Oops! Page Not Found</h1>
      <p className="text-center">The page you are looking for does not exist.</p>
      <div className="row col-3 p-2">
        <Link to="/" type="button" class="btn custom-button d-flex align-items-center gap-2 btn btn-light">
          <BsHouse className="text-light navbar-icon text-white" />
          <span class="d-none d-lg-inline text-white"> Go to Home</span>
        </Link>
      </div>
      <div className="row col-3 p-2">
        <LoginForm />
      </div>
      <div className="row col-3 p-2">
        <SignupForm />
      </div>
    </div>
  );
};

export default NotFoundPage;

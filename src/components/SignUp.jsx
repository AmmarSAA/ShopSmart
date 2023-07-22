/*************************
* File Name: SignUp.jsx  *
* Author: Ammar S.A.A    *
* Output: Sign up form   *
*************************/

import React from 'react';

const Signup = () => {
  return (
    <div className="container">
      <h2>Sign Up</h2>
      <h6>To avail exclusive offers</h6>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <button type="submit" className="custom-button mt-4 mb-3 float-end">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;

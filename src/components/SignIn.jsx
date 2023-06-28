/*************************
* File Name: SignIn.jsx  *
* Author: Ammar S.A.A    *
* Output: Sign in form   *
*************************/

import React from 'react';

const Signin = () => {
  return (
    <div className="container">
    <h2>Sign In</h2>
    <h6>Welcome Back!!!</h6>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <button type="submit" className="btn btn-outline-dark py-2 my-2 float-end">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;

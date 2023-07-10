/*************************
* File Name: SignIn.jsx  *
* Author: Ammar S.A.A    *
* Output: Sign in form   *
*************************/

import React from 'react';
import '../App.css';
import { LoginContext } from '../Context/Login-Context/login-context';
import { useState } from 'react';
import { useContext } from 'react';

const Signin = () => {


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {state,dispatch} = useContext(LoginContext)

  const login = (e) => {
    e.preventDefault();
    const payload = { email, password };
    dispatch({
      type: "LOGIN_USER",
      payload: payload,
    });

  }

  return (
    <div className="container">
      <h2 className='text-center'>Sign In</h2>
      <h6 className='text-center'>Welcome Back!!!</h6>
      <form onSubmit={login}>
        <div className="form-group">
          <label htmlFor="email"><b>Email</b></label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password"><b>Password</b></label>
          <input
            type="password"
            className="form-control"
            value={password}
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="custom-button mt-4 mb-3 float-end">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;

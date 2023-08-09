/*************************
* File Name: SignUp.jsx  *
* Author: Ammar S.A.A    *
* Output: Sign up form   *
*************************/

import React from 'react';
import { LoginContext } from '../Context/Login-Context/login-context';
import { useContext } from 'react';
import { useState } from 'react';
import SignIn from './SignIn';
import axios from 'axios';

const Signup = () => {

  const { state, dispatch } = useContext(LoginContext);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSignup = (event) => {
    event.preventDefault();
    const username = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // if (!email || !password || !username) {
    //   setError('Please fill in all the fields.');
    //   console.log("fill in all the fields.");
    //   return;
    // }

    // const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // // Check if a user with the same email or username already exists
    // const userExists = existingUsers.some((user) => user.email === email || user.username === username);

    axios.post("http://localhost:5000/api/users/signup").then((json) => console.log(json.data)).catch(err => console.log(err))

    // if (userExists) {
    //   setError('An account with the same email or username already exists.');
    //   console.log("Account with the same email or username already exists.");
    //   return;
    // }

    // // Add the new user to the existing users array
    // existingUsers.push({ username, email, password });
    // // Save the updated users array back to local storage
    // localStorage.setItem('users', JSON.stringify(existingUsers));

    // Dispatch an action to update the global state with the new user data
    // dispatch({
    //   type: "SIGNUP_USER",
    //   payload: { username, email }
    // });

    // setSubmitted(true);
    // setError('');
  };


  if (submitted) {
    console.log("signed up successfully");
    return (
      <div className="container">
        <h4 className='alert alert-success text-center text-capitalize'>Yay! Sign In Now.</h4>
        <SignIn />
      </div>
    );
  }

  else {
    return (
      <div className="container" id='form'>
        {error && <h4 className='alert alert-danger text-center text-capitalize'>{error}</h4>}
        <h2>Sign Up</h2>
        <h6>To avail exclusive offers</h6>
        <form onSubmit={handleSignup}>
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
}
export default Signup;

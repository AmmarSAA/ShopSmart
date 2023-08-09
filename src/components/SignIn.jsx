import React, { useState, useContext } from 'react';
import '../App.css';
import { LoginContext } from '../Context/Login-Context/login-context';
import axios from 'axios';
import Cookies from 'js-cookie';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  const { state, dispatch } = useContext(LoginContext);

  const login = (e) => {
    e.preventDefault();

    // Simple validation to check if email and password are not empty
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    const payload = { email, password }
    // Send the email and password to the server for signin
    axios
      .post("https://shopsmart-api.cyclic.app/api/users/signin", payload)
      .then((response) => {
        Cookies.set('token',response.data.token)
        dispatch({
          type: "LOGIN",
          token: response.data.token
        })
        setMessage(response.data.message);
      })
      .catch((error) => {
        setError(error.response?.data?.message || 'An error occurred');
      });

    // Clear the error state
    setError(null);
  };

  return (
    <div className="container">
      {message ? (
        <h4 className='alert alert-success text-center text-capitalize'>{message}</h4>
      ) : error ? (
        <h4 className='alert alert-danger text-center text-capitalize'>{error}</h4>
      ) : null}
      <h2 className="text-center">Sign In</h2>
      <h6 className="text-center">Welcome Back!!!</h6>
      <form onSubmit={login}>
        <div className="form-group">
          <label htmlFor="email">
            <b>Email</b>
          </label>
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
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            className="form-control"
            value={password}
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="custom-button mt-4 mb-3 float-end">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;

import React, { useState, useContext } from 'react';
import '../App.css';
import { LoginContext } from '../Context/Login-Context/login-context';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { state, dispatch } = useContext(LoginContext);

  const login = (e) => {
    e.preventDefault();

    // Simple validation to check if email and password are not empty
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Here is the local storage get item

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
      setError("Invalid username or password.")
    }
    else {
    // Dispatch the LOGIN_USER action with the user data
    dispatch({
      type: 'LOGIN_USER',
      payload: user,
    });
    setError('');
  }

    // Your actual login logic can be implemented here
    // For demonstration purposes, let's assume the login is successful
    // const user = { email }; // Replace this with your actual user data


    // Clear the error state
  };

  return (
    <div className="container">
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
        {error && <p className="text-danger">{error}</p>}
        <button type="submit" className="custom-button mt-4 mb-3 float-end">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;

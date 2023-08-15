import React, { useContext, useState } from 'react';
import { LoginContext } from '../Context/Login-Context/login-context';
import axios from 'axios';
import SignIn from "./SignIn";

const Signup = () => {
  const { dispatch } = useContext(LoginContext);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (event) => {
    event.preventDefault();
    const username = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (!email || !password || !username) {
      setErrorMessage('Please fill in all the fields.');
      console.log("fill in all the fields.");
      return;
    }

    try {
      setIsLoading(true);
      // Make a POST request to the backend for user signup
      const response = await axios.post("https://shopsmart-api.cyclic.app/api/users/signup", {
        name: username,
        email: email,
        password: password,
      });

      // Handle success
      console.log("User signed up successfully:", response.data);
      setSubmitted(true);
      setErrorMessage('');
      setIsLoading(false);
    } catch (error) {
      // Handle error
      console.error("Error signing up:", error);
      setErrorMessage('An error occurred.');
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="container">
        <h4 className='alert alert-success text-center text-capitalize'>Yay! Sign In Now.</h4>
        <SignIn />
      </div>
    );
  } else {
    return (
      <div className="container" id='form'>
        {isLoading ? (
          <h4 className='alert alert-info text-center text-capitalize'>Signing Up...</h4>
        ) : errorMessage ? (
          <h4 className='alert alert-danger text-center text-capitalize'>{errorMessage}</h4>
        ) : null}
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
  }
}

export default Signup;

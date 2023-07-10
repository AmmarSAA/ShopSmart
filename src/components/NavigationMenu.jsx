/*********************************
* File Name: NavigationMenu.jsx  *
* Author: Ammar S.A.A            *
* Output: Navigation Bar         *
*********************************/

import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { BsCart4 } from "react-icons/bs";
import { PiSignOut, PiSignIn } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";
import Cart from './Cart';
import { GlobalContext } from '../Context/context';
import LoginForm from './LoginForm';
import Signin from './SignIn';
import { LoginContext } from '../Context/Login-Context/login-context';

function NavigationMenu() {
  const [categories, setCategories] = useState([]);

  // Context Api

  const logOutUser = () => {

    dispatch({ type: "LOGOUT_USER" })
  }

  let {add, adDispatch} = useContext(GlobalContext);
  let { state, dispatch } = useContext(LoginContext);


  useEffect(() => {
    // Fetch categories from the API
    fetch('https://dummyjson.com/products/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data));

    // Check if user is signed in (You can use your own logic to determine the sign-in status)
    // Replace with your own function
    // const userSignedIn = checkUserSignedIn();
    // setIsSignedIn(userSignedIn);
  }, []);

  const rowCount = 10; // Number of rows for categories

  // Divide categories into multiple arrays based on the row count
  const dividedCategories = Array.from({ length: rowCount }, (_, index) =>
    categories.filter((_, i) => i % rowCount === index)
  );

  return (
    <Navbar collapseOnSelect expand="lg" bg="white" sticky="top">
      <Container>
        <Navbar.Brand href="#" className='nav-color text-success'>ShopSmart</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link className="text-decoration-none mx-2 nav-color" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-decoration-none mx-2 nav-color" to="/about">
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-decoration-none mx-2 nav-color" to="/products">
                Products
              </Link>
            </Nav.Link>
            <NavDropdown title="Categories" id="collasible-nav-dropdown">
              {dividedCategories.map((column, columnIndex) => (
                <div key={columnIndex} className="d-flex">
                  {column.map((category) => (
                    <NavDropdown.Item
                      key={category}
                      href={`/products/category/${category}`}
                      className="text-decoration-none"
                    >
                      {category}
                    </NavDropdown.Item>
                  ))}
                </div>
              ))}
              <NavDropdown.Divider />
              <NavDropdown.Item href="/products" className="text-center">
                Show All
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {state.user ? (
              <>
                <ButtonGroup aria-label="Basic example">
                  <Button variant="light" className="btn btn-outline-dark" href="/profile">
                    <FaUserCircle />
                    <span className="d-none d-lg-inline"> {state.user.email}</span>
                  </Button>
                  <Button variant="light" className="btn-outline-dark mx-3" href="#">
                    <BsCart4 />
                    {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {add.cart.length}
                      <span className="visually-hidden">unread messages</span>
                    </span> */}
                    <span className="d-none d-lg-inline"> <Cart /></span> 
                  </Button>
                  <Button variant="light" className="btn btn-outline-danger" onClick={logOutUser}>
                    <PiSignOut />
                    <span className="d-none d-lg-inline"> Sign Out</span>
                  </Button>
                </ButtonGroup>
              </>
            ) : (
              <ButtonGroup aria-label="Basic example">
                <Button variant="light" className="btn btn-outline-dark" href="/signup">
                  <AiOutlineUserAdd />
                  <span className="d-none d-lg-inline"> Sign Up</span>
                </Button>
                <Button variant="light" className="btn btn-outline-dark">
                  <PiSignIn />
                  <LoginForm />
                  </Button>
                
              </ButtonGroup>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationMenu;

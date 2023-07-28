/*********************************
* File Name: NavigationMenu.jsx  *
* Author: Ammar S.A.A            *
* Output: Navbar                 *
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
import Cart from './Cart';
import { GlobalContext } from '../Context/context';
import LoginForm from './LoginForm';
import { LoginContext } from '../Context/Login-Context/login-context';
import '../App.css';
import SignupForm from './SignUpForm';
import ProfileForm from './ProfileForm';

function NavigationMenu() {
  const [categories, setCategories] = useState([]);

  const logOutUser = () => {
    dispatch({ type: "LOGOUT_USER" });
  }

  const { state, dispatch } = useContext(LoginContext);
  const { add } = useContext(GlobalContext);

  useEffect(() => {
    // Fetch categories from the API
    fetch('https://dummyjson.com/products/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  const rowCount = 10; // Number of rows for categories

  // Divide categories into multiple arrays based on the row count
  const dividedCategories = Array.from({ length: rowCount }, (_, index) =>
    categories.filter((_, i) => i % rowCount === index)
  );

  return (
    <Navbar collapseOnSelect expand="lg" bg="white" sticky="top" className="custom-navbar">
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
            <NavDropdown title="Categories" id="collapsible-nav-dropdown">
              {dividedCategories.map((column, columnIndex) => (
                <div key={columnIndex} className="d-flex">
                  {column.map((category) => (
                    <NavDropdown.Item
                      key={category}
                      href={`/products/category/${category}`}
                      className="text-decoration-none"
                    >
                      {category.toUpperCase()}
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
                  <ProfileForm />
                  <Button variant="light" className="custom-button mx-3 d-flex align-items-center gap-2" href="#">
                    <BsCart4 className="navbar-icon text-white" />
                    <span className="d-block d-lg-inline"> <Cart /></span>
                  </Button>
                  <Button variant="light" className="custom-button d-flex align-items-center gap-2" onClick={logOutUser}>
                    <PiSignOut className="navbar-icon text-white" />
                    <span className="d-none d-lg-inline text-white"> Sign Out</span>
                  </Button>
                </ButtonGroup>
              </>
            ) : (
              <ButtonGroup aria-label="Basic example">
                <SignupForm />
                <LoginForm />
              </ButtonGroup>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationMenu;

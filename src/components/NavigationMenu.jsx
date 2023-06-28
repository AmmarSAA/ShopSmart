/*********************************
* File Name: NavigationMenu.jsx  *
* Author: Ammar S.A.A            *
* Output: Navigation Bar         *
*********************************/

import React, { useEffect, useState } from 'react';
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

function NavigationMenu() {
  const [categories, setCategories] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(true);

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
    <Navbar collapseOnSelect expand="lg" bg="body-tertiary" sticky="top">
      <Container>
        <Navbar.Brand href="#">ShopSmart</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link className="text-decoration-none mx-2 text-dark" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-decoration-none mx-2 text-dark" to="/about">
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-decoration-none mx-2 text-dark" to="/products">
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
            {isSignedIn ? (
              <>
                <ButtonGroup aria-label="Basic example">
                  <Button variant="light" className="btn btn-outline-dark" href="/profile">
                    <FaUserCircle />
                    <span className="d-none d-lg-inline"> Profile</span>
                  </Button>
                  <Button variant="light" className="btn btn-outline-dark" href="/cart">
                    <BsCart4 />
                    <span className="d-none d-lg-inline"> Cart</span>
                  </Button>
                  <Button variant="light" className="btn btn-outline-danger" href="/signout">
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
                <Button variant="light" className="btn btn-outline-dark" href="/signin">
                  <PiSignIn />
                  <span className="d-none d-lg-inline"> Sign In</span>
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

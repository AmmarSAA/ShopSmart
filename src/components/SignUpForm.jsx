/*****************************
* File Name: SignUpForm.jsx  *
* Author: Ammar S.A.A        *
* Output: Sign up Modal      *
*****************************/

import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Signup from './SignUp';
import '../App.css';
import { AiOutlineUserAdd } from "react-icons/ai";

export default function SignupForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => { setShow(false), window.location.reload() };
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" className="btn custom-button d-flex align-items-center gap-2" onClick={handleShow}>
        <AiOutlineUserAdd className="navbar-icon text-white" />
        <span className="d-none d-lg-inline text-white"> Sign Up</span>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body style={{ padding: '20px' }}>
          <Signup />
        </Modal.Body>
      </Modal>
    </>
  );
}

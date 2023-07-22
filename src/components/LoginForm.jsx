import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Signin from './SignIn';
import '../App.css';
import { PiSignIn } from "react-icons/pi";

export default function LoginForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" className="btn custom-button d-flex align-items-center gap-2" onClick={handleShow}>
        <PiSignIn className="navbar-icon text-white" />
        <span className="d-none d-lg-inline text-white"> Sign In</span>
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
          <Signin />
        </Modal.Body>
      </Modal>
    </>
  );
}

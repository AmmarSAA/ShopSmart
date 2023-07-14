import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Signin from './SignIn';
import '../App.css';

export default function LoginForm() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="" onClick={handleShow} className='text-white bg-none' style={{background:'none'}}>
        Sign in
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>SignIn</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{padding:'20px'}}>
         <Signin/>
        </Modal.Body>
      </Modal>
    </>
  );
}



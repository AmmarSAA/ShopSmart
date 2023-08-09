/*****************************
* File Name: ProfileForm.jsx *
* Author: Ammar S.A.A        *
* Output: Profile Modal      *
*****************************/
import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaUserCircle } from 'react-icons/fa';
import Profile from './Profile';
import { LoginContext } from '../Context/Login-Context/login-context';


export default function ProfileForm() {
  const [show, setShow] = useState(false);
  const { state, userName } = useContext(LoginContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="light"
        className="custom-button d-flex align-items-center gap-2 text-white"
        onClick={handleShow}
      >
        <FaUserCircle className="navbar-icon text-white" />
        <span className="d-none d-lg-inline text-white"> {userName}</span>
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
        <Modal.Header closeButton>{state.token.name}</Modal.Header>
        <Modal.Body style={{ padding: '20px' }}>
          <Profile />
        </Modal.Body>
      </Modal>
    </>
  );
}

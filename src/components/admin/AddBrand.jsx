import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import "./style.css";
import UpdateBrand from "./UpdateBrand";
import { storage } from "../../utils/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Add this import

function AddBrand() {
  const [show, setShow] = useState(false);
  const [brandName, setBrandName] = useState("");
  const [brandImage, setBrandImage] = useState(null);

  const addBrand = () => {
    const formData = new FormData();
    formData.append("Name", brandName);
    formData.append("Image", brandImage);

    const storageRef = ref(storage, `images/brand/${brandImage.name}`);
    uploadBytes(storageRef, brandImage).then((snapshot) => {
      getDownloadURL(snapshot.ref) // Import the getDownloadURL function
        .then((url) => {
          const payload = { Name: brandName, Image: url };
          axios
            .post(`https://shopsmart-api.cyclic.app/api/brand/createBrand`, payload)
            .then((json) => {
              setShow(false);
            })
            .catch((err) => alert(err.message));
        })
        .catch((error) => alert(error.message));
    });
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleBrandNameChange = (event) => {
    setBrandName(event.target.value);
  }

  const handleBrandImageChange = (event) => {
    setBrandImage(event.target.files[0]);
  }

  return (
    <>
      <Button variant="white" onClick={handleShow}>
        Add Brand
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="d-flex align-items-center justify-content-center">
          <form className="form1">
            <p className="title1">Brand</p>
            <p className="message1">Add New Brand.</p>
            <label>
              <input
                className="input1 pb-1"
                type="text"
                placeholder=""
                required="{true}"
                value={brandName}
                onChange={handleBrandNameChange}
              />
              <span>Brand</span>
            </label>
            <label>
              <input
                className="input1 pt-3 pb-1 form-control"
                type="file"
                placeholder=""
                required="{true}"
                onChange={handleBrandImageChange}
              />
              <span>Image</span>
            </label>
            <button className="submit1" onClick={addBrand}>Add New</button>
            <p className="signin1">
              Wanna Update Brand? <a href="#" className="btn-sm"><UpdateBrand /></a>
            </p>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddBrand;

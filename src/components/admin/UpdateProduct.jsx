/********************************
* File Name: UpdateProduct.jsx  *
* Author: Ammar S.A.A           *
* Output: Update Products       *
********************************/

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function UpdateProduct({
  brands,
  Variant,
  ClassForButton,
  Name,
  ClassForName,
  Icon,
  ClassForIcon,
}) {
  const [show, setShow] = useState(false);
  const [ProductName, setProductName] = useState("");
  const [ProductPrice, setProductPrice] = useState("");
  const [ProductThumbnail, setProductThumbnail] = useState(null);
  const [ProductImages, setProductImages] = useState([]);
  const [desc, setDesc] = useState("");
  const [brandVal, setBrandVal] = useState("");
  const [categoryVal, setCategoryVal] = useState("");

  const handleImageUpload = (event) => {
    const selectedImages = Array.from(event.target.files);
    setProductImages(selectedImages);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const uploadImages = async () => {
    const formData = new FormData();
    ProductImages.forEach((image) => {
      formData.append("images", image);
    });

    try {
      const response = await axios.post(
        "http://localhost:5001/api/upload", // Your image upload endpoint
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return response.data.urls;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();

    try {
      const imageUrls = await uploadImages();

      const payload = {
        productName: ProductName,
        price: ProductPrice,
        thumbnail: ProductThumbnail,
        description: desc,
        brand: brandVal,
        category: categoryVal,
        images: imageUrls,
      };

      const response = await axios.post(
        "http://localhost:5001/api/product/updateProduct", // Your product update endpoint
        payload
      );

      console.log(response.data);
      setShow(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button variant={Variant} className={ClassForButton} onClick={handleShow}>
        {Icon && <Icon className={ClassForIcon} />}
        {Name && <span className={ClassForName}> {Name}</span>}
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <form onSubmit={handleUpdateProduct}>
            <label>
              Product Name
              <input
                value={ProductName}
                onChange={(e) => setProductName(e.target.value)}
                type="text"
                className="form-control"
              />
            </label>

            <label>
              Product Price
              <input
                value={ProductPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                type="text"
                className="form-control"
              />
            </label>

            <Form.Group controlId="formFileThumbnail" className="mb-3">
              <Form.Label>Product Thumbnail</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setProductThumbnail(e.target.files[0])}
              />
            </Form.Group>

            <Form.Group controlId="formFileImages" className="mb-3">
              <Form.Label>Product Images</Form.Label>
              <Form.Control
                type="file"
                multiple
                onChange={handleImageUpload}
              />
            </Form.Group>

            {/* Other form fields */}
            {/* ... */}

            <button type="submit" className="btn btn-primary">
              Update Product
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

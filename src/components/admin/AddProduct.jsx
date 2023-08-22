/*****************************
* File Name: AddProduct.jsx  *
* Author: Ammar S.A.A 			 *
* Output: Add Product Modal  *
*****************************/

import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import axios from "axios";
import { storage } from "../../utils/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function AddProduct({
  setProducts,
  Variant,
  ClassForButton,
  Name,
  ClassForName,
  Icon,
  ClassForIcon,
}) {
  const [show, setShow] = useState(false);
  const [ProductName, setProductName] = useState("");
  const [ProductStock, setProductStock] = useState("");
  const [ProductPrice, setProductPrice] = useState("");
  const [ProductThumbnail, setProductThumbnail] = useState(null);
  const [ProductImages, setProductImages] = useState([]);
  const [desc, setDesc] = useState("");
  const [brandVal, setBrandVal] = useState("");
  const [categoryVal, setCategoryVal] = useState("");
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/brand/getBrand")
      .then((response) => {
        setBrands(response.data.brands);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("http://localhost:5001/api/category/getCategory")
      .then((response) => {
        setCategories(response.data.categories);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const storageRef = ref(storage);

  const handleImageUpload = (event) => {
    const selectedImages = Array.from(event.target.files);
    setProductImages(selectedImages);
  };

  const handleClose = () => {
    setShow(false);
    setError(null); // Reset any previous errors
  };

  const handleShow = () => setShow(true);

  const uploadImages = async () => {
    const imageUrls = [];

    for (const image of ProductImages) {
      const imageRef = storageRef.child(`images/${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);
      imageUrls.push(imageUrl);
    }

    return imageUrls;
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const imageUrls = await uploadImages();

      const payload = {
        productName: ProductName,
        stock: ProductStock,
        price: ProductPrice,
        thumbnail: ProductThumbnail,
        description: desc,
        brand: brandVal,
        category: categoryVal,
        images: imageUrls,
      };

      const response = await axios.post(
        "http://localhost:5001/api/product/createProduct",
        payload
      );

      console.log(response.data);
      setIsLoading(false);
      setShow(false);
    } catch (error) {
      console.error(error);
      setError("Error adding product.");
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button variant={Variant} className={ClassForButton} onClick={handleShow}>
        {Icon && <Icon className={ClassForIcon} />}
        {Name && <span className={ClassForName}> {Name}</span>}
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleAddProduct}>
            {isLoading && <p className="alert alert-info">Adding product...</p>}
            {error && <p className="alert alert-danger">{error}</p>}
            <label>
              Product Name
              <input
                type="text"
                value={ProductName}
                className="form-control mb-3"
                onChange={(e) => setProductName(e.target.value)}
              />
            </label>
            <label>
              Product Stock
              <input
                type="text"
                value={ProductStock}
                className="form-control mb-3"
                onChange={(e) => setProductStock(e.target.value)}
              />
            </label>
            <label>
              Retail Price
              <input
                type="text"
                value={ProductPrice}
                className="form-control mb-3"
                onChange={(e) => setProductPrice(e.target.value)}
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
            <Form.Group className="mb-3">
              <Form.Label>Brand</Form.Label>
              <Form.Select
                aria-label="Please Select a Brand"
                onChange={(e) => setBrandVal(e.target.value)}
              >
                <option>Please Select a Brand</option>
                {brands.map((brand) => (
                  <option key={brand._id} value={brand._id}>
                    {brand.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                aria-label="Please Select a Category"
                onChange={(e) => setCategoryVal(e.target.value)}
              >
                <option>Please Select a Category</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Description"
              className="mb-3"
            >
              <Form.Control
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                as="textarea"
                placeholder="Product Description"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <button type="submit" className="btn btn-primary">
              Add Product
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

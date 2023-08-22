/********************************
* File Name: UpdateProduct.jsx  *
* Author: Ammar S.A.A           *
* Output: Update Products       *
********************************/

import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import axios from "axios";
import { storage } from "../../utils/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { SERVER } from "../../App";

export default function UpdateProduct({
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
  const [ProductRetailPrice, setProductRetailPrice] = useState("");
  const [ProductPurchasePrice, setProductPurchasePrice] = useState("");
  const [ProductThumbnail, setProductThumbnail] = useState(null);
  const [ProductImages, setProductImages] = useState([]);
  const [description, setDescription] = useState("");
  const [brandVal, setBrandVal] = useState("");
  const [categoryVal, setCategoryVal] = useState("");
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${SERVER}api/brand/getBrand`)
      .then((response) => {
        setBrands(response.data.brands);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(`${SERVER}api/category/getCategory`)
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

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const imageUrls = await uploadImages();

      const payload = {
        _id: setProducts,
        productName: ProductName,
        stock: ProductStock,
        retailPrice: ProductRetailPrice,
        purchasePrice: ProductPurchasePrice,
        thumbnail: ProductThumbnail,
        description: description,
        brandID: brandVal,
        catID: categoryVal,
        images: imageUrls,
      };

      const response = await axios.put(
        `${SERVER}api/product/updateProduct`,
        payload
      );

      console.log(response.data);
      setIsLoading(false);
      setShow(false);
    } catch (error) {
      console.error(error);
      setError("Error updating product.");
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
        <Modal.Body className="d-flex align-items-center justify-content-center">
          <form onSubmit={handleUpdateProduct} className="form1">
            {isLoading && <p className="alert alert-info">Updating product...</p>}
            {error && <p className="alert alert-danger">{error}</p>}
            <p className="title1">Product</p>
            <p className="message1">Update Existing Product.</p>
            <label>
              <input
                className="input1 pb-1"
                type="text"
                placeholder=""
                required={true}
                value={ProductName}
                onChange={(e) => setProductName(e.target.value)}
              />
              <span>Name</span>
            </label>
            <label>
              <input
                className="input1 pb-1"
                type="number"
                placeholder=""
                required={true}
                value={ProductStock}
                onChange={(e) => setProductStock(e.target.value)}
              />
              <span>Quantity</span>
            </label>
            <label>
              <input
                className="input1 pb-1"
                type="number"
                placeholder=""
                required={true}
                value={ProductRetailPrice}
                onChange={(e) => setProductRetailPrice(e.target.value)}
              />
              <span>Retail Price</span>
            </label>
            <label>
              <input
                className="input1 pb-1"
                type="number"
                placeholder=""
                required={true}
                value={ProductPurchasePrice}
                onChange={(e) => setProductPurchasePrice(e.target.value)}
              />
              <span>Purchase Price</span>
            </label>
            <Form.Group controlId="formFileThumbnail" className="mb-3">
              <Form.Label>Thumbnail</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setProductThumbnail(e.target.files[0])}
              />
            </Form.Group>
            <Form.Group controlId="formFileImages" className="mb-3">
              <Form.Label>Images</Form.Label>
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                as="textarea"
                placeholder="Product Description"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <button type="submit" className="btn btn-primary">
              Update Product
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

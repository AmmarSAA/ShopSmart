/**********************************
* File Name: Product.jsx          *
* Author: Ammar S.A.A             *
* Output: Products in Categories  *
**********************************/

import React, { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard";
import axios from "axios";
import '../App.css';
import Spinner from 'react-bootstrap/Spinner';

export default function Products() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((json) => setCategory(json.data));
  }, [category]);

  return (
    <div className="container">
      <div className="text-center my-5">
        <h1 className="mt-4 shadow-text">Products</h1>
        <h4 className="text-success mt-4">
          All Products are Distributed into our Special Designed Categories
        </h4>
      </div>

      <div className="row">
        {
          category.length > 0 ? (
            category.map((val, key) => (
              <CategoryCard key={key} category={val} />
            ))
          ) : (
            <div className="d-flex justify-content-center align-items-center"
              style={{ width: '100vw', height: '60vh' }}>
              <Spinner animation="grow" />
            </div>
          )
        }
      </div>
    </div>
  );
}

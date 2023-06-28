/*******************************
* File Name: CategoryPage.jsx  *
* Author: Ammar S.A.A          *
* Output: Category Page        *
*******************************/

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/ProductCard";

export default function CategoryPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${categoryName}`)
      .then((json) => setProducts(json.data.products));
  }, [categoryName]);

  return (
    <>
      <div className="container">
        <div className="text-center">
          <h1 className="mt-5">{categoryName.toUpperCase()}</h1>
        </div>

        <div className="row">
          {products.map((val, key) => (
            <ProductCard key={key} product={val}/>
          ))}
        </div>
      </div>
    </>
  );
}

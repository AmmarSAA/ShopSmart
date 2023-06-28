/**********************************
* File Name: Product.jsx          *
* Author: Ammar S.A.A             *
* Output: Products in Categories  *
**********************************/

import React, { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard";
import axios from "axios";

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
        <h1 className="mt-4">Products</h1>
        <p className="text-secondary">
          All Products are Distributed into our Special Designed Categories
        </p>
      </div>

      <div className="row">
        {category.map((val, key) => (
          <CategoryCard key={key} category={val} />
        ))}
      </div>
    </div>
  );
}

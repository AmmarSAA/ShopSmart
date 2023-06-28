/***********************
* File Name: App.jsx   *
* Author: Ammar S.A.A  *
* Output: Main Page    *
***********************/

import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import { Route, Routes } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import SignIn from "./components/SignIn";
import NavigationMenu from "./components/NavigationMenu";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import NotFound from "./components/404";


export default function App() {
  return (
    <>
      <NavigationMenu />
      

      {/* All routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/category/:categoryName" element={<CategoryPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

/***********************
* File Name: App.jsx   *
* Author: Ammar S.A.A  *
* Output: Main Page    *
***********************/

import React, { useContext } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import { Route, Routes,Navigate } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import NavigationMenu from "./components/NavigationMenu";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import LoginForm from "./components/LoginForm";
import { LoginContext } from "./Context/Login-Context/login-context";

export default function App() {

  let { state, dispatch } = useContext(LoginContext);

  return (
    <>
      <NavigationMenu />


      {/* All routes */}

      {
        state.user ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/category/:categoryName" element={<CategoryPage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Routes>

        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<LoginForm />} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Routes>

        )
      }

      <Footer />
    </>
  );
}

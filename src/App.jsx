/***********************
* File Name: App.jsx   *
* Author: Ammar S.A.A  *
* Output: Main Page    *
***********************/

import React, { useContext } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import { Route, Routes, Navigate } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import NavigationMenu from "./components/NavigationMenu";
import Footer from "./components/Footer";
import NotFoundPage from "./components/404";
import { LoginContext } from "./Context/Login-Context/login-context";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignUpForm";

export default function App() {

  let { state, dispatch } = useContext(LoginContext);

  return (
    <>


      {/* All routes */}

      {
        state.user ? (
          <><><NavigationMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/category/:categoryName" element={<CategoryPage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Routes>
          </>
          <Footer />
          </>

        ) : (
          <><><NavigationMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes></>
          <Footer /></>

        )
      }

    </>
  );
}

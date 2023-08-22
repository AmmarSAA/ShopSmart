/************************
* File Name: App.jsx 	  *
* Author: Ammar S.A.A 	*
* Output: Routes        *
************************/

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
import AdminHome from "./pages/admin/Home";
import Category from "./pages/admin/Category";
import Users from "./pages/admin/Users";
import Brand from "./pages/admin/Brand";
import Order from "./pages/admin/Order";
import Product from "./pages/admin/Product";

export const SERVER = "/";

export default function App() {
  const { state } = useContext(LoginContext);

  return (
    <>
      {/* Common NavigationMenu for all routes */}
      <NavigationMenu />

      {/* All routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        {state.userRole === "user" ? (
          <>
            <Route
              path="/products/category/:categoryName"
              element={<CategoryPage />}
            />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </>
        ) : state.userRole === "admin" ? (
          <>
            <Route path="/admin" element={<AdminHome />}/>
            <Route path="/admin/users" element={<Users />}/>
            <Route path="/admin/brand" element={<Brand />}/>
            <Route path="/admin/category" element={<Category />}/>
            <Route path="/admin/order" element={<Order />}/>
            <Route path="/admin/product" element={<Product />}/>
            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </>
        ) : (
        <Route path="*" element={<NotFoundPage />} />
        )}
      </Routes>

      {/* Common Footer for all routes */}
      <Footer />
    </>
  );
}

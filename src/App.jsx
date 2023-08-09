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

export default function App() {
  const { userRole } = useContext(LoginContext);

  return (
    <>
      {/* Common NavigationMenu for all routes */}
      <NavigationMenu />

      {/* All routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        {userRole === "user" ? (
          <>
            <Route
              path="/products/category/:categoryName"
              element={<CategoryPage />}
            />
            <Route path="/product/:productId" element={<ProductPage />} />
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

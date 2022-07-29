import React from "react";
import Basket from "./pages/Basket/Basket";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Product from "./pages/Product/Product";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import { Routes, Route } from "react-router-dom";
import Page404 from "./pages/Page404/Page404";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact="true" element={<Home />} />
        <Route path="basket" element={<Basket />} />
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
        <Route path="product" element={<Product />} />
        <Route path="product/productdetail/:id" element={<ProductDetail />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

import React from "react";
import Header from "../components/Header/Header";
import HeaderCategory from "../components/HeaderCategory/HeaderCategory";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <HeaderCategory />
      <div>{children}</div>
    </div>
  );
}

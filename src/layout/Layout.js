import React from "react";
import Header from "../components/Header/Header";

export default function Layout({ children }) {
  return (
    <div className="w-3/5 mx-auto">
      <Header />
      <div>{children}</div>
    </div>
  );
}

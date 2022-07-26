import React from "react";
import Header from "../../components/Header/Header";
import ProductCardBox from "../../components/ProductCardBox/ProductCardBox";
import Basket from "../Basket/Basket";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container row my-5">
        <div className="col-md-9 row">
          <ProductCardBox />
        </div>
        <div className="col-md-3">
          <Basket />
        </div>
      </div>
    </div>
  );
}

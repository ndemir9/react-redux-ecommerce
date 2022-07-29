import React from "react";
import ProductCardBox from "../../components/ProductCardBox/ProductCardBox";
import Layout from "../../layout/Layout";
import Basket from "../Basket/Basket";

export default function Product() {
  return (
    <Layout>
      <div className="w-2/3 mx-auto mt-10">
        <ProductCardBox />
      </div>
    </Layout>
  );
}

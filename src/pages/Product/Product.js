import React from "react";
import ProductCardBox from "../../components/ProductCardBox/ProductCardBox";
import Layout from "../../layout/Layout";
import Basket from "../Basket/Basket";

export default function Product() {
  return (
    <Layout>
      <div className="grid grid-cols-3 gap-5 mt-10">
        <div className="col-span-2">
          <ProductCardBox />
        </div>
        <div>
          <Basket />
        </div>
      </div>
    </Layout>
  );
}

import React from "react";
import ProductCardBox from "../../components/ProductCardBox/ProductCardBox";
import Layout from "../../layout/Layout";
import { useParams } from "react-router-dom";

export default function Product() {
  const { category } = useParams();

  return (
    <Layout>
      <div className="w-full px-3 lg:px-0 md:w-2/3 lg:w-2/3 mx-auto mt-10 lg:grid lg:grid-cols-5 gap-x-5">
        <div className="border hidden lg:block">test</div>
        <div className="lg:col-span-4">
          <ProductCardBox category={category} />
        </div>
      </div>
    </Layout>
  );
}

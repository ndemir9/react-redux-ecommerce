import React from "react";
import IndexSlider from "../../components/IndexSlider/IndexSlider";
import LimitProduct from "../../components/LimitProduct/LimitProduct";
import Layout from "../../layout/Layout";
export default function Home() {
  return (
    <Layout>
      <IndexSlider />
      <LimitProduct />
    </Layout>
  );
}

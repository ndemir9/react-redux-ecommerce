import React, { useEffect } from "react";
import Layout from "../../layout/Layout";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetail } from "../../redux/apiSlice";

export default function ProductDetail() {
  const { id } = useParams();

  const { detailProduct, isLoading, error } = useSelector(
    (state) => state.apiSlice
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch]);

  if (isLoading) {
    return (
      <Layout>
        <h3>Loading...</h3>
      </Layout>
    );
  }

  if (error) {
    return <h3>Error {error.message}</h3>;
  }

  return (
    <Layout>
      <div className="w-2/3 mx-auto mt-10">
        <h1>product detail {id}</h1>
        <div>
          <div>
            <img src={detailProduct.image} style={{ width: 100 }} />
          </div>
          <div>{detailProduct.title}</div>
          <div>{detailProduct.description}</div>
          <div>{detailProduct.price}</div>
        </div>
      </div>
    </Layout>
  );
}

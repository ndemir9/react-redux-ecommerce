import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../redux/apiSlice";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductCardBox() {
  const { allProduct, isLoading, error } = useSelector(
    (state) => state.apiSlice
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3>Error {error.message}</h3>;
  }

  return (
    <>
      <div className="grid grid-cols-4 gap-5">
        <ProductCard allProduct={allProduct} />
      </div>
    </>
  );
}

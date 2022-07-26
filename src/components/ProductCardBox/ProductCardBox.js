import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../redux/apiSlice";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductCardBox() {
  const { allProduct } = useSelector((state) => state.apiSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <>
      <ProductCard allProduct={allProduct} />
    </>
  );
}

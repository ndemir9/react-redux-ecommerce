import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getProductLimit } from "../../redux/apiSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardComponent from "../CardComponent/CardComponent";

export default function LimitProduct() {
  const { limitProduct, isLoading, error } = useSelector(
    (state) => state.apiSlice
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductLimit());
  }, [dispatch]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3>Error {error.message}</h3>;
  }

  return (
    <>
      <div className="mt-32 bg-[#e9eef5] py-10">
        <h2 className="font-bold text-3xl text-center mb-5">En İyi Fiyatlar</h2>
        <div className="w-full px-3 lg:px-0 md:w-2/3 lg:w-2/3 mx-auto mt-10 ">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {limitProduct.map((item) => (
              <CardComponent item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

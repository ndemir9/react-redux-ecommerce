import React, { useEffect } from "react";
import Layout from "../../layout/Layout";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetail } from "../../redux/apiSlice";
import { AddProduct } from "../../redux/cardSlice";

export default function ProductDetail() {
  const { id } = useParams();

  const { detailProduct, isLoading, error } = useSelector(
    (state) => state.apiSlice
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch]);

  const handleAddProduct = (
    id,
    title,
    price,
    image,
    category,
    rate,
    count,
    quantity = 1
  ) => {
    dispatch(
      AddProduct({
        id: id,
        title: title,
        price: price,
        image: image,
        category: category,
        rate: rate,
        count: count,
        quantity: quantity,
      })
    );
  };

  console.log("detail render oldu");

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
      <div className="bg-purple-200 py-10">
        <div className="w-2/3 mx-auto text-sm font-semibold text-blue-700">
          {detailProduct.category} {">"} {detailProduct.title}
        </div>
      </div>
      <div className="w-full lg:w-2/3 mx-auto">
        <div className="grid lg:grid-cols-2">
          <div className="bg-white p-5">
            <img
              src={detailProduct.image}
              className="mx-auto w-[150px] lg:w-[300px]"
            />
          </div>
          <div className="p-5 bg-gray-200">
            <h1 className="text-2xl font-semibold">{detailProduct.title}</h1>
            <div className="font-semibold text-blue-500  mb-2">
              {detailProduct.category}
            </div>
            <div className="grid grid-cols-2 mb-5">
              <div>
                <span className="font-semibold text-2xl">
                  {detailProduct.price}
                </span>{" "}
                <span className="text-md font-semibold">TL</span>
              </div>
              <div className="">
                {/* <span>{detailProduct.rating.rate}</span> */}
              </div>
            </div>
            <div className="">{detailProduct.description}</div>
            <div>
              <button
                onClick={() =>
                  handleAddProduct(
                    detailProduct.id,
                    detailProduct.title,
                    detailProduct.price,
                    detailProduct.image,
                    detailProduct.category,
                    detailProduct.rating.rate,
                    detailProduct.rating.count
                  )
                }
                className="rounded-lg bg-blue-700 px-5 py-2.5 mt-5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

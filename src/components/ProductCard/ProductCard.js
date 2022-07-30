import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { AddProduct } from "../../redux/cardSlice";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

export default function ProductCard({ allProduct, category }) {
  const dispatch = useDispatch();

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

  return (
    <>
      {allProduct.map((item) => (
        <div
          key={item.id}
          className={`${item.category == category ? "block" : "hidden"}`}
        >
          <Link to={`/productdetail/${item.id}`}>
            <div className="bg-white h-[200px] lg:h-[350px] p-10 flex items-center justify-center transition hover:scale-90 duration-500">
              <img
                src={item.image}
                className="w-full h-full lg:w-4/5 lg:h-4/5"
              />
            </div>
          </Link>
          <div className="grid grid-cols-3 mt-5">
            <div className="col-span-2">
              <Link to={`/productdetail/${item.id}`}>
                <div className="kisitla text-sm lg:text-md   lg:font-semibold hover:text-orange-600 transition duration-300">
                  {item.title}
                </div>
                <div className="mt-1 font-semibold text-orange-600">
                  {item.price} TL
                </div>
              </Link>
            </div>
            <div className="text-end">
              <button
                onClick={() =>
                  handleAddProduct(item.id, item.title, item.price, item.image)
                }
                className="border hover:bg-black hover:text-white ease-in duration-300 border-black text-xl px-3 py-1 mr-1"
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

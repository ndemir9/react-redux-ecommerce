import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { AddProduct } from "../../redux/cardSlice";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

export default function ProductCard({ allProduct }) {
  const dispatch = useDispatch();

  const handleAddProduct = (id, title, price, image, quantity = 1) => {
    dispatch(
      AddProduct({
        id: id,
        title: title,
        price: price,
        image: image,
        quantity: quantity,
      })
    );
  };

  return (
    <>
      {allProduct.map((item) => (
        <div className="max-w-sm" key={item.id} style={{ height: 400 }}>
          <Card>
            <Link to={`/productdetail/${item.id}`}>
              <div>
                <img
                  src={item.image}
                  style={{ width: 100 }}
                  className="mx-auto"
                />
              </div>
            </Link>

            <a href="#">
              <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h5>
            </a>
            <div className="text-sm font-bold text-gray-900 dark:text-white">
              {item.price} TL
            </div>
            <div>
              <button
                onClick={() =>
                  handleAddProduct(item.id, item.title, item.price, item.image)
                }
                className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </button>
            </div>
          </Card>
        </div>
      ))}
    </>
  );
}

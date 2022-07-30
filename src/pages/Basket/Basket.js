import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "flowbite-react";
import Layout from "../../layout/Layout";
import {
  RemoveProduct,
  IncrementProduct,
  DecrementProduct,
} from "../../redux/cardSlice";
import Header from "../../components/Header/Header";
import { AiOutlineDelete } from "react-icons/ai";

function Basket() {
  const dispatch = useDispatch();

  const { shoppingCard } = useSelector((state) => state.cardSlice);

  const handleClearLocalStroge = () => {
    localStorage.removeItem("localBasket");
  };

  const handleRemoveProduct = (productId) => {
    dispatch(RemoveProduct(productId));
  };

  const handleIncrementProduct = (productId) => {
    dispatch(IncrementProduct(productId));
  };

  const handleDecrementProduct = (productId) => {
    dispatch(DecrementProduct(productId));
  };

  return (
    <>
      <Header />
      <div className="w-5/6 lg:w-2/3 mx-auto mt-10 lg:grid lg:grid-cols-4 lg:gap-x-5">
        <div className="lg:col-span-3 lg:border lg:p-5">
          <h3 className="font-semibold mt-5 text-2xl">
            Sepetim{" "}
            <span className="text-gray-500">{`( ${shoppingCard.length} ürün )`}</span>
          </h3>
          {shoppingCard.length == 0 ? (
            "ürün yok"
          ) : (
            <ul>
              {shoppingCard.map((item, i) => (
                <li
                  key={item.id}
                  className="mt-5 border rounded p-3 lg:grid lg:grid-cols-6 items-center"
                >
                  <div className="mb-3 lg:mb-0">
                    <img
                      src={item.image}
                      className="mx-auto w-[50px] lg:w-[75px] xl:w-[100px]"
                    />
                  </div>

                  <div className="lg:col-span-3 mb-3">
                    <span className="font-semibold text-md xl:text-lg">
                      {item.title}
                    </span>
                    <div className="text-md lg:text-lg">{item.price} TL</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between my-2 lg:my-4">
                      <div
                        onClick={() => handleDecrementProduct(item.id)}
                        className="py-1 px-4 bg-red-300 text-red-700 border border-red-400 cursor-pointer rounded inline hover:text-white hover:bg-red-500 duration-200 ease-in"
                      >
                        -
                      </div>
                      <div className="bg-slate-200 px-5 py-1 rounded">
                        {item.quantity}
                      </div>
                      <div
                        onClick={() => handleIncrementProduct(item.id)}
                        className="py-1 px-4 bg-green-300 text-green-700 border border-green-400 cursor-pointer rounded inline hover:text-white hover:bg-green-400 duration-200 ease-in"
                      >
                        +
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-end mb-1 lg:mb-3">
                      <button
                        onClick={() => handleRemoveProduct(item.id)}
                        className="text-red-600 hover:bg-red-600 hover:text-white ease-in duration-100 p-2 rounded-full"
                      >
                        <AiOutlineDelete size="24" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="border p-3 lg:p-5 fixed w-full left-0 bottom-0 lg:static bg-white lg:bg-transparent  drop-shadow-lg lg:drop-shadow-none">
          <h3 className="font-semibold text-xl lg:text-xl lg:mb-3">
            Toplam tutar
          </h3>
          <div className="font-semibold text-lg lg:text-2xl">
            1300 <span className="text-md lg:text-xl">TL</span>
          </div>
          <div>
            <button className="w-full bg-green-500 text-white  text-xl  mt-3 lg:mt-5 rounded text-center py-2 hover:opacity-75 ease-in duration-100">
              Alışverişi tamamla
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Basket;

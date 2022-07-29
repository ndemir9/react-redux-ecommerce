import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "flowbite-react";
import Layout from "../../layout/Layout";
import {
  RemoveProduct,
  IncrementProduct,
  DecrementProduct,
} from "../../redux/cardSlice";

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
    <Layout>
      {" "}
      <div className="w-2/3 mx-auto mt-10">
        <Button onClick={() => handleClearLocalStroge()}>
          Clear localStroge
        </Button>

        <h3 className="font-semibold mt-5">Sepetteki ürünler</h3>
        <div className="font-semibold">Toplam tutar: </div>

        {shoppingCard.length == 0 ? (
          "ürün yok"
        ) : (
          <ul>
            {shoppingCard.map((item, i) => (
              <li key={item.id} className="mt-5 border rounded p-3">
                <div className="text-end mb-3">
                  <button
                    onClick={() => handleRemoveProduct(item.id)}
                    className="py-1 px-4 bg-red-300 text-red-700 cursor-pointer rounded inline"
                  >
                    x
                  </button>
                </div>
                <div>
                  <img
                    src={item.image}
                    style={{ width: 100 }}
                    className="mx-auto"
                  />
                </div>
                <div>
                  <span className="font-semibold">{item.title}</span>
                </div>
                <div>{item.price}</div>
                <div className="flex items-center justify-between my-4">
                  <div
                    onClick={() => handleDecrementProduct(item.id)}
                    className="py-1 px-4 bg-red-300 text-red-700 cursor-pointer rounded inline"
                  >
                    -
                  </div>
                  <div className="bg-slate-200 px-5 py-1 rounded">
                    {item.quantity}
                  </div>
                  <div
                    onClick={() => handleIncrementProduct(item.id)}
                    className="py-1 px-4 bg-green-300 text-green-700 cursor-pointer rounded inline"
                  >
                    +
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
}

export default Basket;

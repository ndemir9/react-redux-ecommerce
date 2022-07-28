import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "flowbite-react";
import Layout from "../../layout/Layout";

function Basket() {
  const dispatch = useDispatch();

  const { shoppingCard } = useSelector((state) => state.cardSlice);

  const handleClearLocalStroge = () => {
    localStorage.removeItem("localBasket");
  };

  useEffect(() => {}, [shoppingCard, dispatch]);

  return (
    <Layout>
      {" "}
      <div>
        <Button onClick={() => handleClearLocalStroge()}>
          Clear localStroge
        </Button>

        <h3 className="font-semibold mt-5">Sepetteki ürünler</h3>
        <div className="font-semibold">Toplam tutar: </div>

        <div>
          {shoppingCard.map((item, i) => (
            <div key={item.id} className="mt-5">
              <div>
                <span className="font-semibold">{i + 1} - </span> {item.title}
              </div>
              <div>{item.price}</div>
              <div>adet: {item.quantity}</div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Basket;

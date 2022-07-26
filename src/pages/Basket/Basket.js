import React from "react";
import { useSelector } from "react-redux";

export default function Basket() {
  const { shoppingCard, totalCardPrice } = useSelector(
    (state) => state.cardSlice
  );

  const handleClearLocalStroge = () => {
    localStorage.removeItem("localBasket");
  };

  return (
    <div>
      <button
        className="btn btn-danger my-4"
        onClick={() => handleClearLocalStroge()}
      >
        Clear localStroge
      </button>
      <h3 className="h3">Sepetteki ürünler</h3>
      <div className="fw-bold">Toplam tutar: {totalCardPrice} </div>
      <div>
        {shoppingCard.map((item, i) => (
          <div key={i}>
            <div>
              <span className="h6">{i + 1} - </span> {item.title}
            </div>
            <div>{item.price}</div>
            <div>adet: {item.quantity}</div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

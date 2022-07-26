import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { AddProduct } from "../../redux/cardSlice";

export default function ProductCard({ allProduct }) {
  const dispatch = useDispatch();

  const handleAddProduct = (id, title, price, quantity = 1) => {
    dispatch(
      AddProduct({
        id: id,
        title: title,
        price: price,
        quantity: 1,
      })
    );
  };

  return (
    <>
      {allProduct.map((item) => (
        <div className="col-md-3 mb-4" key={item.id}>
          <div className="col-md-12">
            <div className="card" style={{ height: 400 }}>
              <img
                src={item.image}
                className="card-img-top w-50 h-50 mx-auto"
              />
              <div className="card-body">
                <h6 className="card-title">{item.title}</h6>
                <div className="my-3">
                  <span className="h5 card-title mr-3">{item.price}</span>
                  <span className="h5">TL</span>
                </div>
              </div>
              <button
                onClick={() =>
                  handleAddProduct(item.id, item.title, item.price)
                }
                className="btn btn-primary"
              >
                Sepete ekle
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

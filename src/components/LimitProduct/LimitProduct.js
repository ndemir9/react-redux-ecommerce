import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getProductLimit } from "../../redux/apiSlice";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LimitProduct() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

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
    <div className="mt-32 bg-[#e9eef5] py-10">
      <div className="w-2/3 mx-auto">
        <h2 className="font-bold text-3xl text-center mb-5">En İyi Fiyatlar</h2>
        <div>
          <Slider {...settings}>
            {limitProduct.map((item) => (
              <div key={item.id} className="px-3">
                <Link to={`/productdetail/${item.id}`}>
                  <div className="bg-white h-[350px] p-10 flex items-center justify-center transition hover:scale-90 duration-500">
                    <img src={item.image} className="w-4/5 h-4/5" />
                  </div>
                  <div className="w-9/12 mt-5 font-semibold hover:text-orange-600 transition duration-300">
                    {item.title}
                  </div>
                  <div className="w-9/12 mt-1 font-semibold text-orange-600">
                    {item.price} TL
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

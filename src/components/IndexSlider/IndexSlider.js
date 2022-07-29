import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function IndexSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slider1 = require("../../assets/images/slider1.png");
  const slider2 = require("../../assets/images/slider2.png");
  const slider3 = require("../../assets/images/slider3.png");

  return (
    <div className="grid grid-cols-3 items-center gap-x-10 w-2/3 mx-auto mt-10">
      <div className="text-5xl font-semibold">
        Proident occaecat Aliquip ex ea commodo consequat
      </div>
      <div className="p-5 w-full h-96 mx-auto col-span-2">
        <Slider
          {...settings}
          className="bg-white drop-shadow-xl rounded-md"
        >
          <img src={slider3} className="object-contain h-96" />
          <img src={slider1} className="object-contain h-96" />
          <img src={slider2} className="object-contain h-96" />
        </Slider>
      </div>
    </div>
  );
}

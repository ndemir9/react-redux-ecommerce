import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrPrevious, GrNext } from "react-icons/gr";

export default function IndexSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <GrNext />,
    prevArrow: <GrPrevious />,
  };

  const slider1 = require("../../assets/images/slider1.png");
  const slider2 = require("../../assets/images/slider2.png");
  const slider3 = require("../../assets/images/slider3.png");

  return (
    <div className="w-5/6 lg:w-2/3 mx-auto mt-10">
      <div className=" w-full h-48 lg:h-96 mx-auto">
        <Slider {...settings} className="">
          <img src={slider3} className="object-contain h-48 lg:h-96" />
          <img src={slider1} className="object-contain h-48 lg:h-96" />
          <img src={slider2} className="object-contain h-48 lg:h-96" />
        </Slider>
      </div>
    </div>
  );
}

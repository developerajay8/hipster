import React from "react";
import Slider from "react-slick";
import { ves1, ves2 } from "../../assets";

export default function Autonewplay() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear"
      };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="max-w-[584px] ">
          <img src={ves1} alt="" />
        </div>
        <div className="max-w-[584px] ">
          <img src={ves2} alt="" />
        </div>
        
      </Slider>
    </div>
  )
}

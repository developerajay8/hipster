import React from "react";
import Slider from "react-slick";
import { near1, near2, near3, third } from "../assets";

function Nearslider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
    
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
        <img src={third} className='FI' alt="" />
        </div>
        <div>
        <img src={near3} className='FI' alt="" />
        </div>
        <div>
        <img src={near2} className='FI' alt="" />
        </div>
        <div>
        <img src={near1} className='FI' alt="" />
        </div>        
      </Slider>
    </div>
  );
}

export default Nearslider;

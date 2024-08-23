



import React from "react";
import Slider from "react-slick";
import { near1, near2, near3, share1, share2, share3, Smart21, third } from "../assets";

function Shareapp() {
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
          <img src={Smart21} className='FI' alt="" />
        </div>
        <div>
          <img src={share1} className='FI' alt="" />
        </div>
        <div>
          <img src={share2} className='FI' alt="" />
        </div>
        <div>
          <img src={share3} className='FI' alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default Shareapp;

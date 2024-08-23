

import React from "react";
import Slider from "react-slick";
import { Gold, end1, end2, end3 } from "../../assets";

function MultipleSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <div className="slider-container" data-aos="slide-up" data-aos-duration="1000"
        data-aos-easing="ease-in-out">
            <Slider className=" py-[20px]" {...settings}>
                <div className="col-span-1">
                    <div className="ddd p-[40px] max-w-[404px] h-[390px]  ">
                        <img src={Gold} className="w-[70px] h-[70px]" alt="" />
                        <h3 className="my-[20px] text-[25px] text-[#FFFFFF] font-poppins">Web Development</h3>
                        <p className="text-[15px] font-poppins text-[#CCCCCC]">Create a professional and fast website that communicates your brand, converts, and helps you grow your market share.</p>
                    </div>
                    <div className="relative">
                        <img className="bottom-[0px] web1 right-[-380px] absolute" src={end1} alt="" />
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="ddd p-[40px] max-w-[404px] h-[390px]  ">
                        <img src={end2} className="w-[70px] h-[70px]" alt="" />
                        <h3 className="my-[20px] text-[25px] text-[#FFFFFF] font-poppins">Mobile App Development</h3>
                        <p className="text-[15px] font-poppins text-[#CCCCCC]">Build well-designed, optimised and scalable custom IOS and Android mobile applications.</p>
                    </div>
                    <div className="relative">
                        <img className="bottom-[0px] web1 right-[-380px] absolute" src={end1} alt="" />
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="ddd p-[40px] max-w-[404px] h-[390px]  ">
                        <img src={end3} className="w-[70px] h-[70px]" alt="" />
                        <h3 className="my-[20px] text-[25px] text-[#FFFFFF] font-poppins">UI/UX</h3>
                        <p className="text-[15px] font-poppins text-[#CCCCCC]">The best designs instil confidence in your brand and product. They inspire users to purchase, use and evangelise your</p>
                    </div>
                    <div className="relative">
                        <img className="bottom-[0px] web1 right-[-380px] absolute" src={end1} alt="" />
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="ddd p-[40px] max-w-[404px] h-[390px]  ">
                        <img src={end1} className="w-[70px] h-[70px]" alt="" />
                        <h3 className="my-[20px] text-[25px] text-[#FFFFFF] font-poppins">Off The Shelf Products</h3>
                        <p className="text-[15px] font-poppins text-[#CCCCCC]">Look no further if you are searching for a ready-to-use tool. Hipster offers a wide range of convenient solutions that work across industries. Examples include hybrid event management, learning management, customer loyalty, and social community platforms.</p>
                    </div>
                    <div className="relative">
                        <img className="bottom-[0px] web1 right-[-380px] absolute" src={end3} alt="" />
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="ddd p-[40px] max-w-[404px] h-[390px]  ">
                        <img src={end3} className="w-[70px] h-[70px]" alt="" />
                        <h3 className="my-[20px] text-[25px] text-[#FFFFFF] font-poppins">Other technologies</h3>
                        <p className="text-[15px] font-poppins text-[#CCCCCC]">Whether it is blockchain, AR, VR, cloud infrastructure, UI/UX, graphic design, or machine learning, we have the right expertise. Collectively, our team has clocked nearly one million hours in tech. </p>
                    </div>
                    <div className="relative">
                        <img className="bottom-[0px] web1 right-[-390px] absolute" src={Gold} alt="" />
                    </div>
                </div>

            </Slider>
        </div>
    );
}

export default MultipleSlider;


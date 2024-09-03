

import React from "react";
import Slider from "react-slick";
import { Gold, end1, end2, end3 } from "../../assets";

function MultipleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <div className="slider-container gap-5" data-aos="slide-up" data-aos-duration="1000"
        data-aos-easing="ease-in-out">
            <Slider className=" py-[20px] flex " {...settings}>
                <div className="">
                    <div className="ddd mr-7 p-[40px]  h-[390px]  ">
                        <img src={Gold} className="w-[70px] h-[70px]" alt="" />
                        <h3 className="my-[20px] text-[25px] text-[#FFFFFF] font-poppins">
Web Application
</h3>
                        <p className="text-[15px] font-poppins text-[#CCCCCC]">Streamline your business operations with custom web applications tailored to your specific needs. Our solutions enhance efficiency, productivity, and user experience.
                        </p>
                    </div>
                    <div className="relative">
                        <img className="bottom-[0px] web1 right-[-380px] absolute" src={end1} alt="" />
                    </div>
                </div>
                <div className="">
                    <div className="ddd mr-7 p-[40px]  h-[390px]  ">
                        <img src={end2} className="w-[70px] h-[70px]" alt="" />
                        <h3 className="my-[20px] text-[25px] text-[#FFFFFF] font-poppins">Website and App Development
                        </h3>
                        <p className="text-[15px] font-poppins text-[#CCCCCC]">Leverage responsive and user-centric design with our website and app development services. Our expert team delivers seamless digital <br /> experiences that drive engnt <br /> and conversions.
                        </p>
                    </div>
                    <div className="relative">
                        <img className="bottom-[0px] web1 right-[-380px] absolute" src={end1} alt="" />
                    </div>
                </div>
                <div className="">
                    <div className="ddd mr-7 p-[40px]  h-[390px]  ">
                        <img src={end3} className="w-[70px] h-[70px]" alt="" />
                        <h3 className="my-[20px] text-[25px] text-[#FFFFFF] font-poppins">CGI & 2D, 3D
                        </h3>
                        <p className="text-[15px] font-poppins text-[#CCCCCC]">Achieve immersive visual experiences with our cutting-edge CGI and 2D/3D animation services. We bring imagination to life, creating stunning visual content that captivates and enthralls.
                        </p>
                    </div>
                    <div className="relative">
                        <img className="bottom-[0px] web1 right-[-380px] absolute" src={end1} alt="" />
                    </div>
                </div>
                <div className="">
                    <div className="ddd mr-7 p-[40px]  h-[390px]  ">
                        <img src={end1} className="w-[70px] h-[70px]" alt="" />
                        <h3 className="my-[20px] text-[25px] text-[#FFFFFF] font-poppins">Designing and Editing
                        </h3>
                        <p className="text-[15px] font-poppins text-[#CCCCCC]">Elevate your visual presence with captivating design and precision editing. Our talented team brings your creative vision to life through impactful imagery, graphics, and visual storytelling.
                        </p>
                    </div>
                    <div className="relative">
                        <img className="bottom-[0px] web1 right-[-380px] absolute" src={end3} alt="" />
                    </div>
                </div>
                <div className="">
                    <div className="ddd mr-7 p-[40px]  h-[390px]  ">
                        <img src={end3} className="w-[70px] h-[70px]" alt="" />
                        <h3 className="my-[20px] text-[25px] text-[#FFFFFF] font-poppins">Social Media Management
                        </h3>
                        <p className="text-[15px] font-poppins text-[#CCCCCC]">Cultivate a vibrant social media presence with our expert management services. From content creation to community engagement, we <br /> help you leverage social <br /> platforms to brand visibility and connect your audience.
                        </p>
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


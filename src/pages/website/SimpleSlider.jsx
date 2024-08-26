import React from "react";
import Slider from "react-slick";
import { Tueetor, as, hp, imavox, rep, rn } from "../../assets";
import { Link } from "react-router-dom";

function SimpleSlider() {
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

                
                <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-2 lg:pt-0 pt-[160px]">
                    <img src={Tueetor} className='max-w-[177px] h-[69px] mb-[40px]' alt="" />
                    <p className='text-[18px] text-[#FFFFFF] font-poppins mb-[15px]'>I’ve known the team for many years now, and have used their IT consulting service to help build mobile apps, websites and software developments. Impressive work yet cost-effective prices. Little surprise that they have made great traction and expanded into other cities such as Korea in a relatively short time.</p>
                    <p className='mt-[40px] text-[20px] font-poppins text-[#FFFFFF]'>Eugene Ng</p>
                    <span className='text-[12px] font-poppins text-[#FFFFFF]'>Co-founder</span>
                    <div className=' text-black my-[20px] flex justify-end'>
                        <Link to={"/contact"} className='bg-[#FFFFFF] py-[14px] px-[40px] rounded-full font-semibold font-poppins'>Work With Us</Link>
                    </div>
                </div>
                <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-2 lg:pt-0 pt-[160px]">
                    <img src={imavox} className='max-w-[177px] h-[69px] mb-[40px]' alt="" />
                    <p className='text-[18px] text-[#FFFFFF] font-poppins mb-[15px]'>I’ve known the team for many years now, and have used their IT consulting service to help build mobile apps, websites and software developments. Impressive work yet cost-effective prices. Little surprise that they have made great traction and expanded into other cities such as Korea in a relatively short time.</p>
                    <p className='mt-[40px] text-[20px] font-poppins text-[#FFFFFF]'>Eugene Ng</p>
                    <span className='text-[12px] font-poppins text-[#FFFFFF]'>Co-founder</span>
                    <div className=' text-black my-[20px] flex justify-end'>
                        <Link to={"/contact"} className='bg-[#FFFFFF] py-[14px] px-[40px] rounded-full font-semibold font-poppins'>Work With Us</Link>
                    </div>
                </div>
                <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-2 lg:pt-0 pt-[160px]">
                    <img src={rn} className='max-w-[177px] h-[69px] mb-[40px]' alt="" />
                    <p className='text-[18px] text-[#FFFFFF] font-poppins mb-[15px]'>I’ve known the team for many years now, and have used their IT consulting service to help build mobile apps, websites and software developments. Impressive work yet cost-effective prices. Little surprise that they have made great traction and expanded into other cities such as Korea in a relatively short time.</p>
                    <p className='mt-[40px] text-[20px] font-poppins text-[#FFFFFF]'>Eugene Ng</p>
                    <span className='text-[12px] font-poppins text-[#FFFFFF]'>Co-founder</span>
                    <div className=' text-black my-[20px] flex justify-end'>
                        <Link to={"/contact"} className='bg-[#FFFFFF] py-[14px] px-[40px] rounded-full font-semibold font-poppins'>Work With Us</Link>
                    </div>
                </div>
                <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-2 lg:pt-0 pt-[160px]">
                    <img src={hp} className='max-w-[177px] h-[69px] mb-[40px]' alt="" />
                    <p className='text-[18px] text-[#FFFFFF] font-poppins mb-[15px]'>I’ve known the team for many years now, and have used their IT consulting service to help build mobile apps, websites and software developments. Impressive work yet cost-effective prices. Little surprise that they have made great traction and expanded into other cities such as Korea in a relatively short time.</p>
                    <p className='mt-[40px] text-[20px] font-poppins text-[#FFFFFF]'>Eugene Ng</p>
                    <span className='text-[12px] font-poppins text-[#FFFFFF]'>Co-founder</span>
                    <div className=' text-black my-[20px] flex justify-end'>
                        <Link to={"/contact"} className='bg-[#FFFFFF] py-[14px] px-[40px] rounded-full font-semibold font-poppins'>Work With Us</Link>
                    </div>
                </div>
                <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-2 lg:pt-0 pt-[160px]">
                    <img src={as} className='max-w-[177px] h-[69px] mb-[40px]' alt="" />
                    <p className='text-[18px] text-[#FFFFFF] font-poppins mb-[15px]'>I’ve known the team for many years now, and have used their IT consulting service to help build mobile apps, websites and software developments. Impressive work yet cost-effective prices. Little surprise that they have made great traction and expanded into other cities such as Korea in a relatively short time.</p>
                    <p className='mt-[40px] text-[20px] font-poppins text-[#FFFFFF]'>Eugene Ng</p>
                    <span className='text-[12px] font-poppins text-[#FFFFFF]'>Co-founder</span>
                    <div className=' text-black my-[20px] flex justify-end'>
                        <Link to={"/contact"} className='bg-[#FFFFFF] py-[14px] px-[40px] rounded-full font-semibold font-poppins'>Work With Us</Link>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default SimpleSlider;

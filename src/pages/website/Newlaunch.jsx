

import React from 'react'
import Container4 from '../../components/Container4'
import { warning, Ajay, bomb, pencil3, two, top5, planet, blog1, blog3, blog2, blog4, blog5, blog6, blog7, blog8, blog9, blog10, blog11, blog12, blog13, blog14, blog15, blog16, blog17, blog18, blog19, blog20, blog21, blog22, blog23, blog24, blog25, blog26, blog27, blog28, blog29, blog30, blog31, blog32, blog33, blog34, blog35, blog36, blog37, blog38, blog39, blog40, blog41, blog42, blog43, blog44, blog45, blog46, blog47, blog48, blog49, blog50, blog51, blog52, blog53, tech, aad, iosad, hire } from '../../assets'
import { TiArrowRight } from "react-icons/ti";
import { FaShare } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";


import { Link } from 'react-router-dom'
import Container2 from '../../components/Container2'
import SimpleSliders from './SimpleSliders';
import Container from '../../components/Container';
import Container6 from '../../components/Container6';


export default function Newlaunch() {



  return (
    <div>
      <div className="pt-[80px]">
        <Container4>
          <div className=" xl:px-0 lg:px-[30px] md:px-[40px] sm:px-[30px] px-[26px]">
            <div className="pb-[18px]">
              <h1 className='text-[56px] font-poppins text-[#000000]'>
              New Launch
              </h1>

            </div>
          </div>
        </Container4>
      </div>
      

      <div className="">
        <Container6>
          <div className="grid mb-[45px] lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:mx-[0px] lg:mx-[50px] md:mx-[80px] sm:mx-[30px]">
          <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] ">
              <Link to={'/siximage'}>
                <img src={blog44} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/newlaunch'}>New Launch</Link>
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/technologic'}>Technologies</Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/siximage'}>Image Matching Technologies to Use in App</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                October 22, 2020
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] ">
              <Link to={'/minimunproduct'}>
              <img src={blog41} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/newlaunch'}>New Launch</Link>
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/minimunproduct'}>How to Plan a Minimum Viable Product: a Step-By-Step Guide</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                November 21, 2020
              </div>
            </div>



          </div>
        </Container6>
      </div>


    </div>
  )
}



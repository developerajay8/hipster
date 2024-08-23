
import React from 'react'
import Container4 from '../../components/Container4'
import { blog1, blog14, blog39, blog43, blog44, blog52 } from '../../assets'



import { Link } from 'react-router-dom'

import Container6 from '../../components/Container6';


export default function Technologic() {



  return (
    <div>
      <div className="pt-[80px]">
        <Container4>
          <div className=" xl:px-0 lg:px-[30px] md:px-[40px] sm:px-[30px] px-[26px]">
            <div className="pb-[18px]">
              <h1 className='text-[56px] font-poppins text-[#000000]'>
                Technologies
                {/* Who we are */}
              </h1>

            </div>
          </div>
        </Container4>
      </div>


      <div className="">
        <Container6>
          <div className="grid mb-[45px] lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:mx-[0px] lg:mx-[50px] md:mx-[80px] sm:mx-[30px]">



            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] ">
              <Link to={'/intelligence'}>
                <img src={blog14} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/digitalsolution'}>Digital Solution</Link>
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/technologic'}>Technologies</Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/intelligence'}>ARTIFICIAL INTELLIGENCE FOR PRODUCT OWNERS</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                February 14, 2023
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] ">
              <Link to={'/blackchain'}>
                <img src={blog52} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog </Link>
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/technologic'}>Technologies </Link>
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={''}>Success Story </Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/blackchain'}>How can you use Blockchain Technology in your tech business?</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                February 22, 2019
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] ">
              <Link to={'/pickright'}>
                <img src={blog43} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/technologic'}>Technologies</Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/pickright'}>How to Pick the Right IT Company for your Business</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                November 6, 2020
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] ">
              <Link to={'/siximage'}>
                <img src={blog44} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={''}>Blog</Link>
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={''}>New Launch</Link>
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
              <img src={blog39} className='rounded-2xl' alt="" />
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/technologic'}>Technologies</Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={''}>Virtual Event Management Solution</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                January 11, 2021
              </div>
            </div>





          </div>
        </Container6>
      </div>


    </div>
  )
}






import React from 'react'
import Container4 from '../../components/Container4'
import {  blog44, blog47 } from '../../assets'



import { Link } from 'react-router-dom'

import Container6 from '../../components/Container6';


export default function Artint() {



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
              <Link to={'/artificialinteligence'}>
                <img src={blog47} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/artint'}>Artificial Intelligence</Link>
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog </Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/artificialinteligence'}>Impact of Artificial Intelligence on App Development</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                November 21, 2019
              </div>
            </div>


          </div>
        </Container6>
      </div>


    </div>
  )
}



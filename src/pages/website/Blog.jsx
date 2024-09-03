

import React from 'react'
import Container4 from '../../components/Container4'
import { warning, Ajay, bomb, pencil3, two, top5, planet, blog1, blog3, blog2, blog4, blog5, blog6, blog7, blog8, blog9, blog10, blog11, blog12, blog13, blog14, blog15, blog16, blog17, blog18, blog19, blog20, blog21, blog22, blog23, blog24, blog25, blog26, blog27, blog28, blog29, blog30, blog31, blog32, blog33, blog34, blog35, blog36, blog37, blog38, blog39, blog40, blog41, blog42, blog43, blog44, blog45, blog46, blog47, blog48, blog49, blog50, blog51, blog52, blog53, tech } from '../../assets'

import { TiArrowRight } from "react-icons/ti";
import { FaShare } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";


import { Link } from 'react-router-dom'
import Container2 from '../../components/Container2'
import SimpleSliders from './SimpleSliders';
import Container from '../../components/Container';
import Container6 from '../../components/Container6';


export default function Blog() {

  return (
    <div>
      <div className="pt-[80px]">
        <Container4>
          <div className=" xl:px-0 lg:px-[30px] md:px-[40px] sm:px-[30px] px-[26px]">
            <div className="">
              <h1 className='lg:text-[56px] md:text-[42px] sm:text-[35px] text-[35px]  font-poppins text-[#000000]'>
                Learning Hub
                {/* Who we are */}
              </h1>
              <h3 className='sm:text-[28px] text-[20px] text-[#000000] mt-[8px] mb-[24px] font-poppins '>Thoughts, Conversations & Insights</h3>
            </div>
          </div>
        </Container4>
      </div>
      <Container4>
        <div className=" grid lg:grid-cols-5 grid-cols-1 mb-[40px] xl:px-[0px] lg:px-[38px] md:px-[50px] sm:px-[30px] px-[0px]">
          <div className="lg:col-span-3 col-span-1 my-auto ">
            <Link to={''}>
              <div className='px-[15px] mb-[24px]'>
                <img src={top5} className='rounded-xl' alt="" />
              </div>
            </Link>
          </div>
          <div className="lg:col-span-2 col-span-1 ">
            <div className='px-[15px] mb-[24px]'>
              <div className="my-[10px]">
                <Link className=' text-[16px] font-poppins mr-[5px] mb-[5px] px-[20px] rounded-full py-[7px] bg-[#00b1ac33] ' to={''}>Blog</Link>
              </div>
              <h4 className='mb-[8px]'>
                <Link className='xl:text-[32px] lg:text-[32px] md:text-[24px] text-[20px] font-poppins text-[#001817]' to={"/blogone"} data-aos="fade" >How to Write Effective Blog Posts That Drive Traffic to Your Website</Link>
              </h4>
              <p className='text-[#222222] xl:text-[20px] sm:text-[18px] text-[16px] font-poppins' data-aos="fade" >In the digital age, crafting compelling blog posts is an art form that can significantly impact website traffic and engagement. As an adept content writer well-versed in SEO strategies, I’m here to guide you through the essential steps to create impactful blog content that not only captivates your audience but also optimizes your website for search engine visibility.</p>
              <div className='text-[16px] font-poppins text-[#000000] mt-[40px]' data-aos="fade">
                January 5, 2024</div>
            </div>
          </div>
        </div>

      </Container4>

      <Container6>
        <div className=" grid lg:grid-cols-5 grid-cols-1 mb-[40px] xl:px-[0px] lg:px-[38px] md:px-[50px] sm:px-[30px] px-[0px]">
          <div className="lg:col-span-2 col-span-1 ">
            <div className='px-[15px] pb-[16px] mb-[48px]'>
              <div className="d relative">
                <h5 className='text-[20px] font-poppins text-[#ffffff] mb-[24px]'>Interested In</h5>
                <div className="h-[0px]"></div>
                <div className="flex flex-wrap">
                  <Link className=' text-[14px] font-normal font-poppins text-[#e0e0e0] mr-[5px] mb-[15px] px-[20px] rounded-full py-[8px] hover:bg-[#FFFFFF] duration-1000 hover:mt-[5px] hover:text-[#000000] rder' to={''}>New Launch</Link>

                  <Link className=' text-[14px] font-normal font-poppins text-[#e0e0e0] mr-[5px] mb-[15px] px-[20px] rounded-full py-[8px] hover:bg-[#FFFFFF] duration-1000 hover:mt-[5px] hover:text-[#000000] border' to={'/'}>Technologies</Link>

                  <Link className=' text-[14px] font-normal font-poppins text-[#e0e0e0] mr-[5px] mb-[15px] px-[20px] rounded-full py-[8px] hover:bg-[#FFFFFF] duration-1000 hover:mt-[5px] hover:text-[#000000] border' to={''}>Native vs hybird app</Link>

                  <Link className=' text-[14px] font-normal font-poppins text-[#e0e0e0] mr-[5px] mb-[15px] px-[20px] rounded-full py-[8px] hover:bg-[#FFFFFF] duration-1000 hover:mt-[5px] hover:text-[#000000] border' to={''}>Success Story</Link>

                  <Link className=' text-[14px] font-normal font-poppins text-[#e0e0e0] mr-[5px] mb-[15px] px-[20px] rounded-full py-[8px] hover:bg-[#FFFFFF] duration-1000 hover:mt-[5px] hover:text-[#000000] border' to={'/'}>Tips</Link>

                  <Link className=' text-[14px] font-normal font-poppins text-[#e0e0e0] mr-[5px] mb-[15px] px-[20px] rounded-full py-[8px] hover:bg-[#FFFFFF] duration-1000 hover:mt-[5px] hover:text-[#000000] border' to={'/'}>App Development</Link>

                  <Link className=' text-[14px] font-normal font-poppins text-[#e0e0e0] mr-[5px] mb-[15px] px-[20px] rounded-full py-[8px] hover:bg-[#FFFFFF] duration-1000 hover:mt-[5px] hover:text-[#000000] border' to={''}>Thinking out loud</Link>


                  <Link className=' text-[14px] font-normal font-poppins text-[#e0e0e0] mr-[5px] mb-[15px] px-[20px] rounded-full py-[8px] hover:bg-[#FFFFFF] duration-1000 hover:mt-[5px] hover:text-[#000000] border' to={''}>Artificial Intelligence</Link>


                  <Link className=' text-[14px] font-normal font-poppins text-[#e0e0e0] mr-[5px] mb-[15px] px-[20px] rounded-full py-[8px] hover:bg-[#FFFFFF] duration-1000 hover:mt-[5px] hover:text-[#000000] border' to={''}>Web Design</Link>

                </div>

                <div className="lg:mt-[180px] ml-[-10px] flex ">
                  <div className="">
                    <Link className=' text-[14px] font-normal font-poppins text-[#FFFFFF] mr-[5px] mb-[15px] px-[10px] py-[8px]' to={''}>Facebook</Link>
                    <Link className=' text-[14px] font-normal font-poppins text-[#FFFFFF] mr-[5px] mb-[15px] px-[10px] py-[8px]' to={''}>Instagram</Link>
                    <Link className=' text-[14px] font-normal font-poppins text-[#FFFFFF] mr-[5px] mb-[15px] px-[10px] py-[8px]' to={''}>Linkedin</Link>
                    <Link className=' text-[14px] font-normal font-poppins text-[#FFFFFF] mr-[5px] mb-[15px] px-[10px] py-[8px]' to={''}>Dribble</Link>
                  </div>
                </div>
                <div className="blog_second_hover absolute bottom-[24px] right-[-20px]">
                  <img src={planet} className='' alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 col-span-1  ">
            <div className='px-[15px] pb-[16px] mb-[48px]'>

              <Link to={'/trendsigapor'}>
                <img src={tech} className='rounded-xl' alt="" />
              </Link>
              <div className='h-[20px]'></div>
              <div className="">
                <Link className=' text-[16px] font-poppins mr-[5px] mb-[5px] px-[20px] rounded-full py-[7px] bg-[#00b1ac33] border' to={''}>Blog</Link>
              </div>
              <div className="h-[10px]"></div>
              <h4 className='mb-[8px]'>
                <Link className='xl:text-[42px] lg:text-[32px] md:text-[24px] text-[20px] font-poppins text-[#001817]' to={"/trendsigapor"} data-aos="fade">How to Optimize Your Website for Search Engines</Link>
              </h4>
              <div className='text-[16px] font-poppins text-[#000000] mt-[40px]'>
                January 5, 2024</div>
            </div>
          </div>
        </div>
      </Container6>

      <div className="">
        <Container6>
          <div className="grid mb-[45px] lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:mx-[0px] lg:mx-[50px] md:mx-[80px] sm:mx-[30px]">

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/usefultool'}>
                <img src={blog1} className='rounded-2xl' alt="" />
              </Link>

              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={''}>Blog</Link>

                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={''}>Web Design</Link>

                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={''}>App Development</Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/usefultool'}>The Power of Social Media Marketing</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                January 4, 2024
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/startup'}>
                <img src={blog2} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={''}>Blog</Link>


              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/startup'}>India’s Best Digital Marketing</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                January 3, 2024
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/applaunch'}>
                <img src={blog3} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={''}>Blog</Link>


              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/applaunch'}>Branding Agency in India
                </Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                January 3, 2024
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={"/custombercenter"}>
                <img src={blog4} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/'}>Blog</Link>


              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/custombercenter'}>How to Measure the Success of Your Digital Marketing Campaigns</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                April 20, 2023
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/softwaredev'}>
                <img src={blog5} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={''}>Blog</Link>


              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/softwaredev'}>How to Increase Sales and Profits Through Effective Business Management</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                April 20, 2023
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/mvpdigital'}>
                <img src={blog6} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={''}>Blog</Link>


              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/mvpdigital'}>How to Use Analytics to Track Your Digital Marketing Results</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                April 20, 2023
              </div>
            </div>


            

            



          </div>
        </Container6>
      </div>


    </div>
  )
}



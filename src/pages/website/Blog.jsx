

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
            <Link to={'/blogone'}>
              <div className='px-[15px] mb-[24px]'>
                <img src={top5} className='rounded-xl' alt="" />
              </div>
            </Link>
          </div>
          <div className="lg:col-span-2 col-span-1 ">
            <div className='px-[15px] mb-[24px]'>
              <div className="my-[10px]">
                <Link className=' text-[16px] font-poppins mr-[5px] mb-[5px] px-[20px] rounded-full py-[7px] bg-[#00b1ac33] ' to={'/blogmultiple'}>Blog</Link>
              </div>
              <h4 className='mb-[8px]'>
                <Link className='xl:text-[42px] lg:text-[32px] md:text-[24px] text-[20px] font-poppins text-[#001817]' to={"/blogone"} data-aos="fade" >Top 5 AI Trends in Education for 2024</Link>
              </h4>
              <p className='text-[#222222] xl:text-[20px] sm:text-[18px] text-[16px] font-poppins' data-aos="fade" >Artificial Intelligence (AI) is rapidly changing the face of education. With the power of AI, educators can now deliver personalized learning experiences, assess student progress more accurately, and provide students with a more immersive and engaging learning experience. In this article, we will explore the top 5 AI trends in education that are expected to […]</p>
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

                  <Link className=' text-[14px] font-normal font-poppins text-[#e0e0e0] mr-[5px] mb-[15px] px-[20px] rounded-full py-[8px] hover:bg-[#FFFFFF] duration-1000 hover:mt-[5px] hover:text-[#000000] border' to={'/technologic'}>Technologies</Link>

                  <Link className=' text-[14px] font-normal font-poppins text-[#e0e0e0] mr-[5px] mb-[15px] px-[20px] rounded-full py-[8px] hover:bg-[#FFFFFF] duration-1000 hover:mt-[5px] hover:text-[#000000] border' to={''}>Native vs hybird app</Link>

                  <Link className=' text-[14px] font-normal font-poppins text-[#e0e0e0] mr-[5px] mb-[15px] px-[20px] rounded-full py-[8px] hover:bg-[#FFFFFF] duration-1000 hover:mt-[5px] hover:text-[#000000] border' to={''}>Success Story</Link>

                  <Link className=' text-[14px] font-normal font-poppins text-[#e0e0e0] mr-[5px] mb-[15px] px-[20px] rounded-full py-[8px] hover:bg-[#FFFFFF] duration-1000 hover:mt-[5px] hover:text-[#000000] border' to={'/tips'}>Tips</Link>

                  <Link className=' text-[14px] font-normal font-poppins text-[#e0e0e0] mr-[5px] mb-[15px] px-[20px] rounded-full py-[8px] hover:bg-[#FFFFFF] duration-1000 hover:mt-[5px] hover:text-[#000000] border' to={'/appdevelopment'}>App Development</Link>

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
                <Link className=' text-[16px] font-poppins mr-[5px] mb-[5px] px-[20px] rounded-full py-[7px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>
              </div>
              <div className="h-[10px]"></div>
              <h4 className='mb-[8px]'>
                <Link className='xl:text-[42px] lg:text-[32px] md:text-[24px] text-[20px] font-poppins text-[#001817]' to={"/trendsigapor"} data-aos="fade">Top 2024 Technology Trends in Singapore</Link>
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
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>

                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/webdesi'}>Web Design</Link>

                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/appdevelopment'}>App Development</Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/usefultool'}>20 Useful Tools for Every Startup in 2024</Link>
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
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>


              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/startup'}>2024 Top 10 Startup trends in Singapore</Link>
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
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>


              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/applaunch'}>10 Ways To Check If Your App Is Ready To Launch In 2024</Link>
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
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>


              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/custombercenter'}>What is a Customer Centric Tech Product?</Link>
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
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>


              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/softwaredev'}>Tools to use to plan software development specification for your next startups</Link>
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
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>


              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/mvpdigital'}>How to Plan an MVP for a Digital Project?</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                April 20, 2023
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/codelow'}>
                <img src={blog7} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>


              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/codelow'}>Code vs Low Code vs No Code: Which One is Right for Your Business?</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                April 20, 2023
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade" >
              <Link to={'/sustaibletec'}>
                <img src={blog8} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>


              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/sustaibletec'}>7 Inspiring Examples of Sustainable Technology in Action</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                April 19, 2023
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/eventmanagement'}>
                <img src={blog9} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>


              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/eventmanagement'}>AI features to be integrated into an Event Management Platform</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                April 19, 2023
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/healthcare'}>
                <img src={blog10} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>


              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/healthcare'}>Digital Therapeutics: The Future of Healthcare</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                April 18, 2023
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/entrepreneur'}>
                <img src={blog11} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>


              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/entrepreneur'}>10 Mistakes made by Tech Entrepreneur</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                April 17, 2023
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/wireframing'}>
                <img src={blog12} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>


              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/wireframing'}>Why you should not avoid wireframing and UX before actual development.</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                April 17, 2023
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/progressive'}>
                <img src={blog13} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>


              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/progressive'}>Progressive web app & hype about it</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                April 17, 2023
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
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

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/newappis'}>
                <img src={blog15} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/thinking'}>Thinking out loud</Link>
              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/newappis'}>New App Ideas Yet to be Done in Singapore</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                February 13, 2023
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/virtualreality'}>
                <img src={blog16} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/virtualreality'}>Virtual Reality (VR), Augmented Reality (AR) and Mixed Reality (MR): Definitions and Use Cases</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                June 28, 2022
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/costdevelop'}>
                <img src={blog17} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/costdevelop'}>How much does it cost to develop an app in Singapore?</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                May 13, 2022
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/designbackend'}>
                <img src={blog18} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={''}>Blog</Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/designbackend'}>7 Essential Tips for UX Design backed by Psychology</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                May 11, 2022
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/barepack'}>
                <img src={blog19} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/barepack'}>barePack: A Sustainability Startup’s Success Story</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                April 7, 2022
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/digitaltrans'}>
                <img src={blog20} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/digitaltrans'}>Digital Transformation: It’s Importance In Today’s Business World</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                March 30, 2022
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/redstp'}>
                <img src={blog21} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/redstp'}>How to Start up your Startup</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                March 30, 2022
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/crucialseo'}>
                <img src={blog22} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/crucialseo'}>10 Crucial SEO Ranking Factors for Driving Traffic to your Business</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                March 23, 2022
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/softwaredeveloper'}>
                <img src={blog23} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/softwaredeveloper'}>Details You Should Know Before Contacting A Software Developer</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                August 24, 2021
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/speedsite'}>
                <img src={blog24} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/speedsite'}>What is site speed and why is it so important?</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                August 10, 2021
              </div>
            </div>



            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/transformationexmaple'}>
                <img src={blog25} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/transformationexmaple'}>5 Digital Transformation Examples & Benefits</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                July 8, 2021
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/productivity'}>
                <img src={blog26} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/productivity'}>6 Apps That Will Improve The Productivity of Your Business</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                June 28, 2021
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/positioning'}>
                <img src={blog27} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/positioning'}>Book Review: Positioning by Al Ries and Jack Trout</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                June 21, 2021
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/manageproject'}>
                <img src={blog28} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/manageproject'}>How to Create and Manage your Project Timeline</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                June 1, 2021
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/techstartup'}>
                <img src={blog29} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/techstartup'}>Think Again by Adam Grant – From tech product and tech startups point of view</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                May 15, 2021
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/technologyimp'}>
                <img src={blog30} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/technologyimp'}>How Technology Can Improve in-store Retail Experiences</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                May 11, 2021
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/hybirdapp'}>
                <img src={blog31} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/hybirdapp'}>7 Benefits of Hybrid App Development</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                April 30, 2021
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/appfor'}>
                <img src={blog32} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/appfor'}>7 Benefits of having a mobile app for your business</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                April 21, 2021
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/Automationtesting'} >
                <img src={blog33} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/Automationtesting'}>Automation Testing Vs. Manual Testing: What’s the Difference?</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                March 25, 2021
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={"/gamifyapp"}>
                <img src={blog34} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/gamifyapp'}>7 Ideas to Gamify The Process in Your App</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                March 18, 2021
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/launching'}>
                <img src={blog35} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/launching'}>Launching an App: Effective Tips for Businesses</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                March 11, 2021
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/djangovsrails'}>
                <img src={blog36} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/djangovsrails'}>Difference between Django, Laravel, and Ruby on Rails.</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                March 6, 2021
              </div>
            </div>



            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/pandemicproof'}>
                <img src={blog37} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/pandemicproof'}>How to Make Your Company Pandemic Proof in 2021</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                February 19, 2021
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/digitaltras'}>
                <img src={blog38} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/digitaltras'}>What is the Future of Digital Transformation for my Business?</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                February 5, 2021
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/managsolution'}>
              <img src={blog39} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/technologic'}>Technologies</Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/managsolution'}>Virtual Event Management Solution</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                January 11, 2021
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/softwaretester'}>
              <img src={blog40} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/softwaretester'}>9 Blunders Made by Software Tester</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                January 5, 2021
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
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

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/seostrategy'}>
              <img src={blog42} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/tips'}>Tips</Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/seostrategy'}>Basic SEO Strategy</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                November 17, 2020
              </div>
            </div>



            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
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

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
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

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/ios14'}>
                <img src={blog45} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog</Link>
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/appdevelopment'}>App Development</Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/ios14'}>What is New in iOS 14?</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                July 27, 2020
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/makemobile'}>
                <img src={blog46} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={''}>Success Story</Link>
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog </Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/makemobile'}>How to make a successful app? Know the difference and build yours’ today!</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                December 10, 2019
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
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

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/pwa'}>
                <img src={blog48} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/appdevelopment'}>App Development</Link>
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog </Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/pwa'}>What is a Progressive Web App Development? Progressive Web App (PWA)</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                September 4, 2019
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={"/booksread"}>
                <img src={blog49} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/tips'}>Tips </Link>
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog </Link>
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={''}>Success Story </Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/booksread'}>10 best startup books to read at any stage of your startup journey</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                February 28, 2019
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/responsivedesign'}>
                <img src={blog50} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/tips'}>Tips </Link>
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog </Link>
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={''}>Success Story </Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/responsivedesign'}>When a web responsive website is better than building a mobile app</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                February 28, 2019
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
              <Link to={'/outlear'}>
                <img src={blog51} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/tips'}>Tips </Link>
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog </Link>
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={''}>Success Story </Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/outlear'}>Takeaways from the book “Outlier” by Malcolm Gladwell</Link>
              </h4>
              <div className="mt-[30px] text-[16px] font-poppins text-[#000000]">
                February 28, 2019
              </div>
            </div>

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px] " data-aos="fade">
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

            <div className="col-span-1 px-[15px] pb-[16px] mb-[48px]  relative" data-aos="fade">
              <Link to={'/nhapp'}>
                <img src={blog53} className='rounded-2xl' alt="" />
              </Link>
              <div className="flex flex-wrap mt-[20px]">
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/blogmultiple'}>Blog </Link>
                <Link className=' xl:text-[16px] sm:text-[15px] text-[14px] font-poppins mr-[12px] mb-[5px] xl:px-[20px] px-[15px] rounded-full xl:py-[7px] py-[4px] bg-[#00b1ac33] border' to={'/nvshibirid'}>Native vs hybrid app </Link>

              </div>
              <h4 className='mb-[16px] sm:mt-[0] mt-[7px]'>
                <Link className='text-[#001817] xl:text-[28px] sm:text-[24px] text-[20px] font-poppins' to={'/nhapp'}>Native App vs Hybrid App</Link>
              </h4>
              <div className="mt-[30px] absolute bottom-[20px] text-[16px] font-poppins text-[#000000]">
                February 22, 2019
              </div>
            </div>



          </div>
        </Container6>
      </div>


    </div>
  )
}



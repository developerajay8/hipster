import React from 'react'
import { AAB, AAb, Ajay, Downlogo, GN, MM, MP, TF, TS, aabbottom, ab2, abbanner, accest, accestbg, applanding, apple, aws, bcircle, bd, bluesuits, bomb, btn1, btn2, btn4, cna, commonbanner, curve, exit, int, map, mblue, mm, mobile, ms, mt,  ratingbox, sharebanner, shareend, star,  ui_ux, userdashboard, warning } from '../../assets'
import { Link } from 'react-router-dom'
import { TiArrowRight } from "react-icons/ti";
import { PiCircleFill } from "react-icons/pi";
import { FaCircle } from "react-icons/fa";
import Container2 from '../../components/Container2';
import Container4 from '../../components/Container4';


export default function AccesetSingapore() {
  return (
    <div>
      <div className='lg:mt-[80px] md:mt-[110px] mt-[110px]'>
        <div className="max-w-[1300px] mx-auto xl:px-[0px] px-[20px] mb-[48px]">
          <h2>
            <span className='md:text-[30px] sm:text-[24px] text-[16px] font-poppins'>
              <span className='md:text-[30px] sm:text-[24px] text-[16px] text-[#00b0ab] font-poppins font-semibold'> Acceset Singapore</span>
              — Mental Health Care
            </span>

            <div className='md:mt-[10px] mt-[5px]'>
              <span className='xl:text-[48px] md:text-[40px] sm:text-[30px] text-[24px] text-[#000000] font-poppins font-semibold'>Transforming mental health care through anonymous online text-based therapy.</span>
            </div>
          </h2>
        </div>
        <div className='w-[100%] h-[100%] md:px-[0px] px-[14px]'>
          <img className='w-[100%] h-[100%]' src={accestbg} alt="" />
        </div>
      </div>
      <div className='pt-[80px]'>
        <Container4>
          <div className="grid md:grid-cols-5 grid-cols-1 xl:px-[0px] lg:px-[20px] px-[20px]">
            <div className="md:col-span-3 col-span-1  lg:pr-[50px] pr-[20px]">
              <h2 className='lg:text-[50px] text-[35px] text-[#000000] font-poppins mb-[15px]'>Overview</h2>
              <p className='font-poppins sm:text-[20px] text-[16px] mt-[25px] text-[#606e6e]'>Acceset is founded in 2015 with the mission to transform Singapore’s mental health scene. Hipster has played a pivotal role in developing Acceset’s web platform, which provides anonymous text-based therapy.</p>
            </div>
            <div className="md:col-span-2 col-span-1 lg:pt-0 sm:pt-[80px] pt-[45px]">
              <div className="mb-[35px]">
                <p className='text-[18px] font-poppins text-[#001817] mb-[10px]'>Client</p>
                <p className='text-[24px] text-[#001817] font-semibold'>Acceset</p>
              </div>
              <div className="flex mb-[35px]">
                <div className=''>
                  <p className='text-[18px] font-poppins mb-[10px] text-[#001817]'>Period</p>
                  <p className='text-[24px] font-poppins font-semibold text-[#001817]'>2015</p>
                </div>
                <div className='ml-[45px]'>
                  <p className='text-[18px] font-poppins mb-[10px] text-[#001817]'>Geography</p>
                  <p className='text-[24px] font-poppins font-semibold text-[#001817]'>Singapore</p>
                </div>
                <div className=''></div>
              </div>
              <div className='mb-[35px]'>
                <p className='text-[18px] text-[#001817] mb-[10px] font-poppins'>Work Done</p>
                <div className="flex-wrap flex">
                  <li className='list-none mb-[20px] px-[9px] w-[114px]'>
                    <Link to={''}>
                      <img className='w-[50px] h-[50px] mx-[22px]' src={int} alt="" />
                    </Link>
                    <li className='text-center  text-[#001817] font-semibold'>
                      <Link to={''}>
                        Website
                      </Link>
                    </li>
                  </li>
                  <li className='list-none mb-[20px] px-[9px] w-[114px]'>
                    <Link to={''}>
                      <img className='w-[50px] h-[50px] mx-[22px]' src={ui_ux} alt="" />
                    </Link>
                    <li className='text-center  text-[#001817] font-semibold'>
                      <Link to={''}>
                        UI/UX
                      </Link>
                    </li>
                  </li>
                  <li className='list-none mb-[20px] px-[9px] w-[114px]'>
                    <Link to={''}>
                      <img className='w-[50px] h-[50px] mx-[22px]' src={userdashboard} alt="" />
                    </Link>
                    <li className='text-center text-[#001817] font-semibold'>
                      <Link to={''}>
                      CMS
                      </Link>
                    </li>
                  </li>
                  <li className='list-none mb-[20px] px-[9px] w-[114px]'>
                    <Link to={''}>
                      <img className='w-[50px] h-[50px] mx-[22px]' src={ms} alt="" />
                    </Link>
                    <li className='text-center text-[#001817] font-semibold'>
                      <Link to={''}>
                      AWS server infrastructure
                      </Link>
                    </li>
                  </li>
                  
                </div>
              </div>
            </div>
          </div>
        </Container4>
      </div>
      <div className="sm:py-[80px] ">
        <div className='max-w-[1140px] mx-auto xl:px-[0px] px-[20px]'>
          <h2 className='mb-[15px] text-[50px] font-poppins text-[#000000]'>Services</h2>
          <ul className='flex flex-wrap'>
            <li className='bg-[#ccefee] duration-1000  hover:bg-[#73dedb] mb-[20px] mr-[10px] py-[18px] px-[32px] w-[234px] rounded-full'>
              <Link className='text-[18px] font-poppins hover:text-[#FFFFFF] duration-1000 text-[#001817]' to={'/webdevelopment'}>Web Development</Link>
            </li>
            
          </ul>
        </div>
      </div>


      


      <div className="pt-[80px]">
        <Container4>
          <div className=''>
            <div className="grid grid-cols-1 xl:px-[10px] lg:px-[30px] md:px-[20px] px-[20px]">
              <h2 className='xl:text-[50px] lg:text-[43px] sm:text-[35px] text-[30px]  font-poppins mb-[30px] text-[#001817] text-center'>Mood lifting interface</h2>
              <p className='xl:text-[20px] md:text-[18px] text-[16px] font-poppins mb-[45px] text-center text-[#657676]'>Colours and illustrations are among the most powerful tools to set a mood, influence users’ emotions and draw attention to an interface. The website is playfully cartoonish and aimed at appealing to the younger audience. Our developers cleverly integrated the custom graphics into the website for front-end display.</p>
            </div>

            <div className="grid grid-cols-1 mx-auto">
                <img src={accest} alt="" className='mx-auto'/>
            </div>
          </div>
        </Container4>
      </div>

      


      <div className="py-[80px]">
        <div className=" lg:mx-[198px] md:mx-[80px] mx-[30px] ">
          

<div className="">
  <h2 className="text-center text-[28px] md:text-[36px] lg:text-[42px] text-[#000000] font-poppins">
    <Link className="bbn" to={""}>
      Next Case Study
    </Link>
  </h2>
  <div className="py-[30px] md:py-[40px] lg:py-[50px] text-center">
    <div className="text-[18px] md:text-[20px] lg:text-[24px] font-poppins text-[#001817] mb-[10px] md:mb-[12px] lg:mb-[15px]">
      <Link to={"/lhommes"}>L'Hommes - Fashion E-commerce</Link>
    </div>
    <h3 className="font-semibold text-[24px] md:text-[28px] lg:text-[32px] max-w-[100%] md:max-w-[600px] lg:max-w-[500px] mx-auto text-center leading-[30px] md:leading-[36px] lg:leading-[42px] text-[#001817] font-poppins">
      <Link className="mb-[8px] md:mb-[10px] lg:mb-[12px]" to={""}>
      Custom suits e-commerce platform with fit visualization
      </Link>
    </h3>
  </div>
</div>

        </div>
      </div>
      
    </div>
  )
}







import React from 'react'
import { back, barebisness, discover, discoverbarepack, dishres, Downlogo, int, kwshbanner, ratingbox, star, supplier, trro, ui_ux, vesbanner, z4bottom, z4icon } from '../../assets'
import { Link } from 'react-router-dom'
import { TiArrowRight } from "react-icons/ti";
import { PiCircleFill } from "react-icons/pi";
import { FaCircle } from "react-icons/fa";
import Container2 from '../../components/Container2';
import Container4 from '../../components/Container4';
import AutoPlay from './Autoplay';
import Container7 from '../../components/Container7';
import Autonewplay from './Autonewplay';


export default function Kwsh() {
  return (
    <div>


      <div className="lg:mt-[80px] md:mt-[110px] mt-[110px]">
        <div className="xl:px-0 px-[20px] max-w-[1300px] mx-auto mb-[48px]">
          <h2>
            <span className="md:text-[30px] sm:text-[24px] text-[16px] font-poppins" data-aos="slide-down" data-aos-duration="2000">
              <span className="md:text-[30px] sm:text-[24px] text-[16px] text-[#00b0ab] font-poppins font-semibold">
              KWSH 
              </span>
              — Agile Project Management
            </span>

            <div className="md:mt-[10px] mt-[5px]" data-aos="slide-down" data-aos-duration="1000" >
              <span className="xl:text-[48px] md:text-[40px] sm:text-[30px] text-[24px] text-[#000000] font-poppins font-semibold" >
              Change the way you do survey, get rid of the old ways of doing hardcopies survey and digitalise this process.
              </span>
            </div>
          </h2>
        </div>
        <div className="w-full h-full md:px-0 px-[14px]">
          <img className="w-full h-full" src={kwshbanner} alt="" />
        </div>
      </div>


      <div className="pt-20">
        <Container4>
          <div className="grid md:grid-cols-5 grid-cols-1 xl:px-0  sm:px-5 px-3">
            <div className="md:col-span-3 col-span-1 lg:pr-12 pr-5" data-aos="slide-right" data-aos-duration="1000">
              <h2 className="lg:text-5xl text-3xl text-black font-poppins mb-4">Overview</h2>
              <p className="font-poppins sm:text-lg text-sm mt-6 text-gray-600">
              Kwong Wai Shiu Hospital (KWSH) is one of the oldest charitable healthcare institutions in Singapore. Founded on values of compassion and serving the community, KWSH’s Community Management Services (CMS) team conducts community Ageing-in-Place surveys for seniors living in its vicinity to understand the experiences and challenges faced by seniors (aged 60 years old and above) about factors influencing health outcomes that can be addressed in the community settings.
              </p>
              
            </div>
            <div className="md:col-span-2 col-span-1 lg:pt-0 sm:pt-20 pt-12" data-aos="slide-left" data-aos-duration="1000">
              <div className="mb-9">
                <p className="text-lg font-poppins text-gray-800 mb-2">Client</p>
                <p className="text-2xl text-gray-800 font-semibold">Kwong Wai Shiu Hospital</p>
              </div>
              <div className="flex flex-wrap mb-9">
                <div>
                  <p className="text-lg font-poppins mb-2 text-gray-800">Period</p>
                  <p className="text-2xl font-poppins font-semibold text-gray-800">2020- present</p>
                </div>
                <div className="ml-11">
                  <p className="text-lg font-poppins mb-2 text-gray-800">Geography</p>
                  <p className="text-2xl font-poppins font-semibold text-gray-800">Singapore</p>
                </div>
              </div>
              <div className="mb-9">
                <p className="text-lg text-gray-800 mb-2 font-poppins">Work Done</p>
                <div className="flex flex-wrap">
                  <li className="list-none mb-5 px-2 w-28">
                    <Link to={''}>
                      <img className="w-12 h-12 mx-6" src={int} alt="" />
                    </Link>
                    <li className="text-center text-gray-800 font-semibold">
                      <Link to={''}>Tablet App</Link>
                    </li>
                  </li>
                  <li className="list-none mb-5 px-2 w-28">
                    <Link to={''}>
                      <img className="w-12 h-12 mx-6" src={int} alt="" />
                    </Link>
                    <li className="text-center text-gray-800 font-semibold">
                      <Link to={''}>UI/UX</Link>
                    </li>
                  </li>
                  <li className="list-none mb-5 px-2 w-28">
                    <Link to={''}>
                      <img className="w-12 h-12 mx-6" src={int} alt="" />
                    </Link>
                    <li className="text-center text-gray-800 font-semibold">
                      <Link to={''}>Multi User Dashboard & CMS</Link>
                    </li>
                  </li>

                </div>
              </div>
            </div>
          </div>
        </Container4>
      </div>
      <div className="py-20">
        <Container4>
        <div className="xl:px-0 px-[20px] ">
          <h2 className="mb-4 text-5xl font-poppins text-black">Services</h2>
          <ul className="flex flex-wrap">
            <li className="bg-teal-100 duration-1000 hover:bg-teal-500 mb-5 mr-2 py-4 px-8 w-[205px] rounded-full">
              <Link className="text-lg font-poppins hover:text-white duration-1000 text-gray-800" to={'/softwaredevelopment'}>Product Design</Link>
            </li>

            <li className="bg-teal-100 duration-1000 hover:bg-teal-500 mb-5 mr-2 py-4 px-8 w-[130px] rounded-full">
              <Link className="text-lg font-poppins hover:text-white duration-1000 text-gray-800" to={'/uiuxdesign'}>UI/UX</Link>
            </li>
            
          </ul>
        </div>
        </Container4>
      </div>




      <Container7>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-5 gap-4 xl:px-[0px] px-[20px]">
          <div className="col-span-2 my-5 miroor-bg px-[20px] rounded-[20px]">
            <div className="packmirror"></div>
          </div>
          <div className="my-auto col-span-3 font-poppins md:pl-12 md:ml-5" data-aos="slide-left" data-aos-duration="1000">
            <div>
              <h2 className="text-[30px] sm:text-[40px] md:text-[50px] text-black">
                Scaling your tech to meet business growth
              </h2>
            </div>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl mt-5 font-poppins">
              BarePack’s first bootstrapped app was a good starting point when the company just began its operations. As the user pool grew, it became increasingly clear that the app had scalability issues. The app slowed down as more users and food outlets came onboard.
            </p>
          </div>
        </div>
      </Container7>

      <Container7>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-5 gap-4 xl:px-[0px] px-[20px]">
          <div className="my-auto sm:pr-[68px] col-span-3 font-poppins md:pl-0" data-aos="slide-right" data-aos-duration="1000">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-black">
            Challenges to solve
            </h2>
            <ul className="list-disc py-7 text-gray-600 font-poppins text-base sm:text-lg md:text-xl leading-[35px] sm:px-5 px-3">
              <li>Manual data entry is labour intensive and prone to errors</li>
              <li>Manual organizing of the data and sharing of data analytics to relevant stakeholders</li>
              <li>Easy administration of multiple survey types concurrently</li>
              <li>Ensure security and restrict access of data at all times</li>
            </ul>
          </div>
          <div className="col-span-2 my-5 wooshi px-[20px] rounded-[20px]">
            <div className="barebottom1"></div>
          </div>
        </div>
      </Container7>







      <Container7>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-5 gap-4 xl:px-[0px] px-[20px]">
          <div className="col-span-2 my-5 wooshi px-[20px] rounded-[20px]">
            <div className="barebottom1"></div>
          </div>
          <div className="my-auto col-span-3 font-poppins md:pl-12 md:ml-5" data-aos="slide-left" data-aos-duration="1000">
            <div>
              <h2 className="text-[30px] sm:text-[40px] md:text-[50px] text-black">
              Data Analytics
              </h2>
            </div>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl mt-5 font-poppins">
            The app captures granular transaction data for analytics. These data include the number of containers picked up and dropped off at a specific location and the number of containers a user holds. These information can help stakeholders make informed business decisions backed by data.
            </p>

            <p className="text-gray-600 text-base sm:text-lg md:text-xl mt-5 font-poppins">
            As the database grew, we faced challenges in terms of app speed and scalability, We changed from Google Firebase to Google Firestore proactively to tackle these issues, and made the app robust and scalable. The migration was seamlessly done without any downtime.
            </p>
          </div>
        </div>
      </Container7>






      <div className="bg-[#ddf3ff] py-[80px] sm:py-[40px] xl:px-[0px] px-[20px]">
        <div className="max-w-[1220px] mx-auto  gap-[8px] grid grid-cols-1 md:grid-cols-5">
          <div className="col-span-3 md:pr-[73px] my-auto md:text-left">
            <h2 className="text-[40px] sm:text-[30px] md:text-[50px] text-[#000000] font-poppins mb-[15px]">
              Flutter App as V2
            </h2>
            <p className="mb-[25px] text-[#000000] text-[16px] sm:text-[18px] md:text-[20px] font-poppins">
              Instead of running two separate apps (Android and IOS), Hipster advised barePack to create a cross-platform mobile app, a Flutter app. Flutter works for both Android and iOS, halves development time and cost. Additionally, updates are published on both platforms simultaneously.
            </p>
          </div>
          <div className="col-span-2">
            <img src={dishres} alt="" className="w-full h-auto" />
          </div>
        </div>
      </div>








      <div className="py-[80px]">
        <div className=" lg:mx-[198px] md:mx-[80px] mx-[30px] ">
          


          <div className="">
  <h2 className="text-center text-[28px] md:text-[36px] lg:text-[42px] text-[#000000] font-poppins">
    <Link className="bbn" to={"/barepack"}>
      Next Case Study
    </Link>
  </h2>
  <div className="py-[30px] md:py-[40px] lg:py-[50px] text-center">
    <div className="text-[18px] md:text-[20px] lg:text-[24px] font-poppins text-[#001817] mb-[10px] md:mb-[12px] lg:mb-[15px]">
      <Link to={""}>barePack - Sustainability Solution</Link>
    </div>
    <h3 className="font-semibold text-[24px] md:text-[28px] lg:text-[32px] max-w-[100%] md:max-w-[600px] lg:max-w-[500px] mx-auto text-center leading-[30px] md:leading-[36px] lg:leading-[42px] text-[#001817] font-poppins">
      <Link className="mb-[8px] md:mb-[10px] lg:mb-[12px]" to={""}>
      Reducing plastic waste and promoting reusable packaging through tech
      </Link>
    </h3>
  </div>
</div>

        </div>
      </div>

    </div>
  )
}





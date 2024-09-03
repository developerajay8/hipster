import React from "react";
import {
  bd,
  int,
  ms,
  ui_ux,
  userdashboard,
  tp1,
  tp2,
  Improvements,
  Improsecond,
  Smart16,
  ratingbox,
  star,
  watch1,
  han,
  rs,
  rb,
  Renonat,
  Smart15,
  Downlogo,
  sn1,
  sn2,
  Smart14,
} from "../../assets";
import { Link } from "react-router-dom";

import Container4 from "../../components/Container4";

export default function Somethingnew() {
  return (
    <div>
      <div className="lg:mt-[80px] md:mt-[110px] mt-[110px]">
        <div className="xl:px-0 px-[20px] max-w-[1300px] mx-auto mb-[48px]">
          <h2>
            <span className="md:text-[30px] sm:text-[24px] text-[16px] font-poppins">
              <span className="md:text-[30px] sm:text-[24px] text-[16px] text-[#00b0ab] font-poppins font-semibold">
              CGI &  
              </span>
               — 2D, 3D
            </span>

            <div className="md:mt-[10px] mt-[5px]">
            <span className="text-[22px] sm:text-[27px] md:text-[32px] lg:text-[34px] text-[#000000] font-poppins font-semibold">
            Achieve immersive visual experiences with our cutting-edge CGI and 2D/3D animation services. We bring imagination to life, creating stunning visual content that captivates and enthralls.
              </span>
            </div>
          </h2>
        </div>
        <div className="w-[100%] h-[100%] md:px-[0px] px-[14px]">
          <img className="w-[100%] h-[100%]" src={Smart14} alt="" />
        </div>
      </div>

      <div className="md:py-[80px] sm:py-[50px]  py-[34px]">
        <Container4>
          <div className="grid md:grid-cols-5 grid-cols-1 xl:px-[0px] px-[20px]">

            <div
              data-aos="slide-right"
              className="md:col-span-3 col-span-1  lg:pr-[50px] pr-[20px]"
            >
              <h2 className="lg:text-[50px] text-[35px] text-[#000000] font-poppins mb-[15px]">
                Overview
              </h2>
              <p className="font-poppins sm:text-[20px] text-[16px] mt-[25px] text-[#606e6e]">
                SomethingNew V2 is a chat-based application that provides mental
                health support to individuals. This app is rated 4.5 and 4.9
                stars on the App and Google Play stores, respectively. Hipster
                built four platforms for this project – one for practitioners,
                end-users, an admin backend, and a website.
              </p>
            </div>
            <div
              data-aos="slide-left"
              className="md:col-span-2 col-span-1 lg:pt-0 sm:pt-[80px] pt-[45px]"
            >
              <div className="mb-[35px]">
                <p className="text-[18px] font-poppins text-[#001817] mb-[10px]">
                  Client
                </p>
                <p className="text-[24px] text-[#001817] font-semibold">
                  SomethingNew
                </p>
              </div>
              <div className="flex mb-[35px]">
                <div className="">
                  <p className="text-[18px] font-poppins mb-[10px] text-[#001817]">
                    Period
                  </p>
                  <p className="text-[24px] font-poppins font-semibold text-[#001817]">
                    2022
                  </p>
                </div>
                <div className="ml-[45px]">
                  <p className="text-[18px] font-poppins mb-[10px] text-[#001817]">
                    Geography
                  </p>
                  <p className="text-[24px] font-poppins font-semibold text-[#001817]">
                    Singapore
                  </p>
                </div>
                <div className=""></div>
              </div>
              <div className="mb-[35px]">
                <p className="text-[18px] text-[#001817] mb-[10px] font-poppins">
                  Work Done
                </p>
                <div className="flex-wrap flex">
                  <li className="list-none mb-[20px] px-[9px] w-[114px]">
                    <Link to={"https://www.somethingnew.org.sg/"}>
                      <img
                        className="w-[50px] h-[50px] mx-[22px]"
                        src={int}
                        alt=""
                      />
                    </Link>
                    <li className="text-center  text-[#001817] font-semibold">
                      <Link to={""}>Web App</Link>
                    </li>
                  </li>
                  <li className="list-none mb-[20px] px-[9px] w-[114px]">
                    <Link to={""}>
                      <img
                        className="w-[50px] h-[50px] mx-[22px]"
                        src={ui_ux}
                        alt=""
                      />
                    </Link>
                    <li className="text-center  text-[#001817] font-semibold">
                      <Link to={""}>Mobile App </Link>
                    </li>
                  </li>
                  <li className="list-none mb-[20px] px-[9px] w-[114px]">
                    <Link to={""}>
                      <img
                        className="w-[50px] h-[50px] mx-[22px]"
                        src={userdashboard}
                        alt=""
                      />
                    </Link>
                    <li className="text-center text-[#001817] font-semibold">
                      <Link to={""}>CMS</Link>
                    </li>
                  </li>
                  <li className="list-none mb-[20px] px-[9px] w-[114px]">
                    <Link to={""}>
                      <img
                        className="w-[50px] h-[50px] mx-[22px]"
                        src={ms}
                        alt=""
                      />
                    </Link>
                    <li className="text-center text-[#001817] font-semibold">
                      <Link to={""}>SAAS</Link>
                    </li>
                  </li>
                  <li className="list-none mb-[20px] px-[9px] w-[114px]">
                    <Link to={""}>
                      <img
                        className="w-[50px] h-[50px] mx-[22px]"
                        src={bd}
                        alt=""
                      />
                    </Link>
                    <li className="text-center text-[#001817] font-semibold">
                      <Link to={""}>Infrastructure</Link>
                    </li>
                  </li>
                  <li className="list-none mb-[20px] px-[9px] w-[114px]">
                    <Link to={""}>
                      <img
                        className="w-[50px] h-[50px] mx-[22px]"
                        src={userdashboard}
                        alt=""
                      />
                    </Link>
                    <li className="text-center text-[#001817] font-semibold">
                      <Link to={""}>CMS</Link>
                    </li>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </Container4>
      </div>


      

      <div className="md:py-[80px] sm:py-[50px] mx-auto max-w-[1140px] xl:px-[0px] px-[20px]  py-[34px] ">
        <div className="">
          <h2 className="mb-[15px] text-[50px] font-poppins text-[#000000]">
            Services
          </h2>
          <ul className="flex flex-wrap">
            <li className="bg-[#ccefee] duration-500  hover:bg-[#00fff7] mb-[20px] mr-[10px] py-[18px] px-[32px]  rounded-full hover:text-[#FFFFFF]  text-[#001817]">
              <Link
                className="  text-[18px] font-poppins hover:text-[#FFFFFF] duration-1000 text-[#001817]"
                to={"/mobileappdevelopment"}
              >
                Mobile App Development
              </Link>
            </li>

            <li className="bg-[#ccefee] duration-500  hover:bg-[#00fff7] mb-[20px] mr-[10px] py-[18px] px-[32px]  rounded-full hover:text-[#FFFFFF]  text-[#001817]">
              <Link
                className="  text-[18px] font-poppins hover:text-[#FFFFFF] duration-1000 text-[#001817]"
                to={"/uiuxdesign"}
              >
                UI/UX
              </Link>
            </li>

            <li className="bg-[#ccefee] duration-500  hover:bg-[#00fff7] mb-[20px] mr-[10px] py-[18px] px-[32px]  rounded-full hover:text-[#FFFFFF]  text-[#001817]">
              <Link
                className="  text-[18px] font-poppins hover:text-[#FFFFFF] duration-1000 text-[#001817]"
                to={"/shareapp"}
              >
                Product Design
              </Link>
            </li>

            <li className="bg-[#ccefee] duration-1000  hover:bg-[#73dedb] mb-[20px] mr-[10px] py-[18px] px-[32px] rounded-full">
              <Link
                className="text-[18px] font-poppins hover:text-[#FFFFFF] duration-1000 text-[#001817]"
                to={"/webdevelopment"}
              >
                Web Development
              </Link>
            </li>
          </ul>
        </div>
      </div>


      <div className="">
        <Container4>
          <div className="xl:px-[0px] px-[20px] min-h-[690px] md:py-[80px] sm:py-[50px]  py-[34px] grid md:grid-cols-2 grid-cols-1  gap-3">
            <div className="col-span-1   ">
              <img src={sn1} className="rounded-[20px] " alt="" />
            </div>
            <div className="col-span-1  my-[auto] lg:pl-[68px] md:pl-[38px] pl-[4px]">
              <h2 className="lg:text-[50px] md:text-[40px] sm:text-[30px] text-[26px] text-[#001817] font-poppins mb-[15px]">
              Greater efficiency & personalization
              </h2>
              <p className="sm:text-[20px] text-[16px] text-[#657676] mb-[20px]">
              The new SomethingNew app takes mental health support to the next level by:
              </p>
              <ul className="list-disc font-poppins sm:text-[20px] text-[16px] text-[#666666] sm:ml-[40px] ml-[16px]">
                <li className="sm:pl-[20px] pl-[2px]">
                Avatar selection for personalization.
                </li>
                <li className=" sm:pl-[20px] pl-[2px]">
                Notification settings allowing Practitioners to choose Do Not Disturb mode at specific days and hours of the week
                </li>
                <li className=" sm:pl-[20px] pl-[2px]">
                Mental Health Directory with list and web view
                </li>
                <li className=" sm:pl-[20px] pl-[2px]">
                Appointment and scheduling of calls
                </li>
                <li className=" sm:pl-[20px] pl-[2px]">
                A dashboard that allows insights into commonly reported counselling topics
                </li>
              </ul>
              <p className="sm:text-[20px] text-[16px] text-[#657676] mb-[20px]">
              The new SomethingNew app takes mental health support to the next level by:
              </p>

            </div>
          </div>
        </Container4>

        <Container4>
          <div className="xl:px-[0px] px-[20px]   md:py-[80px] sm:py-[50px]  py-[34px] grid lg:grid-cols-2 grid-cols-1 gap-4">
            <div className="col-span-1   sm:pr-[68px] pr-[0px]">
              <h2 className="lg:text-[50px] md:text-[40px] sm:text-[30px] text-[26px] text-[#001817] font-poppins mb-[15px]">
              Promoting mental health awareness to businesses and consumers
              </h2>
              <p className="sm:text-[20px] text-[16px] text-[#657676] mb-[20px]">
              A website is important for a business allowing one to showcase and generate awareness about one’s website. SomethingNew’s website is custom designed with the following goals:
              </p>
              <ul className="list-disc font-poppins sm:text-[20px] text-[16px] text-[#666666] sm:ml-[40px] ml-[16px]">
                <li className="sm:pl-[20px] pl-[2px]">
                Improved customer experience: with dedicated informational pages and contact forms for the business/consumer users
                </li>
                <li className=" sm:pl-[20px] pl-[2px]">
                Use of website animation techniques and bright colours to create a perfect reading pace and a warmer, friendlier design.
                </li>
              </ul>
            </div>
            <div className="col-span-1  rounded-[20px] bg-[#87c6de] md:mx-0 mx-auto">
              <img src={sn2} className=" px-[20px]" alt="" />
            </div>
          </div>
        </Container4>
      </div>

      
      <div className="md:py-[80px] sm:py-[50px]  py-[34px]">
        <div className=" lg:mx-[198px] md:mx-[80px] mx-[30px] ">
          


          <div className="">
  <h2 className="text-center text-[28px] md:text-[36px] lg:text-[42px] text-[#000000] font-poppins">
    <Link className="bbn" to={"/renonation"}>
      Next Case Study
    </Link>
  </h2>
  <div className="py-[30px] md:py-[40px] lg:py-[50px] text-center">
    <div className="text-[18px] md:text-[20px] lg:text-[24px] font-poppins text-[#001817] mb-[10px] md:mb-[12px] lg:mb-[15px]">
      <Link to={"/renonation"}>Renonation - Real Estate, Renovation</Link>
    </div>
    <h3 className="font-semibold text-[24px] md:text-[28px] lg:text-[32px] max-w-[100%] md:max-w-[600px] lg:max-w-[500px] mx-auto text-center leading-[30px] md:leading-[36px] lg:leading-[42px] text-[#001817] font-poppins">
      <Link className="mb-[8px] md:mb-[10px] lg:mb-[12px]" to={""}>
      A trusted and reliable source for home renovation and interior design.
      </Link>
    </h3>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}

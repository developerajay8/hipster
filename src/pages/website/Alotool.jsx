import React from "react";
import {
  AAB,
  AAb,
  Ajay,
  Downlogo,
  GN,
  MM,
  MP,
  TF,
  TS,
  aabbottom,
  ab2,
  abbanner,
  agenda,
  aloevent,
  alof,
  alof2,
  alotool,
  applanding,
  apple,
  aws,
  bcircle,
  bd,
  bluesuits,
  bomb,
  btn1,
  btn2,
  btn4,
  cna,
  commonbanner,
  curve,
  exit,
  int,
  map,
  mblue,
  mm,
  mobile,
  ms,
  mt,
  nearapp,
  nearbanner,
  payment,
  pencil3,
  personalisation,
  ratingbox,
  sharebanner,
  shareend,
  sponsers,
  star,
  sunstart,
  tab,
  two,
  ui_ux,
  userdashboard,
  venue,
  warning,
} from "../../assets";
import { Link } from "react-router-dom";
import { TiArrowRight } from "react-icons/ti";
import { PiCircleFill } from "react-icons/pi";
import { FaCircle } from "react-icons/fa";
import Container2 from "../../components/Container2";
import Container4 from "../../components/Container4";
import Container7 from "../../components/Container7";

export default function Alotool() {
  

  return (
    <div>
      <div className="lg:mt-[80px] md:mt-[110px] mt-[110px]">
        <div className="max-w-[1300px] mx-auto xl:px-0 px-[20px] mb-[48px] ">
          <h2>
            <span className="md:text-[30px] sm:text-[24px] text-[16px] font-poppins">
              <span className="md:text-[30px] sm:text-[24px] text-[16px] text-[#00b0ab] font-poppins font-semibold">
                {" "}
                Performance 
{" "}
              </span>
              — Marketing
            </span>

            <div className="md:mt-[10px] mt-[5px]">
            <span className="text-[22px] sm:text-[27px] md:text-[32px] lg:text-[34px] text-[#000000] font-poppins font-semibold">
            Amplify your online reach and drive conversions through targeted performance marketing strategies. Our team leverages data-driven insights to craft campaigns that maximize ROI and deliver measurable results.
              </span>
            </div>
          </h2>
        </div>
        <div className="w-[100%] h-[100%] md:px-[0px] px-[14px]">
          <img className="w-[100%] h-[100%]" src={alotool} alt="" />
        </div>
      </div>

      <div className="pt-[80px]">
        <Container4>
          <div className="grid md:grid-cols-5 grid-cols-1 xl:px-[0px] px-[20px]">
            <div className="md:col-span-3 col-span-1  lg:pr-[50px] pr-[20px]">
              <h2 className="lg:text-[50px] text-[35px] text-[#000000] font-poppins mb-[15px]">
                Overview
              </h2>
              <p className="font-poppins sm:text-[20px] text-[16px] mt-[25px] text-[#606e6e]">
                AIO helps event organizers to custom build unique platforms,
                serving to elevate attendees experiences during events of all
                types and sizes.
              </p>

              <p className="font-poppins sm:text-[20px] text-[16px] mt-[25px] text-[#606e6e]">
                We can help you seamlessly connect event-goers wherever they
                are, whenever. With a multitude of features, AIO is the latest
                hassle-free event registration and facilitation solution.
              </p>
            </div>
            <div className="md:col-span-2 col-span-1 lg:pt-0 sm:pt-[80px] pt-[45px]">
              <div className="mb-[35px]">
                <p className="text-[18px] font-poppins text-[#001817] mb-[10px]">
                  Client
                </p>
                <p className="text-[24px] text-[#001817] font-semibold">AIO</p>
              </div>
              <div className="flex mb-[35px]">
                <div className="">
                  <p className="text-[18px] font-poppins mb-[10px] text-[#001817]">
                    Period
                  </p>
                  <p className="text-[24px] font-poppins font-semibold text-[#001817]">
                    2018 - present
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
                    <Link to={""}>
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
                className=" text-[18px] font-poppins hover:text-[#FFFFFF] duration-1000 text-[#001817]"
                to={"/shareapp"}
              >
                Product Design
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="">




        <Container7>
          <div className="my-[50px] xl:px-[0px] md:px-[20px] px-[20px]">
            <h2 className="font-poppins text-[#000000] text-[48px] ">
              What we do
            </h2>
            <div className="mt-[80px] grid md:grid-cols-2 grid-cols-1">
              <div className="col-span-1 md:my-auto">
                <img src={alof} alt="" />
              </div>
              <div className="col-span-1  md:my-auto md:pt-[0px] pt-[20px]">
                <h2 className="font-poppins font-semibold text-[#000000] text-[32px] md:text-[48px]">
                  For event professionals
                </h2>
                <ul className="list-disc text-[#666666] font-poppins text-[20px] py-[30px] px-[20px] ">
                  <li className="leading-8">
                    Create branded email invitations
                  </li>
                  <li className="leading-8">
                    Edit and track of attendees information and invites
                  </li>
                  <li className="leading-8">
                    Engage with your attendees in real-time through live
                    polling, Q&A and push notifications
                  </li>
                  <li className="leading-8">Data collection and transfer</li>
                  <li className="leading-8">Data analytics and reporting</li>
                </ul>
              </div>
            </div>

            <div className="mt-[80px] grid md:grid-cols-2 grid-cols-1">
              <div className="col-span-1  md:my-auto md:pt-[0px] pt-[20px]">
                <h2 className="font-poppins font-semibold text-[#000000] text-[32px] md:text-[48px]">
                  For event professionals
                </h2>
                <ul className="list-disc text-[#666666] font-poppins text-[20px] py-[30px] px-[20px] ">
                  <li className="leading-8">
                    Create branded email invitations
                  </li>
                  <li className="leading-8">
                    Edit and track of attendees information and invites
                  </li>
                  <li className="leading-8">
                    Engage with your attendees in real-time through live
                    polling, Q&A and push notifications
                  </li>
                  <li className="leading-8">Data collection and transfer</li>
                  <li className="leading-8">Data analytics and reporting</li>
                </ul>
              </div>

              <div className="col-span-1 md:my-auto">
                <img src={alof2} alt="" />
              </div>
            </div>
          </div>
        </Container7>
      </div>

      

      <div className="py-[80px]">
        <div className=" lg:mx-[198px] md:mx-[80px] mx-[30px] ">
          <div className="">
            <h2 className="text-center text-[28px] md:text-[36px] lg:text-[42px] text-[#000000] font-poppins">
              <Link className="bbn" to={"/mintutor"}>
                Next Case Study
              </Link>
            </h2>
            <div className="py-[30px] md:py-[40px] lg:py-[50px] text-center">
              <div className="text-[18px] md:text-[20px] lg:text-[24px] font-poppins text-[#001817] mb-[10px] md:mb-[12px] lg:mb-[15px]">
                <Link to={"/mintutor"}>10-min Tutor — Edutech</Link>
              </div>
              <h3 className="font-semibold text-[24px] md:text-[28px] lg:text-[32px] max-w-[100%] md:max-w-[600px] lg:max-w-[500px] mx-auto text-center leading-[30px] md:leading-[36px] lg:leading-[42px] text-[#001817] font-poppins">
                <Link className="mb-[8px] md:mb-[10px] lg:mb-[12px]" to={""}>
                  On-demand tutor app with video-telephony & marketplace
                  functionalities
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

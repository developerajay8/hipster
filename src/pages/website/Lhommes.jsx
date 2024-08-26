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
  Smart13,
  dl1,
  dl2,
  frame,
  wsg,
  Smart12,
  vb1,
  vb2,
  vb3,
  vb4,
  vb5,
  vb6,
  vb7,
  vb8,
  Smart20,
  lhommes,
  ct1,
  ct2,
  Ajay,
} from "../../assets";
import { Link } from "react-router-dom";

import Container4 from "../../components/Container4";

export default function Lhommes() {
  return (
    <div>
      <div className="lg:mt-[80px] md:mt-[110px] mt-[110px]">
        <div className="max-w-[1300px] mx-auto xl:px-[0px] px-[20px] mb-[48px]">
          <h2>
            <span className="md:text-[30px] sm:text-[24px] text-[16px] font-poppins">
              <span className="md:text-[30px] sm:text-[24px] text-[16px] text-[#00b0ab] font-poppins font-semibold">
              L’Hommes 
              </span>
              — Fashion E-commerce
            </span>

            <div className="md:mt-[10px] mt-[5px]">
              <span className="xl:text-[48px] md:text-[40px] sm:text-[30px] text-[24px] text-[#000000] font-poppins font-semibold">
              Custom suits e-commerce platform with fit visualization
              </span>
            </div>
          </h2>
        </div>
        <div className="w-[100%] h-[100%] md:px-[0px] px-[14px]">
          <img className="w-[100%] h-[100%]" src={lhommes} alt="" />
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
              Hipster developed the L’HOMMES e-commerce platform, integrated 3D models and 3D body measurement tools. Apart from that, Hipster set up L’HOMMES’ backend admin panel and, integrated SEO tools and Google analytics.
              </p>
              <p className="font-poppins sm:text-[20px] text-[16px] mt-[25px] text-[#606e6e]">
              The platform allows customers to visualize the shirts and suits in 3D. The customers can customize the shirts and suits and order them straight away.
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
                L’HOMMES
                </p>
              </div>
              <div className="flex mb-[35px]">
                <div className="">
                  <p className="text-[18px] font-poppins mb-[10px] text-[#001817]">
                    Period
                  </p>
                  <p className="text-[24px] font-poppins font-semibold text-[#001817]">
                  2020
                  </p>
                </div>
                <div className="ml-[45px]">
                  <p className="text-[18px] font-poppins mb-[10px] text-[#001817]">
                    Geography
                  </p>
                  <p className="text-[24px] font-poppins font-semibold text-[#001817]">
                  Korea
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
                to={""}
              >
                Graphic Design Services
              </Link>
            </li>

            <li className="bg-[#ccefee] duration-500  hover:bg-[#00fff7] mb-[20px] mr-[10px] py-[18px] px-[32px]  rounded-full hover:text-[#FFFFFF]  text-[#001817]">
              <Link
                className="  text-[18px] font-poppins hover:text-[#FFFFFF] duration-1000 text-[#001817]"
                to={""}
              >
                UI/UX
              </Link>
            </li>

            <li className="bg-[#ccefee] duration-500  hover:bg-[#00fff7] mb-[20px] mr-[10px] py-[18px] px-[32px]  rounded-full hover:text-[#FFFFFF]  text-[#001817]">
              <Link
                className="  text-[18px] font-poppins hover:text-[#FFFFFF] duration-1000 text-[#001817]"
                to={""}
              >
                Product Design
              </Link>
            </li>

            <li className="bg-[#ccefee] duration-1000  hover:bg-[#73dedb] mb-[20px] mr-[10px] py-[18px] px-[32px] rounded-full">
              <Link
                className="text-[18px] font-poppins hover:text-[#FFFFFF] duration-1000 text-[#001817]"
                to={""}
              >
                Web Development
              </Link>
            </li>
          </ul>
        </div>
      </div>


      <div className="xl:px-[0px] px-[20px]">
        <Container4>
          <div className="md:py-[80px] sm:py-[48px] py-[28px]">
            <div className="grid md:grid-cols-5 gap-4 ">
              <div className="col-span-2 ">
                <img src={ct1} alt="" />
              </div>
              <div className="col-span-3  lg:pl-[68px] md:pl-[32px] my-auto">
                  <h2 className="text-[#001817] lg:text-[50px] font-poppins md:text-[40px] sm:text-[30px] text-[29px] mb-[15px] ">Custom tailored  <br /> clothes online</h2>
                  <p className="text-[#657676] font-poppins md:text-[20px] sm:text-[18px] text-[16px] mb-[23px]">From job interviews to weddings and black-tie events, there are plenty of special occasions when one needs a suit or shirt that fits perfectly. However, purchasing a tailored made clothing piece can be costly and time-taking. To offer a hassle-free tailoring experience at customers’ convenience, L’HOMMES took an innovative approach of providing an online tailoring service.</p>
              </div>
            </div>
          </div>
        </Container4>
      </div>

      <div className="xl:px-[0px] px-[20px]">
        <Container4>
          <div className="md:py-[80px] sm:py-[48px] py-[28px]">
            <div className="grid md:grid-cols-5 gap-4 ">
              
              <div className="col-span-3  lg:pr-[68px] md:pr-[32px] my-auto">
                  <h2 className="text-[#001817] lg:text-[50px] font-poppins md:text-[40px] sm:text-[30px] text-[29px] mb-[15px] ">Design and measure</h2>
                  <p className="text-[#657676] font-poppins md:text-[20px] sm:text-[18px] text-[16px] mb-[23px]">First, the customer selects the fabric and checks the design in real-time 3D modeling. Next, using a body measurement technology, L’HOMMES can measure the customer’s size in a minute. The customer can then edit specific measurements if required.</p>
                  <p className="text-[#657676] font-poppins md:text-[20px] sm:text-[18px] text-[16px] mb-[23px]">After details of the design and measurements are input, the following details can be presented in the 2D/3D format:</p>
                  <ul className="mb-[23px] ml-[23px] list-disc md:text-[20px] text-[16px] text-[#666666] font-poppins  pl-[33px] ">
                    <li>Shirt</li>
                    <li>Collar</li>
                    <li>Buttons</li>
                    <li>Sleeves</li>
                    <li>Pocket details</li>
                    <li>Shirt fit (Slim or Straight Cut)</li>
                    <li>Fabric material</li>
                  </ul>
              </div>
              <div className="col-span-2 my-[auto]">
                <img src={ct2} alt="" />
              </div>
            </div>
          </div>
        </Container4>
      </div>


{/* <div className="bg-[#5d6d83] py-[100px] px-[68px] w-[92%] border-class">
    <div className="grid grid-cols-3">
      <div className=""></div>
      
    </div>
</div> */}

      

      <div className="md:py-[80px] sm:py-[50px]  py-[34px]">
        <div className=" lg:mx-[198px] md:mx-[80px] mx-[30px] ">
          

<div className="">
  <h2 className="text-center text-[28px] md:text-[36px] lg:text-[42px] text-[#000000] font-poppins">
    <Link className="bbn" to={"/near"}>
      Next Case Study
    </Link>
  </h2>
  <div className="py-[30px] md:py-[40px] lg:py-[50px] text-center">
    <div className="text-[18px] md:text-[20px] lg:text-[24px] font-poppins text-[#001817] mb-[10px] md:mb-[12px] lg:mb-[15px]">
      <Link to={""}>SomethingNew - Mental Health</Link>
    </div>
    <h3 className="font-semibold text-[24px] md:text-[28px] lg:text-[32px] max-w-[100%] md:max-w-[600px] lg:max-w-[500px] mx-auto text-center leading-[30px] md:leading-[36px] lg:leading-[42px] text-[#001817] font-poppins">
      <Link className="mb-[8px] md:mb-[10px] lg:mb-[12px]" to={""}>
        Chat-based application to provide mental health support
      </Link>
    </h3>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}

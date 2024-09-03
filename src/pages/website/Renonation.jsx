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
} from "../../assets";
import { Link } from "react-router-dom";

import Container4 from "../../components/Container4";

export default function Renonation() {
  return (
    <div>
      <div className="lg:mt-[80px] md:mt-[110px] mt-[110px]">
        <div className="xl:px-0 px-[20px] max-w-[1300px] mx-auto mb-[48px]">
          <h2>
            <span className="md:text-[30px] sm:text-[24px] text-[16px] font-poppins">
              <span className="md:text-[30px] sm:text-[24px] text-[16px] text-[#00b0ab] font-poppins font-semibold">
              Website
              </span>
               — and App Development
            </span>

            <div className="md:mt-[10px] mt-[5px]">
            <span className="text-[22px] sm:text-[27px] md:text-[32px] lg:text-[34px] text-[#000000] font-poppins font-semibold">
            Leverage responsive and user-centric design with our website and app development services. Our expert team delivers seamless digital experiences that drive engagement and conversions.
              </span>
            </div>
          </h2>
        </div>
        <div className="w-[100%] h-[100%] md:px-[0px] px-[14px]">
          <img className="w-[100%] h-[100%]" src={Smart15} alt="" />
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
                A leading renovation & interior design platform for individual
                designers & companies to show their portfolio on websites and
                one-stop for homeowners to get renovation packages from
                different designers based on their reviews and ratings. We
                created the platform for generating free quotes through
                filter-based searches.
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
                  Renonation
                </p>
              </div>
              <div className="flex mb-[35px]">
                <div className="">
                  <p className="text-[18px] font-poppins mb-[10px] text-[#001817]">
                    Period
                  </p>
                  <p className="text-[24px] font-poppins font-semibold text-[#001817]">
                    2018
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
                to={"/uiuxdesign"}
              >
                UI/UX
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

      <Container4>
        <div className="w-[100%] h-[100%] md:px-[0px] px-[14px]">
          <img className="w-[100%] h-[100%]" src={rs} alt="" />
        </div>
        <div className=" xl:px-[0px] px-[15px] gap-3 pt-[16px] pb-[80px] grid md:grid-cols-2 grid-cols-1">
          <div className="col-span-1">
            <h2 className="md:pt-[48px] pt-[20px] font-semibold text-[32px] font-poppins text-[#000000]">
              Hybrid technology
            </h2>
            <p className="text-[#657676] text-[20px] mb-[22px]">
              Renonation had existing blogs on WordPress that they wanted
              Hipster to integrate with our newly created platform. This was
              managed smoothly so that the two platforms flowed together
              seamlessly.
            </p>
          </div>
          <div className="col-span-1">
            <h2 className="md:pt-[48px] pt-[20px]  font-semibold text-[32px] font-poppins text-[#000000]">
              Smooth filters
            </h2>
            <p className="text-[#657676] text-[20px] mb-[22px]">
              Simulating the power of artificial intelligence, the website
              filters make detailed searching for specifics such as budget,
              style, property type, room size and area type a pleasant
              experience.
            </p>
          </div>
        </div>
      </Container4>

      <Container4>
        <div className="w-[100%] h-[100%] md:px-[0px] px-[14px]">
          <img className="w-[100%] h-[100%]" src={rb} alt="" />
        </div>
        <div className=" xl:px-[0px] gap-3 px-[15px] pt-[16px] pb-[80px] grid md:grid-cols-2 grid-cols-1">
          <div className="col-span-1">
            <h2 className="md:pt-[48px] pt-[20px] font-semibold text-[32px] font-poppins text-[#000000]">
              User board convenience
            </h2>
            <p className="text-[#657676] text-[20px] mb-[22px]">
              The platform also offers saved search functions when you log in
              and select your dashboard. Users can save projects, designers and
              properties for later reference.
            </p>
          </div>
          <div className="col-span-1">
            <h2 className="md:pt-[48px] pt-[20px]  font-semibold text-[32px] font-poppins text-[#000000]">
              Fast and secure server
            </h2>
            <p className="text-[#657676] text-[20px] mb-[22px]">
              Servers are in the forefront when ensuring data speed and
              integrity. We chose Amazon Web Services (AWS) CloudFront and a
              private bucket to save data into the system.
            </p>
          </div>
        </div>
      </Container4>

      <div className=" w-full">
        <div className="flex justify-center">
          <video autoPlay muted loop className="w-full">
            <source
              src={
                "https://hipster-inc.com/wp-content/uploads/2020/03/Renonation-Video.m4v"
              }
              type="video/mp4"
            />
          </video>
        </div>
      </div>

     

      <Container4>
        <div className="xl:px-[0px] px-[20px]">
          <h2 className="md:pt-[48px] pt-[20px] font-semibold text-[32px] font-poppins text-[#000000]">
            Blogging platform
          </h2>
          <p className="text-[#657676] text-[20px] mb-[22px]">
            A blog management tool was provided to publish a blog in a few
            simple steps. A WordPress platform was given to manage blogging
            separately with ease.
          </p>
        </div>
      </Container4>

      <Container4>
        <div className="py-[80px] grid md:grid-cols-2 grid-cols-1 xl:px-[0px] px-[20px]">
          <div className=" col-span-1 relative b-black max-w-[357px] max-h-[513px]  pt-[50px] pl-[50px] pb-[50px] rounded-[30px] ">
            <p className="text-[20px] text-[#FFFFFF] font-poppins">
              Success Metrics
            </p>
            <h3 className="text-[42px] my-[5px] font-poppins text-[#FFFFFF]">
              Impact
            </h3>
            <div className="mt-[96px]">
              <img src={Downlogo} className="w-[62px] h-[61px]" alt="" />
              <h3 className="text-[#ffffff] font-bold  text-[42px] font-poppins">
                100+
              </h3>
              <p className="text-[#ffffff]  text-[20px] font-poppins">Users</p>
            </div>
            <div className="">
              <div className="absolute top-[161px] right-[-168px] lamap">
                <img
                  className="max-w-[304px] max-h-[313px]"
                  src={ratingbox}
                  alt=""
                />
                <h3 className="font-semibold text-[42px] absolute top-[80px] right-[140px] text-[#FFFFFF] font-poppins">
                  1
                </h3>
                <p className=" text-[20px] absolute top-[135px] right-[116px] text-[#FFFFFF] font-poppins">
                  Award
                </p>
              </div>
              <div className=" absolute lamps top-[181px] right-[25px]">
                <img className="max-w-[80px] max-h-[156px]" src={star} alt="" />
              </div>
            </div>
          </div>
          <div className="col-span-1 sm:pt-0 pt-[20px]">
            <div className="mb-[15px]">
              <img src={Renonat} alt="" />
            </div>
            <p className="text-[24px] font-poppins text-[#001817]">Zac Loo</p>
            <p className="text-[16px] font-poppins text-[#606e6e]">
              Media Director
            </p>
            <p className="sm:text-[20px] text-[16px] sm:mt-[28px] mt-[14px] font-poppins text-[#606e6e]">
              Hipster is definitely a great web / mobile app development agency
              and offering a bouquet of cutting-edge services. Admit that I am
              not an easy customer, but they always serve with their
              professionalism, and patience, and most importantly align with the
              business need. Strongly recommend.
            </p>
          </div>
        </div>
      </Container4>

      <div className="md:py-[80px] sm:py-[50px]  py-[34px]">
        <div className=" lg:mx-[198px] md:mx-[80px] mx-[30px] ">
          


            <div className="p-4 md:p-8 lg:p-12">
  <h2 className="text-center text-[28px] md:text-[36px] lg:text-[42px] text-[#000000] font-poppins">
    <Link className="bbn" to={"/tueetoredutech"}>
      Next Case Study
    </Link>
  </h2>
  <div className="py-[30px] md:py-[40px] lg:py-[50px] text-center">
    <div className="text-[18px] md:text-[20px] lg:text-[24px] font-poppins text-[#001817] mb-[10px] md:mb-[12px] lg:mb-[15px]">
      <Link to={"/tueetoredutech"}>Tueetor — Edutech</Link>
    </div>
    <h3 className="font-semibold text-[24px] md:text-[28px] lg:text-[32px] max-w-[100%] md:max-w-[600px] lg:max-w-[500px] mx-auto text-center leading-[30px] md:leading-[36px] lg:leading-[42px] text-[#001817] font-poppins">
      <Link className="mb-[8px] md:mb-[10px] lg:mb-[12px]" to={""}>
      Online platform for finding digital tutors
      </Link>
    </h3>
  </div>


          </div>
        </div>
      </div>
    </div>
  );
}

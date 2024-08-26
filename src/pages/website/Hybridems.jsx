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
} from "../../assets";
import { Link } from "react-router-dom";

import Container4 from "../../components/Container4";

export default function Hybridems() {
  return (
    <div>
      <div className="lg:mt-[80px] md:mt-[110px] mt-[110px]">
        <div className="max-w-[1300px] mx-auto mb-[48px]">
          <h2>
            <span className="md:text-[30px] sm:text-[24px] text-[16px] font-poppins">
              <span className="md:text-[30px] sm:text-[24px] text-[16px] text-[#00b0ab] font-poppins font-semibold">
                Hybrid EMS
              </span>
              — Hybrid Event management Platform
            </span>

            <div className="md:mt-[10px] mt-[5px]">
              <span className="xl:text-[48px] md:text-[40px] sm:text-[30px] text-[24px] text-[#000000] font-poppins font-semibold">
                Transforming how hybrid and virtual events are planned and
                executed.
              </span>
            </div>
          </h2>
        </div>
        <div className="w-[100%] h-[100%] md:px-[0px] px-[14px]">
          <img className="w-[100%] h-[100%]" src={Smart12} alt="" />
        </div>
      </div>

      <div className="md:py-[80px] sm:py-[50px]  py-[34px]">
        <Container4>
          <div className="grid md:grid-cols-5 grid-cols-1 xl:px-[0px]  px-[20px]">
            <div
              data-aos="slide-right"
              className="md:col-span-3 col-span-1  lg:pr-[50px] pr-[20px]"
            >
              <h2 className="lg:text-[50px] text-[35px] text-[#000000] font-poppins mb-[15px]">
                Overview
              </h2>
              <p className="font-poppins sm:text-[20px] text-[16px] mt-[25px] text-[#606e6e]">
                Using online platforms as a method of hosting events has
                skyrocketed in popularity, particularly so in our post-pandemic
                world. We realized that the current solutions present for
                companies needing a customizable, interactive, and secure
                virtual event platform was lacking- which is why we stepped in.
              </p>
              <p className="font-poppins sm:text-[20px] text-[16px] mt-[25px] text-[#606e6e]">
                We provides end-to-end event management solutions built for and
                used by many event companies.
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
                  Hybrid Event management platform
                </p>
              </div>
              <div className="flex mb-[35px]">
                <div className="">
                  <p className="text-[18px] font-poppins mb-[10px] text-[#001817]">
                    Period
                  </p>
                  <p className="text-[24px] font-poppins font-semibold text-[#001817]">
                    2017 - present
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
                to={"/shareapp"}
              >
                 Enterprise Software Development
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

      <div className="bg-[#F3FFFF] pt-[80px] sm:pb-[50px] xl:px-[0px] px-[20px] pb-[16px]">
      <h2 className="max-w-[1050px] mx-auto font-bold mb-[48px] text-center text-[#001817] text-[24px] sm:text-[36px] md:text-[48px] font-poppins">
  How the platform solved the industry’s top 8 challenges
</h2>

        {/* <Container4> */}
        <div className="max-w-[1050px] mx-auto grid sm:grid-cols-2 gap-3">
          <div className="col-span-1 mb-[60px]">
            <img src={vb1} alt="" />
            <h3 className="text-[#000000] sm:text-[30px] text-[22px] font-poppins mt-[8px] mb-[30px]">
              Tight timelines and turnaround time
            </h3>
            <p className="text-[#596868] font-poppins sm:text-[22px] text-[16px] ">
              Customizing many aspects of the platform with just the click of a
              button.
            </p>
          </div>

          <div className="col-span-1 mb-[60px]">
            <img src={vb2} alt="" />
            <h3 className="text-[#000000] sm:text-[30px] text-[22px] font-poppins mt-[8px] mb-[30px]">
            Lack of technical support
            </h3>
            <p className="text-[#596868] font-poppins sm:text-[22px] text-[16px] ">
            From setup to live event support, our help team is always just one message, email or phone call away.
            </p>
          </div>

          <div className="col-span-1 mb-[60px]">
            <img src={vb3} alt="" />
            <h3 className="text-[#000000] sm:text-[30px] text-[22px] font-poppins mt-[8px] mb-[30px]">
            Flexibility in design customization
            </h3>
            <p className="text-[#596868] font-poppins sm:text-[22px] text-[16px] ">
            We offer 5 standard layouts with options available for further customization so that your event microsite looks totally unique.
            </p>
          </div>

          <div className="col-span-1 mb-[60px]">
            <img src={vb4} alt="" />
            <h3 className="text-[#000000] sm:text-[30px] text-[22px] font-poppins mt-[8px] mb-[30px]">
            Unique and custom events
            </h3>
            <p className="text-[#596868] font-poppins sm:text-[22px] text-[16px] ">
            Every event is different. That is why we provide partners with the ability to fully customize their event, from features to special requests.
            </p>
          </div>

          <div className="col-span-1 mb-[60px]">
            <img src={vb5} alt="" />
            <h3 className="text-[#000000] sm:text-[30px] text-[22px] font-poppins mt-[8px] mb-[30px]">
            White-labeling and full branding
            </h3>
            <p className="text-[#596868] font-poppins pb-[10px] sm:text-[22px] text-[16px] ">
            It is fully white-labeled and our branding is hidden even on the back-end and microsites.
            </p>
            <p className="text-[#596868] font-poppins sm:text-[22px] text-[16px] ">
            For more customization, clients are always welcomed to reach out and specify their requirements.</p>
          </div>

          <div className="col-span-1 mb-[60px]">
            <img src={vb6} alt="" />
            <h3 className="text-[#000000] sm:text-[30px] text-[22px] font-poppins mt-[8px] mb-[30px]">
            Security and data storage
            </h3>
            <p className="text-[#596868] font-poppins pb-[10px] sm:text-[22px] text-[16px] ">
            You can rest assured about data protection as we are a homegrown platform with data centers situated in Singapore.
            </p>
            <p className="text-[#596868] font-poppins sm:text-[22px] text-[16px] ">
            Furthermore, we provide complimentary pen test reports for every microsite we create along with a self CSA CAIQ v3.0.2 compliant report.</p>
          </div>

          <div className="col-span-1 mb-[60px]">
            <img src={vb7} alt="" />
            <h3 className="text-[#000000] sm:text-[30px] text-[22px] font-poppins mt-[8px] mb-[30px]">
            Using different platforms for events
            </h3>
            <p className="text-[#596868] font-poppins sm:text-[22px] text-[16px] ">
            Our platform manages all technicalities starting from pre-event to post-event. With the option of streaming from different platforms, we have condensed and simplified such complexities.
            </p>
          </div>

          <div className="col-span-1 mb-[60px]">
            <img src={vb8} alt="" />
            <h3 className="text-[#000000] sm:text-[30px] text-[22px] font-poppins mt-[8px] mb-[30px]">
            Last-minute changes
            </h3>
            <p className="text-[#596868] pb-[10px] font-poppins sm:text-[22px] text-[16px] ">
            We know how it feels to deal with a change request at the very last moment.
            </p>
            <p className="text-[#596868] font-poppins sm:text-[22px] text-[16px] ">
            Luckily, you don’t have to do it alone as experts platform managers are already ready to pitch in.
            </p>
          </div>
        </div>
        {/* </Container4> */}
      </div>

      

      <div className="md:py-[80px] sm:py-[50px]  py-[34px]">
        <div className=" lg:mx-[198px] md:mx-[80px] mx-[30px] ">
         

<div className="">
  <h2 className="text-center text-[28px] md:text-[36px] lg:text-[42px] text-[#000000] font-poppins">
    <Link className="bbn" to={"/wsg"}>
      Next Case Study
    </Link>
  </h2>
  <div className="py-[30px] md:py-[40px] lg:py-[50px] text-center">
    <div className="text-[18px] md:text-[20px] lg:text-[24px] font-poppins text-[#001817] mb-[10px] md:mb-[12px] lg:mb-[15px]">
      <Link to={"/wsg"}>WSG - Workforce Singapore  —  Career Guidance</Link>
    </div>
    <h3 className="font-semibold text-[24px] md:text-[28px] lg:text-[32px] max-w-[100%] md:max-w-[600px] lg:max-w-[500px] mx-auto text-center leading-[30px] md:leading-[36px] lg:leading-[42px] text-[#001817] font-poppins">
      <Link className="mb-[8px] md:mb-[10px] lg:mb-[12px]" to={""}>
      Pilot of Mobile Kiosks.
      </Link>
    </h3>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}

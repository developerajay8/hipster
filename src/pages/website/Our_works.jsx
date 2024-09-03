import React from "react";
import { ImWindows } from "react-icons/im";
import { FaListOl } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
// import { RiListCheck } from "react-icons/ri";
import {
  Ajay,
  Smart1,
  Smart10,
  Smart11,
  Smart12,
  Smart13,
  Smart14,
  Smart15,
  Smart16,
  Smart17,
  Smart18,
  Smart19,
  Smart2,
  Smart20,
  Smart21,
  Smart3,
  Smart4,
  Smart5,
  Smart6,
  Smart7,
  Smart8,
  Smart9,
  bomb,
  first,
  fourth,
  pencil3,
  third,
  two,
  warning,
} from "../../assets";
import { Link } from "react-router-dom";
import { TiArrowRight } from "react-icons/ti";
import Container2 from "../../components/Container2";
import Container3 from "../../components/Container3";
import Nearslider from "../../sliders/Nearslider";
import Shareapp from "../../sliders/Shareapp";

export default function Our_Works() {
  return (
    <>
      <div className="py-[80px] mt-[50px] lg:px-5 md:px-5 px-3">
        <Container3>
          <div className="grid lg:grid-cols-3 sm:grid-cols-12">
            <div className="col-span-1  lg:block hidden">
              <h3 className="text-[28px] font-poppins text-[#000000] font-semibold">
                Filter
              </h3>

              <ul>
                <h4 className="mt-[24px] mb-[16px] text-[16px] text-[#000000] font-poppins">
                  Industries/Solutions
                </h4>
                <div className="max-w-[155px] mr-[10px] mb-[15px]">
                  <li className="bg-emerald-50 px-[14px] py-[10px] bor text-[16px] rounded-full  font-poppins text-[#001817]">
                    <Link>Health Tech (2)</Link>
                  </li>
                </div>
                <div className="max-w-[226px] mr-[10px] mb-[15px]">
                  <li className="bg-emerald-50 px-[14px] py-[10px] bor text-[16px] rounded-full  font-poppins text-[#001817]">
                    <Link>Personalized Fashion (2)</Link>
                  </li>
                </div>
                <div className="max-w-[224px] mr-[10px] mb-[15px]">
                  <li className="bg-emerald-50 px-[14px] py-[10px] bor text-[16px] rounded-full  font-poppins text-[#001817]">
                    <Link>Gamification in Tech (3)</Link>
                  </li>
                </div>
                <div className="max-w-[286px] mr-[10px] mb-[15px]">
                  <li className="bg-emerald-50 px-[14px] py-[10px] bor text-[16px] rounded-full  font-poppins text-[#001817]">
                    <Link>On-Demand Video Solutions (3)</Link>
                  </li>
                </div>
                <div className="max-w-[88px] mr-[10px] mb-[15px]">
                  <li className="bg-emerald-50 px-[14px] py-[10px] bor text-[16px] rounded-full  font-poppins text-[#001817]">
                    <Link>F&B (3)</Link>
                  </li>
                </div>
                <div className="max-w-[245px] mr-[10px] mb-[15px]">
                  <li className="bg-emerald-50 px-[14px] py-[10px] bor text-[16px] rounded-full  font-poppins text-[#001817]">
                    <Link>Match Making Platform (6)</Link>
                  </li>
                </div>
                <div className="max-w-[182px] mr-[10px] mb-[15px]">
                  <li className="bg-emerald-50 px-[14px] py-[10px] bor text-[16px] rounded-full  font-poppins text-[#001817]">
                    <Link>Education Tech (2)</Link>
                  </li>
                </div>
                <div className="max-w-[215px] mr-[10px] mb-[15px]">
                  <li className="bg-emerald-50 px-[14px] py-[10px] bor text-[16px] rounded-full  font-poppins text-[#001817]">
                    <Link>Event Management (5)</Link>
                  </li>
                </div>
                <div className="max-w-[165px] mr-[10px] mb-[15px]">
                  <li className="bg-emerald-50 px-[14px] py-[10px] bor text-[16px] rounded-full  font-poppins text-[#001817]">
                    <Link>Sustainability (2)</Link>
                  </li>
                </div>
                <div className="max-w-[170px] mr-[10px] mb-[15px]">
                  <li className="bg-emerald-50 px-[14px] py-[10px] bor text-[16px] rounded-full  font-poppins text-[#001817]">
                    <Link>Mental Health (4)</Link>
                  </li>
                </div>
                <div className="max-w-[193px] mr-[10px] mb-[15px]">
                  <li className="bg-emerald-50 px-[14px] py-[10px] bor text-[16px] rounded-full  font-poppins text-[#001817]">
                    <Link>Consumer Forum (1)</Link>
                  </li>
                </div>
              </ul>
            </div>
            <div className="lg:col-span-2 sm:col-span-12 col-span-6 flex-wrap ">
              <div className="">
                <div className="flex justify-between pb-[20px] items-center">
                  <h1 className="md:text-[52px] text-[42px] font-poppins text-[#000000]">
                    Our Work
                  </h1>
                  <div className="flex items-center gap-8">
                    <ImWindows className="w-[18px] h-[19px]" />
                    <FaList />
                    <FaListOl className="border  " />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:pb-[45px] mb-[13px]">
                
                  <div className="sm:col-span-1 col-span-2 xl:my-0 my-auto sm:mx-0 mx-auto max-w-[480px] max-h-[336px]">
                  <Link to={"/near"}>
                    <img src={third} className="" alt="" />
                    </Link>
                  </div>
                
                
                  <div className="sm:col-span-1 col-span-2 py-[25px] sm:pl-[45px]">
                  <Link to={"/near"}>
                    <h4 className="font-poppins text-[#001817] text-[16px] mt-[24px] mb-[12px]">
                      NEAR — Lifestyle
                    </h4>
                    <h3 className="font-poppins text-[#001817] lg:text-[23px] text-[19px] font-semibold">
                      Augmented Reality (AR) enabled mobile app for an
                      interactive walking experience
                    </h3>
                    <ul className="font-poppins text-[14px] text-#000000] mt-[20px]">
                      <a>
                        Gamification in Tech
                        <span>, </span>
                      </a>
                      <a>
                        Event Management
                        <span>, </span>
                      </a>
                      <a>
                        Mobile Apps
                        <span>, </span>
                      </a>
                      <a>
                        Admin Panel / Dashboard
                        <span>, </span>
                      </a>
                      <a>
                        UI/UX Design
                        <span>, </span>
                      </a>
                    </ul>
                    </Link>
                  </div>
                
              </div>
              <div className="">
                <Link to={"/shareapp"}>
                  <div className="grid grid-cols-2 pb-[45px] mb-[13px]">
                    <div className="sm:col-span-1 col-span-2 py-[25px] pr-[45px]">
                      <h4 className="font-poppins text-[#001817] text-[16px] mt-[24px] mb-[12px]">
                        Share App — Mental Health
                      </h4>
                      <h3 className="font-poppins text-[#001817] lg:text-[23px] text-[19px] font-semibold">
                        On-demand therapy app that allows one to find a
                        therapist instantly.
                      </h3>
                      <ul className="font-poppins text-[14px] text-#000000] mt-[20px]">
                        <a>
                          Health Tech
                          <span>, </span>
                        </a>
                        <a>
                          Mental Health
                          <span>, </span>
                        </a>
                        <a>
                          Match Making Platform
                          <span>, </span>
                        </a>
                        <a>
                          On-Demand Video Solutions
                          <span>, </span>
                        </a>
                        <a>
                          Mobile Apps
                          <span>, </span>
                        </a>

                        <a>
                          Web App
                          <span>, </span>
                        </a>

                        <a>
                          Admin Panel / Dashboard==
                          <span>, </span>
                        </a>

                        <a>
                          UI/UX Design
                          <span>, </span>
                        </a>
                      </ul>
                    </div>
                    <div className="sm:col-span-1 col-span-2 xl:my-0 my-auto sm:mx-0 mx-auto max-w-[480px] max-h-[336px]">
                      <img src={Smart21} className="FI" alt="" />
                      {/* <Nearslider/> */}
                    </div>
                  </div>
                </Link>
              </div>
              <div className="">
                <Link to={"/commonsuits"}>
                  <div className="grid grid-cols-2 sm:pb-[45px] mb-[13px]">
                    <div className="sm:col-span-1 col-span-2 xl:my-0 my-auto sm:mx-0 mx-auto max-w-[480px] max-h-[336px]">
                      <img src={Smart1} className="FI" alt="" />
                      {/* <Shareapp/> */}
                    </div>
                    <div className="sm:col-span-1 col-span-2 py-[25px] sm:pl-[45px]">
                      <h4 className="font-poppins text-[#001817] text-[16px] mt-[24px] mb-[12px]">
                        Common Suits — Fashion E-commerce
                      </h4>
                      <h3 className="font-poppins text-[#001817] lg:text-[23px] text-[19px] font-semibold">
                        Visualisation technology to improve the online and
                        offline retail experience
                      </h3>
                      <ul className="font-poppins text-[14px] text-#000000] mt-[20px]">
                        <a>
                          Personalized Fashion, Web App, Admin Panel /
                          Dashboard, UI/UX Design
                        </a>
                      </ul>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="">
                <Link to={"/abroadly"}>
                  <div className="grid grid-cols-2 pb-[45px] mb-[13px]">
                    <div className="sm:col-span-1 col-span-2 py-[25px] sm:pr-[45px] ">
                      <h4 className="font-poppins text-[#001817] text-[16px] mt-[24px] mb-[12px]">
                      Branding
                      </h4>
                      <h3 className="font-poppins text-[#001817] lg:text-[23px] text-[19px] font-semibold">
                      Build a distinctive brand identity that resonates with your audience. Our branding services encompass market research, brand strategy, and visual identity design, ensuring that your brand stands out in the competitive landscape.
                      </h3>
                      <ul className="font-poppins text-[14px] text-#000000] mt-[20px]">
                        <a>
                          Match Making Platform, Mobile Apps, Web App, Admin
                          Panel / Dashboard, UI/UX Design
                        </a>
                      </ul>
                    </div>
                    <div className="sm:col-span-1 col-span-2 xl:my-0 my-auto sm:mx-0 mx-auto max-w-[480px] max-h-[336px]">
                      <img src={Smart2} className="FI" alt="" />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="">
                <Link to={"/case"}>
                  <div className="grid grid-cols-2 sm:pb-[45px] mb-[13px]">
                    <div className="sm:col-span-1 col-span-2 xl:my-0 my-auto sm:mx-0 mx-auto max-w-[480px] max-h-[336px]">
                      <img src={Smart3} className="FI" alt="" />
                    </div>
                    <div className="sm:col-span-1 col-span-2 py-[25px] sm:pl-[45px]">
                      <h4 className="font-poppins text-[#001817] text-[16px] mt-[24px] mb-[12px]">
                        {" "}
                        Social Media Management
                      </h4>
                      <h3 className="font-poppins text-[#001817] lg:text-[23px] text-[19px] font-semibold">
                      Cultivate a vibrant social media presence with our expert management services. From content creation to community engagement, we help you leverage social platforms to enhance brand visibility and connect with your audience.
                      </h3>
                      <ul className="font-poppins text-[14px] text-#000000] mt-[20px]">
                        <a>
                          Consumer Forum, Web App, Admin Panel / Dashboard,
                          UI/UX Design
                        </a>
                      </ul>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="">
                <Link to={"/physicleteam"}>
                  <div className="grid grid-cols-2 sm:pb-[45px] mb-[13px]">
                    <div className="sm:col-span-1 col-span-2 py-[25px] sm:pr-[45px]">
                      <h4 className="font-poppins text-[#001817] text-[16px] mt-[24px] mb-[12px]">
                        Tbit — Team Engagement
                      </h4>
                      <h3 className="font-poppins text-[#001817] lg:text-[23px] text-[19px] font-semibold">
                        A physical team-building app: say no to boring
                        activities!
                      </h3>
                      <ul className="font-poppins text-[14px] text-#000000] mt-[20px]">
                        <a>Gamification in Tech, Event Management</a>
                      </ul>
                    </div>
                    <div className="sm:col-span-1 col-span-2 xl:my-0 my-auto sm:mx-0 mx-auto max-w-[480px] max-h-[336px]">
                      <Link to={"/physicleteam"}>
                        <img src={Smart4} className="FI" alt="" />
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="">
                <Link to={"/z4ip"}>
                  <div className="grid grid-cols-2 sm:pb-[45px] mb-[13px]">
                    <div className="sm:col-span-1 col-span-2 xl:my-0 my-auto sm:mx-0 mx-auto max-w-[480px] max-h-[336px]">
                      <img src={Smart5} className="FI" alt="" />
                    </div>
                    <div className="sm:col-span-1 col-span-2 py-[25px] sm:pl-[45px]">
                      <h4 className="font-poppins text-[#001817] text-[16px] mt-[24px] mb-[12px]">
                        z4ip — Cognitive Learning & Activity Tracker
                      </h4>
                      <h3 className="font-poppins text-[#001817] lg:text-[23px] text-[19px] font-semibold">
                        An app to check user's cognitive performance along with
                        daily activity tracking.
                      </h3>
                      <ul className="font-poppins text-[14px] text-#000000] mt-[20px]">
                        <a>
                          Gamification in Tech, Mental Health, Mobile Apps,
                          UI/UX Design
                        </a>
                      </ul>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="">
                <Link to={"/vesqr"}>
                  <div className="grid grid-cols-2 pb-[45px] mb-[13px]">
                    <div className="sm:col-span-1 col-span-2 py-[25px] sm:pr-[45px]">
                      <h4 className="font-poppins text-[#001817] text-[16px] mt-[24px] mb-[12px]">
                        VES — QR Code Smart Kiosk Check-In & Instant Badge
                        Printing With VESolution
                      </h4>
                      <h3 className="font-poppins text-[#001817] lg:text-[23px] text-[19px] font-semibold">
                        Discovering Seamless Event Registration and Management.
                      </h3>
                      <ul className="font-poppins text-[14px] text-#000000] mt-[20px]">
                        <a>Event Management</a>
                      </ul>
                    </div>
                    <div className="sm:col-span-1 col-span-2 xl:my-0 my-auto sm:mx-0 mx-auto max-w-[480px] max-h-[336px]">
                      <img src={Smart6} className="FI" alt="" />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="">
                <Link to={"/bettrcoffee"}>
                  <div className="grid grid-cols-2 sm:pb-[45px] mb-[13px]">
                    <div className="sm:col-span-1 col-span-2 xl:my-0 my-auto sm:mx-0 mx-auto max-w-[480px] max-h-[336px]">
                      <img src={Smart7} className="FI" alt="" />
                    </div>
                    <div className="sm:col-span-1 col-span-2 py-[25px] sm:pl-[45px]">
                      <h4 className="font-poppins text-[#001817] text-[16px] mt-[24px] mb-[12px]">
                        Bettr Coffee — Food and Beverage (F&B)
                      </h4>
                      <h3 className="font-poppins text-[#001817] lg:text-[23px] text-[19px] font-semibold">
                        A socially conscious and environmentally friendly coffee
                        subscription service.
                      </h3>
                      <ul className="font-poppins text-[14px] text-#000000] mt-[20px]">
                        <a>
                          F&B, Web App, Admin Panel / Dashboard, UI/UX Design
                        </a>
                      </ul>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="">
                <Link to={"/teorra"}>
                  <div className="grid grid-cols-2 pb-[45px] mb-[13px]">
                    <div className="sm:col-span-1 col-span-2 py-[25px] sm:pr-[45px]">
                      <h4 className="font-poppins text-[#001817] text-[16px] mt-[24px] mb-[12px]">
                        Teorra — Sustainability Technology
                      </h4>
                      <h3 className="font-poppins text-[#001817] lg:text-[23px] text-[19px] font-semibold">
                        A smart B2B marketplace for sustainable products,
                        connecting businesses with verified suppliers and
                        simplifying orders.
                      </h3>
                      <ul className="font-poppins text-[14px] text-#000000] mt-[20px]">
                        <a>
                          Match Making Platform, Sustainability, Web App, Admin
                          Panel / Dashboard
                        </a>
                      </ul>
                    </div>
                    <div className="sm:col-span-1 col-span-2 xl:my-0 my-auto sm:mx-0 mx-auto max-w-[480px] max-h-[336px]">
                      <img src={Smart8} className="FI" alt="" />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="">
                <Link to={"/acecard"}>
                  <div className="grid grid-cols-2 pb-[45px] mb-[13px]">
                    <div className="sm:col-span-1 col-span-2 xl:my-0 my-auto sm:mx-0 mx-auto max-w-[480px] max-h-[336px]">
                      <img src={Smart9} className="FI" alt="" />
                    </div>
                    <div className="sm:col-span-1 col-span-2 py-[25px] sm:pl-[45px]">
                      <h4 className="font-poppins text-[#001817] text-[16px] mt-[24px] mb-[12px]">
                        ACE Card — Food and Bevarages
                      </h4>
                      <h3 className="font-poppins text-[#001817] lg:text-[23px] text-[19px] font-semibold">
                        Easily book your favourite restaurants while earning
                        points, and enjoying exclusive rewards.
                      </h3>
                      <ul className="font-poppins text-[14px] text-#000000] mt-[20px]">
                        <a>
                          F&B, Mobile Apps, Admin Panel / Dashboard, UI/UX
                          Design
                        </a>
                      </ul>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="">
                <Link to={"/alotool"}>
                  <div className="grid grid-cols-2 pb-[45px] mb-[13px]">
                    <div className="sm:col-span-1 col-span-2 py-[25px] sm:pr-[45px]">
                      <Link to={"/alotool"}>
                        <h4 className="font-poppins text-[#001817] text-[16px] mt-[24px] mb-[12px]">
                        Performance Marketing
                        </h4>
                        <h3 className="font-poppins text-[#001817] lg:text-[23px] text-[19px] font-semibold">
                        Amplify your online reach and drive conversions through targeted performance marketing strategies. Our team leverages data-driven insights to craft campaigns that maximize ROI and deliver measurable results
                        </h3>
                        <ul className="font-poppins text-[14px] text-#000000] mt-[20px]">
                          <a>
                            Event Management, Web App, Admin Panel / Dashboard
                          </a>
                        </ul>
                      </Link>
                    </div>
                    <div className="sm:col-span-1 col-span-2 xl:my-0 my-auto sm:mx-0 mx-auto max-w-[480px] max-h-[336px]">
                      <img src={Smart10} className="FI" alt="" />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="">
                <Link to={"/mintutor"}>
                  <div className="grid grid-cols-2 pb-[45px] mb-[13px]">
                    <div className="sm:col-span-1 col-span-2 xl:my-0 my-auto sm:mx-0 mx-auto max-w-[480px] max-h-[336px]">
                      <img src={Smart11} className="FI" alt="" />
                    </div>
                    <div className="sm:col-span-1 col-span-2 py-[25px] sm:pl-[45px]">
                      <h4 className="font-poppins text-[#001817] text-[16px] mt-[24px] mb-[12px]">
                      Designing and Editing
                      </h4>
                      <h3 className="font-poppins text-[#001817] lg:text-[23px] text-[19px] font-semibold">
                      Elevate your visual presence with captivating design and precision editing. Our talented team brings your creative vision to life through impactful imagery, graphics, and visual storytelling.
                      </h3>
                      <ul className="font-poppins text-[14px] text-#000000] mt-[20px]">
                        <a>On-Demand Video Solutions, Education Tech</a>
                      </ul>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="">
                <Link to={"/hybridems"}>
                  <div className="grid grid-cols-2 pb-[45px] mb-[13px]">
                    <div className="sm:col-span-1 col-span-2 py-[25px] sm:pr-[45px]">
                      <h4 className="font-poppins text-[#001817] text-[16px] mt-[24px] mb-[12px]">
                      Media Production
                      </h4>
                      <h3 className="font-poppins text-[#001817] lg:text-[23px] text-[19px] font-semibold">
                      From concept to execution, our media production services encompass video, audio, and multimedia content creation, ensuring compelling storytelling that captivates your audience.
                      </h3>
                      <ul className="font-poppins text-[14px] text-#000000] mt-[20px]">
                        <a>Event Management</a>
                      </ul>
                    </div>
                    <div className="sm:col-span-1 col-span-2 xl:my-0 my-auto sm:mx-0 mx-auto max-w-[480px] max-h-[336px]">
                      <img src={Smart12} className="FI" alt="" />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="">
                <Link to={"/wsg"}>
                  <div className="grid grid-cols-2 pb-[45px] mb-[13px]">
                    <div className="sm:col-span-1 col-span-2 xl:my-0 my-auto sm:mx-0 mx-auto max-w-[480px] max-h-[336px]">
                      <img src={Smart13} className="FI" alt="" />
                    </div>
                    <div className="sm:col-span-1 col-span-2 py-[25px] sm:pl-[45px]">
                      <h4 className="font-poppins text-[#001817] text-[16px] mt-[24px] mb-[12px]">
                      Creative — Production

                      </h4>
                      <h3 className="font-poppins text-[#001817] lg:text-[23px] text-[19px] font-semibold">
                      Immerse your audience in captivating narratives with our creative production services, spanning from ideation to execution, delivering innovative and engaging content.
                      </h3>
                      <ul className="font-poppins text-[14px] text-#000000] mt-[20px]">
                        <a>
                          On-Demand Video Solutions, Mobile Apps, Web App, Admin
                          Panel / Dashboard, UI/UX Design
                        </a>
                      </ul>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="">
                <Link to={"/somethingnew"}>
                  <div className="grid grid-cols-2 pb-[45px] mb-[13px]">
                    <div className="sm:col-span-1 col-span-2 py-[25px] sm:pr-[45px]">
                      <h4 className="font-poppins text-[#001817] text-[16px] mt-[24px] mb-[12px]">
                      CGI & — 2D, 3D
                      </h4>
                      <h3 className="font-poppins text-[#001817] lg:text-[23px] text-[19px] font-semibold">
                      Achieve immersive visual experiences with our cutting-edge CGI and 2D/3D animation services. We bring imagination to life, creating stunning visual content that captivates and enthralls.
                      </h3>
                      <ul className="font-poppins text-[14px] text-#000000] mt-[20px]">
                        <a>
                          Match Making Platform, Mental Health, Mobile Apps,
                          Admin Panel / Dashboard, UI/UX Design
                        </a>
                      </ul>
                    </div>
                    <div className="sm:col-span-1 col-span-2 xl:my-0 my-auto sm:mx-0 mx-auto max-w-[480px] max-h-[336px]">
                      <img src={Smart14} className="FI" alt="" />
                    </div>
                  </div>
                </Link>
              </div>

              <div className="">
                <Link to={"/renonation"}>
                  <div className="grid grid-cols-2 pb-[45px] mb-[13px]">
                    <div className="sm:col-span-1 col-span-2 xl:my-0 my-auto sm:mx-0 mx-auto max-w-[480px] max-h-[336px]">
                      <img src={Smart15} className="FI" alt="" />
                    </div>
                    <div className="sm:col-span-1 col-span-2 py-[25px] sm:pl-[45px]">
                      <h4 className="font-poppins text-[#001817] text-[16px] mt-[24px] mb-[12px]">
                      Website — and App Development
                      </h4>
                      <h3 className="font-poppins text-[#001817] lg:text-[23px] text-[19px] font-semibold">
                      Leverage responsive and user-centric design with our website and app development services. Our expert team delivers seamless digital experiences that drive engagement and conversions.
                      </h3>
                      <ul className="font-poppins text-[14px] text-#000000] mt-[20px]">
                        <a>Match Making Platform, Web App</a>
                      </ul>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="">
                <Link to={"/tueetoredutech"}>
                  <div className="grid grid-cols-2 pb-[45px] mb-[13px]">
                    <div className="sm:col-span-1 col-span-2 py-[25px] sm:pr-[45px]">
                      <h4 className="font-poppins text-[#001817] text-[16px] mt-[24px] mb-[12px]">
                      Web — Application
                      </h4>
                      <h3 className="font-poppins text-[#001817] lg:text-[23px] text-[19px] font-semibold">
                      Streamline your business operations with custom web applications tailored to your specific needs. Our solutions enhance efficiency, productivity, and user experience.
                      </h3>
                      <ul className="font-poppins text-[14px] text-#000000] mt-[20px]">
                        <a>Match Making Platform, Education Tech</a>
                      </ul>
                    </div>
                    <div className="sm:col-span-1 col-span-2 xl:my-0 my-auto sm:mx-0 mx-auto max-w-[480px] max-h-[336px]">
                      <img src={Smart16} className="FI" alt="" />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="">
                <Link to={"/kwsh"}>
                  <div className="grid grid-cols-2 pb-[45px] mb-[13px]">
                    <div className="sm:col-span-1 col-span-2 xl:my-0 my-auto sm:mx-0 mx-auto max-w-[480px] max-h-[336px]">
                      <img src={Smart17} className="FI" alt="" />
                    </div>
                    <div className="sm:col-span-1 col-span-2 py-[25px] sm:pl-[45px]">
                      <h4 className="font-poppins text-[#001817] text-[16px] mt-[24px] mb-[12px]">
                        KWSH — Agile Project Management
                      </h4>
                      <h3 className="font-poppins text-[#001817] lg:text-[23px] text-[19px] font-semibold">
                        Change the way you do survey, get rid of the old ways of
                        doing hardcopies survey and digitalise this process.
                      </h3>
                      <ul className="font-poppins text-[14px] text-#000000] mt-[20px]">
                        <a>Health Tech</a>
                      </ul>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="">
                <Link to={"/barebottom"}>
                  <div className="grid grid-cols-2 pb-[45px] mb-[13px]">
                    <div className="sm:col-span-1 col-span-2 py-[25px] sm:pr-[45px]">
                      <h4 className="font-poppins text-[#001817] text-[16px] mt-[24px] mb-[12px]">
                        barePack — Sustainability Solution
                      </h4>
                      <h3 className="font-poppins text-[#001817] lg:text-[23px] text-[19px] font-semibold">
                        Reducing plastic waste and promoting reusable packaging
                        through tech
                      </h3>
                      <ul className="font-poppins text-[14px] text-#000000] mt-[20px]">
                        <a>F&B, Sustainability</a>
                      </ul>
                    </div>
                    <div className="sm:col-span-1 col-span-2 xl:my-0 my-auto sm:mx-0 mx-auto max-w-[480px] max-h-[336px]">
                      <img src={Smart18} className="FI" alt="" />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="">
                <Link to={"/accesetsingapore"}>
                  <div className="grid grid-cols-2 pb-[45px] mb-[13px]">
                    <div className="sm:col-span-1 col-span-2 xl:my-0 my-auto sm:mx-0 mx-auto max-w-[480px] max-h-[336px]">
                      <img src={Smart19} className="FI" alt="" />
                    </div>
                    <div className="sm:col-span-1 col-span-2 py-[25px] sm:pl-[45px]">
                      <h4 className="font-poppins text-[#001817] text-[16px] mt-[24px] mb-[12px]">
                        Acceset Singapore — Mental Health Care
                      </h4>
                      <h3 className="font-poppins text-[#001817] lg:text-[23px] text-[19px] font-semibold">
                        Transforming mental health care through anonymous online
                        text-based therapy.
                      </h3>
                      <ul className="font-poppins text-[14px] text-#000000] mt-[20px]">
                        <a>Mental Health</a>
                      </ul>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="">
                <Link to={"/lhommes"}>
                  <div className="grid grid-cols-2 pb-[45px] mb-[13px]">
                    <div
                      className="sm:col-span-1 col-span-2 py-[25px] sm:
                    pr-[45px]"
                    >
                      <h4 className="font-poppins text-[#001817] text-[16px] mt-[24px] mb-[12px]">
                      ERP — (Enterprise Resource Planning)
                      </h4>
                      <h3 className="font-poppins text-[#001817] lg:text-[23px] text-[19px] font-semibold">
                      Optimize your business processes and data management with our ERP solutions, helping you integrate and manage core business functions seamlessly.
                      </h3>
                      <ul className="font-poppins text-[14px] text-#000000] mt-[20px]">
                        <a>Personalized Fashion</a>
                      </ul>
                    </div>
                    <div className="sm:col-span-1 col-span-2 xl:my-0 my-auto sm:mx-0 mx-auto max-w-[480px] max-h-[336px]">
                      <img src={Smart20} className="FI" alt="" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Container3>
      </div>
    </>
  );
}

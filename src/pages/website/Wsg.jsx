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
} from "../../assets";
import { Link } from "react-router-dom";

import Container4 from "../../components/Container4";

export default function Wsg() {
  return (
    <div>
      <div className="lg:mt-[80px] md:mt-[110px] mt-[110px]">
        <div className="xl:px-0 px-[20px] max-w-[1300px] mx-auto mb-[48px]">
          <h2>
            <span className="md:text-[30px] sm:text-[24px] text-[16px] font-poppins">
              <span className="md:text-[30px] sm:text-[24px] text-[16px] text-[#00b0ab] font-poppins font-semibold">
              Creative  
              </span>
              — Production
            </span>

            <div className="md:mt-[10px] mt-[5px]">
            <span className="text-[22px] sm:text-[27px] md:text-[32px] lg:text-[34px] text-[#000000] font-poppins font-semibold">
            Immerse your audience in captivating narratives with our creative production services, spanning from ideation to execution, delivering innovative and engaging content.
              </span>
            </div>
          </h2>
        </div>
        <div className="w-[100%] h-[100%] md:px-[0px] px-[14px]">
          <img className="w-[100%] h-[100%]" src={Smart13} alt="" />
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
                Since the start of the Covid-19 outbreak, the Singapore
                Government has stepped up its support for jobseekers. Under a
                pilot initiative, Hipster provided the software for mobile
                kiosks that jobseekers use to initiate video call meetings with
                a Career Ambassador.
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
                  Workforce Singapore
                </p>
              </div>
              <div className="flex mb-[35px]">
                <div className="">
                  <p className="text-[18px] font-poppins mb-[10px] text-[#001817]">
                    Period
                  </p>
                  <p className="text-[24px] font-poppins font-semibold text-[#001817]">
                    2021
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
                to={"/uiuxdesign"}
              >
                Graphic Design Services
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
              <img src={dl1} className="rounded-[20px] " alt="" />
            </div>
            <div className="col-span-1  my-[auto] lg:pl-[68px] md:pl-[38px] pl-[4px]">
              <h2 className="lg:text-[50px] md:text-[40px] sm:text-[30px] text-[26px] text-[#001817] font-poppins mb-[15px]">
              Deliverables
              </h2>
              
              <ul className="list-disc font-poppins sm:text-[20px] text-[16px] text-[#666666] sm:ml-[40px] ml-[16px]">
                <li className="sm:pl-[20px] pl-[2px]">
                Mobile kiosks that allow jobseekers to apply for jobs via MyCareersFuture and conduct video call meetings with a Career Ambassador to receive job search tips and advice.
                </li>
                <li className=" sm:pl-[20px] pl-[2px]">
                Live text chat feature between the Career Ambassador and jobseeker during the video call
                </li>
                <li className=" sm:pl-[20px] pl-[2px]">
                Database management system
                </li>
                
              </ul>
              
            </div>
          </div>
        </Container4>

        <Container4>
          <div className="xl:px-[0px] px-[20px]   md:py-[80px] sm:py-[50px]  py-[34px] grid lg:grid-cols-5 grid-cols-1 gap-4">
            <div className="col-span-3   sm:pr-[68px] pr-[0px]">
              <h2 className="lg:text-[50px] md:text-[40px] sm:text-[30px] text-[26px] text-[#001817] font-poppins mb-[15px]">
              Design Considerations
              </h2>
              <p className="sm:text-[20px] text-[16px] text-[#657676] mb-[20px]">
              The functionalities of the kiosk was designed with the older population and users with impaired senses in mind. It incorporates a voice-over guide in four languages – English, Chinese, Malay and Tamil– to cater to non-English speaking users. Additionally, visual interface elements are kept large for better readability and navigation. For instance, we used large-sized Emojis for users to better express their emotions during the rating.
              </p>
              
            </div>
            <div className="col-span-2  rounded-[20px]  md:mx-0 mx-auto">
              <img src={dl2} className=" lg:mx-[0px] md:mx-[40px] " alt="" />
            </div>
          </div>
        </Container4>
      </div>

      <div className="bg-[#323a93] sm:py-[80px] py-[10px] sm:px-[40px] px-[20px]">
        <div className="grid lg:grid-cols-5 gap-4">
          <div className="col-span-2  my-auto">
            <img src={frame} alt="" />
          </div>
          <div className="col-span-3  font-poppins ">
            <div className="lg:pl-[85px] md:pl-[45px] sm:pl-[30px] pl-[20px] ">
              <h2 className="text-[#ffffff] lg:text-[48px] md:text-[34px] sm:text-[32px] text-[32px] mb-[30px]">
                Looking for career advice?
              </h2>
              <h2 className="text-[#ffffff] lg:text-[48px] md:text-[34px] sm:text-[32px] text-[32px] mb-[30px]">
                Check out WSG’s <br /> mobile kiosks at <br /> these Community{" "}
                <br /> Centres (CCs).
              </h2>
            </div>
          </div>
        </div>
      </div>




      <div className="md:h-[80px] sm:h-[50px] h-[30px]"></div>
      <div className="">
        <Container4>
          <div className="xl:px-[0px] px-[20px]">
            <h2 className="md:text-[48px] sm:text-[38px] text-[30px] font-poppins  text-[#001817] mb-[30px] text-center">
              Show, Don’t Tell
            </h2>
            <p className="sm:text-[20px] text-[16px] text-[#657676] mb-[40px] text-center">
              Design tools are crucial for us at Hipster. With these tools, we
              created prototypes that feel like the real experience quickly.
              User interface elements and interactions are defined. Prototyping
              takes the guesswork out for our clients and development team. It
              gives us the freedom to design, test and iterate – while running a
              speedy design process. Watch the video to see the final product of
              the app.
            </p>
          </div>
          <div className=" w-full">
            <div className="flex justify-center">
              <video autoPlay muted loop className="w-full">
                <source
                  src={
                    "https://hipster-inc.com/wp-content/uploads/2021/12/wsg-new-video.mp4"
                  }
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </Container4>
      </div>
      <div className="md:h-[80px] sm:h-[50px] h-[30px]"></div>
      <div className="w-[100%] h-[100%] md:px-[0px] px-[14px]">
          <img className="w-[100%] h-[100%]" src={wsg} alt="" />
        </div>

      <div className="md:py-[80px] sm:py-[50px]  py-[34px]">
        <div className=" lg:mx-[198px] md:mx-[80px] mx-[30px] ">
        <div className="p-4 md:p-8 lg:p-12">
  <h2 className="text-center text-[28px] md:text-[36px] lg:text-[42px] text-[#000000] font-poppins">
    <Link className="bbn" to={"/somethingnew"}>
      Next Case Study
    </Link>
  </h2>
  <div className="py-[30px] md:py-[40px] lg:py-[50px] text-center">
    <div className="text-[18px] md:text-[20px] lg:text-[24px] font-poppins text-[#001817] mb-[10px] md:mb-[12px] lg:mb-[15px]">
      <Link to={"/somethingnew"}>SomethingNew - Mental Health</Link>
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

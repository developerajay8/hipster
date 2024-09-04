import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  CIRCLE,
  CIRCLE2,
  Downlogo,
  Process,
  abroadly,
  bagicon,
  bomb,
  business,
  c1,
  c2,
  c3,
  c4,
  c5,
  camera,
  casefeatured,
  clientcircle,
  commonsuits,
  descriptionlogo,
  eight,
  elevin,
  featuredbg,
  five,
  four,
  groups,
  h1,
  h2,
  h3,
  hp,
  hpt,
  img,
  invalidname,
  laptop,
  m1,
  m2,
  m3,
  m4,
  m5,
  m6,
  m7,
  nearbanner,
  new1,
  new2,
  new3,
  new4,
  new5,
  newspaper,
  nine,
  one,
  onetwo,
  pencil,
  pencil2,
  pencil3,
  polygonball,
  ratingbox,
  rep,
  setting,
  seven,
  shareO,
  shareT,
  shareTH,
  six,
  star,
  ten,
  thirdimg,
  three,
  two,
  warning,
  watch2,
  zily,
  zilystar,
} from "../../assets";

import { TiArrowRight } from "react-icons/ti";
import Container from "../../components/Container";
import Container2 from "../../components/Container2";
import MultipleSlider from "./MultipleSlider";
import SimpleSlider from "./SimpleSlider";
import Container6 from "../../components/Container6";
import Marquee from "react-fast-marquee";

export default function Home() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="">
        <div className="h-[100vh] home_background ">
          <div className=" max-w-[1416px] mx-auto  z-[99999999] grid grid-cols-12 pt-[120px] sm:pt-[170px] md:px-[50px] sm:px-[15px] px-[0px] text-white">
            <div className=" xl:col-span-5 col-span-12 ml-[20px] ">
              <h2 className="text-[#ffffff] xl:text-[40px] lg:text-[50px] md:leading-[40px] md:text-[30px] sm:text-[30px] text-[30px] font-poppins xl:leading-[47px] sm:leading-[40px] lg:leading-[70px]">
                At Business10X, we <br className="xl:block hidden" /> don't
                follow trends <br className="xl:block hidden" /> we set them.
              </h2>
              <p className="my-[30px] text-[18px] font-poppins text-[#cccccc]">
                We simplify growth. By understanding your{" "}
                <br className="xl:block hidden" />
                business, we identify opportunities and execute{" "}
                <br className="xl:block hidden" />
                strategies that deliver results.{" "}
                <br className="xl:block hidden" />
                {/* ecosystem that keeps you ahead of the <br className="xl:block hidden"/> competition. Business10X delivers measurable <br className="xl:block hidden"/> results with processes you can trust. Our proven <br className="xl:block hidden"/> track record and commitment to transparency<br className="xl:block hidden"/> ensure your investments drive lasting growth. */}
              </p>
              <button className="list-none py-[14px] bg-white px-[40px] xl:rounded-full rounded-full text-[#05201f] font-poppins">
                <li className="transform">
                  <Link to={"/contact"}>Contact us</Link>
                </li>
              </button>
            </div>
            <div className="col-span-7 xl:block hidden relative">
              <div id="ONE" className=" absolute PP top-[-180px] right-[100px]">
                <img src={one} alt="" className="" />
              </div>
              <div className="">
                <div className=" TWOS absolute top-[-75px] right-[370px]">
                  <img src={two} className="" alt="" />
                </div>

                <div className=" BOMB absolute max-w-[200px] max-h-[200px] top-[-67px] right-[40px]">
                  <img src={bomb} alt="" />
                </div>

                <div className="">
                  <img
                    src={pencil3}
                    className="absolute top-[0px] left-[140px]"
                    alt=""
                  />
                  <img
                    src={elevin}
                    className="absolute top-[30px] left-[110px]"
                    alt=""
                  />
                </div>

                <div>
                  <img
                    src={eight}
                    className="absolute bottom-[70px] right-[238px]"
                    alt=""
                  />
                </div>

                <div className="BOMB LAK absolute bottom-[-227px] right-[210px]">
                  <img src={six} alt="" />
                </div>

                <div className=" BOMBs absolute max-w-[200px] max-h-[200px] bottom-[-228px] left-[-150px]">
                  <img src={bomb} alt="" />
                </div>

                <div className=" BOMBCS absolute w-[437px] h-[300px] top-[192px] right-[420px]">
                  <img src={three} alt="" />
                </div>

                <div className="absolute top-[130px] left-[-100px]">
                  <img src={four} alt="" />
                </div>

                <div className="absolute ajajajaja top-[140px] left-[34px] lokesk">
                  <img src={nine} alt="" />
                </div>

                <div className="klklkl absolute top-[-30px] right-[210px]">
                  <img src={five} alt="" />
                </div>

                <div className="UPER">
                  <img src={laptop} alt="" />
                </div>
              </div>

              <div className="Box">
                <li className="list-none">
                  <Link
                    onClick={handleClick}
                    // to="ajay"
                    // spy={true}
                    // offset={50}
                  >
                    Scroll Down
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Allcomponent />
<div className="">
      <Branding ref={ref} />
      <Social />
      <Marketing />
      <Designing />
      <Media />
      <Our_Services />
      <Goalsec />
      <Clientsf />
      <Trusted />
      <Makeshipster />
      </div>
    </>
  );
}

function Allcomponent() {
  return (
    <div className=" lg:hidden block py-[48px] sm:px-[20px]">
      <h2 className="text-[#000000] pl-[40px] text-[35px] font-poppins mb-[15px]">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 md:px-[0px] sm:px-[50px] px-[18px]   gap-4">
        <div className="col-span-1  sm:mb-[50px] mb-[28px]">
          <Link to={"./Near"}>
            <img src={new1} className="rounded-[25px] " alt="" />
            <div className="">
              <h4 className="font-poppins text-[#001817] text-[20px] mt-[24px] mb-[12px]">
              Branding
              </h4>
              <h3 className="font-poppins text-[#001817] text-[24px] font-medium">
              Build a distinctive brand identity that resonates with your audience. Our branding services encompass market research, brand strategy, and visual identity design, ensuring that your brand stands out in the competitive landscape.
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
            </div>
          </Link>
        </div>

        <div className="col-span-1  sm:mb-[50px] mb-[28px]">
          <Link to={"./ShareApp"}>
            <img src={new2} className="rounded-[25px] " alt="" />
            <div className="">
              <h4 className="font-poppins text-[#001817] text-[24px] mt-[24px] mb-[12px]">
              Social Media Management
              </h4>
              <h3 className="font-poppins text-[#001817] text-[20px] font-medium">
              Cultivate a vibrant social media presence with our expert management services. From content creation to community engagement, we help you leverage social platforms to enhance brand visibility and connect with your audience.
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
          </Link>
        </div>

        <div className="col-span-1  sm:mb-[50px] mb-[28px]">
          <Link to={"./CommonSuits"}>
            <img src={new3} className="rounded-[25px] " alt="" />
            <div className="">
              <h4 className="font-poppins text-[#001817] text-[24px] mt-[24px] mb-[12px]">
              Performance Marketing
              </h4>
              <h3 className="font-poppins text-[#001817] text-[20px] font-medium">
              Amplify your online reach and drive conversions through targeted performance marketing strategies. Our team leverages data-driven insights to craft campaigns that maximize ROI and deliver measurable results.
              </h3>
              <ul className="font-poppins text-[14px] text-#000000] mt-[20px]">
                <a>
                  Personalized Fashion, Web App, Admin Panel / Dashboard, UI/UX
                  Design
                </a>
              </ul>
            </div>
          </Link>
        </div>

        <div className="col-span-1  sm:mb-[50px] mb-[28px]">
          <Link to={"./Abroadly"}>
            <img src={new4} className="rounded-[25px] " alt="" />
            <div className="">
              <h4 className="font-poppins text-[#001817] text-[24px] mt-[24px] mb-[12px]">
              Designing and Editing
              </h4>
              <h3 className="font-poppins text-[#001817] text-[20px] font-medium">
              Elevate your visual presence with captivating design and precision editing. Our talented team brings your creative vision to life through impactful imagery, graphics, and visual storytelling.
              </h3>
              <ul className="font-poppins text-[14px] text-#000000] mt-[20px]">
                <a>
                  Match Making Platform, Mobile Apps, Web App, Admin Panel /
                  Dashboard, UI/UX Design
                </a>
              </ul>
            </div>
          </Link>
        </div>

        <div className="col-span-1  sm:mb-[50px] mb-[28px]">
          <Link to={"/Case"}>
            <img src={new5} className="rounded-[25px] " alt="" />
            <div className="">
              <h4 className="font-poppins text-[#001817] text-[24px] mt-[24px] mb-[12px]">
                {" "}
                Media Production
              </h4>
              <h3 className="font-poppins text-[#001817] text-[20px] font-medium">
              From concept to execution, our media production services encompass video, audio, and multimedia content creation, ensuring compelling storytelling that captivates your audience.
              </h3>
              <ul className="font-poppins text-[14px] text-#000000] mt-[20px]">
                <a>
                  Consumer Forum, Web App, Admin Panel / Dashboard, UI/UX Design
                </a>
              </ul>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Branding() {
  return (
    <div className=" lg:block hidden xl:py-[100px] py-[80px] xl:px-[20px] px-[30px] overflow-hidden Second-bg ">
      <Link to={"./branding"}>
        <Container>
          <div className="grid grid-cols-3 gap-4 relative max-w-[1416px] mx-auto">
            <div className="lg:col-span-1 md:col-span-5 sm:col-span-5 col-span-6 lg:pb-0 pb-[30px]  pt-5">
              <div className="text-[#031a1b] text-[30px] font-poppins cursor-pointer fonts">
                Branding
              </div>
              <h3 className="my-[30px] text-[#031a1b] text-[16px] font-poppins font-semibold leading-[27px] ">
                <Link to={"./branding"}>
                  Build a distinctive brand identity that resonates with your
                  audience. Our branding services encompass market research,
                  brand strategy, and visual identity design, ensuring that your
                  brand stands out in the competitive landscape.
                </Link>
              </h3>
              <p className="text-[#334545] text-[14px] font-poppins">
                Gamification, Health & Fitness
              </p>
              <div className="mt-[20px]">
                <div className=" relative b-black w-[200px] h-[256px] p-[20px] rounded-[12px]">
                  <p className="text-[14px] text-[#FFFFFF] font-poppins">
                    Success Metrics
                  </p>
                  <h3
                    className="text-[18px] font-poppins text-[#FFFFFF] "
                    data-aos="slide-right"
                  >
                    Impact
                  </h3>
                  <div className="mt-[96px]" data-aos="slide-left">
                    <img src={Downlogo} className="w-[23px] h-[23px]" alt="" />
                    <h3 className="text-[#ffffff] text-[18px] font-poppins">
                      11000+
                    </h3>
                    <p className="text-[#ffffff] text-[14px] font-poppins">
                      Downloads
                    </p>
                  </div>
                  <div className="">
                    <div className="absolute top-[30px] right-[-70px] last">
                      <img
                        className="w-[120px] h-[123px]"
                        src={ratingbox}
                        alt=""
                      />
                      <h3 className="font-semibold text-[18px] absolute top-8 right-[45px] text-[#FFFFFF] font-poppins">
                        4.6
                      </h3>
                      <p className=" text-[14px] absolute top-14 right-[24px] text-[#FFFFFF] font-poppins">
                        Star rating
                      </p>
                    </div>
                    <div className=" absolute lasts top-[20px] right-[0px]">
                      <img className="w-[50px] h-[97px]" src={star} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="lg:col-span-2 md:col-span-6 sm:col-span-6 col-span-6 relative"
              id="featuredbg"
            >
              <div className="max-w-[708px] max-h-[528px] mx-auto">
                <img className="" src={featuredbg} alt="" />
              </div>
            </div>
            <div>
              <div
                className="absolute ZILYS lg:block hidden  top-0 right-[200px]"
                id="zily "
              >
                <img src={zily} className="" alt="" />
              </div>
            </div>

            <div
              className="absolute Starsha lg:block hidden top-0 right-0"
              id="zilystar"
            >
              <img src={zilystar} className="" alt="" />
            </div>
          </div>
        </Container>
      </Link>
    </div>
  );
}

function Social() {
  return (
    <div className="lg:block hidden xl:py-[100px] py-[80px] xl:px-5 px-[30px] Share relative ">
      <Link to={"./socialmedia"}>
        <Container>
          <div className="grid grid-cols-3 gap-4 max-w-[1416px] mx-auto">
            <div className="lg:col-span-1 md:col-span-5 sm:col-span-5 col-span-6 lg:pb-0 pb-[30px] pt-5">
              <div className="text-[#031a1b] text-[30px] font-poppins cursor-pointer fonts">
              Social Media Management
              </div>
              <h3 className="my-[30px] text-[#031a1b] text-[16px]  font-poppins font-semibold leading-[27px] ">
                <Link to={"./socialmedia"}>
                Cultivate a vibrant social media presence with our expert management services. From content creation to community engagement, we help you leverage social platforms to enhance brand visibility and connect with your audience.
                </Link>
              </h3>
              <p className="text-[#334545] text-[14px] font-poppins">
                Match Making Platform, Mental Health, On-Demand Video Solutions
              </p>
              <div className="mt-[20px]">
                <div className=" relative b-black w-[200px] h-[256px] p-[20px] rounded-[12px]">
                  <p className="text-[14px] text-[#FFFFFF] font-poppins">
                    Success Metrics
                  </p>
                  <h3
                    className="text-[18px] font-poppins text-[#FFFFFF]"
                    data-aos="slide-right"
                  >
                    Impact
                  </h3>
                  <div className="mt-[96px]" data-aos="slide-left">
                    <img src={Downlogo} className="w-[23px] h-[23px]" alt="" />
                    <h3 className="text-[#ffffff] text-[18px] font-poppins">
                      11000+
                    </h3>
                    <p className="text-[#ffffff] text-[14px] font-poppins">
                      Downloads
                    </p>
                  </div>
                  <div className="">
                    <div className="absolute top-[30px] right-[-70px] last">
                      <img
                        className="w-[120px] h-[123px]"
                        src={ratingbox}
                        alt=""
                      />
                      <h3 className="font-semibold text-[18px] absolute top-8 right-[45px] text-[#FFFFFF] font-poppins">
                        4.6
                      </h3>
                      <p className=" text-[14px] absolute top-14 right-[24px] text-[#FFFFFF] font-poppins">
                        Star rating
                      </p>
                    </div>
                    <div className=" absolute lasts top-[20px] right-[0px]">
                      <img className="w-[50px] h-[97px]" src={star} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 md:col-span-6 sm:col-span-6 col-span-6 mx-auto max-w-[900px] max-h-[662.86px] ">
              <img className=" " src={thirdimg} alt="" />
            </div>

            <div className="">
              <div className="TOPK absolute lg:block hidden top-[228px] right-[61px] max-w-[100px] max-h-[100px]">
                <img src={shareTH} alt="" />
              </div>
              <div className="TOPKS absolute xl:block hidden  bottom-[190px] right-[590px] max-w-[100px] max-h-[100px]">
                <img src={shareO} alt="" />
              </div>
            </div>
          </div>
        </Container>
      </Link>
    </div>
  );
}

function Marketing() {
  return (
    <div className=" lg:block hidden xl:py-[100px] py-[80px] xl:px-5 px-[30px] Common overflow-hidden ">
      <Link to={"./performancemarketing"}>
        <Container>
          <div className="grid grid-cols-3 gap-4 max-w-[1416px] mx-auto">
            <div className=" lg:col-span-1 md:col-span-5 sm:col-span-5 col-span-6 lg:pb-0 pb-[30px]  pt-5 my-auto">
              <div className="text-[#031a1b] text-[30px] font-poppins cursor-pointer fonts">
              Performance Marketing
              </div>
              <h3 className="my-[30px] text-[#031a1b] text-[16px] font-poppins font-semibold leading-[27px] ">
                <Link to={"./performancemarketing"}>
                Amplify your online reach and drive conversions through targeted performance marketing strategies. Our team leverages data-driven insights to craft campaigns that maximize ROI and deliver measurable results.
                </Link>
              </h3>
              <p className="text-[#334545] text-[14px] font-poppins">
                Personalized Fashion
              </p>
              {/* <div className='mt-[20px]'>
              <div className=" relative b-black w-[200px] h-[256px] p-[20px] rounded-[12px]">
                <p className='text-[14px] text-[#FFFFFF] font-poppins'>
                  Success Metrics
                </p>
                <h3 className='text-[18px] font-poppins text-[#FFFFFF]'>Impact</h3>
                <div className='mt-[96px]'>
                  <img src={Downlogo} className='w-[23px] h-[23px]' alt="" />
                  <h3 className='text-[#ffffff] text-[18px] font-poppins'>11000+</h3>
                  <p className='text-[#ffffff] text-[14px] font-poppins'>Downloads</p>
                </div>
                <div className=''>
                  <div className="absolute top-[30px] right-[-70px]">
                    <img className='w-[120px] h-[123px]' src={ratingbox} alt="" />
                    <h3 className='font-semibold text-[18px] absolute top-8 right-[45px] text-[#FFFFFF] font-poppins'>4.6</h3>
                    <p className=' text-[14px] absolute top-14 right-[24px] text-[#FFFFFF] font-poppins'>Star rating</p>
                  </div>
                  <div className=' absolute top-[20px] right-[0px]'>
                    <img className='w-[50px] h-[97px]' src={star} alt="" />
                  </div>
                </div>
              </div>
            </div>*/}
            </div>
            <div className=" lg:col-span-2 md:col-span-6 sm:col-span-6 col-span-6">
              <img
                className="xl:max-w-[900px] xl:max-h-[533px] mx-auto"
                src={commonsuits}
                alt=""
              />
              <div className="flex relative">
                <div className="SUIT absolute shadow max-w-[122px] max-h-[149] left-[181px] top-[-64px]">
                  <img src={c1} alt="" />
                </div>

                <div className="SUITS absolute shadow max-w-[122px] max-h-[149] left-[320px] top-[-64px]">
                  <img src={c2} alt="" />
                </div>

                <div className="SUITSP absolute shadow max-w-[122px] max-h-[149] left-[460px] top-[-64px]">
                  <img src={c3} alt="" />
                </div>

                <div className="SUITSPS absolute shadow max-w-[122px] max-h-[149] left-[601px] top-[-64px]">
                  <img src={c4} alt="" />
                </div>

                <div className="SUITSPST  absolute shadow max-w-[122px] max-h-[149] left-[741px] top-[-64px]">
                  <img src={c5} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Link>
    </div>
  );
}

function Designing() {
  return (
    <div className=" lg:block hidden Abroadly xl:py-[100px] py-[80px] xl:px-5 px-[30px]">
      <Link to={"./designingandediting"}>
        <Container>
          <div className="grid grid-cols-3 gap-4 max-w-[1416px] mx-auto">
            <div className="lg:col-span-1 md:col-span-5 sm:col-span-5 col-span-6 lg:pb-0 pb-[30px] pt-5 my-auto">
              <div className="text-[#FFFFFF] text-[30px] font-poppins cursor-pointer fonts">
              Designing and Editing
              </div>
              <h3 className="my-[30px] text-[#ffffff] text-[16px] font-poppins font-semibold leading-[27px] ">
                <Link to={"./designingandediting"}>
                Elevate your visual presence with captivating design and precision editing. Our talented team brings your creative vision to life through impactful imagery, graphics, and visual storytelling.
                </Link>
              </h3>
              <p className="text-[#FFFFFF] text-[14px] font-poppins">
                Match Making Platform, Backpacker
              </p>
              <div className="mt-[20px]">
                <div className=" relative b-black w-[200px] h-[256px] p-[20px] rounded-[12px]">
                  <p className="text-[14px] text-[#FFFFFF] font-poppins">
                    Success Metrics
                  </p>
                  <h3
                    className="text-[18px] font-poppins text-[#FFFFFF]"
                    data-aos="slide-right"
                  >
                    Impact
                  </h3>
                  <div className="mt-[96px]" data-aos="slide-left">
                    <img src={Downlogo} className="w-[23px] h-[23px]" alt="" />
                    <h3 className="text-[#ffffff] text-[18px] font-poppins">
                      11000+
                    </h3>
                    <p className="text-[#ffffff] text-[14px] font-poppins">
                      Downloads
                    </p>
                  </div>
                  <div className="">
                    <div className="absolute top-[30px] right-[-70px] last">
                      <img
                        className="w-[120px] h-[123px]"
                        src={ratingbox}
                        alt=""
                      />
                      <h3 className="font-semibold text-[18px] absolute top-8 right-[45px] text-[#FFFFFF] font-poppins">
                        4.6
                      </h3>
                      <p className=" text-[14px] absolute top-14 right-[24px] text-[#FFFFFF] font-poppins">
                        Star rating
                      </p>
                    </div>
                    <div className=" absolute lasts top-[20px] right-[0px]">
                      <img className="w-[50px] h-[97px]" src={star} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 md:col-span-6 sm:col-span-6 col-span-6  relative">
              <div className="max-w-[900px] first1 relative max-h-[577px] mx-auto">
                <img className="" src={abroadly} alt="" />
              </div>

              <div className=" absolute first2 md:block hidden top-[420px] left-[0px]">
                <img src={camera} alt="" />
              </div>

              <div className=" absolute first2 xl:block hidden top-[440px] right-[100px]">
                <img src={CIRCLE2} alt="" />
              </div>

              <div className="first3 absolute xl:block hidden first3 top-[0px] right-[250px] ">
                <img src={CIRCLE} className="" alt="" />
              </div>
            </div>
          </div>
        </Container>
      </Link>
    </div>
  );
}

function Media() {
  return (
    <div className="w-full lg:block hidden Case overflow-hidden xl:pt-[100px] pb-[190px] pt-[80px] xl:px-5 px-[30px]">
      <Container>
        <Link to={"/mediaproduction"}>
          <div className="grid grid-cols-3 gap-4 max-w-[1416px] mx-auto">
            <div className=" lg:col-span-1 md:col-span-5 sm:col-span-5 col-span-6 lg:pb-0 pb-[30px] pt-5 my-auto ">
              <div className="text-[#031a1b] text-[30px] font-poppins cursor-pointer fonts">
              Media Production
              </div>
              <h3 className="my-[30px] text-[#031a1b] text-[16px]  font-poppins font-semibold leading-[27px] ">
                <Link to={"./mediaproduction"}>
                From concept to execution, our media production services encompass video, audio, and multimedia content creation, ensuring compelling storytelling that captivates your audience.
                </Link>
              </h3>
              <p className="text-[#334545] text-[14px] font-poppins">
                Consumer Forum, Web app
              </p>
            </div>

            <div className="lg:col-span-2 md:col-span-6 sm:col-span-6 col-span-6 relative">
              <div className="FRITY max-w-[900px] max-h-[533px] mx-auto">
                <img className="" src={casefeatured} alt="" />
              </div>

              <div className="absolute xl:block hidden bottom-[-160px] left-[140px] bord list-none mx-auto">
                <li className="py-[16px] px-[40px]">
                  <Link to={"/ourwork"}>View all projects</Link>
                </li>
              </div>
            </div>

            <div className="relative">
              <div className="absolute lg:block hidden MAI xl:bottom-[-80px] lg:bottom-[-70px] xl:left-[1175px] lg:left-[775px]   w-[245px] h-[251]">
                <img className="" src={newspaper} alt="" />
              </div>

              <div className="absolute lg:block hidden FRUTY xl:top-[-595px] lg:top-[-495px] xl:right-[-1040px] lg:right-[-770px]">
                <img src={img} alt="" />
              </div>
            </div>

            <div className="flex relative">
              <div className="pre absolute top-[30px] left-[60px]">
                <img src={h1} alt="" />
              </div>

              <div className="pres absolute lg:block hidden top-[30px] left-[260px]">
                <img src={h3} alt="" />
              </div>

              <div className="preas absolute top-[30px] right-[-70px]">
                <img src={h2} alt="" />
              </div>
            </div>
          </div>
        </Link>
      </Container>
    </div>
  );
}

function Our_Services() {
  return (
    <div className=" xl:block hidden Services xl:px-5 px-[20px]">
      <div
        className="grid grid-cols-1 max-w-[1416px] mx-auto"
        data-aos="slide-down"
        data-aos-duration="2000"
      >
        <h2 className="text-[50px] font-poppins text-[#000000] mb-[15px]">
          Our Services
        </h2>
        <p className="text-[#05201f] text-[16px] font-poppins">
          We bring the right expertise mix to create a holistic digital
          solution.{" "}
        </p>
      </div>
      {/* <div className="py-[20px] pr-[45px] grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
        <div className=" border col-span-1">

        </div>
        <div className=" border col-span-1 ">

        </div>
        <div className=" border col-span-1">

        </div>
      </div> */}
      <div className="max-w-[1416px] mx-auto">
        <MultipleSlider />
      </div>
    </div>
  );
}

function Goalsec() {
  return (
    <div className=" our_goal py-[80px] lg:px-[80px] md:px-[60px] sm:px-[20px] px-[10px]   overflow-hidden">
      <Container2>
        <div className="grid grid-cols-2 max-w-[1416px] mx-auto gap-4">
          <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-2  ">
            <h2 className="xl:text-[50px] lg:text-[50px] md:text-[50px]  sm:text-[40px] text-[38px] text-[#ffffff] font-poppins mb-[15px] xl:leading-[62px] lg:leading-[52px] md:leading-[60px]">
              Achieve your goal <br className="lg:block hidden" /> with our
              problem <br className="lg:block hidden" /> solving approach
            </h2>
            <p className="text-[18px] text-[#FFFFFF] lg:pt-[25px] xl:pb-[60px] md:pb-[20px] pb-[10px] pr-[10px]">
              When working with you, we function as a team striving to create
              that superb product – giving your brand a head start.
            </p>
            <div className="font-poppins md:text-[28px] text-[18px] text-[#FFFFFF]">
              Would you like to kickstart your project{" "}
              <br className="lg:block hidden" /> using this proven approach?
            </div>
            <button className="sdc mt-[30px] py-[14px] px-[40px] font-semibold font-poppins text-[14px] text-[#05201f] rounded-full">
              <Link to={"/contact"}>Let's get started</Link>
            </button>
          </div>
          <div className="lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-2 max-w-[516px] max-h-[397px] mx-auto my-[53px]">
            <img src={Process} className="" alt="" data-aos="zoom-in" />
          </div>
        </div>
      </Container2>
    </div>
  );
}

function Clientsf() {
  return (
    <div className="client  md:py-[100px] sm:py-[70px]  py-[30px] xl:px-[20px] md:px-[20px] sm:px-[15px] px-[15px]">
      <Container2>
        <div className=" grid grid-cols-2 max-w-[1416px] mx-auto">
          <div className="relative lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-2 pr-[80px]">
            <h2 className="text-[50px] text-[#FFFFFF] font-poppins mb-[15px]">
              What Our <br className="xl:block hidden" />
              Clients say
            </h2>
            <div>
              <div className="">
                <img
                  src={invalidname}
                  data-aos="slide-down"
                  data-aos-duration="2000"
                  alt=""
                  className="absolute top-[160px] left-[70px]"
                />
              </div>
              <div className="h-[300px] w-[100%]">
                <img
                  src={groups}
                  alt=""
                  className="absolute top-[210px] left-[50px]"
                />
                <img
                  src={groups}
                  alt=""
                  className="absolute top-[270px] left-[0px]"
                />
                <img
                  src={groups}
                  alt=""
                  className="absolute top-[180px] left-[120px]"
                />
                <img
                  src={groups}
                  alt=""
                  className="absolute xl:block hidden top-[213px] right-[214px]"
                />
                <img
                  src={groups}
                  alt=""
                  className="absolute xl:block hidden top-[270px] right-[160px]"
                />
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-2 lg:pr-[80px] lg:px-[0px] md:px-[50px] sm:px-[20px] px-[12px]">
            <SimpleSlider />
          </div>
        </div>
      </Container2>
    </div>
  );
}

function Trusted() {
  return (
    <div className="pt-[80px] xl:px-5 px-[20px] pb-[120px] Truste">
      <div className=" max-w-[1416px] mx-auto">
        <h2 className="text-[50px] text-[#FFFFFF] mb-[30px] font-poppins tr">
          Trusted by
        </h2>
        <div className="relative sm:block hidden THID">
          <img
            src={clientcircle}
            className="absolute top-[-253px] right-0"
            alt=""
          />
          <img
            src={setting}
            className="absolute top-[-179px] right-[122px]"
            alt=""
          />
        </div>

        <div className="w-full ">
          <div className="w-[100%] flex flex-col">
            <Marquee autoFill pauseOnHover>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m1}
                  alt=""
                />
              </div>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m2}
                  alt=""
                />
              </div>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m3}
                  alt=""
                />
              </div>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m4}
                  alt=""
                />
              </div>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m5}
                  alt=""
                />
              </div>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m6}
                  alt=""
                />
              </div>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m7}
                  alt=""
                />
              </div>
            </Marquee>
            <Marquee autoFill pauseOnHover direction="right">
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m1}
                  alt=""
                />
              </div>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m2}
                  alt=""
                />
              </div>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m3}
                  alt=""
                />
              </div>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m4}
                  alt=""
                />
              </div>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m5}
                  alt=""
                />
              </div>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m6}
                  alt=""
                />
              </div>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m7}
                  alt=""
                />
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}

function Makeshipster() {
  return (
    <div className="md:pt-[150px]  sm:pt-[90px] pt-[40px] md:pb-[100px] sm:pb-[80px] pb-[40px] Makes relative px-[20px] xl:px-5">
      
        <div className="grid grid-cols-1 max-w-[1416px] mx-auto ">
          <div className="lg:px-[20px] md:px-[25px] sm:px-[30px] px-[20px]">
            <h2 className="text-[50px] mb-[15px] text-[#000000] font-poppins">
              What Makes Business
              <br className="md:block hidden" /> 10X Different?
            </h2>
            <p className="text-[16px] font-poppins text-[#706b6b] mb-[30px] leading-[26px] xl:max-w-[60%]">
              At Business10X, we’re not just another digital agency—we’re your
              growth partners, your digital strategy gurus, and your secret
              weapon in the race to the top. So, what sets us apart from the
              crowd? Let’s break it down:
            </p>
            <p className="text-[16px] font-poppins text-[#706b6b] mb-[30px] xl:max-w-[60%]">
              Okay, not literally, but it might as well be! The digital landscape is ever-changing, and we stay ahead of the curve. We’re constantly exploring new tools, trends, and technologies to keep your business at the forefront of the industry.
            </p>
            <div className="flex justify-between">
              <button className="relative overflow-hidden px-10 py-[13px] bg-transparent text-gray-800 font-medium border border-gray-800 rounded-full group">
                <span className="absolute inset-0 w-full h-full bg-blue-500 transition-transform transform -translate-x-full group-hover:translate-x-0"></span>
                <span className="relative text-gray-800 font-poppins font-semibold group-hover:text-white">
                  <Link to={"/contact"}>Let's Talk</Link>
                </span>
              </button>
              <img
                src={descriptionlogo}
                // src={business}
                className="max-w-[191px] max-h-[62px] sm:block hidden"
                alt=""
              />
            </div>
          </div>

          <div className="relative MATAKA sm:block hidden">
            <img
              src={pencil}
              className="absolute top-[-460px] right-[-72px]"
              alt=""
            />
            <img
              src={pencil2}
              className="absolute top-[-430px] right-[0px] our"
              alt=""
            />
          </div>
          <div className="relative sm:block hidden">
            <img
              src={pencil3}
              className="absolute top-[-440px] right-[-20px] NERW"
              alt=""
            />
          </div>

          <div className="PENCIL md:block hidden">
            <img
              src={polygonball}
              className="absolute top-[-100px] left-[30px]"
              alt=""
            />
            <img
              src={watch2}
              className="absolute top-[-143px] left-[60px]"
              alt=""
            />
            <img
              src={bagicon}
              className="absolute top-[-37px] left-[122px]"
              alt=""
            />
          </div>
        </div>
      
    </div>
  );
}

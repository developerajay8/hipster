import React, { useEffect, useState } from "react";
import {
  bsl,
  e27,
  ogl,
  ogr,
  today,
  ttbd,
  Ajay,
  bomb,
  img1,
  img2,
  img3,
  img4,
  ont,
  pencil3,
  ship,
  two,
  waj,
  warning,
  descriptionlogo,
  pencil,
  pencil2,
  polygonball,
  watch2,
  bagicon,
  blackstaurn,
} from "../../assets";
import { TiArrowRight } from "react-icons/ti";
import { Link } from "react-router-dom";
import Container2 from "../../components/Container2";
import Container4 from "../../components/Container4";


export default function Who_we_are() {
  // const [client,setClie] = useState(1);
  // const [clien,setCli] = useState(1);




 



  return (
    <div className="">
      <Container4>
        <div className=" py-[80px] xl:px-0 lg:px-[30px] md:px-[40px] sm:px-[30px] px-[26px]">
          <div className="">
            <h1 className="lg:text-[56px] md:text-[42px] sm:text-[35px] text-[35px]  font-poppins text-[#000000]">
              Who we are
            </h1>
            <h2
              className=" font-semibold text-[#001817] xl:text-[32px] lg:text-[28px] sm:text-[24px]
           text-[22px] font-poppins lg:mt-[60px] md:mt-[30px] sm:mt-[18px] mt-[16px] mb-[15px]"
              data-aos="slide-up"
            >
             At Business10X, we are more than just a digital agency—we are a dynamic team of innovators, strategists, and problem-solvers dedicated to elevating your business to new heights. Our mission is simple: to drive exponential growth for our clients through cutting-edge digital solutions tailored to their unique needs.
            </h2>
          </div>
        </div>
      </Container4>
      <div className="Top lg:h-[480px] md:h-[350px]  sm:h-[310px]  h-[290px] "></div>
      <div className="py-[80px] mt-[21px] xl:mx-0 lg:mx-[20px] md:mx-[20px] sm:mx-[20px] mx-[20px]">
        <Container4>
          <div className="grid md:grid-cols-3 grid-col-2 gap-6">
            <div className="md:col-span-1 grid-cols-2 md:pr-[15px] pr-[0px]">
              <h2 className="font-poppins md:text-[32px] text-[24px] md:mb-[15px] mb-0 text-[#001817] font-semibold">
              Our Approach
              </h2>
            </div>
            <div className="md:col-span-2 col-span-2 md:pl-[15px] pl-[0px]">
              <p className="md:text-[20px] text-[16px] font-poppins text-[#6d7676]">
              We believe that every business has its own story, challenges, and potential. That’s why we take a customized approach to everything we do. We start by diving deep into your business, understanding your goals, and identifying the obstacles in your path. From there, we craft strategies that are not only innovative but also aligned with your vision, ensuring that every action we take is a step towards your success.🌈
              </p>
            </div>
          </div>
        </Container4>
        {/* <div className="md:h-[100px] h-[40px]"></div> */}
        {/* <Container4>
          <div className="grid grid-cols-2 gap-6">
            <div className="md:col-span-1 col-span-2 pr-[15px]">
              <img src={ogl} className="max-w-[145px] max-h-[106px]" alt="" />
            </div>
            <div className="md:col-span-1 col-span-2 md:pl-[15px] pl-0 md:mt-[80px] mt-[20px]">
              <img src={ogr} className="max-w-[145px] max-h-[106px]" alt="" />
            </div>
          </div>
        </Container4> */}
        <div className="md:h-[100px] h-[40px]"></div>
        <Container4>
          <div className="grid grid-cols-3 gap-6">
            <div className="md:col-span-1 col-span-3 md:pr-[15px] pr-0">
              <h2 className="font-poppins md:text-[32px] text-[24px] mb-[15px] text-[#001817] sasassa">
              Our Expertise
              </h2>
            </div>
            <div className="md:col-span-2 col-span-3 md:pl-[15px] pl-0">
              <p className="md:text-[20px] text-[16px] font-poppins text-[#6d7676]">
                With years of experience in the digital landscape, our team brings a wealth of knowledge in areas like SEO, performance marketing, ❤️ content strategy, and more. But we don’t just rest on our laurels; we are constantly evolving, staying ahead of industry trends to provide you with the latest and most effective solutions.🌎

              </p>
            </div>
          </div>
        </Container4>

        <Container4>
          <div className="grid grid-cols-3 sm:pt-[50px] pt-[30px] gap-6">
            <div className="md:col-span-1 col-span-3 md:pr-[15px] pr-0">
              <h2 className="font-poppins md:text-[32px] text-[24px] mb-[15px] text-[#001817] sasassa">
              Our Philosophy
              </h2>
            </div>
            <div className="md:col-span-2 col-span-3 md:pl-[15px] pl-0">
              <p className="md:text-[20px] text-[16px] font-poppins text-[#6d7676]">
              At Business10X, we believe in the power of partnership. We don’t just work for you; we work with you. Our collaborative approach ensures that we are always in sync with your objectives, providing transparency, communication, and results that matter.
              </p>
            </div>
          </div>
        </Container4>
        <div className="md:h-[100px] h-[40px]"></div>
        <Container4>
          <div className="">
            <h2 className="xl:text-[42px] lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] font-poppins text-[#001817]">
            Choosing Business10X means choosing a partner who is as invested in your success as you are. <u>We bring passion, dedication, and a relentless drive to see your business grow.</u>
              <u>We measure our success by your success,</u> and{" "}
              <u>we are committed to delivering results that go beyond expectations.</u>
            </h2>
              
          </div>
        </Container4>
      </div>

      <div className="Bottom lg:h-[480px] md:h-[350px] sm:h-[310px]  h-[290px]"></div>

      <Container4>
        <div className="py-[50px]">
          <div className="grid grid-rows-2">
            <div className="col-span-1">
              <h2 className="md:pb-[30px] text-[32px] font-poppins text-[#000000] text-center font-semibold">
                As seen in
              </h2>
            </div>
            <div className="col-span-1 md:px-0 sm:px-[50px] px-[40px]">
              <div className="grid sm:grid-cols-3 grid-cols-1 sm:max-w-[597px] sm:mx-auto items-center sm:gap-0 gap-9">
                <div className="sm:col-span-1 col-span-1 sm:mx-auto">
                  <img src={today} className="w-[180px] h-[57px]" alt="" />
                </div>
                <div className="sm:col-span-1 col-span-1 sm:mx-auto">
                  <img src={e27} className="w-[144px] h-[93px]" alt="" />
                </div>
                <div className="sm:col-span-1 col-span-1  sm:mx-auto">
                  <img src={bsl} className="w-[180px] h-[42px]" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container4>

      

      <div className="">
        <div className="grid md:grid-cols-5 grid-cols-1">
          <div className="md:col-span-3 col-span-1 xl:px-[80px] px-[40px] xl:py-[80px] py-[40px]">
            <h2
              className="xl:text-[50px] sm:text-[35px] text-[32px] font-poppins text-[#000000] mb-[15px] fs xl:leading-[60px] leading-[40px]"
              data-aos="slide-up"
            >
              At Business10X, we believe
            </h2>
            <p
              className="lg:text-[20px] sm:text-[16px] text-[#6d7676] font-poppins"
              data-aos="slide-up"
            >
               that great experiences are the cornerstone of successful businesses. Our mission is to craft solutions that not only meet the needs of our clients but also enrich the lives of the people they serve.
            </p>
          </div>
          <div className="md:col-span-2 col-span-1 xl:px-[80px] px-[40px] xl:py-[80px] py-[40px] column xl:leading-[60px] sm:leading-[45px] leading-[37px]">
            <h2
              className="mb-[15px] text-[#ffffff] xl:text-[50px] sm:text-[36px] text-[32px] font-poppins"
              data-aos="zoom-in"
            >
              Business10X not only drives business growth but also transforms companies into well-recognized brands.
            </h2>
          </div>
        </div>

        <div className="">
          <div className="grid md:grid-cols-5 grid-cols-1">
            <div className="md:col-span-3 col-span-1 border w-[100%] h-[100%]">
              <img
                src={ttbd}
                className="w-[100%] h-[100%]"
                data-aos="zoom-in"
                alt=""
              />
            </div>
            <div className="md:col-span-2 col-span-1 border xl:px-[80px] px-[40px] xl:py-[80px] py-[40px]  column leading-[40px] ">
              <div className="mx-auto">
                <h2
                  className="mb-[18px] text-[#ffffff] xl:text-[32px] text-[32px] font-poppins"
                  data-aos="slide-up"
                >
                  Always learning, always growing, always evolving.
                </h2>
                <p
                  className="text-[20px] font-poppins text-[#ffffff] leading-[30px]"
                  data-aos="slide-up"
                >
                  No one is ever fully prepared to do the job the first time
                  they do it. Thankfully, we are continually gaining experience
                  under our belt. Still, there is always more to learn with
                  technology. This keeps us grounded, open to new ideas.
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Makeshipster />
    </div>
  );
}


function Makeshipster() {
  return (
    <div className="md:pt-[150px] sm:pt-[90px] pt-[40px] md:pb-[100px] sm:pb-[80px] pb-[40px] Makes relative">
      <Container2>
        <div className="grid grid-cols-1  ">
          <div className="lg:px-[20px] md:px-[25px] sm:px-[30px] px-[20px]">
            <h2 className="text-[50px] mb-[15px] text-[#000000] font-poppins">
            What Makes Business
              <br className="md:block hidden" /> 10X Different?
            </h2>
            <p className="text-[16px] font-poppins text-[#706b6b] mb-[30px] leading-[26px] xl:max-w-[60%]">
              At Business10X, we’re not just another digital agency—we’re your growth partners, your digital strategy gurus, and your secret weapon in the race to the top. So, what sets us apart from the crowd? Let’s break it down:
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
      </Container2>
    </div>
  );
}

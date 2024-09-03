import React from "react";
import {
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
} from "../../assets";
import { Link } from "react-router-dom";
import { IoStopCircle } from "react-icons/io5";
import { TiArrowRight } from "react-icons/ti";
import Container2 from "../../components/Container2";
import Container4 from "../../components/Container4";

export default function Services() {
  return (
    <div className="">
      <Container4>
        <div className=" pt-[100px] sm:pb-[80px] pb-[50px] xl:px-0 lg:px-[30px] md:px-[40px] sm:px-[30px] px-[26px]">
          <div className="">
            <h1 className="lg:text-[56px] md:text-[42px] sm:text-[35px] text-[35px]  font-poppins text-[#000000]">
              Our Services
            </h1>
            <h2
              className="max-w-[865px] font-semibold text-[#001817] xl:text-[32px] lg:text-[28px] sm:text-[24px]
           text-[22px] font-poppins lg:mt-[40px] md:mt-[30px] sm:mt-[18px] mt-[16px] mb-[15px]"
              data-aos="slide-up"
              data-aos-duration="1000"
            >
              Unlock your growth potential with our comprehensive range of tailored digital services: driving online visibility, engaging audiences, and delivering measurable results.{" "}
            </h2>
          </div>
        </div>
      </Container4>
      <div className="grid lg:grid-cols-7 bg-[black] lg:gap-6 mb-[80px]">
        <div className="col-span-4  w-[100%] ">
          <img src={waj} className="  w-full max-h-[730px]" alt="" />
        </div>

        <div className="col-span-3 my-auto xl:py-[80px] sm:py-[40px] py-[40px] xl:pl-[80px] pl-[20px] sm:pl-[40px]  xl:pr-[80px] sm:pr-[40px] pr-[20px]">
          
            <h2 className="text-[32px] font-poppins mb-[15px] text-[#ffffff]">
            No, we don't sell services. We sell solutions tailored according to your need. 
            </h2>

            <p className="sm:text-[18px] text-[16px] font-poppins  text-[#ffffff] mb-[19px]">
              At Business10X, we don’t just offer services—we deliver solutions precisely tailored to your unique needs. As a marketing agency, our focus is on understanding the distinct challenges faced by your business and crafting strategies that drive growth. Whether it’s enhancing your digital presence or optimizing your performance, we provide customized solutions that are as dynamic and versatile as the businesses we serve. With Business10X, you’re not just investing in services; you’re investing in growth, innovation, and success.
            </p>
          
        </div>
      </div>
      <Container4>
        <div className="xl:py-[80px] py-[40px] xl:px-0 px-[20px] grid lg:grid-cols-5 grid-cols-2">
          <div className="lg:col-span-2  col-span-2 my-auto  lg:pb-[0px] pb-[20px]">
            <div className="md:pr-[65px] pr-[0px]">
              <h2 className="text-[32px] font-poppins text-[#000000] mb-[16px] fo">
              Branding
              </h2>
              <p className="text-[#657676] xl:text-[20px] sm:text-[18px] text-[16px] mb-[16px] font-poppins">
              Build a distinctive brand identity that resonates with your audience. Our branding services encompass market research, brand strategy, and visual identity design, ensuring that your brand stands out in the competitive landscape.

              </p>
              <button className="bg-black hover:bg-gray-900 duration-700 py-3 rounded-full items-center">
                <Link
                  to={"/branding"}
                  className="text-[#dedede] duration-700 hover:text-[#adadad] px-[20px] font-semibold"
                >
                  Explore More
                </Link>
              </button>
            </div>
          </div>
          <div className="lg:col-span-3  col-span-2  lg:ml-auto  max-w-[643px] max-h-[468px] lg:mx-auto  ">
            <img
              src={img1}
              className="w-[100%] h-[100%]  md:mb-0 my-auto xl:mt-0 mt-[20px]"
              alt=""
            />
          </div>
        </div>
      </Container4>

      <Container4>
        <div className="xl:py-[80px] py-[40px] xl:px-0 px-[20px] grid lg:grid-cols-5 grid-cols-2">
          <div className="lg:col-span-3  col-span-2 lg:mr-auto lg:mb-0 mb-[20px] max-w-[643px] max-h-[468px] lg:mx-auto  ">
            <img
              src={img2}
              className="w-[100%] h-[100%]  md:mb-0 my-auto "
              alt=""
            />
          </div>
          <div className="lg:col-span-2  col-span-2 my-auto lg:mt-0 lg-mt-[16px]">
            <div className="lg:pl-[65px] md:pr-[65px] lg:pr-[0px] pl-[0px]">
              <h2 className="text-[32px] font-poppins text-[#000000] mb-[16px] fo">
              Social Media Management
              </h2>
              <p className="text-[#657676] xl:text-[20px] sm:text-[18px] text-[16px] mb-[16px] font-poppins">
              Cultivate a vibrant social media presence with our expert management services. From content creation to community engagement, we help you leverage social platforms to enhance brand visibility and connect with your audience.
              </p>
              <button className="bg-black hover:bg-gray-900 duration-700 py-3 rounded-full items-center">
                <Link
                  to={"/socialmedia"}
                  className="text-[#dedede] duration-700 hover:text-[#adadad] px-[20px] font-semibold"
                >
                  Explore More
                </Link>
              </button>
            </div>
          </div>
        </div>
      </Container4>

      <Container4>
        <div className="xl:py-[80px] py-[40px] xl:px-0 px-[20px] grid lg:grid-cols-5 grid-cols-2">
          <div className="lg:col-span-2  col-span-2 lg:pb-[0px] pb-[20px] my-auto  ">
            <div className="md:pr-[65px] pr-[0px]">
              <h2 className="text-[32px] font-poppins text-[#000000] mb-[16px] fo">
              Performance Marketing
              </h2>
              <p className="text-[#657676] xl:text-[20px] sm:text-[18px] text-[16px] mb-[16px] font-poppins">
              Amplify your online reach and drive conversions through targeted performance marketing strategies. Our team leverages data-driven insights to craft campaigns that maximize ROI and deliver measurable results.
              </p>
              <button className="bg-black hover:bg-gray-900 duration-700 py-3 rounded-full items-center">
                <Link
                  to={"/performancemarketing"}
                  className="text-[#dedede] duration-700 hover:text-[#adadad] px-[20px] font-semibold"
                >
                  Explore More
                </Link>
              </button>
            </div>
          </div>
          <div className="lg:col-span-3 col-span-2  lg:ml-auto  max-w-[643px] max-h-[468px] lg:mx-auto  ">
            <img
              src={img3}
              className="w-[100%] h-[100%]  md:mb-0 my-auto xl:mt-0 mt-[20px]"
              alt=""
            />
          </div>
        </div>
      </Container4>

      <Container4>
        <div className="xl:py-[80px] py-[40px] xl:px-0 px-[20px] grid lg:grid-cols-5 grid-cols-2">
          <div className="lg:col-span-3  col-span-2 lg:mr-auto lg:mb-0 mb-[20px] max-w-[643px] max-h-[468px] lg:mx-auto  ">
            <img
              src={img4}
              className="w-[100%] h-[100%]  lg:mb-0  my-auto "
              alt=""
            />
          </div>
          <div className="lg:col-span-2  col-span-2 my-auto lg:mt-0 lg-mt-[16px]">
            <div className="lg:pl-[65px] md:pr-[65px] lg:pr-[0px] pl-[0px]">
              <h2 className="text-[32px] font-poppins text-[#000000] mb-[16px] fo">
              Designing and Editing
              </h2>
              <p className="text-[#657676] xl:text-[20px] sm:text-[18px] text-[16px] mb-[16px] font-poppins">
              Elevate your visual presence with captivating design and precision editing. Our talented team brings your creative vision to life through impactful imagery, graphics, and visual storytelling.
              </p>
              
              <button className="bg-black hover:bg-gray-900 duration-700 py-3 rounded-full items-center">
                <Link
                  to={"/designingandediting"}
                  className="text-[#dedede] duration-700 hover:text-[#adadad] px-[20px] font-semibold"
                >
                  Explore More
                </Link>
              </button>
            </div>
          </div>
        </div>
      </Container4>


      <Container4>
        <div className="xl:py-[80px] py-[40px] xl:px-0 px-[20px] grid lg:grid-cols-5 grid-cols-2">
          <div className="lg:col-span-2  col-span-2 my-auto  lg:pb-[0px] pb-[20px]">
            <div className="md:pr-[65px] pr-[0px]">
              <h2 className="text-[32px] font-poppins text-[#000000] mb-[16px] fo">
              Media Production
              </h2>
              <p className="text-[#657676] xl:text-[20px] sm:text-[18px] text-[16px] mb-[16px] font-poppins">
              From concept to execution, our media production services encompass video, audio, and multimedia content creation, ensuring compelling storytelling that captivates your audience.

              </p>
              <button className="bg-black hover:bg-gray-900 duration-700 py-3 rounded-full items-center">
                <Link
                  to={"/mediaproduction"}
                  className="text-[#dedede] duration-700 hover:text-[#adadad] px-[20px] font-semibold"
                >
                  Explore More
                </Link>
              </button>
            </div>
          </div>
          <div className="lg:col-span-3  col-span-2  lg:ml-auto  max-w-[643px] max-h-[468px] lg:mx-auto  ">
            <img
              src={img1}
              className="w-[100%] h-[100%]  md:mb-0 my-auto xl:mt-0 mt-[20px]"
              alt=""
            />
          </div>
        </div>
      </Container4>

      <Container4>
        <div className="xl:py-[80px] py-[40px] xl:px-0 px-[20px] grid lg:grid-cols-5 grid-cols-2">
          <div className="lg:col-span-3  col-span-2 lg:mr-auto lg:mb-0 mb-[20px] max-w-[643px] max-h-[468px] lg:mx-auto  ">
            <img
              src={img2}
              className="w-[100%] h-[100%]  md:mb-0 my-auto "
              alt=""
            />
          </div>
          <div className="lg:col-span-2  col-span-2 my-auto lg:mt-0 lg-mt-[16px]">
            <div className="lg:pl-[65px] md:pr-[65px] lg:pr-[0px] pl-[0px]">
              <h2 className="text-[32px] font-poppins text-[#000000] mb-[16px] fo">
              Creative Production
              </h2>
              <p className="text-[#657676] xl:text-[20px] sm:text-[18px] text-[16px] mb-[16px] font-poppins">
              Immerse your audience in captivating narratives with our creative production services, spanning from ideation to execution, delivering innovative and engaging content.
              </p>
              <button className="bg-black hover:bg-gray-900 duration-700 py-3 rounded-full items-center">
                <Link
                  to={"/creativeproduction"}
                  className="text-[#dedede] duration-700 hover:text-[#adadad] px-[20px] font-semibold"
                >
                  Explore More
                </Link>
              </button>
            </div>
          </div>
        </div>
      </Container4>

      <Container4>
        <div className="xl:py-[80px] py-[40px] xl:px-0 px-[20px] grid lg:grid-cols-5 grid-cols-2">
          <div className="lg:col-span-2  col-span-2 lg:pb-[0px] pb-[20px] my-auto  ">
            <div className="md:pr-[65px] pr-[0px]">
              <h2 className="text-[32px] font-poppins text-[#000000] mb-[16px] fo">
              CGI & 2D, 3D
              </h2>
              <p className="text-[#657676] xl:text-[20px] sm:text-[18px] text-[16px] mb-[16px] font-poppins">
              Achieve immersive visual experiences with our cutting-edge CGI and 2D/3D animation services. We bring imagination to life, creating stunning visual content that captivates and enthralls.
              </p>
              <button className="bg-black hover:bg-gray-900 duration-700 py-3 rounded-full items-center">
                <Link
                  to={"/cgi"}
                  className="text-[#dedede] duration-700 hover:text-[#adadad] px-[20px] font-semibold"
                >
                  Explore More
                </Link>
              </button>
            </div>
          </div>
          <div className="lg:col-span-3 col-span-2  lg:ml-auto  max-w-[643px] max-h-[468px] lg:mx-auto  ">
            <img
              src={img3}
              className="w-[100%] h-[100%]  md:mb-0 my-auto xl:mt-0 mt-[20px]"
              alt=""
            />
          </div>
        </div>
      </Container4>

      <Container4>
        <div className="xl:py-[80px] py-[40px] xl:px-0 px-[20px] grid lg:grid-cols-5 grid-cols-2">
          <div className="lg:col-span-3  col-span-2 lg:mr-auto lg:mb-0 mb-[20px] max-w-[643px] max-h-[468px] lg:mx-auto  ">
            <img
              src={img4}
              className="w-[100%] h-[100%]  lg:mb-0  my-auto "
              alt=""
            />
          </div>
          <div className="lg:col-span-2  col-span-2 my-auto lg:mt-0 lg-mt-[16px]">
            <div className="lg:pl-[65px] md:pr-[65px] lg:pr-[0px] pl-[0px]">
              <h2 className="text-[32px] font-poppins text-[#000000] mb-[16px] fo">
               Website and App Development
              </h2>
              <p className="text-[#657676] xl:text-[20px] sm:text-[18px] text-[16px] mb-[16px] font-poppins">
              Leverage responsive and user-centric design with our website and app development services. Our expert team delivers seamless digital experiences that drive engagement and conversions.
              </p>
              
              <button className="bg-black hover:bg-gray-900 duration-700 py-3 rounded-full items-center">
                <Link
                  to={"/websiteandappdevelopment"}
                  className="text-[#dedede] duration-700 hover:text-[#adadad] px-[20px] font-semibold"
                >
                  Explore More
                </Link>
              </button>
            </div>
          </div>
        </div>
      </Container4>

      <Container4>
        <div className="xl:py-[80px] py-[40px] xl:px-0 px-[20px] grid lg:grid-cols-5 grid-cols-2">
          <div className="lg:col-span-2  col-span-2 lg:pb-[0px] pb-[20px] my-auto  ">
            <div className="md:pr-[65px] pr-[0px]">
              <h2 className="text-[32px] font-poppins text-[#000000] mb-[16px] fo">
              Web Application
              </h2>
              <p className="text-[#657676] xl:text-[20px] sm:text-[18px] text-[16px] mb-[16px] font-poppins">
              Streamline your business operations with custom web applications tailored to your specific needs. Our solutions enhance efficiency, productivity, and user experience.
              </p>
              <button className="bg-black hover:bg-gray-900 duration-700 py-3 rounded-full items-center">
                <Link
                  to={"/webapplication"}
                  className="text-[#dedede] duration-700 hover:text-[#adadad] px-[20px] font-semibold"
                >
                  Explore More
                </Link>
              </button>
            </div>
          </div>
          <div className="lg:col-span-3 col-span-2  lg:ml-auto  max-w-[643px] max-h-[468px] lg:mx-auto  ">
            <img
              src={img3}
              className="w-[100%] h-[100%]  md:mb-0 my-auto xl:mt-0 mt-[20px]"
              alt=""
            />
          </div>
        </div>
      </Container4>

      <Container4>
        <div className="xl:py-[80px] py-[40px] xl:px-0 px-[20px] grid lg:grid-cols-5 grid-cols-2">
          <div className="lg:col-span-3  col-span-2 lg:mr-auto lg:mb-0 mb-[20px] max-w-[643px] max-h-[468px] lg:mx-auto  ">
            <img
              src={img4}
              className="w-[100%] h-[100%]  lg:mb-0  my-auto "
              alt=""
            />
          </div>
          <div className="lg:col-span-2  col-span-2 my-auto lg:mt-0 lg-mt-[16px]">
            <div className="lg:pl-[65px] md:pr-[65px] lg:pr-[0px] pl-[0px]">
              <h2 className="text-[32px] font-poppins text-[#000000] mb-[16px] fo">
              ERP (Enterprise Resource Planning)
              </h2> 
              <p className="text-[#657676] xl:text-[20px] sm:text-[18px] text-[16px] mb-[16px] font-poppins">
              Optimize your business processes and data management with our ERP solutions, helping you integrate and manage core business functions seamlessly.
              </p>
              
              <button className="bg-black hover:bg-gray-900 duration-700 py-3 rounded-full items-center">
                <Link
                  to={"/erps"}
                  className="text-[#dedede] duration-700 hover:text-[#adadad] px-[20px] font-semibold"
                >
                  Explore More
                </Link>
              </button>
            </div>
          </div>
        </div>
      </Container4>

      

      {/* <div className="grid grid-cols-2 gap-6 xl:pb-[0px] pb-[20px] ">
        <div className="col-span-1 lg:block hidden max-w-[750px] max-h-[497px]">
          <img src={ont} className="w-[100%] h-[100%]" alt="" />
        </div>
        <div className="lg:col-span-1 col-span-2  md:px-[80px] sm:px-[20px] px-[20px]">
          <h2 className="xl:text-[50px] text-[35px] font-poppins text-[#001817] mb-[15px] leading-[60px]">
            Other nerdy <br className="lg:block hidden" /> things that we do
          </h2>

          <ul className="sm:ml-[20px] mb-[20px] leading-8">
            <li className="flex items-center sm:gap-5 gap-2 sm:text-[20px] font-poppins text-[#666666]">
              <IoStopCircle />
              <a href="#">Augmented & Virtual Reality</a>
            </li>

            <li className="flex items-center sm:gap-5 gap-2 sm:text-[20px] font-poppins text-[#666666]">
              <IoStopCircle />
              <a href="#">Blockchain Technology</a>
            </li>

            <li className="flex items-center sm:gap-5 gap-2 sm:text-[20px] font-poppins text-[#666666]">
              <IoStopCircle />
              <a href="#">Cloud Infrastructure & Data Security</a>
            </li>

            <li className="flex items-center sm:gap-5 gap-2 sm:text-[20px] font-poppins text-[#666666]">
              <IoStopCircle />
              <a href="#">Enterprise Software Development</a>
            </li>

            <li className="flex items-center sm:gap-5 gap-2 sm:text-[20px] font-poppins text-[#666666]">
              <IoStopCircle />
              <a href="#">Business and Technology Consulting</a>
            </li>

            <li className="flex items-center sm:gap-5 gap-2 sm:text-[20px] font-poppins text-[#666666]">
              <IoStopCircle />
              <a href="#">Artificial Intelligence & Machine Learning </a>
            </li>

            <li className="flex items-center sm:gap-5 gap-2 sm:text-[20px] font-poppins text-[#666666]">
              <IoStopCircle />
              <a href="#">Quality Assurance & Testing</a>
            </li>

            <li className="flex items-center sm:gap-5 gap-2 sm:text-[20px] font-poppins text-[#666666]">
              <IoStopCircle />
              <a href="#">Search Engine Optimisation</a>
            </li>
          </ul>
          <button className="bg-slate-800 text-[#FFFFFF] px-[40px] py-[14px] font-semibold mt-[23px] rounded-full">
            <Link to={'/othertechnoliges'}>Explore More</Link>
          </button>
        </div>
      </div>
      <div className="bg-[#2b2a2a]">
        <div className="max-w-[1352px] mx-auto ">
          <div className="py-[80px] grid lg:grid-cols-5 grid-cols-2 gap-5">
            <div className="lg:col-span-2 col-span-2 max-w-[564px] lg:mx-0 mx-auto max-h-[575px]">
              <img src={ship} className="w-[100%] h-[100%]  " alt="" />
            </div>
            <div className="lg:col-span-3 col-span-2  my-auto lg:px-0 sm:px-[40px] px-[20px]">
              <h2 className="text-[50px] font-poppins text-[#FFFFFF] mb-[15px] leading-[60px]">
                The Elusive <br className="lg:block hidden" /> Unicorn?
              </h2>
              <p className="text-[20px] text-[#FFFFFF] mb-[31px] font-poppins">
                Look no further if you are searching for a ready-to-use tool.
                Many companies seek the IT unicorn who can bao-ga-liao ( in
                Hokkien dialect, meaning doing everything, covering all roles).
                From our experience, it takes a village to build a solid digital
                solution. We liken it to building a ship in the 20th century,
                where hundreds of craftsmen added his little piece to the vassal
                while keeping their sight on the overall ship architecture.
              </p>
              <button className="bg-[#ffd179] text-[#1a1a1a] px-[35px] py-[14px] font-semibold mt-[10px] md:mt-[40px] rounded-full">
               <Link to={'/contact'}>Work with us</Link>
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

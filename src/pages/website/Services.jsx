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
              Creating awesome applications and websites is part of our daily
              life at Hipster. We offer customized and off-the-shelf solutions.{" "}
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
              No, we don’t sell <br className="lg:block hidden"/> technology. <br className="lg:block hidden" /> We sell solutions.
            </h2>
            <p className="sm:text-[18px] text-[16px] font-poppins  text-[#ffffff] mb-[19px]">
              Software isn’t cookie-cutter, neither is it just the application
              of technology. It’s creating a solution that can meet the
              company’s needs, goals, budget and works well for the people using
              them.
            </p>
          
        </div>
      </div>
      <Container4>
        <div className="xl:py-[80px] py-[40px] xl:px-0 px-[20px] grid lg:grid-cols-5 grid-cols-2">
          <div className="lg:col-span-2  col-span-2 my-auto  lg:pb-[0px] pb-[20px]">
            <div className="md:pr-[65px] pr-[0px]">
              <h2 className="text-[32px] font-poppins text-[#000000] mb-[16px] fo">
                Web App Development
              </h2>
              <p className="text-[#657676] xl:text-[20px] sm:text-[18px] text-[16px] mb-[16px] font-poppins">
                We build websites that thrive at the intersection of business
                goals and user needs. In a world where most web traffic is on
                mobile, our team creates responsive, fast, and secure websites
                that work elegantly across mobile and desktop.
              </p>
              <button className="bg-black hover:bg-gray-900 duration-700 py-3 rounded-full items-center">
                <Link
                  to={"/webdevelopment"}
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
              Mobile App Development
              </h2>
              <p className="text-[#657676] xl:text-[20px] sm:text-[18px] text-[16px] mb-[16px] font-poppins">
              Hipster offers a broad spectrum of mobile app development services, including iOS, Android, React Native, and Flutter development. More importantly, we are here to support you through pre and post-development via prototyping, testing, technical guidance, and more.
              </p>
              <button className="bg-black hover:bg-gray-900 duration-700 py-3 rounded-full items-center">
                <Link
                  to={"/mobileappdevelopment"}
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
              UI/UX
              </h2>
              <p className="text-[#657676] xl:text-[20px] sm:text-[18px] text-[16px] mb-[16px] font-poppins">
              The best designs instill confidence in your brand and product. They inspire users to purchase, use and evangelise your product. Our designers conduct user research and create information architecture and prototypes to upkeep your brand’s visual identity and ensure that your product is showcased appropriately in the digital space.
              </p>
              <button className="bg-black hover:bg-gray-900 duration-700 py-3 rounded-full items-center">
                <Link
                  to={"/uiuxdesign"}
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
              Software Development
              </h2>
              <p className="text-[#657676] xl:text-[20px] sm:text-[18px] text-[16px] mb-[16px] font-poppins">
              Creating tailor-made software for your business needs is our forte! Our team works with a flow to cover every stage from inception to completion in understanding your requirements through to testing and final releases.
              </p>
              <p className="text-[#657676] xl:text-[20px] sm:text-[18px] text-[16px] mb-[16px] font-poppins">
Look no further if you are searching for a ready-to-use tool. Hipster offers a wide range of convenient solutions that work across industries. Examples include hybrid event management, learning management, customer loyalty, and social community platforms.
              </p>
              <button className="bg-black hover:bg-gray-900 duration-700 py-3 rounded-full items-center">
                <Link
                  to={"/softwaredevelopment"}
                  className="text-[#dedede] duration-700 hover:text-[#adadad] px-[20px] font-semibold"
                >
                  Explore More
                </Link>
              </button>
            </div>
          </div>
        </div>
      </Container4>

      {/* <Container4>
        <div className="xl:py-[80px] py-[40px] xl:px-0 lg:px-[30px] grid lg:grid-cols-5 grid-cols-2">
          <div className='lg:col-span-2  col-span-2 my-auto lg:mx-0 md:mx-[110px] sm:mx-[30px] mx-[20px] '>
            <div className='md:pr-[65px] pr-[0px]'>
              <h2 className='text-[32px] font-poppins text-[#000000] mb-[16px] fo'>Web App Development</h2>
              <p className='text-[#657676] xl:text-[20px] sm:text-[18px] text-[16px] mb-[16px] font-poppins'>We build websites that thrive at the intersection of business goals and user needs. In a world where most web traffic is on mobile, our team creates responsive, fast, and secure websites that work elegantly across mobile and desktop.</p>
              <button className='bg-black hover:bg-gray-900 duration-700 py-3 rounded-full items-center'>
                <Link to={""} className='text-[#dedede] duration-700 hover:text-[#adadad] px-[20px] font-semibold'>Explore More</Link>
              </button>
            </div>
          </div>
          <div className='lg:col-span-3  col-span-2 md:px-0 px-[20px] lg:ml-auto lg:mx-0 max-w-[643px] max-h-[468px] mx-auto  '>
            <img src={img3} className='w-[100%] h-[100%]  md:mb-0 my-auto xl:mt-0 mt-[20px]' alt="" />
          </div>
        </div>
      </Container4>


      <Container4>
        <div className="xl:py-[80px] py-[40px] xl:px-0 lg:px-[30px] grid lg:grid-cols-5 grid-cols-2">
          <div className='lg:col-span-3  col-span-2 md:px-0 px-[20px] lg:mr-auto lg:mx-0 max-w-[643px] max-h-[468px] mx-auto  '>
            <img src={img4} className='w-[100%] h-[100%]  md:mb-0 my-auto ' alt="" />
          </div>
          <div className='lg:col-span-2  col-span-2 my-auto lg:mx-0 md:mx-[110px] sm:mx-[30px] mx-[20px] xl:mt-0 mt-[20px]'>
            <div className='md:pl-[65px] pl-[0px]'>
              <h2 className='text-[32px] font-poppins text-[#000000] mb-[16px] fo'>Web App Development</h2>
              <p className='text-[#657676] xl:text-[20px] sm:text-[18px] text-[16px] mb-[16px] font-poppins'>We build websites that thrive at the intersection of business goals and user needs. In a world where most web traffic is on mobile, our team creates responsive, fast, and secure websites that work elegantly across mobile and desktop.</p>
              <button className='bg-black hover:bg-gray-900 duration-700 py-3 rounded-full items-center'>
                <Link to={""} className='text-[#dedede] duration-700 hover:text-[#adadad] px-[20px] font-semibold'>Explore More</Link>
              </button>
            </div>
          </div>
        </div>
      </Container4> */}

      <div className="grid grid-cols-2 gap-6 xl:pb-[0px] pb-[20px] ">
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
            Explore More
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
      </div>
    </div>
  );
}

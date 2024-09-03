import React from "react";
import Container5 from "../../components/Container5";
import {
  caseGalob1,
  casefrdesign,
  caseleft,
  caseright,
  casescreenleft,
  casescreenright,
  componentscaled,
  hps,
} from "../../assets";
import Container4 from "../../components/Container4";
import { Link } from "react-router-dom";

const Case = () => {
  return (
    <>
      <div className='mt-[80px] md:mt-[110px]'>
        

        <div className="max-w-[1300px] mx-auto xl:px-0 px-[20px] mb-[48px]">
          <h2>
            <span className="md:text-[30px] sm:text-[24px] text-[16px] font-poppins">
              <span className="md:text-[30px] sm:text-[24px] text-[16px] text-[#00b0ab] font-poppins font-semibold">
                {" "}
                Social Media 
              </span> — Management
            </span>

            <div className="mt-[10px]">
              <span className="text-[22px] sm:text-[27px] md:text-[32px] lg:text-[34px] text-[#000000] font-poppins font-semibold">
              Cultivate a vibrant social media presence with our expert management services. From content creation to community engagement, we help you leverage social platforms to enhance brand visibility and connect with your audience.
              </span>
            </div>
          </h2>
        </div>
        <div className='w-full h-full'>
          <img className='w-full h-full' src={hps} alt="Case Image" />
        </div>
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
                to={"/webdevelopment"}
              >
                Web Development
              </Link>
            </li>

            <li className="bg-[#ccefee] duration-500  hover:bg-[#00fff7] mb-[20px] mr-[10px] py-[18px] px-[32px]  rounded-full hover:text-[#FFFFFF]  text-[#001817]">
              <Link
                className="  text-[18px] font-poppins hover:text-[#FFFFFF] duration-1000 text-[#001817]"
                to={"/uiuxdesign"}
              >
               Graphic Design Services
              </Link>
            </li>

            <li className="bg-[#ccefee] duration-1000  hover:bg-[#73dedb] mb-[20px] mr-[10px] py-[18px] px-[32px] rounded-full">
              <Link
                className="text-[18px] font-poppins hover:text-[#FFFFFF] duration-1000 text-[#001817]"
                to={"/shareapp"}
              >
                Product Design
              </Link>
            </li>
          </ul>
        </div>
      </div>





      <div className="my-[50px] xl:px-0 px-[20px] font-poppins">
        <Container4>
          <h5 className="sm:text-center text-[24px] sm:text-[36px] md:text-[48px]">
            Designing a website for multiple{" "}
            <span className="text-[#00b1ac]">target audiences</span>
          </h5>
          <p className="sm:text-center mt-[20px] sm:max-w-[60%] mx-auto text-[#6B7D7C] text-[16px] sm:text-[18px] md:text-[20px]">
            Designing a website that caters to multiple target audiences can be
            a challenge, but it is definitely possible with careful planning and
            execution. In Hipster, we have created clear menus and navigation
            targeted at the business and consumer users.
          </p>
          <div className="mt-[50px] grid grid-cols-1 md:grid-cols-2 font-poppins">
            <div className="sm:pe-[24px] md:pe-[48px]">
              <p className="text-[16px] sm:text-[20px] md:text-[24px] font-medium">
                Using simple language, CASE’s website hero image filters the
                users to the correct site for consumer/business
              </p>
              <div className="mt-[30px] md:mt-[50px]">
                <img src={caseleft} alt="Case Left" />
              </div>
            </div>
            <div className="sm:ps-[24px] md:ps-[48px] sm:mt-0 mt-[20px] dashboard">
              <p className="text-[16px] sm:text-[20px] md:text-[24px] font-medium">
                Options to toggle between the consumer/business sites are always
                visible in the respective menu.
              </p>
              <div className="mt-[30px] md:mt-[50px]">
                <img src={caseright} alt="Case Right" />
              </div>
            </div>
          </div>
        </Container4>
      </div>

      <div className="videoContenar md:py-[100px] sm:py-[80px] py-[12px]">
        <div className="flex justify-center">
          <video autoPlay muted loop className="videocontent">
            <source
              src={
                "https://hipster-inc.com/wp-content/uploads/2023/07/casetrustVideo.mp4"
              }
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto xl:px-0 px-[20px] mt-[80px] md:mt-[150px] mb-[50px] font-poppins">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="me-[20px] flex items-center">
            <div>
              <h2 className="text-[24px] sm:text-[36px] md:text-[48px] mx-w-[400px] font-medium">
                Another key <br /> component,
                <br /> visual appeal
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#6B7D7C] mt-[20px]">
                For this project, we wanted the CASE and CaseTrust websites to
                have a modern, minimalistic design that was easy to navigate. We
                used a clean layout with ample white space and clear, concise
                text to help users find what they are looking for quickly and
                easily.
              </p>
            </div>
          </div>
          <div className="sm:ps-[10px] md:ps-[30px]">
            <img src={componentscaled} alt="Component Scaled" />
          </div>
        </div>
      </div>

      <Container5 />

      <div className="max-w-[1200px] mx-auto sm:pt-[80px] md:pt-[150px] pb-[80px] md:pb-[150px] flex items-center font-poppins">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="caseMobileScreen order-2 md:order-1">
            <img
              src={casescreenleft}
              alt="Case Screen Left"
              className="h-full"
            />
          </div>
          <div className="caseMobileScreen order-1 md:order-2">
            <img
              src={casescreenright}
              alt="Case Screen Right"
              className="h-full"
            />
          </div>
        </div>
      </div>


      <div className="md:py-[80px] sm:py-[50px]  py-[34px]">
        <div className=" lg:mx-[198px] md:mx-[80px] mx-[30px] ">
          <div>
            <h2 className="text-center text-[28px] md:text-[36px] lg:text-[42px] text-[#000000] font-poppins">
              <Link className="bbn" to={"/physicleteam"}>
                Next Case Study
              </Link>
            </h2>
            <div className="py-[30px] md:py-[40px] lg:py-[50px] text-center">
              <div className="text-[18px] md:text-[20px] lg:text-[24px] font-poppins text-[#001817] mb-[10px] md:mb-[12px] lg:mb-[15px]">
                <Link to={"/physicleteam"}>Tbit — Team Engagement</Link>
              </div>
              <h3 className="font-semibold text-[24px] md:text-[28px] lg:text-[32px] max-w-[100%] md:max-w-[600px] lg:max-w-[500px] mx-auto text-center leading-[30px] md:leading-[36px] lg:leading-[42px] text-[#001817] font-poppins">
                <Link className="mb-[8px] md:mb-[10px] lg:mb-[12px]" to={"/physicleteam"}>
                A physical team-building app: say no to boring activities!
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Case;

import React from "react";
import { portf } from "../../assets";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const pastData = [
    {
      data: "All",
    },
    {
      data: "Personalized Fashion",
    },
    {
      data: "Gamification in Tech",
    },
    {
      data: "On-Demand Video Solutions",
    },
    {
      data: "F&B",
    },
    {
      data: "Match Making Platform",
    },
    {
      data: "Education Tech",
    },
    {
      data: "Sustainability",
    },
    {
      data: "Mental Health",
    },
    {
      data: "Event Management",
    },
  ];

  return (
    <>
      <div className="sm:mt-[50px]">
        <div className="font-poppins px-[15px] ">
          <h2 className="md:text-[32px]  text-[28px] mb-[24px]  font-medium md:leading-[1.2] leading-[28px]">
            <strong>Past Solutions</strong>
          </h2>

          <ul className="md:text-[20px] text-[14px] font-normal cursor-pointer flex md:gap-3 gap-[5px] flex-wrap">
            {pastData.map((data, i) => {
              return (

                <li key={i} className="relative  overflow-hidden px-10 py-[13px] bg-transparent text-gray-800 font-medium border border-gray-800 rounded-full group">
                <span className="absolute bg-[#000] inset-0 w-full h-full hover:bg-blue-500 transition-transform transform -translate-x-full group-hover:translate-x-0"></span>
                <span className="relative  text-gray-800 font-poppins  font-semibold group-hover:text-white">
                  <Link to={""}>{data.data}</Link>
                </span>
              </li>


                // <li className="pastHover" key={i}>
                //   {data.data}
                //   <div className="hoverColorg "></div>
                // </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 col-span-1 xl:px-[0px] px-[20px] mt-[50px] mb-[30px]">
        <div className="w-[390px] h-[368px] px-[15px] ">
          <div className="animationBlog  sm:mx-auto my-[20px]">
            <h3 className="text-[#fff] text-[28px] font-medium leading-[1.2] mb-[24px] ">
              Download Our Portfolio
            </h3>
            <div className="w-[246px] animationIMG">
              <img className="w-full" src={portf} alt="" />
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <h2 className="text-[24px] font-medium py-[10px]">
              Let's Connect!
            </h2>
            <p className="text-[#001817]  text-[18px] mb-[10px] font-normal">
              Together, we'll scale milestones for your next business idea.
            </p>
            <Link to={'/contact'}>
              <button className="text-[#fff] bg-[#32373c] rounded-[30px] py-[12px] px-[22px] mt-[24px] buttonclg ">
                Send Message
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
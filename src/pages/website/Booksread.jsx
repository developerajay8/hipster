


import React from "react";
import Container6 from "../../components/Container6";
import { ios14, ir, makemobile, trdpi } from "../../assets";
import { FaRegCalendar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Portfolio from "./Portfolio";

const Booksread = () => {
  return (
    <div className="md:my-[80px] my-[20px] ">
      <Container6>

        <div className="">
          <li className="list-none text-center ">
            <Link to={''} className="rounded-3xl mr-[10px] text-[18px] font-poppins bg-[#00b1ac33] py-[10px] px-[26px]">Success Story</Link>
            <Link to={''} className="rounded-3xl text-[18px] font-poppins bg-[#00b1ac33] py-[10px] px-[26px]">Tips</Link>
          </li>

        </div>
        <div className="font-[poppins] mb-[24px] px-[15px] xl:mx-[0px] lg:mx-[40px] md:mx-[40px] sm:mx-[20px] mx-[0px]">
          <h1 className="text-[30px] md:text-[48px] pt-[20px] md:pt-[80px] leading-[1.2] text-center font-[400] ">
          10 best startup books to read at any stage of your startup journey
          </h1>
          <div className="flex items-center justify-center gap-3 mt-[25px] md:mt-[30px] pb-[24px]">
            <FaRegCalendar className=" md:text-[25px] text-[20px]" />
            <span className="md:text-[16px]  text-[14px]">  February 28, 2019</span>
          </div>

          <div className=" md:pt-[20px] pt-[20px]">
            <img
              className="w-full mt-[20px] mb-[30px]"
              src={ir}
              alt=""
            />
          </div>


          <div className="mt-[40px]">
            {/* <h3 className="sm:text-[28px] text-[22px] mt-[40px] mb-[30px] font-bold">All you need to know about iOS 14- Features, Compatibility, Release Date, and Reviews</h3> */}
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            Every business needs to make sure that they are working on their objectives and forming strategies based on their vision and mission. According to the latest records, every 9 startups out of 10 fail in their first year. The majority of startups tend to stray away from their mission and vision statements and start focusing on profits. And this is where the problem begins, profitability. Businesses fail when revenue overcomes the objectives and the mission statement.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            You may already be knowing that the best way for survival is to keep on gathering knowledge no matter what stage your startup is at. And this is where the real problem begins. There are several books on startups and how to manage a company that choosing the right ones can be a problem.
            </p>

            {/* <h3 className="sm:text-[28px] text-[22px] mt-[40px] mb-[30px] font-bold">How Progressive Application is developed:</h3>  */}

            <p className=" md:text-[24px] taxt-[18px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            <strong>10 best startups books to read:</strong>
            </p>


            <ul className="list-decimal sm:ml-[70px] ml-[30px] leading-[37px] mt-[20px] text-[20px] text-[#222222] font-poppins">
              <li><strong>Zero to One</strong> by Peter Thiel</li>
              <li><b>The Innovator Dilemma </b>by Clayton M. Christensen</li>
              <li><b>Founders at work</b> by Jessica Livingston</li>
              <li><b>Crossing the chasm</b> by Geoffery A. Moore</li>
              <li><b>Screw it lets do</b> it by Richard Branson</li>
              <li><b>Never too late to Startup</b> by Rob Kornblum</li>
              <li><b>Creativity Inc.</b> by Ed Catmull</li>
              <li><b>Start with Why</b> by Simon Sinek</li>
              <li><b>The power of broke</b> by Daymond John</li>
              <li><b>Will it Fly</b> by Pat Flynn</li>
            </ul>



            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            Click here: <Link className="text-[#006a83] hover:text-[#000000]" to={'/'}>Mobile App Development Agency</Link>
            </p>
            



          </div>

          

          


        </div>


        <div>
          <Portfolio />
        </div>
      </Container6>
    </div>
  );
};

export default Booksread;

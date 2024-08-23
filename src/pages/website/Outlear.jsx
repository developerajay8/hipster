


import React from "react";
import Container6 from "../../components/Container6";
import { ios14, makemobile, responsive, tableate, trdpi } from "../../assets";
import { FaRegCalendar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Portfolio from "./Portfolio";

const Outlear = () => {
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
            Takeaways from the book “Outlier” by Malcolm Gladwell
          </h1>
          <div className="flex items-center justify-center gap-3 mt-[25px] md:mt-[30px] pb-[24px]">
            <FaRegCalendar className=" md:text-[25px] text-[20px]" />
            <span className="md:text-[16px]  text-[14px]"> February 28, 2019</span>
          </div>

          <div className=" md:pt-[20px] pt-[20px]">
            <img
              className="w-full mt-[20px] mb-[30px]"
              src={tableate}
              alt=""
            />
          </div>


          <div className="mt-[40px]">
            {/* <h3 className="sm:text-[28px] text-[22px] mt-[40px] mb-[30px] font-bold">All you need to know about iOS 14- Features, Compatibility, Release Date, and Reviews</h3> */}
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Let us start by sharing our favorite quote from this book:
            </p>
            <h3 className="sm:text-[28px] text-[22px] mt-[40px] mb-[30px] font-bold"><strong>Who we are cannot be separated from where we are</strong></h3>


            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Malcolm Gladwell            </p>



            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Well, we could not agree more with this statement; an individual carries his/her birthplace with him no matter where he/she goes. We cannot forget our beliefs and values that are learned from our elders. Gladwell conducted his research to understand human capabilities and how they can be used efficiently in whatever possible manner. The human mind works in mysterious ways and with society evolving every year we have to be on our toes to be in the game. Is there any formula for winning or surviving?</p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Let us begin by understanding if there exists a formula for success. Adding to Gladwell’s research one thing is understood, there are no shortcuts to success. Gladwell’s book can be really helpful for gaining that edge which will shine the spotlight on you. Yes, the key to success depends on how one trains his/her mind and it all starts from self-recognition.</p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              There’s no alternative for hard work and practice, and the way to success can only be achieved by honing your skills and knowledge base.</p>


            <h3 className="sm:text-[28px] text-[22px] mt-[40px] mb-[30px] font-bold"><strong>Takeaways from the book:</strong></h3>

            <ul className="list-decimal sm:ml-[70px] ml-[30px] leading-[27px] mt-[20px] sm:text-[20px] 
            text-[16px] text-[#222222] font-poppins">
              <li className="mb-[14px]">A person can master anything if he practices that for 10,000 hours minimum. After practicing for these many hours, there’s no need to worry about having missed anything.</li>
              <li className="mb-[14px]">Genius is overrated and one can achieve anything with enough practice.</li>
              <li className="mb-[14px]">Gladwell has made a really strong point about opportunities. Opportunities are there for everyone and only those who can recognize them will get them.</li>
              <li className="mb-[14px]">The most critical pillar towards success is Timing, everything happens on its own time. You cannot rush success or learning. They have their timing and won’t happen if the timing isn’t right.</li>
              <li className="mb-[14px]">An individual’s upbringing plays a major role in defining their future success.</li>
              <li className="mb-[14px]">Work can be enjoyed too if a person feels that he or she is doing something meaningful.</li>
              <li className="mb-[14px]">Gladwell makes an amazing point about the passing down of values and beliefs. Values and beliefs vary from country to country, culture to culture, etc.</li>
              <li className="mb-[14px]">Every work and process has a saturation point after which putting in efforts or investments won’t make any difference.</li>

            </ul>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              After reading this book we felt that we should share some points with everyone. These learnings can be applied to both professional and personal lives. And not just life, these learnings have given us beautiful insights for the future. If one can apply these from the customer’s point of view, then we can understand their needs better.</p>




          </div>




        </div>


        <div>
          <Portfolio />
        </div>
      </Container6>
    </div>
  );
};

export default Outlear;

import React from "react";
import Container6 from "../../components/Container6";
import { FaRegCalendar } from "react-icons/fa6";
import Slider from "react-slick";

import {
  Artifical_intelligence,
  Artificial_Intelligence,
  Copy_ofAI_Artificial,
  Googleimagefull,
  Mansplaining_bro,
  Questionsimg,
  blog14,
  fourthslidercompanant,
  ls1,
  ls10,
  ls11,
  ls2,
  ls3,
  ls4,
  ls5,
  ls6,
  ls7,
  ls8,
  ls9,
  questions,
  secondslidermobileimage,
  sliderIphoneImage,
  speechSpeaknowimg,
} from "../../assets";
import Portfolio from "./Portfolio";

const Intelligence = () => {

  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const componant = [<FirstSlider />, <SecondSlider />];
  const secondslider = [<Thirdslider />, <Fourthslider />];

  return (
    <div className="my-[80px]">
      <Container6>
        <div className="px-[15px] mb-[24px] font-[poppins]">
          <div className="flex justify-center gap-2">
            <div className="text-[18px] md:px-[20px] mb-[30px] mt-[20px] px-[15px] py-[4px] md:py-[8px] bluerbgacolor">
              Digital Solution
            </div>
            <div className="text-[18px] md:px-[20px] mb-[30px] mt-[20px] px-[15px] py-[4px] md:py-[8px] bluerbgacolor">
              Technologies
            </div>
          </div>
          <h1 className=" text-[30px] md:text-[48px] pt-[20px] md:pt-[50px] leading-[1.2] text-center font-[400] ">
            ARTIFICIAL INTELLIGENCE FOR PRODUCT OWNERS
          </h1>
          <div className="flex items-center justify-center gap-3 mt-[25px] md:mt-[30px] pb-[24px]">
            <FaRegCalendar className=" md:text-[25px] text-[20px]" />
            <span className="md:text-[16px]  text-[14px]">
              February 14, 2023
            </span>
          </div>
          <div className=" md:pt-[60px] pt-[30px]">
            <img
              className="w-full mt-[20px] mb-[30px]"
              src={blog14}
              alt=""
            />
          </div>

          <div>
            <p className=" text-[28px] md:text-[32px] font-[600] text-[#000] leading-[1.2] mt-[40px] mb-[30px]">
              When computer systems can make decisions on various things that
              <br />
              traditionally required <br /> human intelligence
            </p>
          </div>
          <div className=" grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="flex items-center">
              <h4 className="md:text-[36px] font-[600] mt-[40px] mb-[30px] text-[26px] leading-[1.2]">
                Ok,
                <br /> WHAT is it ???
              </h4>
            </div>
            <div>
              <img width={"100%"} src={ls1} alt="" />
            </div>
          </div>

          {/* add componant  first slider */}
          <div className="mb-[50px]">
            <Slider {...settings}>
              {componant.map((componant, index) => {
                return <div key={index}>{componant}</div>;
              })}
            </Slider>
          </div>

          <div>
            <h2 className="text-center font-[600] md:text-[32px] text-[28px] pt-[50px] md:pt-[100px] pb-[30px] leading-[1.2]">
              Our favourite, Google search
            </h2>
            <div className="flex justify-center">
              <img src={ls4} alt="" />
            </div>
            <div>
              <p className=" text-center mt-[50px] md:mt-[100px] md:text-[20px] text-[16px] md:leading-[32px] leading-[28px]">
                RankBrain is a machine learning (AI) that Google uses to sort
                the search results. It also helps Google process and understand
                search queries.
              </p>
            </div>
          </div>

          <div className="mb-[50px]">
            <Slider {...settings}>
              {secondslider.map((componant, index) => {
                return <div key={index}>{componant}</div>;
              })}
            </Slider>
          </div>

          <div>
            <img
              className="mb-[30px] mx-[50px]"
              src={ls7}
              alt=""
            />
          </div>

          <div className="grid md:grid-cols-2 pt-6 grid-cols-1  md:gap-6">
            <div>
              <h2 className="mt-[40px] mb-[30px] text-[36px]  font-[600]">
                Ok so are ALL of those using the same AI ?
              </h2>
            </div>
            <div>
              <img className="w-[100px] h-[100px] " src={ls8} alt="" />
            </div>
          </div>

          <div className=" my-[80px] grid grid-cols-1 md:grid-cols-2  md:gap-5">
            <div>
              <img src={ls9} alt="" />
            </div>
            <div>
              <ul className="h-full mt-[40px] md:mt-[0px] list-disc text-[16px] md:text-[20px] md:leading-[32px] leading-[28px] ml-[40px]  flex flex-col justify-center">
                <li className="pb-[15px]">Machine Learning</li>
                <li className="pb-[15px]">Deep Learning</li>
                <li className="pb-[15px]">Neutral Network</li>
                <li className="pb-[15px]">Natural Language Processing</li>
                <li className="pb-[15px]">Knowledge Base</li>
                <li className="pb-[15px]">Expert Systems</li>
                <li className="pb-[15px]">Computer Vision</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 my-[50px]">
            <div className="flex justify-center items-center">
              <h2 className="text-[32px] leading-[1.2] font-[600]">
                As an SME owner <br /> or entrepreneur <br /> Product Manager, <br /> How is it
                relevant <br /> to me ?
              </h2>
            </div>
            <div>
              <img src={ls10} alt="" />
            </div>
          </div>
          {/* image add full width */}
          <div className=" md:py-[100px]">
            <img  className="w-full" src={ls11} alt="" />
          </div>
          {/* ............ */}

          {/* slider componant add  */}



          {/* .......................... */}


          <div className="mb-[50px]">
            <h2 className="text-[32px] font-[600] mt-[40px] mb-[30px]">Tools</h2> 
            <div className="grid  md:grid-cols-2  grid-cols-1">
              <div>
                <ul className="list-disc  md:text-[20px] text-[16px] md:pl-[40px] ml-[40px]">
                  <li className="pb-[15px]"><span className="text-[#006a83]">Pebblely AI Product Photography</span></li>
                  <li className="pb-[15px]"><span className="text-[#006a83]">vidyo.ai</span></li>
                  <li className="pb-[15px]"><span className="text-[#006a83]">ElevenLabs Prime Voice AI</span></li>
                  <li className="pb-[15px]"><span className="text-[#006a83]">Grammarly</span></li>
                  <li className="pb-[15px]"><span className="text-[#006a83]">Copy.ai</span></li>
                </ul>
              </div>

              <div>
              <ul className=" list-disc  md:text-[20px] text-[16px] md:pl-[40px] ml-[40px]">
                  <li className="pb-[15px] "><span className="text-[#006a83]">Durable: AI Website Builder and service business software</span></li>
                  <li className="pb-[15px]"><span className="text-[#006a83]">Mid-Journey – Art generated by AI</span></li>
                  <li className="pb-[15px]"><span className="text-[#006a83]">Dall E</span></li>
                  <li className="pb-[15px]"><span className="text-[#006a83]">Jasper.AI</span></li>
                  <li className="pb-[15px]"><span className="text-[#006a83]">Synthesia | #1 AI Video Generation Platform</span></li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>

        {/* add componant portfolio */}
        <Portfolio/>
        {/* .....end....... */}
      </Container6>
    </div>
  );
};

export default Intelligence;

const FirstSlider = () => {
  return (
    <div className="w-full md:my-[100px]">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-5 ">
        <div className=" flex flex-col justify-center col-span-2">
          <h2 className=" text-[28px] md:text-[32px] font-[600] mt-[40px] mb-[20px]">
            Instagram Removing our images
          </h2>
          <p className=" md:leading-[32px] leading-[28px] text-[16px] md:text-[20px] mb-[20px]">
            AI can detect and remove content that goes against our Community
            Guidelines before anyone reports it.
          </p>
        </div>
        <div className="col-span-1">
          <img className="" src={ls2} alt="" />
        </div>
      </div>
    </div>
  );
};

const SecondSlider = () => {
  return (
    <div className="w-full md:my-[100px]">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-5">
        <div className="col-span-1">
          <img className="" src={ls3} alt="" />
        </div>
        <div className=" flex flex-col justify-center col-span-2">
          <h2 className=" text-[28px] md:text-[32px] font-[600] mt-[40px] mb-[20px]">
            Instagram Removing our images
          </h2>
          <p className=" md:leading-[32px]  leading-[28px] text-[16px] md:text-[20px] mb-[20px]">
            AI can detect and remove content that goes against our Community
            Guidelines before anyone reports it.
          </p>
        </div>
      </div>
    </div>
  );
};

const Thirdslider = () => {
  return (
    <div className="w-full mt-[30px] md:pt-[200px]">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-5">
        <div className=" flex flex-col justify-center col-span-2">
          <p className=" md:leading-[32px] leading-[28px] text-[16px] md:text-[20px] ">
            Check your spam folder in Gmail. Who else filtered those emails as
            Spam if you didn ‘t?
          </p>
          <h2 className=" text-[28px] md:text-[32px] font-[600] mt-[40px] mb-[20px]">
            Gmail AI – Spam Filter
          </h2>
          <p className=" md:leading-[32px] leading-[28px] text-[16px] md:text-[20px] mb-[20px]">
            AI can detect and remove content that goes against our Community
            Guidelines before anyone reports it.
          </p>
        </div>
        <div className="col-span-1">
          <img
            className=" w-full mx-auto md:mx-0"
            src={ls6}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

const Fourthslider = () => {
  return (
    <div className="w-full mt-[30px] pt-[50px] md:my-[100px]">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-5">
        <div className="col-span-1">
          <img className="" src={ls5} alt="" />
        </div>
        <div className=" flex flex-col justify-center col-span-2">
          <h2 className="text-[28px] md:text-[32px] font-[600] mt-[40px] mb-[20px]">
            Hey, Siri…
          </h2>
          <p className=" md:leading-[32px]  leading-[28px] text-[16px] md:text-[20px] mb-[20px]">
            The same goes with Alexa, Google Assistant and many more
          </p>
          <p>
            Apple ‘ s assistant (Siri) for iOS, macOS, tvOS and watchOS devices
            that uses voice recognition and is powered by artificial
            intelligence
          </p>
        </div>
      </div>
    </div>
  );
};

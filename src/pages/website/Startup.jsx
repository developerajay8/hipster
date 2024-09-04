import React from "react";
import Container6 from "../../components/Container6";
import { FaRegCalendar } from "react-icons/fa6";
import { StartupinSingapore, blog1 } from "../../assets";
import Portfolio from "./Portfolio";

const Startup = () => {
  const prograp = [
    {
      // title: "Sustainable Transportation",
      prograp1:
        "One of the leading digital marketing agencies in India is XYZ Digital. With a team of experienced professionals, XYZ Digital offers a wide range of services, including search engine optimization (SEO), social media marketing, pay-per-click advertising, and content marketing. They have a proven track record of helping businesses increase their online visibility and drive targeted traffic to their websites.",
    },
    {
      // title: "Virtual Events and Experiences",
      prograp1:
        "Another notable agency is ABC Marketing Solutions. They specialize in creating customized digital marketing strategies tailored to the unique needs of each client. Their services include website design and development, email marketing, online reputation management, and conversion rate optimization. ABC Marketing Solutions takes a data-driven approach to ensure that their clients achieve measurable results.",
     
    },
    {
      // title: "Healthtech",
      prograp1:
        "For businesses looking to tap into the power of influencer marketing, DEF Influencer Agency is a top choice. They have a vast network of influencers across various industries and can help businesses connect with the right influencers to promote their products or services. DEF Influencer Agency also provides comprehensive campaign management and analytics to track the success of influencer marketing campaigns.",
      // boldtext: "You can also check:",
      // BlueText: "Mental health solutions",
    },
    {
      // title: "Food and Beverage",
      prograp1:
        "In conclusion, India is home to some of the best digital marketing agencies in the world. Whether you need help with SEO, social media marketing, or influencer marketing, there is a digital marketing agency in India that can meet your needs. By harnessing the power of digital marketing, businesses can reach a wider audience, increase brand awareness, and drive more conversions.",
    }
    
  ];

  return (
    <div className=" my-[80px] sm:my-[80px] md:my-[80px] font-poppins">
      <Container6>
        <div className=" sm:mb-[48px] md:mb-[48px] mb-[20px]">
          <div className="px-[15px] mb-[24px] ">
            <h1 className=" text-[30px] md:text-[48px] pt-[20px] md:pt-[80px] leading-[1.2] text-center font-[400] md:font-[600] ">
            India’s Best Digital Marketing
            </h1>
            <div className="flex items-center justify-center gap-3 mt-[30px] pb-[24px]">
              <FaRegCalendar className=" text-[20px] md:text-[25px]" />
              <span className="md:text-[16px]  text-[14px]">
                January 4, 2024
              </span>
            </div>
            <div className="pt-[40px] md:pt-[60px]">
              <img
                className="w-full mt-[5px] md:mt-[20px] mb-[30px]"
                src={StartupinSingapore}
                alt=""
              />
              <p className="text-[16px] md:text-[20px] pb-[20px] leading-[28px] md:leading-[32px] text-[#222] font-[900]">
                <b>
                India has emerged as a global hub for digital marketing, with a plethora of agencies and professionals offering top-notch services. The digital landscape in India is constantly evolving, and businesses are increasingly recognizing the importance of having a strong online presence. In this article, we will explore some of the best digital marketing agencies in India and the services they provide.
                </b>
              </p>

              {prograp.map((data, i) => {
                return (
                  <div key={i}>
                    <h2 className=" mb-[10px]">
                      <strong className="text-[28px] md:leading-[32px] leading-[28px] md:text-[32px] font-[600] ">{data.title}</strong>
                    </h2>
                    <p className=" text-[16px] md:text-[20px] md:leading-[32px] leading-[28px] mb-[10px]">{data.prograp1}</p>
                    <p className="  text-[16px] md:text-[20px] mb-[10px]">
                      {data.prograp2} <span className="text-[#006a83]">{data.Bluetext}</span>
                    </p>
                    <div className=" text-[16px] md:text-[20px] font-[800] pb-[40px] md:pb-[20px] ">
                      <strong>{data.boldtext} <span className="text-[#006a83]">{data.BlueText}</span></strong>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          
        </div>
      </Container6>
    </div>
  );
};

export default Startup;

import React from "react";
import Container6 from "../../components/Container6";
import { FaRegCalendar } from "react-icons/fa6";
import Portfolio from "./Portfolio";
import { applaunch } from "../../assets";

const Applaunch = () => {
  const data = [
    {
      title: "What is a Branding Agency?",
      prograp1:
        "A branding agency is a company that specializes in creating and managing brands. They work closely with businesses to develop a brand strategy that aligns with their goals and values. These agencies have a team of experts who are skilled in various aspects of branding, including market research, design, messaging, and communication.",
        prograp1:
        "Branding agencies in India offer a range of services to help businesses build a strong brand presence. Some of the common services provided by these agencies include:",
    },
    {
      title: "Why Hire a Branding Agency?",
      prograp1:
        "There are several reasons why businesses in India should consider hiring a branding agency:",
    },
    {
      title: "Expertise and Experience:",
      prograp1:
        "Branding agencies have a team of experts who have extensive experience in creating and managing brands. They understand the market dynamics and can help businesses develop a brand strategy that resonates with their target audience.",
    },
    {
      title: "Save Time and Resources:",
      prograp1:
        "Building a brand requires time, effort, and resources. By hiring a branding agency, businesses can save valuable time and focus on their core competencies while leaving the branding tasks to the experts.",
    },
    {
      title: "Fresh Perspective:",
      prograp1:
        "Branding agencies bring a fresh perspective to the table. They can provide valuable insights and ideas that businesses may not have considered. This fresh perspective can help businesses stand out in a crowded marketplace.",
    },
    {
      title: "Consistency:",
      prograp1:
        "A branding agency ensures consistency in brand messaging and visual identity across different platforms. This consistency helps build brand recognition and trust among customers.",
    },
    {
      title: "Choosing the Right Branding Agency",
      prograp1:
        "With so many branding agencies in India, choosing the right one can be a daunting task. Here are a few factors to consider when selecting a branding agency.",
    },
    {
      title: "Portfolio:",
      prograp1:
        "Review the agency’s portfolio to get an idea of their previous work. Look for brands that are similar to yours and assess the quality and effectiveness of their branding strategies.",
    },
    {
      title: "Industry Experience:",
      prograp1:
        "Consider whether the agency has experience working in your industry. Familiarity with your industry can be an advantage as they will understand the unique challenges and opportunities.",
    },
    {
      title: "Client Testimonials:",
      prograp1:
        "Read client testimonials and reviews to gauge the agency’s reputation and client satisfaction. This can give you insights into their professionalism, communication, and ability to deliver results.",
    },
    {
      title: "Communication and Collaboration:",
      prograp1:
        "Effective communication and collaboration are crucial when working with a branding agency. Ensure that the agency understands your goals and values and is willing to work closely with you to achieve them.",
    },
    {
      title: "Budget:",
      
      prograp2:
        "Consider your budget and the agency’s pricing structure. It’s important to find a balance between quality and affordability.",
      prograp3:
        "In conclusion, a branding agency can play a significant role in shaping the success of a business in India. By partnering with a branding agency, businesses can develop a strong brand identity that resonates with their target audience and sets them apart from the competition.",
    },
  ];

  return (
    <div className="my-[80px]">
      <Container6>
        <div className="mb-[48px] font-[poppins]">
          <div className="px-[15px] mb-[24px] ">
            <h1 className="  text-[30px] md:text-[48px] pt-[20px] sm:pt-[80px]  leading-[1.2] text-center font-[400] ">
              10 Ways To Check If Your App Is Ready To Launch In 2024
            </h1>
            <div className="flex items-center justify-center gap-3 sm:mt-[30px]  mt-[25px] pb-[24px]">
              <FaRegCalendar className=" sm:text-[25px] text-[20px]" />
              <span className="md:text-[16px]  text-[14px]">
                January 4, 2024
              </span>
            </div>
            <div className=" pt-[30px] sm:pt-[60px]">
              <img
                className="w-full mt-[20px] mb-[30px]"
                src={applaunch}
                alt=""
              />
            </div>

            <p className=" text-[16px] md:text-[20px] leading-[28px] sm:leading-[32px] text-[#222] sm:mt-[20px]">When it comes to building a successful business, one of the most important aspects is branding. A strong brand can help differentiate your business from competitors, build trust with customers, and create a lasting impression. That’s where a branding agency comes in.</p>

            <p className=" text-[16px] md:text-[20px] leading-[28px] sm:leading-[32px] text-[#222] sm:mt-[20px]">
            In India, there are several branding agencies that can help businesses establish and enhance their brand identity. These agencies specialize in creating unique and compelling brand strategies that resonate with the target audience. Whether you are a startup looking to establish your brand or an established business looking to revamp your brand image, partnering with a branding agency can be a game-changer.
            </p>

            {data.map((item, i) => {
              return (
                <div key={i}>
                  <h2 className="mt-[40px] mb-[20px] text-[28px] sm:text-[32px] leading-[1.2] sm:font-[600]">
                    {item.title}
                  </h2>
                  <p className=" text-[16px] md:text-[20px] leading-[28px] sm:leading-[32px] text-[#222] sm:mt-[20px]">
                    {item.prograp1}
                  </p>
                  <p className=" sm:text-[20px] text-[16px] leading-[28px] sm:leading-[32px] text-[#222] mt-[20px]">
                    {item.prograp2}
                  </p>
                  <p className="  text-[16px] sm:text-[20px] leading-[28px]  sm:leading-[32px] text-[#222] mt-[20px]">
                    {item.prograp3}
                  </p>
                </div>
              );
            })}
          </div>

          {/* <div className="px-[15px] mt-[25px] max-w-[1024px] ">
            <div className="hispterLink w-full font-poppins mb-[30px] p-2">
              <h2 className="text-[#006a83]">Hipster Link Preview</h2>
              <h3 className="text-[#5e5e5] uppercase pt-[10px] pb-1">
                HIPSTER-INC.COM
              </h3>
              <p className="text-[#006a83] text-[14px] font-[900]">
                How to Make Your Company Pandemic Proof in 2021 | Hipster
              </p>
            </div>
          </div> */}
          {/* componant  */}
          <Portfolio />
        </div>
      </Container6>
    </div>
  );
};

export default Applaunch;

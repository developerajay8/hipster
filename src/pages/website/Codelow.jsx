import React from "react";
import Container6 from "../../components/Container6";
import { FaRegCalendar } from "react-icons/fa6";
import { Minimal_Modern_Elegant_Background_TechnologyBanner } from "../../assets";
import Portfolio from "./Portfolio";

const Codelow = () => {
  return (
    <div className="my-[80px]">
      <Container6>
        <div className="px-[15px] mb-[24px] font-[poppins] ">
          <h1 className=" text-[30px] md:text-[48px] pt-[20px] md:pt-[80px] leading-[1.2] text-center font-[400] ">
          Code vs Low Code vs No Code: Which One is Right for Your Business?
          </h1>
          <div className="flex items-center justify-center gap-3 mt-[25px] md:mt-[30px] pb-[24px]">
            <FaRegCalendar className=" md:text-[25px] text-[20px]" />
            <span className="md:text-[16px]  text-[14px]"> April 20, 2023</span>
          </div>
          <div className=" md:pt-[60px] pt-[30px]">
            <img
              className="w-full mt-[20px] mb-[30px]"
              src={Minimal_Modern_Elegant_Background_TechnologyBanner}
              alt=""
            />
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Code, low code, and no code are all different approaches to
              software development.
            </p>
          </div>

          <div>
            <h2 className=" text-[28px] md:text-[32px] font-[600] mt-[40px] mb-[20px] leading-[1.2]">
              Code:
            </h2>
            <p className=" text-[16px] md:text-[20px] md:leading-[32px] leading-[28px] text-[#222] mb-[20px]">
              “Code” refers to traditional software development, where
              developers write code in programming languages such as Java,
              Python, or C++. This approach requires a high level of technical
              expertise and can be time-consuming, but it allows for complete
              control over the software being developed.
            </p>
            <ul className="md:text-[20px] text-[16px] md:leading-[32px] leading-[28px] list-disc 
            md:ml-[40px] ml-[20px] md:pl-[40px]  pl-[20px] ">
              <li className="mb-[15px]">
                Best for complex, custom software development projects
              </li>
              <li className="mb-[15px]">
                Requires a team with strong coding skills and expertise
              </li>
              <li className="mb-[15px]">
                Offers complete control and flexibility over the software being
                developed
              </li>
              <li className="mb-[15px]">
                Can be time-consuming and expensive, but can deliver highly
                customized solutions
              </li>
            </ul>
          </div>
          <div>
            <h2 className=" text-[28px] md:text-[32px] font-[600] mt-[40px] mb-[20px] leading-[1.2]">
              Low Code:
            </h2>
            <p className=" md:text-[20px] text-[16px] leading-[28px] md:leading-[32px] text-[#222] mb-[20px]">
              “Low code” is a newer approach that involves using visual
              interfaces and pre-built components to create applications. This
              approach requires less coding experience and can be faster than
              traditional coding, but may have some limitations in terms of
              customization.
            </p>
            <ul className=" md:text-[20px] text-[16px] md:leading-[32px] leading-[28px] list-disc 
            md:ml-[40px] ml-[20px] md:pl-[40px]  pl-[20px]">
              <li className="mb-[15px]">
                Ideal for businesses that need to rapidly develop and deploy
                software applications
              </li>
              <li className="mb-[15px]">
                Offers pre-built components and visual interfaces that can speed
                up development time
              </li>
              <li className="mb-[15px]">
                Requires less coding experience than traditional coding
              </li>
              <li className="mb-[15px]">
                May have some limitations in terms of customization and
                flexibility
              </li>
            </ul>
          </div>
          <div>
            <h2 className=" text-[28px] md:text-[32px]  md:font-[600] mt-[40px] mb-[20px] leading-[1.2]">
              No Code:
            </h2>
            <p className=" md:text-[20px] text-[16px] leading-[28px] md:leading-[32px] text-[#222] mb-[20px]">
              “No code” takes this concept even further, allowing people with
              little to no technical experience to create applications using
              drag-and-drop interfaces and pre-built templates. This approach is
              ideal for quickly building simple applications or prototypes, but
              may not be suitable for more complex projects.
            </p>
            <ul className=" md:text-[20px] text-[16px] md:leading-[32px] leading-[28px] list-disc 
            md:ml-[40px] ml-[20px] md:pl-[40px]  pl-[20px]">
              <li className=" mb-[10px] md:mb-[15px]">
                Best for simple applications or prototypes that can be quickly
                developed without the need for coding
              </li>
              <li className=" mb-[10px] md:mb-[15px]">
                Requires no coding experience, allowing non-technical team
                members to develop applications
              </li>
              <li className=" mb-[10px] md:mb-[15px]">
                Offers drag-and-drop interfaces and pre-built templates that can
                speed up development time
              </li>
              <li className=" mb-[10px] md:mb-[15px]">
                May have limitations in terms of functionality and customization
              </li>
            </ul>
            <p className="mt-[40px] text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] text-[#222] mb-[20px]">
              Ultimately, the choice between code, low code, and no code will
              depend on your business needs and goals. For complex, custom
              software development projects, code may be the best option, while
              low code or no code may be suitable for smaller projects or those
              with tight timelines and budgets. It may also be possible to use a
              combination of these approaches to achieve the best results for
              your business.
            </p>
          </div>
        </div>


        <Portfolio/>
      </Container6>
    </div>
  );
};

export default Codelow;

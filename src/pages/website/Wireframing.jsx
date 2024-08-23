import React from "react";
import Container6 from "../../components/Container6";
import { FaRegCalendar } from "react-icons/fa6";
import { Purple_Gradient_BlogBanner } from "../../assets";
import Portfolio from "./Portfolio";

const Wireframing = () => {
  const uxdata = [
    {
      title: "Helps to visualize the final product",
      file: "Wireframes and UX design help to create a visual representation of the final product, including its layout, features, and functionalities. This helps to ensure that everyone involved in the project has a clear understanding of what the end result should look like.",
    },
    {
      title: "Saves time and money",
      file: "Investing time and resources in wireframing and UX design can help to identify and resolve potential design issues early on in the development process. This can save time and money by preventing the need to make significant changes to the design later in the development process.",
    },
    {
      title: "Improves user experience",
      file: "UX design focuses on creating a positive experience for the user. By investing in UX design, you can create a user-friendly interface that is easy to navigate and use, improving overall user satisfaction and reducing frustration.",
    },
    {
      title: "Facilitates collaboration",
      file: "Wireframing and UX design provide a common language and visual framework that can help to facilitate communication and collaboration between designers, developers, and stakeholders. This can help to ensure that everyone is working towards the same goal and reduce misunderstandings or miscommunications.",
      file1:
        "Overall, wireframing and UX design are essential steps in the development process that should not be avoided. They can help to create a clear vision for the final product, save time and money, improve the user experience, and facilitate collaboration.",
      file2:
        "Discover what UI Design is and how it plays a crucial role in digital product development. Click here to read more:",
      Textblue: "UI & UX",
    },
  ];

  return (
    <div className="my-[80px]">
      <Container6>
        <div className="px-[15px] mb-[24px] font-[poppins]">
          <h1 className=" text-[30px] md:text-[48px] pt-[20px] md:pt-[80px] leading-[1.2] text-center font-[400] ">
            Why you should not avoid wireframing and UX before actual
            development.
          </h1>
          <div className="flex items-center justify-center gap-3 mt-[25px] md:mt-[30px] pb-[24px]">
            <FaRegCalendar className=" md:text-[25px] text-[20px]" />
            <span className="md:text-[16px]  text-[14px]"> April 17, 2023</span>
          </div>
          <div className=" md:pt-[60px] pt-[30px]">
            <img
              className="w-full mt-[20px] mb-[30px]"
              src={Purple_Gradient_BlogBanner}
              alt=""
            />
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Wireframing and UX (user experience) design are critical steps in
              the development process that should not be skipped or avoided.
              Here are a few reasons why:
            </p>
          </div>

          {uxdata.map((item, i) => {
              return (
                <div key={i}>
                  <h2 className=" text-[28px] md:text-[32px] font-[600] mt-[40px] mb-[10px] md:mb-[20px] leading-[1.2]">
                    {item.title}
                  </h2>
                  <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
                    {item.file}
                  </p>
                  <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
                    {item.file1}
                  </p>
                  <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">{item.file2}  <span className="text-[#006a83]"> {item.Textblue} </span> </p>
                </div>
              );
          })}
        </div>
        <Portfolio/>
      </Container6>
    </div>
  );
};

export default Wireframing;

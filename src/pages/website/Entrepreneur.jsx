import React from "react";
import Container6 from "../../components/Container6";
import { Gray_Modern_Banner } from "../../assets";
import { FaRegCalendar } from "react-icons/fa6";
import Portfolio from "./Portfolio";

const Entrepreneur = () => {
  const data = [
    {
      title: "Failing to conduct proper market research",
      prograp:
        "Many tech entrepreneurs make the mistake of assuming that their idea is unique and will automatically have a ready market. However, it is important to conduct thorough market research to validate your assumptions, understand your competition, and identify potential customers.",
    },
    {
      title: "Focusing too much on product development",
      prograp:
        "While developing a great product is important, it is equally important to focus on marketing, sales, and customer support. Neglecting these areas can lead to a lack of traction and revenue.",
    },
    {
      title: "Not having a clear revenue model",
      prograp:
        "Many tech entrepreneurs have great ideas, but they fail to develop a clear revenue model. It is important to determine how your product will generate revenue, whether through subscriptions, advertising, or other means.",
    },
    {
      title: "Not building a strong team",
      prograp:
        "Building a successful tech company requires a team with diverse skills and experience. Failing to build a strong team can lead to a lack of expertise in key areas, such as marketing, sales, or technology.",
    },
    {
      title: "Underestimating the importance of cash flow",
      prograp:
        "Many tech startups fail due to poor cash flow management. It is important to have a clear understanding of your financials and to be able to manage your cash flow effectively.",
    },
    {
      title: "Ignoring customer feedback",
      prograp:
        "Customer feedback is critical to the success of any tech company. Failing to listen to your customers can lead to missed opportunities and lost revenue.",
    },
    {
      title: "Scaling too quickly",
      prograp:
        "Rapid growth can be exciting, but it can also be dangerous. Scaling too quickly can lead to a lack of focus, poor decision-making, and a failure to maintain the quality of your product or service.",
    },
    {
      title: "Not adapting to changes in the market",
      prograp:
        "The tech industry is constantly evolving, and it is important to be able to adapt to changes in the market. Failing to adapt can lead to obsolescence and a loss of market share.",
    },
    {
      title: "Lack of focus",
      prograp:
        "Many tech entrepreneurs have a tendency to chase after multiple ideas at once, hoping that one of them will take off. However, lack of focus can lead to a lack of progress on any one idea and a failure to achieve success.",
    },
    {
      title: "Not seeking mentorship and guidance",
      prograp:
        "Starting a tech company is a challenging undertaking, and it is important to seek mentorship and guidance from experienced entrepreneurs who have successfully navigated the challenges of building a tech company.",
      prograp1: "Also you can check our",
      prograp2: "off the shelf products,",
      prograp3:
        "we offer a cost-effective and convenient solution for consumers. They are widely available and offer a range of options to meet the needs of a broad audience.",
    },
  ];

  return (
    <div className="my-[80px]">
      <Container6>
        <div className="font-[poppins] px-[15px] mb-[24px]">
          <h1 className=" text-[30px] md:text-[48px] pt-[20px] md:pt-[80px] leading-[1.2] text-center font-[400] ">
            10 Mistakes made by Tech Entrepreneur
          </h1>
          <div className="flex items-center justify-center gap-3 mt-[25px] md:mt-[30px] pb-[24px]">
            <FaRegCalendar className=" md:text-[25px] text-[20px]" />
            <span className="md:text-[16px]  text-[14px]"> April 17, 2023</span>
          </div>
          <div className=" md:pt-[60px] pt-[30px]">
            <img
              className="w-full mt-[20px] mb-[30px]"
              src={Gray_Modern_Banner}
              alt=""
            />
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Being an entrepreneur can be a challenging experience. There are
              many mistakes that need to be avoided, some made by the very best
              of entrepreneurs. If these common mistakes don’t make you question
              your decision to become a tech entrepreneur, then you are probably
              doing something right.
            </p>
            <p className="md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              As a tech entrepreneur, there are several mistakes you should
              avoid:
            </p>
          </div>

          {data.map((item, i) => {
            return (
              <div>
                <h2 className=" text-[28px] md:text-[32px] font-[600] mt-[40px] mb-[10px] md:mb-[20px] leading-[1.2]">
                 {item.title}
                </h2>
                <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
                 {item.prograp}
                </p>
                <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
                 {item.prograp1} <span className="text-[#006a83]"> {item.prograp2} </span>{item.prograp3}
                </p>
              </div>
            );
          })}
        </div>


        {/* add componant  */}
          <Portfolio/>



      </Container6>
    </div>
  );
};

export default Entrepreneur;

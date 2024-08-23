import React from "react";
import Container6 from "../../components/Container6";
import { FaRegCalendar } from "react-icons/fa6";

const Technologyimp = () => {
  return (
    <div className="my-[80px]">
      <Container6>
        <div className="font-[poppins] px-[15px] mb-[24px]">
          <h1 className="text-[30px] md:text-[48px] pt-[20px] md:pt-[80px] leading-[1.2] text-center font-[400] ">
            How Technology Can Improve in-store Retail Experiences
          </h1>
          <div className="flex items-center justify-center gap-3 mt-[25px] md:mt-[30px] pb-[24px]">
            <FaRegCalendar className=" md:text-[25px] text-[20px]" />
            <span className="md:text-[16px]  text-[14px]"> May 11, 2021</span>
          </div>
          <div className=" md:pt-[60px] pt-[30px]">
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Software development is a crucial part of digital transformation
              that businesses in Singapore are slowly embracing. Retailers that
              were once content with traditional methods of handling their
              stores, are realising that incorporation of digital solutions are
              no longer optional. Due to the lockdown imposed during the
              pandemic, customers shifted to e-commerce drastically. According
              to PwC’s Global Consumer Insights Survey 2020, 49% of customers in
              SouthEast Asia do their shopping in a store, whereas 51% do it
              online through their mobile and other devices.
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              However, here are some stats that show the potential growth of
              in-Store retail experiences:
            </p>
            <ul className="list-disc md:text-[20px] text-[16px] md:leading-[32px] leading-[28px] ml-[30px] mb-[40px] pt-[20px]">
              <li className="pb-[15px]">
                4 out of 10 online customers are dissatisfied with their
                experience (<span className="text-[#006a83]">source</span>)
              </li>
              <li className="pb-[15px]">
                Retails sales in Singapore are constantly on the rise with an
                annual 6.2% growth in March, 2021 (<span className="text-[#006a83]">source</span>)
              </li>
              <li className="pb-[15px]">
                Total retail sale value in Singapore for 2021 was $3.5 billion,
                out of which 11.8% was through online sales (<span className="text-[#006a83]">source</span>)
              </li>
            </ul>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">Singapore government’s SME’s go digital programme includes the Retail Industry Digital Plan which aims to make going digital easy for customers. The government is doing their part, and it’s time small and medium scale retailers started reaping the benefits of software tools by partnering with IT & Software solutions companies.</p>
            <p>
            Majority of retailers still have plenty of room for improvement. Software development solutions for retailers can have several forms. From inventory management tools to customer loyalty apps, the possibility of growth and efficacy are limitless with the right technology.
            </p>
          </div>
        </div>
      </Container6>
    </div>
  );
};

export default Technologyimp;

import React from "react";
import Container6 from "../../components/Container6";
import { FaRegCalendar } from "react-icons/fa6";
import { Soft_BlueGeometric_Business_Banner } from "../../assets";
import Portfolio from "./Portfolio";

const CustomberCenter = () => {
  const data = [
    {
      title: " Understanding customer needs",
      prograp:
        "The first step in creating a customer-centric tech product is to understand the customer’s needs. This involves identifying their pain points and understanding their preferences. One way to do this is through market research, such as surveys or focus groups, to gather feedback from customers. Additionally, leveraging data analytics can provide insights into customer behavior, such as how they use a product and what features they prefer.",
    },
    {
      title: "Designing customer-centric tech products",
      prograp:
        "Once you have a clear understanding of customer needs, the next step is to design products that meet those needs. This involves building products with user experience in mind, creating customer journey maps to understand the customer’s interaction with the product, and incorporating customer feedback into product design. By doing so, you can create products that are tailored to the customer’s preferences and expectations.",
    },
    {
      title: "Implementing customer-centric strategies",
      prograp:
        "Personalization of products is one strategy for creating customer-centric tech products. By offering personalized experiences, such as customized product recommendations, you can create a more engaging and satisfying experience for the customer. Another important strategy is to offer exceptional customer support, ensuring that customers can easily access help when they need it. Lastly, utilizing customer feedback to iterate and improve products is critical in creating successful customer-centric tech products.",
    },
    {
      title: "Benefits of customer-centric tech products",
      prograp:
        "The benefits of creating customer-centric tech products are numerous. By designing products with the customer in mind, you can increase customer satisfaction and loyalty, which in turn leads to improved customer retention. Additionally, by meeting customer needs and preferences, you can increase revenue and profitability.",
    },
    {
      title: "Challenges in creating customer-centric tech products",
      prograp:
        "Creating customer-centric tech products is not without its challenges. Balancing customer needs with business goals is a delicate act, and managing resources and prioritizing features can be difficult. Additionally, dealing with changing customer needs and preferences can be a constant challenge.",
    },
    {
      title: "Conclusion",
      prograp:
        "In conclusion, creating customer-centric tech products is essential in today’s technology-driven world. By understanding customer needs, designing products with user experience in mind, and implementing customer-centric strategies, you can create successful products that meet customer expectations and drive business success. Despite the challenges that come with it, creating customer-centric tech products is an investment in the long-term success of your business.",
    },
  ];

  return (
    <div className="my-[80px]">
      <Container6>
        <div className="px-[15px] mb-[24px]  font-[poppins]">
          <h1 className=" md:text-[48px] text-[30px] sm:pt-[80px] pt-[20px] leading-[1.2] text-center font-[400] ">
            What is a Customer Centric Tech Product?
          </h1>
          <div className="flex items-center justify-center gap-3 sm:mt-[30px] mt-[20px] pb-[24px]">
            <FaRegCalendar className=" sm:text-[25px] text-[20px]" />
            <span className="md:text-[16px]  text-[14px]"> April 20, 2023</span>
          </div>
          <div className=" sm:pt-[60px] pt-[35px]">
            <img
              className="w-full mt-[20px] mb-[30px]"
              src={Soft_BlueGeometric_Business_Banner}
              alt=""
            />
            <p className=" md:text-[20px] text-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              A customer centric tech product is a product or service that is
              designed to meet the needs of customers by providing an engaging
              and personalized experience. Customer centric products use
              technology to create a deeper connection between the customer and
              the product or service.
            </p>
          </div>
          <div>
            <h2 className="mt-[40px] mb-[20px] md:text-[32px] text-[28px] leading-[1.2] font-[600]">
              Benefits of a Customer Centric Tech Product
            </h2>
            <ul className=" text-[16px] md:text-[20px] leading-[28px] md:leading-[32px]  text-[#222] pl-[50px] typesquare">
              <li className="pb-[15px]">
                Increased customer loyalty and satisfaction
              </li>
              <li className="pb-[15px]">Improved customer retention</li>
              <li className="pb-[15px]">Reduced customer churn rate</li>
              <li className="pb-[15px]">More engaged customers</li>
              <li className="pb-[15px]">Increased revenue</li>
            </ul>
          </div>

          {data.map((items, i) => {
            return (
              <div key={i} className="mt-[30px]">
                <h2 className=" md:mb-[20px] mb-[15px] text-[28px] md:text-[32px] leading-[1.2] font-[600]">
                  {items.title}
                </h2>
                <p className="  md:text-[20px] text-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
                  {items.prograp}
                </p>
              </div>
            );
          })}
        </div>
        {/* add componant add here  */}
        <Portfolio />
      </Container6>
    </div>
  );
};

export default CustomberCenter;

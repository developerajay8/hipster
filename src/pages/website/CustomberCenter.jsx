import React from "react";
import Container6 from "../../components/Container6";
import { FaRegCalendar } from "react-icons/fa6";
import { Soft_BlueGeometric_Business_Banner } from "../../assets";
import Portfolio from "./Portfolio";

const CustomberCenter = () => {
  const data = [
    {
      title: " Understanding Key Objectives and Goals",
      prograp:
        "Before diving into metrics, it’s crucial to establish clear objectives and goals for your digital marketing campaigns. Whether it’s enhancing brand awareness, driving sales, boosting website traffic, or increasing engagement, defining these objectives lays the foundation for subsequent measurements.",
    },
    {
      title: "Tracking Website Traffic and Engagement Metrics",
      prograp:
        "A pivotal metric in evaluating campaign success is website traffic. Tools like Google Analytics offer a treasure trove of data, including the number of visitors, their demographics, and the pages they visit. Analyzing bounce rates, average session duration, and pages per session provides insights into user engagement and the effectiveness of your content.",
    },
    {
      title: "Conversion Rates and Customer Acquisition Metrics",
      prograp:
        "Conversion rates are a core component in assessing campaign success. Whether it’s sign-ups, purchases, or downloads, understanding how many visitors take the desired action on your website is imperative. Calculating conversion rates aids in evaluating the effectiveness of your calls-to-action (CTAs) and landing pages.",
    },
    {
      title: "Social Media Metrics and Engagement",
      prograp:
        "Social media platforms serve as a vital arena for digital marketing. Engagement metrics, such as likes, shares, comments, and click-through rates (CTR), gauge the resonance of your content with the audience. Additionally, monitoring follower growth and sentiment analysis provides invaluable insights into your social media performance.",
    },
    {
      title: "Email Marketing Metrics and Effectiveness",
      prograp:
        "For campaigns involving email marketing, analyzing metrics like open rates, click-through rates, and conversion rates measures the effectiveness of your email campaigns. Understanding subscriber behavior and adjusting content based on these insights can significantly impact campaign success.",
    },
    {
      title: "Return on Investment (ROI) and Cost-Per-Acquisition (CPA)",
      prograp:
        "Ultimately, measuring the success of digital marketing campaigns often boils down to ROI and CPA. Calculating the revenue generated against the overall investment sheds light on the campaign’s profitability. By understanding the cost incurred to acquire each customer, you gain a clearer perspective on campaign effectiveness.",
    },
    {
      title: "Conclusion",
      prograp:
        "Effectively measuring the success of your digital marketing campaigns involves a multidimensional approach, integrating various metrics and KPIs. By setting clear objectives, tracking website traffic, analyzing conversion rates, engaging on social media, optimizing email campaigns, and assessing ROI and CPA, you gain comprehensive insights to refine strategies and drive continued success in your digital endeavors.",
    },
  ];

  return (
    <div className="my-[80px]">
      <Container6>
        <div className="px-[15px] mb-[24px]  font-[poppins]">
          <h1 className=" md:text-[48px] text-[30px] sm:pt-[80px] pt-[20px] leading-[1.2] text-center font-[400] ">
          How to Measure the Success of Your Digital Marketing Campaigns
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
            In today’s fast-paced digital landscape, gauging the triumph of your digital marketing campaigns isn’t just about counting likes, shares, or clicks. It encompasses a more profound understanding of metrics and key performance indicators (KPIs) that holistically reflect your campaign’s effectiveness. With the plethora of data available, measuring the success of your digital marketing endeavors can be an intricate process. This comprehensive guide will illuminate the critical steps and metrics required to effectively measure and assess your digital marketing campaign’s success.
            </p>
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
        
      </Container6>
    </div>
  );
};

export default CustomberCenter;

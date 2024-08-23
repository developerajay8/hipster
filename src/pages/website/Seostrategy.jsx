import React from "react";
import Container6 from "../../components/Container6";
import { FaRegCalendar } from "react-icons/fa6";
import Portfolio from "./Portfolio";


const Seostrategy = () => {
  return (
    <div className="my-[80px] ">
      <Container6>
        <div className=" px-[15px] font-[poppins] mb-[24px]">
          <div className="flex justify-center">
            <div className="text-[18px] md:px-[20px] mb-[30px] mt-[20px] px-[15px] py-[4px] md:py-[8px] bluerbgacolor">
            Tips
            </div>
          </div>
          <h1 className=" text-[30px] md:text-[48px] pt-[20px] md:pt-[50px] leading-[1.2] text-center font-[400] ">
          Basic SEO Strategy
          </h1>
          <div className="flex items-center justify-center gap-3 mt-[25px] md:mt-[30px] pb-[24px]">
            <FaRegCalendar className=" md:text-[25px] text-[20px]" />
            <span className="md:text-[16px]  text-[14px]">
            November 17, 2020
            </span>
          </div>
          <div>
            <p className=" md:text-[20px] text-[16px] md:leading-[32px] text-[#222] leading-[28px] pb-[30px]">SEO is essential and crucial to what drives your users to your website or product/services your company is offering. SEO does not have to be complex and we have broken down the 4 key areas your company should focus on when you are optimising your website.</p>
          </div>
          <div>
            <h2 className="md:text-[32px] text-[28px] leading-[1.2] mt-[40px] mb-[30px]">1. Keywords</h2>
            <p className=" md:text-[20px] text-[16px] md:leading-[32px] text-[#222] leading-[28px] pb-[30px]">Your SEO keywords are the keywords and keyphrases that users search for via search engines to discover your website and website content. Targeting the right keywords and keyphrases is essential for SEO and it should “speak the same language” as its potential users as SEO help connects these users to your website. Your SEO keywords and keyphrases should also be relevant to your company’s product and services.</p>
            <p className=" md:text-[20px] text-[16px] md:leading-[32px] text-[#222] leading-[28px] pb-[30px]">
            Here are some SEO keywords strategy you can kickstart with:
            </p>
            <ul className=" md:text-[20px] text-[16px] md:leading-[32px] leading-[28px] pb-[30px] pl-[20px] md:pl-[40px] ml-[20px] md:ml-[40px] list-decimal">
                <li>Make a list of relevant keywords based on your company’s products and services</li>
                <li>Research the popular search terms users are searching for</li>
                <li>Research on how your competitors are ranking in terms of these keywords</li>
            </ul>
          </div>
          <div>
            <h2 className="md:text-[32px] text-[28px] leading-[1.2] mt-[40px] mb-[30px]">2. Blog</h2>
            <p className=" md:text-[20px] text-[16px] md:leading-[32px] text-[#222] leading-[28px] pb-[20px]">After researching your keywords, next you can make blog content in relevance to the keywords you would like to implement to your website and this will bring traffic to your website through the keywords. Blog posts helps boost the quality of SEO as it positions your website as relevant to user’s searches.</p>
            <p className=" md:text-[20px] text-[16px] md:leading-[32px] text-[#222] leading-[28px] pb-[20px]">
            You can blog on a weekly basis or monthly basis and utilise the keywords through your blog posts and this will help optimise your SEO.
            </p>
          </div>
          <div>
            <h2 className="md:text-[32px] text-[28px] leading-[1.2] mt-[40px] mb-[30px]">3. Usability</h2>
            <p className=" md:text-[20px] text-[16px] md:leading-[32px] text-[#222] leading-[28px] pb-[20px]">SEO is also all about user experience. It is essential to ensure your website interface is usable and user friendly as this how the users will stay and interact with your website after they found your website through the search engines.</p>
          </div>
          <div>
            <h2 className="md:text-[32px] text-[28px] leading-[1.2] mt-[40px] mb-[30px]">4. Analytics</h2>
            <p className=" md:text-[20px] text-[16px] md:leading-[32px] text-[#222] leading-[28px] pb-[20px]">Good SEO takes a lot of efforts and this efforts should translate to proper data analytics to see how effective your SEO keywords are. You should track your SEO on a daily, weekly and monthly basis to keep your SEO strategy plans on track.</p>
            <p  className=" md:text-[20px] text-[16px] md:leading-[32px] text-[#222] leading-[28px] pb-[20px]">Here are some SEO tracking tools you can utilise:</p>
            <ul className=" md:text-[20px] text-[16px] md:leading-[32px] leading-[28px] pb-[30px] pl-[20px] md:pl-[40px] ml-[20px] md:ml-[40px] list-decimal">
                <li>SEMRush</li>
                <li>HubSpot</li>
                <li>Diib</li>
            </ul>
            <p className=" text-[14px]  text-[#222] leadiing-[20px] ">These are the 4 basic SEO strategy we would like to share with you and here at Hipster, we also provide comprehensive SEO strategy to ensure your website</p>
            <p className=" text-[14px]  text-[#222] leadiing-[20px] ">appears top on the search engines.</p>
            <p className=" text-[14px]  text-[#222] leadiing-[20px] ">Contact us to find out more on what we can offer to you and your company now!</p>
            <p className=" text-[14px]  text-[#222] leadiing-[20px] ">Click here for <span className="text-[#006a83]">10 Crucial SEO Ranking Factors</span></p>
          </div>
        </div>
        <Portfolio/>
      </Container6>
    </div>
  );
};

export default Seostrategy;

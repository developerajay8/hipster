import React from "react";
import Container6 from "../../components/Container6";
import { FaRegCalendar } from "react-icons/fa6";
import {
  Banners_for_Blog,
  blog25,
  mk1,
  mk2,
  mk3,
  mk4,
  mk5,
  undraw_Growth_analytics,
  undraw_Updated_resume,
  undraw_collabora,
  undraw_geniuses,
  undraw_reviews,
} from "../../assets";
import Portfolio from "./Portfolio";

const TransformationExmaple = () => {
  return (
    <div className="my-[80px]">
      <Container6>
        <div className="font-poppins mb-[24px] px-[15px]">
          <h1 className="text-[30px] md:text-[48px] pt-[20px] md:pt-[80px] leading-[1.2] text-center font-[400] ">
            7 Essential Tips for UX Design backed by Psychology
          </h1>
          <div className="flex items-center justify-center gap-3 mt-[25px] md:mt-[30px] pb-[24px]">
            <FaRegCalendar className=" md:text-[25px] text-[20px]" />
            <span className="md:text-[16px]  text-[14px]"> May 11, 2022</span>
          </div>
          <div className=" md:pt-[60px] pt-[30px]">
            <img
              className="w-full mt-[20px] mb-[30px]"
              src={blog25}
              alt=""
            />
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              COVID-19 has sped up the adoption of digital technologies by
              several years, forcing businesses to adapt faster than they can.
              As a result, <b>digital transformation</b> has become one of the
              top priorities for businesses in 2021. In digitalized companies,
              things and processes move faster and are less prone to errors with
              the help of technology. Manual data entry errors and data
              transfers between one system to another can be integrated using
              Application Programming Interfaces (APIs) and Software Development
              Kits (SDKs). However, there are still a handful of businesses that
              remain unaware of this trend. This could be because they do not
              understand the benefits of Digital Transformation. In today’s
              article, we will cover five{" "}
              <b>benefits of Digital Transformation</b> for your business.
            </p>
          </div>
          <div>
            <h3 className="mt-[40px] mb-[30px] text-[28px] font-[500]">
              What is Digital Transformation?
            </h3>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              <span className="text-[#006a83]"> Digital Transformation</span> is
              the adoption of digital technology into all aspects of a business
              resulting in fundamental changes to how businesses operate and how
              they deliver value to consumers.
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              One good example of a digital transformation is Disney. Disney
              launched its very own Disney+ streaming platform in 2021, which
              has proven to be a great success. So much so that its market value
              increased by $32 billion after forecasting it will triple Disney+
              subscribers by 2024.
            </p>
            <h3 className="mt-[40px] mb-[30px] text-[28px] font-[500]">
              5 Benefits of Digital Transformation
            </h3>
          </div>
          <div>
            <h4 className="text-[24px] mt-[40px] font-[500] mb-[30px]">
              1. Better Customer Experience
            </h4>
            <img className="mx-[85px] mb-[30px]" src={mk1} alt="" />
            <p className="md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              If you think that going digital only benefits your business, you
              are half right. Going digital will greatly benefit your customers
              as well. These days, consumers are looking for quick and valuable
              solution to their problems. Technology, without a doubt, will be
              the first option on consumers’ minds. Imagine if you had forgotten
              to purchase the main ingredient for tonight’s dinner. No problem,
              Amazon Fresh will deliver whatever you have ordered in two hours.
              In order to remain competitive in the market, it is important that
              businesses recognize and create <b>digital solutions</b> that
              ensures that the customer is always in the center of digital
              transformation.
            </p>
          </div>

          <div>
            <h4 className="text-[24px] mt-[40px] font-[500] mb-[30px]">
              2. Data-Based Insights
            </h4>
            <img
              className="mx-[85px] mb-[30px]"
              src={mk2}
              alt=""
            />
            <p className="md:text-[20px] mb-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Going digital means that you have the ability to track metrics and
              achieve data insights. It also means that you are able to
              translate raw data into insights across various fields, such as
              operations, production, finances, and business opportunities.
            </p>
            <p className="md:text-[20px] text-[16px] md:leading-[32px] leading-[28px]  mb-[20px]">
              With the many data analytics tools available online, businesses
              are able to analyse the performance of specific products and
              services easily. Once the analysis is completed, businesses are
              able to use these data to optimize different strategies and
              processes in order to achieve better results. By better
              understanding your customer and their needs, businesses can
              establish a more customer-centric business plan. Businesses may
              also utilize both structured data (personal customer information)
              and unstructured data, such as social media metrics as an effort
              to increase business growth.
            </p>
          </div>

          <div>
            <h4 className="text-[24px] mt-[40px] font-[500] mb-[30px]">
              3. Collaboration Amongst Different Departments
            </h4>
            <img
              className="mx-[85px] mb-[30px]"
              src={mk3}
              alt=""
            />
            <p className="md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              When an organization decides to adopt digital transformation, it
              is vital that all work processes and strategies, down to the core
              structure and company culture be addressed. Because of this, there
              is a chance for collaboration throughout the organization. In
              order to maximize the chances of a fruitful switch, there needs to
              be strong communication. With support, employees are able to put
              aside age gaps and social divides to engage in conversation and
              learn together.
            </p>
          </div>

          <div>
            <h4 className="text-[24px] mt-[40px] font-[500] mb-[30px]">
              4. Increases Agility
            </h4>
            <img className="mx-[85px] mb-[30px]" src={mk4} alt="" />
            <p className="md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Agility is the ability to continuously improve and develop
              quickly. The digital landscape’s rapid expansion and constant
              change make it impossible for businesses to rest on their laurels.
              COVID-19 is a great example of how businesses have to be agile.
              When work from home became the default, some companies were able
              to move to remote work seamlessly. On the other hand, some
              companies were left scrambling due to the lack of digital
              processes. Therefore, it is paramount that all businesses must be
              prepared to adapt to situations they may or may not have
              encountered before. There will always be new competition and new
              trends, and customers will always want the best. Hence, it is
              crucial that businesses are able to stay ready at all times.
            </p>
          </div>

          <div>
            <h4 className="text-[24px] mt-[40px] font-[500] mb-[30px]">
              5. Updates Skillsets and Knowledge
            </h4>
            <img
              className="mx-[85px] mb-[30px]"
              src={mk5}
              alt=""
            />
            <p className="md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              As the demand for specialized skills continues to grow, the future
              of digital business may be heavily built on skillsets such as
            </p>
            <ul className="text-[20px] mb-[30px] ml-[40px]  leading-[28px] md:leading-[32px] list-disc">
              <li>Artificial Intelligence</li>
              <li>Data Analytics</li>
              <li>Machine Learning</li>
              <li>Augmented Reality</li>
              <li>Cloud Infrastructure</li>
              <li>Blockchain Technology</li>
            </ul>
            <p className="md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Therefore, organizations that adopts digital transformation allows
              their employees to develop skills for the future, which enables
              them to have a competitive edge over others.
            </p>

            <p className="md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              You might be also interested in the article: <span className="text-[#006a83]"> Digital
              Transformation: It’s Importance In Today’s Business World</span>
            </p>
          </div>
          <div>
            <h3 className="mt-[40px] mb-[30px] text-[26px] leading-[1.2] md:text-[28px]">
              Singapore Government’s Effort (Digital Transformation)
            </h3>
            <p className=" md:text-[20px] text-[16px] leading-[28px] md:leading-[32px] mb-[20px]">
              To survive and prosper, organizations must integrate digital
              technology into all elements of their operations in order to
              significantly change how they operate and give value to their
              consumers.
            </p>
            <p className="md:text-[20px] text-[16px] md:leading-[32px] leading-[28px] mb-[20px]">
              Since 2010, the Singapore Government has been pressing firms –
              both small and medium-sized enterprises (SMEs), to turn to
              technology in order to remain relevant and competitive. In 2016,
              it was found that only 15% of SMEs agreed that that was a need for
              technological change. Fast forward 5 years later in 2021, nine in
              10 recognise the importance of digital transformation.
            </p>
            <p className="md:text-[20px]  text-[16px] md:leading-[32px] leading-[28px] mb-[20px]">
              That being said, it shows that the Singapore Government has good
              foresight, and that they recognised the importance of Digital
              Transformation for businesses very early on. While there are many
              campaigns, schemes and grants that the Singapore Government has
              pushed out to aid businesses with their{" "}
              <b className="font-[800]">digital transformation</b>, we will be
              covering three initiatives in this article.
            </p>
            <ul className="ml-[40px] mb-[21px] list-decimal text-[16px] md:text-[20px] md:leading-[32px] leading-[28px] ">
              <li  className="pb-[10px]">
                <b>Digital Leaders Programme (DLP)</b> – Jointly run by the
                Infocomm Media Development Authority (IMDA) and Enterprise
                Singapore (ESG), the DLP work towards assisting digitally
                progressive local companies accelerate their digital
                transformation plans. From being able to build an in-house core
                digital team, to charting a digital roadmap, these are just some
                of the benefits of the DLP. In order to apply for the DLP:
                <br />
                <br />
                – You must be a business entity registered and operating in
                Singapore, with at least 30% local shareholding. <br />–
                Non-Infocomm Technology (Non-ICT) companies that have
                digitalised and are seeking to push new boundaries to develop
                new capabilities and capture growth opportunities
              </li>
              <li className="pb-[10px]">
                <b>Enterprise Development Grant (EDG)</b> – The EDG helps
                Singapore companies scale and transform. This grant supports
                projects that help businesses upgrade their businesses, innovate
                or venture overseas, under three pillars:
                <br />
                <br />
                – Core Capabilities: Helps to strengthen business foundations.
                <br />
                – Innovation and Productivity: Supports businesses in exploring
                new areas of growth, or ways to enhance efficiency.
                <br />
                – Market Access: Helps companies to scale and venture overseas.
                <br />
                <br />
                Similar to the DLP, in order to apply for EDG, you need to be:
                <br />
                <br />
                – Be a business entity registered and operating in Singapore,
                with at least 30% local shareholding.
                <br />– Be in a financially viable position to start and
                complete the project.
              </li>
              <li className="pb-[10px]">
                <b>Productivity Solutions Grant (PSG) </b>– The PSG supports
                companies keen on adopting IT solutions and equipment to enhance
                business processes. For a start, PSG covers sector-specific
                solutions such as retail, food and the construction industries.
                On top of the sector-specific solutions, PSG also advocates
                adoption of solutions that cut across industries, for example,
                customer management and data analytics. In order to apply for
                the PSG:
              </li>
              <br />
              – You must be a business entity registered and operating in
              Singapore.
              <br />
              – Purchase/lease/subscription of the IT solutions or equipment
              must be used in Singapore.
              <br />– Have a minimum of 30% local shareholding; with Company’s
              Group annual sales turnover less than
            </ul>
          </div>
          <div>
            <h3 className="text-[26px] mt-[40px] mb-[30px] md:text-[28px]">
              Conclusion
            </h3>
            <p className=" text-[16px] md:text-[20px] md:leading-[32px] leading-[28px] mb-[20px]">
              In a world where people heavily rely on technology, Digital
              Transformation can no longer be ignored. Especially if an
              organization wants to succeed and gain profits. With digital tools
              such as the multilingual web framework, the process of expanding
              and scaling internationally is now easier as compared to before.
              It is obvious that only businesses that fully embrace and invest
              in their digital transformation will thrive.
            </p>
            <p className="md:text-[20px] text-[16px] md:leading-[32px]  leading-[28px] mb-[20px]">
              {" "}
              You can also check:
            </p>
          </div>
          <div className=" mt-[25px] max-w-[1024px] ">
            <div className="hispterLink w-full font-poppins mb-[30px] p-2">
              <h2 className="text-[#006a83]">Hipster Link Preview</h2>
              <h3 className="text-[#5e5e5] uppercase pt-[10px] pb-1">
                HIPSTER-INC.COM
              </h3>
              <p className="text-[#006a83] text-[14px] font-[900]">
              6 Apps to Improve Productivity of Your Business | Improve Productivity
              </p>
            </div>
          </div>
        </div>
        {/* add componant */}
        <Portfolio/>
      </Container6>
    </div>
  );
};

export default TransformationExmaple;

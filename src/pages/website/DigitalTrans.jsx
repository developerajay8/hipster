


import React from "react";
import Container6 from "../../components/Container6";
import { barePack, digital } from "../../assets";
import { FaRegCalendar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Portfolio from "./Portfolio";

const DigitalTrans = () => {
  return (
    <div className="md:my-[80px] my-[20px] ">
      <Container6>
        <div className="font-[poppins] mb-[24px] px-[15px] xl:mx-[0px] lg:mx-[40px] md:mx-[40px] sm:mx-[20px] mx-[0px]">
          <h1 className="text-[30px] md:text-[48px] pt-[20px] md:pt-[80px] leading-[1.2] text-center font-[400] ">
            Digital Transformation: It’s Importance In Today’s Business World
          </h1>
          <div className="flex items-center justify-center gap-3 mt-[25px] md:mt-[30px] pb-[24px]">
            <FaRegCalendar className=" md:text-[25px] text-[20px]" />
            <span className="md:text-[16px]  text-[14px]">  March 30, 2022</span>
          </div>
          <div className=" md:pt-[60px] pt-[30px]">
            <img
              className="w-full mt-[20px] mb-[30px]"
              src={digital}
              alt=""
            />
          </div>

          <div>
            <h2 className=" text-[28px] md:text-[32px] font-[600] mt-[40px] mb-[10px] md:mb-[20px] leading-[1.2]">
              Digital + Transformation
            </h2>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              There seems to be a lot of confusion around the buzz word <b>‘digital transformation’</b>. Often times, it is used loosely and other times it feels like a right of passage for companies to undergo for their survival. Here we will aim to answer: What is digital transformation? How do we start the digital transformation journey? Who defines our <b>digital transformation strategy</b>? Do organisations need to embark on <b>digital transformation</b> in order to survive?
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Before going further, it is important to understand definitively that digital transformation is a radical rethinking of how a business uses its assets: its technology, people and processes to change business performance. In the compound word “Digital Transformation”, <b>digital</b> refers to way technology can be utilized as a driver for change for remodeling of a businesses and <b>transformation</b> refers to the strategic and planned journey for organisational change that includes people, mindsets, culture and processes.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              In order to effectively start the digital transformation journey, commitment is needed, starting from the top leadership to every person in the organization for steadfastness in implementing change in four major areas: and these are <b>technology, data, process and culture.</b>
            </p>
          </div>

          <div className="">
            <h2 className="text-[28px] md:text-[32px] font-[600] mt-[40px] mb-[10px] md:mb-[30px] leading-[1.2]">
              Technology
            </h2>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Technology is a big driver for a successful business. Although new and advancing technologies seem to always be popping up from <b>blockchain technology</b> to <b>artificial intelligence,</b> it is important to recognise and stay focused on the technology that suits your business needs. Business models need to be reconfigured to center them around <b>digital services.</b> Integrating the correct technology to provide business value is an opportunity that simply cannot be missed.
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              The key to ensuring business setups are properly implemented digitally is to get people within and without your organisation such as <b>software developers</b> with the technological expertise involved in this process so that you can find your businesses right fit.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              <b> <strong>></strong> Businesses models are turning towards platform setups vs conventional setups. An example of this is Airbnb versus traditional hotels, and online food delivery providers that location match versus calling a restaurant for food delivery.</b>
            </p>

            <div className="">
              <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
                Some of the ways this can look like is:
              </p>

              <ul className="list-decimal sm:ml-[70px] ml-[30px] leading-[32px] mt-[20px] text-[20px] text-[#222222] font-poppins">
                <li>the use digital channels (e.g., chatbots, social media) to provide customer service in real time</li>
                <li>employing of machine learning in business analytics, data science and business intelligence to improve business performance and customer experiences</li>
                <li>an integration of artificial intelligence in business processes via analytics, workflow management and business automation tools to create a truly intelligent business solutions</li>
              </ul>
            </div>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Read more about: <Link to={''} className="text-[#006a83] hover:text-[#000000]">5 Benefits of Digital Transformation</Link>
              <br />
              <Link to={''} className="text-[#006a83] hover:text-[#000000]">10 Crucial SEO Ranking Factors for Driving Traffic to your Business</Link>
            </p>

          </div>

          <div className="">
            <h2 className="text-[28px] md:text-[32px] font-[600] mt-[40px] mb-[10px] md:mb-[30px] leading-[1.2]">
              Data
            </h2>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Why should you care about data? Statistically, workers waste up to 50% of their time searching for data. The fact of the matter is most companies today still don’t have access to good enough information. This wastes time and money in having workers go through tedious processes over again because they were unable find what was needed from scratch instead metadata-mining their way through collections of documents, or asking individual colleagues where a certain piece of information is located. The importance of the source of data, data quality and how data is processed cannot be over emphasised.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              <b>> The role of data in digital transformation is often overlooked but is critical in digital transformation. Data as an organisational asset is akin to the likes of intellectual property and brand assets that make up the lifeblood of the company.</b>
            </p>

            <div className="">
              <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
                Some of the ways this can look like is:
              </p>

              <ul className="sm:ml-[70px] ml-[30px] list-decimal leading-[32px] mt-[20px] text-[20px] text-[#222222] font-poppins">
                <li>a creation of a digital platform—a common business system shared across business functions—as the business “operating system” that allows the business to continuously deliver business results at speed and scale.</li>
                <li>the using of customer data to create more successful targeted marketing campaigns.</li>
                <li>the using of digital data gathered to better understand and be proactive in dealing with customers.</li>
              </ul>
            </div>


          </div>

          <div className="">
            <h2 className="text-[28px] md:text-[32px] font-[600] mt-[40px] mb-[10px] md:mb-[30px] leading-[1.2]">
              Process
            </h2>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Transformation is all about changing the way you think and do business. It requires an end-to-end mindset, reworking your customer service model to meet your customers needs more seamlessly than ever before while and managing silos and connecting different tasks together with ease. It can be an outrageous process of a full reengineering or an incremental process of sustained change. At the very heart of process improvement is the application of the customer-first approach
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              <b>> Apply the customer-first approach in the planning of business processes. Customers need the assurance of seamless transactions when moving from online and offline platforms. It is important to ensure pleasant customer interactions that make for a solid customer experience. These interactions should be deliberately crafted by solution architects during the transformation journey.</b>
            </p>

            <div className="">
              <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
                Some of the ways this can look like is:
              </p>

              <ul className="list-decimal sm:ml-[70px] ml-[30px] leading-[32px] mt-[20px] text-[20px] text-[#222222] font-poppins">
                <li>a shift from a business-led approach to a customer-led approach</li>
                <li>a creation of new business processes that are optimized for mobile devices</li>
                <li>a reconfiguration in business models to center them around digital services</li>
              </ul>
            </div>


          </div>


          <div className="">
            <h2 className="text-[28px] md:text-[32px] font-[600] mt-[40px] mb-[10px] md:mb-[30px] leading-[1.2]">
              Culture
            </h2>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Culture, includes having the agility to be able to embrace organisational change management and combines elements of leadership, teamwork, and soft skills to be effective in implementation. Driving a receptive and open culture takes cultivation and companies that do not invest on this cultivation likely endure the most pain in transition.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              <b>> Being resilient to change and growth is a quality the organisation must adapt in the process of undergoing the digital transformation journey. It is important to remember, the goal of improving enterprise performance, productivity and competitiveness which needs to be a top-down approached led by a strong leader.</b>
            </p>

            <div className="">
              <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
                Some of the ways this can look like is:
              </p>

              <ul className="list-decimal sm:ml-[70px] ml-[30px] leading-[32px] mt-[20px] text-[20px] text-[#222222] font-poppins">
                <li>a creation of an organisational culture that focuses on speed, agility and flexibility—in essence, a digital culture.</li>
                <li>making the transition to a remote-first workplace environment</li>
                <li>a better work culture leading to a better employee experience through processes such as performance reviews, open feedback, on boarding, feedback, tracking satisfaction</li>
              </ul>
            </div>

            <div className="">
              <h2 className="text-[28px] md:text-[32px] font-[600] mt-[40px] mb-[10px] md:mb-[30px] leading-[1.2]">
                Conclusion
              </h2>

              <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
                The overlap of the key process in <b>digital transformation</b> are intentional. A good health-check is that the processes must work together. When implemented correctly, transforming your <b>technology, data, process and culture</b> will work together resulting in an uplifting of your enterprise. Undergoing a digital transformation shows an enterprise is adaptable to change that is necessary for future-proofing your business.
              </p>
            </div>

          </div>



        </div>


        <div>
          <Portfolio />
        </div>
      </Container6>
    </div>
  );
};

export default DigitalTrans;

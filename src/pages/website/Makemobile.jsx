

import React from "react";
import Container6 from "../../components/Container6";
import { ios14, makemobile, trdpi } from "../../assets";
import { FaRegCalendar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Portfolio from "./Portfolio";

const Makemobile = () => {
  return (
    <div className="md:my-[80px] my-[20px] ">
      <Container6>

        <div className="">
          <li className="list-none text-center ">
            <Link to={''} className="rounded-3xl text-[18px] font-poppins bg-[#00b1ac33] py-[10px] px-[26px]">Success Story</Link>
          </li>

        </div>
        <div className="font-[poppins] mb-[24px] px-[15px] xl:mx-[0px] lg:mx-[40px] md:mx-[40px] sm:mx-[20px] mx-[0px]">
          <h1 className="text-[30px] md:text-[48px] pt-[20px] md:pt-[80px] leading-[1.2] text-center font-[400] ">
            How to make a successful app? Know the difference and build yours’ today!
          </h1>
          <div className="flex items-center justify-center gap-3 mt-[25px] md:mt-[30px] pb-[24px]">
            <FaRegCalendar className=" md:text-[25px] text-[20px]" />
            <span className="md:text-[16px]  text-[14px]">  December 10, 2019</span>
          </div>

          <div className=" md:pt-[20px] pt-[20px]">
            <img
              className="w-full mt-[20px] mb-[30px]"
              src={makemobile}
              alt=""
            />
          </div>


          <div className="mt-[40px]">
            {/* <h3 className="sm:text-[28px] text-[22px] mt-[40px] mb-[30px] font-bold">All you need to know about iOS 14- Features, Compatibility, Release Date, and Reviews</h3> */}
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Let us see Adam who owns a restaurant and makes $100,000 a year and Ethan who owns a courier company and brings home $500,000 a year. Both of them want to build a mobile app as a new sales channel to attract more customers and generate numbers. But here is something that is holding them b.ack, and that is the horrible statistics 999 out of 1000 apps fail. So should Adam & Ethan build their apps or just wait for the best to happen? Let’s take a look at some of the examples that are there today:
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              <b>IKEA</b> realized the software market for selling and built an app based on Augmented Reality and got 35 billion euros with getting 8 million users on board to use their app.
            </p>


            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              <b>Starbucks</b> also realized the need and created the app that got them $630 million.
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              What we see from the above examples is that careful market analysis and some planning along with the technology can do miracles, and can take Adam’s & Ethan’s businesses to the next level. Hence we’ve done some deep digging and created this guide on <b>creating a successful app</b>. Are you ready? Let’s Go!!
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              <b>Business goals</b> – Adam & Ethan had a vision, and they need to translate their vision into clear goals and objectives. Goals are things that you want to achieve with your application and the objectives are how you will do that? Some common goals are as follows:-
            </p>

            <ul className="list-disc sm:ml-[70px] ml-[30px] leading-[42px] mt-[20px] text-[20px] text-[#222222] font-poppins">
              <li>
                Deliver a service that solves a problem in the existing world and make customers happy & Satisfied.</li>
              <li>Spreading the brand awareness</li>
              <li>Entering new markets</li>
              <li>Expanding the number of services</li>
              <li>Speeding up the time to market</li>
              <li>Improving customer & Employee satisfaction</li>
              <li>Cutting operational costs &</li>
              <li>Widening your partner networks</li>
            </ul>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            How will you set the goals and objectives for your company? – This is with a clear understanding of your business plan and multi-level discussions with the team that can help you build this.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            <b>Market Analysis</b> – As we know Adam & Ethan are both new to the world of app, so they should perform a proper market analysis to enter the market with a good strategy.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            <b>Customer Segments</b> – Before the development of the app, one needs to understand who is going to use their apps. In short, the buyer’s persona that will define the desired functionality of the UI/UX better.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            <b>Product Research</b> – This can be done simply by downloading all the competitor apps available online to get a deep understanding. Understand the most appreciated features of these apps and customer acceptance. Based on this research, Adam & Ethan can define the features they wish to build on their app. Also finding issues/bugs on these apps can help them be prepared for their own app. Brainstorm and combat these issues and also consider what else can be done better by them as compared to their competitors.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            For a perfect combination of all the above, entrepreneurs can conduct SWOT analysis when it comes to the app usability.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            <b>Monetization Strategy</b> – Now that you have collected a lot of information, it is time to think about the monetization as it will affect your app functionality. Using a premium model or a freemium model? Will the users pay for your apps? Will you place any in-app adds? Etc.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            Considering the Business model for Adam & Ethan, its best to provide their apps for free as per their business goals.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            <b>App Development</b> – Now it is time to look for app development agencies in the market that can help you develop the app and this completely depends on one’s budget to keep it in-house or outsource. Since you are a start-up, it is best to outsource it.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            <b>Analytics</b> – Now that you are ready with the app to roll out, immediately after the first release of the first version, start measuring the business performance and KPI’s. You will need to link an analytical tool like google analytics to your application for this. This will give you a lot of metrics but based on research, startups should focus most on the framework.
            </p>


            <ul className="list-disc sm:ml-[70px] ml-[30px] leading-[42px] mt-[20px] text-[20px] text-[#222222] font-poppins">
              <li>
              <b>Acquisition</b> – Different channels that users usually come from</li>
              <li><b>Activation</b> – Do the users enjoy their first visit?</li>
              <li><b>Retention</b> – Do the users come back to your app?</li>
              <li><b>Referral</b> – Do the users share your product with friends?</li>
              <li><b>Revenue</b> – User behavior that brings you the most money</li>

            </ul>

            <h3 className="sm:text-[28px] text-[22px] mt-[40px] mb-[30px] font-bold">How to make a successful app</h3>
            
            <p className="font-bold text-[20px] font-poppins">Iterative releases –</p>







            <div className=" md:pt-[20px] pt-[20px]">
            <img
              className="w-full mt-[20px] mb-[30px]"
              src={trdpi}
              alt=""
            />
          </div>



            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            The purpose to work iteratively is to process the data, assess the metrics, and then introduce the changes accordingly after the first release. Analyzing the user interactions with your application in accordance with the KPIs shows the need for changes and optimizations. The project team goes through a cycle during the iteration where they evaluate and determine the changes that are needed to produce the end product.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            Every change you introduce should be derived from the metrics. Sometimes, your updates might include many different options, and it’s hard to predict what will bring a valuable outcome. Every iteration entails perfection-oriented testing and experimenting and will bring benefits only if you pay attention to the relevant data.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            We clearly see that making a <b>successful app</b> is all about planning, analyzing metrics, making well-grounded decisions, iterating, experimenting, and testing. Wow, that’s a long list, right? Definitely there will be ups and downs when you do all this. But now you know where to <Link to={'/'} className="text-[#006a83] hover:text-[#000000]">find us</Link> in-case you need help in creating a <b>successful app!</b>
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
           <Link to={'/makemobile'} className="text-[#006a83] hover:text-[#000000]">How to Make a Successful App</Link>
            </p>

          </div>









        </div>


        <div>
          <Portfolio />
        </div>
      </Container6>
    </div>
  );
};

export default Makemobile;

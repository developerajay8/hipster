import React from "react";
import Container6 from "../../components/Container6";
import { FaRegCalendar } from "react-icons/fa6";
import Portfolio from "./Portfolio";
import { applaunch } from "../../assets";

const Applaunch = () => {
  const data = [
    {
      title: "1. Do an extensive Market Research",
      prograp1:
        "In a competitive environment like this make sure to conduct extensive market research to understand the potential of your app way before it hits the market. Evaluate similar apps and identify their strengths and weaknesses. In short, acquire a complete knowledge of your competitors and recognize the potential buyers. A lot of developers might get stuck in this step but the idea is to continuously improve or work on your app according to the existing market scenario.",
    },
    {
      title: "2. Execute In-App Analytics and a Feedback Channel",
      prograp1:
        "In-app analytics will help you to measure the performance and monitor the app. You need to devise a smart analytics strategy to obtain the relevant data needed to measure the performance and success of your app. You can use such data to improve the experience of the user. Another way to do so is by allowing your app to receive feedback directly from the user. A feedback channel of an app becomes like a first line of defense where the user can drop in their reviews directly instead of on the app store. This will prevent the down rating of your app which might lead to less visibility.",
    },
    {
      title: "3. Beta Test",
      prograp1:
        "The purpose of beta testing is to see how well the app does in the real world. Whether you are developing an Android or an iOS app, doing a beta test is a crucial step. You can launch a technical beta, which is mainly done to receive useful feedback and report bugs, and later launch a marketing beta preceding the actual launch of the app intended for the customers, press and influencers. With marketing betas, you test how the app is perceived in terms of interface and design and creates buzz about your app.",
    },
    {
      title: "4. Explore Cross-platform and Browser Versions of the App",
      prograp1:
        "One of the most ongoing software trends is cross-platform app development. This approach allows your application to run on various operating systems without creating different versions of the same app. It’s faster, easier, reaches a wider audience and saves time. The browser version can also be easily created and will allow users to access your app on any device.",
    },
    {
      title: "5. App Store Optimization (ASO)",
      prograp1:
        "This step will help to get your app discovered in the major app stores. Focus on the app name and title, keywords, description, subtitle, total number of downloads, ratings and reviews. Use ASO to increase your app’s search ranking. Higher app ranks lead to more visibility which translates to more traffic. It is a process like SEO that needs to be monitored and modified over a period of time",
    },
    {
      title: "6. Create the app landing page",
      prograp1:
        "A landing page is where the user ends up after clicking an ad.Work on your app landing page to promote your app and drive the downloads. It is created to persuade the user to opt for your app. You can use your app’s screenshots, features, and launch date. Collect email addresses of potential users and invite them to sign up for notifications and offer social media sharing tools for users to recommend your app to others.",
    },
    {
      title: "7. Utilize social media",
      prograp1:
        "As a part of your marketing plan you must use all the social media channels at your disposal. Get your marketing team involved to actively campaign and update about the app this will keep the people engaged. Your presence on social media will attract other developers towards your app, this will help you to network as well as allow them to give you constructive suggestions.",
    },
    {
      title: "8. Create a video teaser/trailer",
      prograp1:
        "Creating a promotional video is the most effective way to reach your potential users. Essentially you are trying to market your app through this video. Keep the length of the video short and incorporate a quick overview of the features of your app including the platforms (like iOS and Google) it functions on. Invest in this demo video and be creative with it.",
    },
    {
      title: "9. Invest in media outreach",
      prograp1:
        "You must invest to have a successful media outreach campaign, start by laying out your outreach strategy and outreach plan. All this will help you to drive awareness and reach a wider audience for your app in a short span of time. Target bloggers, journalists and writers having an audience that would interest you. Ensure that the press kit is prepared before the launch which will consist of one file with all the information about the app such as:a press release, store icon and screenshots, lifestyle photos, video demo, app description, review guide and company information.",
    },
    {
      title: "10. Double check Submission Checklists",
      prograp1:
        "There are some final development tasks to be completed as well as a checklist you’ll have to submit to the App Store. Apple and Google provide checklist guides for housekeeping tasks related to launching apps. Go through these official guides thoroughly before launching your app and uploading it to the stores. Review the rules and guidelines that apply to each store before you attempt to submit your app.",
      prograp2:
        "These were 10 important tips that will help you in your pre-launching strategy and to check if your app is ready to hit the market. You would need to tweak these tactics in different ways depending on your product but remember to create a buzz before your app is available in the store.",
      prograp3:
        "Pick a suitable launch date for your app. You only get to launch an app once, but the journey doesn’t end there. Apart from ensuring that all the pre-launch processes mentioned above are carried out effectively, remember to monitor feedback and encourage your users to post reviews. Positive reviews will help gain popularity on the market, critical reviews will assist in furnishing your app and making it the best possible version for the customers. Initiate a healthy interaction with your reviewers so they know their feedback is valued and being worked upon. Happy customers pave the way to any successful business project. The launch is only the beginning, constant work on the user feedback is what ensures long term growth and achievement.",
    },
  ];

  return (
    <div className="my-[80px]">
      <Container6>
        <div className="mb-[48px] font-[poppins]">
          <div className="px-[15px] mb-[24px] ">
            <h1 className="  text-[30px] md:text-[48px] pt-[20px] sm:pt-[80px]  leading-[1.2] text-center font-[400] ">
              10 Ways To Check If Your App Is Ready To Launch In 2024
            </h1>
            <div className="flex items-center justify-center gap-3 sm:mt-[30px]  mt-[25px] pb-[24px]">
              <FaRegCalendar className=" sm:text-[25px] text-[20px]" />
              <span className="md:text-[16px]  text-[14px]">
                January 4, 2024
              </span>
            </div>
            <div className=" pt-[30px] sm:pt-[60px]">
              <img
                className="w-full mt-[20px] mb-[30px]"
                src={applaunch}
                alt=""
              />
            </div>

            {data.map((item, i) => {
              return (
                <div key={i}>
                  <h2 className="mt-[40px] mb-[20px] text-[28px] sm:text-[32px] leading-[1.2] sm:font-[600]">
                    {item.title}
                  </h2>
                  <p className=" text-[16px] md:text-[20px] leading-[28px] sm:leading-[32px] text-[#222] sm:mt-[20px]">
                    {item.prograp1}
                  </p>
                  <p className=" sm:text-[20px] text-[16px] leading-[28px] sm:leading-[32px] text-[#222] mt-[20px]">
                    {item.prograp2}
                  </p>
                  <p className="  text-[16px] sm:text-[20px] leading-[28px]  sm:leading-[32px] text-[#222] mt-[20px]">
                    {item.prograp3}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="px-[15px] mt-[25px] max-w-[1024px] ">
            <div className="hispterLink w-full font-poppins mb-[30px] p-2">
              <h2 className="text-[#006a83]">Hipster Link Preview</h2>
              <h3 className="text-[#5e5e5] uppercase pt-[10px] pb-1">
                HIPSTER-INC.COM
              </h3>
              <p className="text-[#006a83] text-[14px] font-[900]">
                How to Make Your Company Pandemic Proof in 2021 | Hipster
              </p>
            </div>
          </div>
          {/* componant  */}
          <Portfolio />
        </div>
      </Container6>
    </div>
  );
};

export default Applaunch;

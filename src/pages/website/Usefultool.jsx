import React from "react";
import Container6 from "../../components/Container6";
import { FaRegCalendar } from "react-icons/fa6";
import { UsefulEveryStartup } from "../../assets";
import Portfolio from "./Portfolio";
import { Link } from "react-router-dom";

const Usefultool = () => {
  const data = [
    {
      title: "5. Product Hunt",
      grap1:
        "This tool is a discussion platform for new products, apps, tech innovations etc. and was tailor-made to make the launch of startups a more straightforward process. It provides many benefits such as voting systems and user comments. But most importantly, it comprises a large group of enthusiastic testers that are willing to give your product/idea a try. Even if all these reasons are not enough to convince you, let me reveal the biggest takeaway here – it’s completely free!",
    },
    {
      title: "6. WordPress",
      grap1:
        "Now, this is no secret that it is essential for each startup to have its very own website. In today’s world, you cannot compete without a digital presence, and WordPress enables you to devise an impactful, customizable website free of cost.",
      grap2:
        "It is perfect for up and coming businesses because of its easy and quick to use features, its reliability and security, its highly responsive designs and never-ending themes as well as its focus on SEO optimization.",
    },
    {
      title: "7. MailChimp",
      grap1:
        "Creating your website is just the beginning. If you don’t put in enough effort to market your idea/website, chances are that you will never reach your complete potential. This is exactly why MailChimp is a part of this list.",
      grap2:
        "MailChimp allows you to exploit the benefits of email marketing strategies in a convenient manner. Besides, the interface is easy and customizable.",
      grap3:
        "It offers a free package, specially for startups, with basic features, but you can upgrade to the premium version ($ 10 per month) at any time.",
    },
    {
      title: "8. Google Analytics ",
      grap1:
        "Another significant step after successfully creating your website is analysis, and this tool helps you achieve that for free (limited to 5 million impressions per month).",
      grap2:
        "Google Analytics employs superior algorithms to ensure accurate tracking of website traffic, which in turn urges you to pay close attention to how many of your targets are being achieved. It pinpoints the exact source of failure or downfall and motivates you to engage in better customer management and user experience.",
      grap3:
        "For these reasons, this tool is bound to enhance your conversion rates.",
    },
    {
      title: "9. Crunchbase",
      grap1:
        "This tool is so necessary because it allows you to capitalize on great opportunities in terms of forming new connections and raising capital.",
      grap2:
        "The free version of Crunchbase is a decent place to get started as it will provide you with access to connecting with experts, other entrepreneurs, investors, market researchers, sales professionals, and much more. However, it is recommended that you take advantage of the paid premium version which has additional features like advanced searching, personalized alerts, the ability to connect with anyone, etc.",
    },
    {
      title: "10. Fresh Books",
      grap1:
        "No one will deny that no matter how ground-breaking or creative the idea is if it is not backed by sound financial planning, the startup is bound to be doomed from day one.",
      grap2: "This tool assists you in keeping all your finances in check.",
      grap3:
        "It is used as an accounting tool as it turns bookkeeping into a convenient and secure task. Its features include tracking payments, expenditure reports, financial statuses, taxation documents as well as invoicing and following up with clients. It comes integrated with MailChimp.",
      grap4:
        "The only issue is that it is not free with users having to pay $15 a month for the most basic plan.",
    },
    {
      title: "11. Asana",
      grap1:
        "As the founder of the startup, it can get troublesome to manage all activities at once, but Asana is a project management tool that ensures your job is made easier.",
      grap2:
        "Many renowned companies like Facebook and Uber use it to maintain high productivity and to ensure smooth functioning among everyone within the team. Its main features consist of assigning specific tasks according to respective roles, adding new team members, viewing reports and task activities as a project team, etc.",
      grap3:
        "There is a free version available and you are permitted to upgrade to the paid premium features anytime.",
    },
    {
      title: "12. Hootsuite",
      grap1:
        "In this day and age, marketing is incomplete without the use of social media. Hootsuite enables better management of your social media marketing/advertising strategies.",
      grap2:
        "It has a dashboard with all the social media apps and accounts in one place. It also allows you to schedule your posts in advance.",
      grap3:
        "Thus, it is perfect to manage social media teams, interact with followers, and track content on all social media platforms.",
      grap4:
        "It has a free trial available for 30 days, while the paid version starts from around $17 a month.",
    },
    {
      title: "13. Gusto",
      grap1:
        "This tool was devised to take care of HR services. It improves the pace of handling repetitive and complex tasks such as hiring, health insurance, employee benefits, business finances, workers’ compensation, and much more.",
      grap2:
        "This tool is not free of cost and will require you to pay at least $6 per month for the most basic plan.",
    },
    {
      title: "14. Calendly ",
      grap1:
        "This is a very simple and basic tool to help with easy scheduling.",
      grap2:
        "It greatly helps in scheduling appointments, calls, interviews, and more without involving emails and phone tags.",
    },
    {
      title: "15. Prezi",
      grap1:
        "This is something like Microsoft Powerpoint, but better, and everyone knows that presentations are not going to go extinct anytime soon. So, this is a must-have!",
      grap2:
        "This presentation tool features captivating templates, unique graphs as well as customer analytics. It also offers a free version with limited features.",
    },
    {
      title: "16. Intercom",
      grap1:
        "Every top company will tell you that the key to success is keeping your customers happy and satisfied, and this tool does everything in its power to help you achieve that.",
      grap2:
        "It is an all-in-one solution with CRM, a help desk, surveys, data analysis, and much more. It even possesses an integration with MailChimp.",
      grap3:
        "It offers a free trial, but thereafter you will have to pay a price starting from $39 a month.",
    },
    {
      title: "17. Slack",
      grap1:
        "This is a tool built for communication between team members, and it has been proven time and time again that this trait can either make or break a team.",
      grap2:
        "It allows the option of having discussions in groups or one-on-one and organizes all meetings by topics which makes the organization less of a hassle. It has its own mobile app, and thus, it’s very easy to access.",
      grap3:
        "The free version should suffice most of your needs, but if you can’t live without voice and video calls, then you might have to shell out some bucks for the premium version.",
    },
    {
      title: "18. Skillshare",
      grap1:
        "As am entrepreneur, you and your team can never reach a dead-end when it comes to learning, and chances are you will be required to master some new skills very quickly. Hence, Skillshare deserves a spot on this list.",
      grap2:
        "It has a variety of classes on business, tech, design, and other skills that you can get equipped with even in less than an hour!",
      grap3: "It offers a free 3-month trial before charging its users.",
    },
    {
      title: "19. StartUp Podcast ",
      grap1:
        "Starting a company all on your own can seem scary not just due to the kind of hard work it involves but also because it can feel lonely.",
      grap2:
        "Hence, this list includes this podcast which explains the risks and rewards involved, the process of getting funding, company naming, and much more. It has highly useful lessons involved and is put together in an interesting manner to make it worth watching.",
      grap3:
        "Perhaps, your journey won’t seem so secluded after binge-watching this one.",
    },
    {
      title: "20. Headspace ",
      grap1:
        "Managing and working can take a toll on your team’s mental health, which is why it’s so important to take out some much needed time for relaxation purposes.",
      grap2:
        "This meditation and sleep app has countless categories ranging from mindfulness practices, sleep enhancement to balancing personal life, and relationships with work.",
      grap3:
        "Sometimes, we get so engrossed in making our dreams come true, we forget about the little things in life that make us happy, and this app will make sure to prevent that.",
      grap3:
        "So, there it is! This is all you need to get started on your new idea, and of course, courage. Once you feel brave enough to go ahead with your big plans, give this list a try.",
      grap4:
        "After all, the only thing worse than failing is not trying at all ☺",
    },
  ];

  return (
    <div className="mb-[80px] mt-[100px]">
      <Container6>
        <div className="mb-[48px] font-[poppins]">
          <div className="px-[15px] mb-[24px]">
            <div className="flex gap-3 justify-center  sm:text-[18px] text-[15px] ">
              <div className="rgbacolor md:px-[20px] px-4 py-1 md:py-[8px]">
                App Development
              </div>
              <div className="rgbacolor md:px-[20px] px-4 py-1 md:py-[8px]">
                <Link to={''}>Web Design</Link>
              </div>
            </div>
            <h1 className="md:text-[48px] text-[30px] leading-[1.2] mb-[24px] text-center mt-[80px]">
            The Power of Social Media Marketing
            </h1>
            <div className="flex items-center justify-center gap-3 mt-[30px] pb-[24px]">
              <FaRegCalendar className="text-[25px]" />
              <span className="md:text-[16px]  text-[14px]">January 4, 2024</span>
            </div>

            <div className="mt-[40px] mb-[20px]">
              <img src={UsefulEveryStartup} className="w-full h-full" alt="" />
            </div>
          </div>
        </div>

        <div className="px-[15px] font-[poppins]">
          <div>
            {/* <h1 className="md:text-[28px] text-[26px] md:mt-[40px] mb-[30px] leading-[1.2] font-medium">
              <b>20 TOOLS EVERY STARTUP SHOULD HAVE</b>
            </h1> */}
            <p className="mb-[20px]  text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] text-[#222]">
            Social media marketing has become an essential tool for businesses to connect with their target audience and increase brand awareness. With the rise of platforms like Facebook, Instagram, Twitter, and LinkedIn, businesses have the opportunity to reach millions of potential customers.
            </p>
            <p className="mb-[20px] text-[16px] md:text-[20px] md:leading-[32px] leading-[28px] text-[#222]">
            One of the key benefits of social media marketing is its ability to target specific demographics. Businesses can create targeted ads based on factors such as age, location, interests, and behavior. This allows them to reach the right people at the right time, increasing the chances of converting them into customers.
            </p>

            {/* <h1 className="md:text-[28px] text-[26px] mt-[40px] mb-[30px] leading-[1.2] font-medium">
              <strong>1. Microsoft Teams</strong>
            </h1> */}
            <p className="mb-[20px] text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] text-[#222]">
            Another advantage of social media marketing is its cost-effectiveness. Compared to traditional advertising methods, such as TV or print ads, social media marketing is much more affordable. Businesses can set a budget that suits their needs and adjust it as necessary. This makes it accessible to businesses of all sizes, from startups to large corporations.
            </p>

            {/* <h2 className="md:text-[28px] text-[26px] mt-[40px] mb-[30px] leading-[1.2] font-medium">
              <strong>2. Google Docs</strong>
            </h2> */}
            <p className="mb-[20px]  text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] text-[#222]">
            Moreover, social media marketing allows businesses to engage with their audience on a personal level. By responding to comments, messages, and reviews, businesses can build trust and loyalty with their customers. This two-way communication also provides valuable insights into customer preferences and allows businesses to tailor their marketing strategies accordingly.
            </p>

            {/* <h2 className=" text-[26px] md:text-[28px] mt-[40px] mb-[30px] leading-[1.2] font-medium">
              <strong>3. AngelList</strong>
            </h2> */}
            <p className="mb-[20px] text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] text-[#222]">
            Furthermore, social media marketing can boost website traffic and improve search engine rankings. By sharing links to their website or blog posts, businesses can drive traffic and increase their online visibility. Additionally, social media activity, such as likes, shares, and comments, can positively impact search engine rankings, making it easier for potential customers to find them.
            </p>
{/* 
            <h2 className="text-[26px] md:text-[28px] mt-[40px] mb-[30px] leading-[1.2] font-medium">
              <strong> 4. Canva</strong>
            </h2> */}
            <p className="mb-[20px] text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] text-[#222]">
            In conclusion, social media marketing offers numerous benefits for businesses. From targeted advertising to cost-effectiveness and customer engagement, it has become an indispensable tool in today’s digital age. By harnessing the power of social media, businesses can effectively promote their products or services and stay ahead of the competition.
            </p>
            {/* <p className="mb-[20px] text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] text-[#222]">
              Click here
              <Link to={'/ios14'} className="text-[#006a83] hover:text-[#000000]">What is new in iOS 14</Link>?
            </p> */}

            {/* {data.map((fulldata, i) => {
              return (
                <>
                  <h2 className="text-[26px] md:text-[28px] mt-[40px] mb-[30px] leading-[1.2] font-medium">
                    <strong> {fulldata.title}</strong>
                  </h2>
                  <p className="mb-[20px] text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] text-[#222]">
                    {fulldata.grap1}
                  </p>
                  <p className="mb-[20px] text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] text-[#222]">
                    {fulldata.grap2}
                  </p>
                  <p className="mb-[20px] text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] text-[#222]">
                    {fulldata.grap3}
                  </p>
                  <p className="mb-[20px] text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] text-[#222]">
                    {fulldata.grap4}
                  </p>
                </>
              );
            })} */}
          </div>
        </div>
          <Portfolio />
      </Container6>
    </div>
  );
};

export default Usefultool;

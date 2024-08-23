import React from "react";
import Container6 from "../../components/Container6";
import { FaRegCalendar } from "react-icons/fa6";
import { Modern_IllustrativePersonal } from "../../assets";
import Portfolio from "./Portfolio";

const Progressive = () => {
  const data = [
    {
      title: "Discoverability",
      prograp:
        "Since PWAs are essentially websites, they can be indexed by search engines and easily found by users. PWAs are essentially websites so they can be indexed by search engines. This means that when a user searches for an application on the internet, they will likely find ones they can access instantly on their phone without having to install anything.",
    },
    {
      title: "Offline Functionality",
      prograp:
        "PWAs can work even when the user is offline, thanks to the use of Service Workers. This means users can still access the app and perform basic functions even if they don’t have an internet connection.",
      prograp1:
        "The ability for users to take actions without an internet connection expands the scope of Progressive web app, opening up a world of possibilities for greater user engagement.",
    },
    {
      title: "Offline Functionality",
      prograp:
        "PWAs can work even when the user is offline, thanks to the use of Service Workers. This means users can still access the app and perform basic functions even if they don’t have an internet connection.",
      prograp1:
        "The ability for users to take actions without an internet connection expands the scope of Progressive web app, opening up a world of possibilities for greater user engagement.",
    },
    {
      title: "Offline Functionality",
      prograp:
        "PWAs can work even when the user is offline, thanks to the use of Service Workers. This means users can still access the app and perform basic functions even if they don’t have an internet connection.",
      prograp1:
        "The ability for users to take actions without an internet connection expands the scope of Progressive web app, opening up a world of possibilities for greater user engagement.",
    },
    {
      title: "Offline Functionality",
      prograp:
        "PWAs can work even when the user is offline, thanks to the use of Service Workers. This means users can still access the app and perform basic functions even if they don’t have an internet connection.",
      prograp1:
        "The ability for users to take actions without an internet connection expands the scope of Progressive web app, opening up a world of possibilities for greater user engagement.",
    },
    {
      title: "Fast Performance",
      prograp:
        "PWAs use a number of techniques to load quickly and provide a smooth user experience, even on slow or unreliable internet connections. PWAs use a number of techniques to load quickly and provide a smooth user experience, even on slow or unreliable internet connections—a necessity when it comes to cutting-edge web technologies.",
    },
    {
      title: "Push Notifications",
      prograp:
        "PWAs can send push notifications to users, just like native mobile apps. This allows for more engaging and timely user interactions. PWAs can send push notifications to users, just like native mobile apps. These Push Notifications can serve as both a form of engagement and notification events allowing for more engaging and timely user interactions.",
    },
    {
      title: "Discoverability",
      prograp:
        "Since PWAs are essentially websites, they can be indexed by search engines and easily found by users. PWAs are essentially websites so they can be indexed by search engines. This means that when a user searches for an application on the internet, they will likely find ones they can access instantly on their phone without having to install anything.",
    },
    {
      title: "Lower Development Costs",
      prograp:
        "PWAs can be developed using web technologies, which means developers don’t need to learn a new programming language or platform. This can lead to lower development costs and faster development times.",
      prograp1:
        "Overall, the hype around PWAs is well-deserved, as they provide a number of benefits for both users and developers. However, like any technology, PWAs have their limitations and may not be the best solution for every use case. It’s important for developers to carefully consider the needs of their users and the requirements of their application before deciding to use a PWA.",

      boldtext: "You can also check:",
      bluetext: "Mobile App Development",
    },
  ];

  return (
    <div className="my-[80px]">
      <Container6>
        <div className="px-[15px] font-[poppins] mb-[24px]">
          <h1 className=" text-[30px] md:text-[48px] pt-[20px] md:pt-[80px] leading-[1.2] text-center font-[400] ">
            Progressive web app & hype about it
          </h1>
          <div className="flex items-center justify-center gap-3 mt-[25px] md:mt-[30px] pb-[24px]">
            <FaRegCalendar className=" md:text-[25px] text-[20px]" />
            <span className="md:text-[16px]  text-[14px]"> April 17, 2023</span>
          </div>
          <div className=" md:pt-[60px] pt-[30px]">
            <img
              className="w-full mt-[20px] mb-[30px]"
              src={Modern_IllustrativePersonal}
              alt=""
            />
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              A Progressive Web App (PWA) is a web application that uses modern
              web capabilities to provide users with a native app-like
              experience. PWAs are designed to be fast, reliable, and engaging,
              and can be accessed through a web browser on any device, including
              desktop and mobile.
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              One of the biggest advantages of PWAs is that they don’t require
              users to download and install an app from an app store, which can
              be a barrier to adoption. Instead, PWAs can be added to a user’s
              home screen, just like a native app, and can even work offline.
              This makes PWAs a great option for businesses looking to provide a
              mobile app experience without the cost and complexity of building
              a native app.
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              There has been a lot of hype around PWAs in recent years, and for
              good reason. Many businesses have seen significant improvements in
              engagement and user retention after launching a PWA. However, it’s
              important to note that PWAs are not a silver bullet solution for
              every business. While they can be a great option for some, others
              may still find that a native app or a traditional website better
              meets their needs.
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Overall, the hype around PWAs is warranted, as they offer a
              compelling alternative to native apps and traditional websites. As
              more businesses look to improve their mobile experiences, it’s
              likely that we’ll continue to see increased adoption of PWAs in
              the coming years.
            </p>
            <h2 className="text-[16px] md:text-[20px] mt-[20px] leading-[28px]  md:leading-[32px] font-[800]">
              You can also check:<span className="text-[#006a83]"> What is a Progressive Web App Development?</span>
            </h2>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              PWAs have generated a lot of hype in recent years because they
              provide a number of advantages over traditional web and native
              mobile applications. Some of these advantages include:
            </p>
          </div>

          {data.map((item, i) => {
            return (
              <div key={i}>
                <h2 className=" text-[28px] md:text-[32px] font-[800] mt-[40px] mb-[10px] md:mb-[20px] leading-[1.2]">
                  {item.title}
                </h2>
                <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
                  {item.prograp}
                </p>
                <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
                  {item.prograp1}
                </p>
                <h2 className="text-[20px] my-[20px] font-[900] leading-[28px] md:leading-[32px]">
                  {item.boldtext}
                  <span className="text-[#006A80]">{item.bluetext}</span>
                </h2>
              </div>
            );
          })}
        </div>
        <Portfolio />
      </Container6>
    </div>
  );
};

export default Progressive;

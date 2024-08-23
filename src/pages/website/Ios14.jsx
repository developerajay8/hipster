

import React from "react";
import Container6 from "../../components/Container6";
import { ios14 } from "../../assets";
import { FaRegCalendar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Portfolio from "./Portfolio";

const Ios14 = () => {
  return (
    <div className="md:my-[80px] my-[20px] ">
      <Container6>

        <div className="">
          <li className="list-none text-center ">
            <Link to={''} className="rounded-3xl text-[18px] font-poppins bg-[#00b1ac33] py-[10px] px-[26px]">App Development</Link>
          </li>

        </div>
        <div className="font-[poppins] mb-[24px] px-[15px] xl:mx-[0px] lg:mx-[40px] md:mx-[40px] sm:mx-[20px] mx-[0px]">
          <h1 className="text-[30px] md:text-[48px] pt-[20px] md:pt-[80px] leading-[1.2] text-center font-[400] ">
            What is New in iOS 14?
          </h1>
          <div className="flex items-center justify-center gap-3 mt-[25px] md:mt-[30px] pb-[24px]">
            <FaRegCalendar className=" md:text-[25px] text-[20px]" />
            <span className="md:text-[16px]  text-[14px]">  July 27, 2020</span>
          </div>

          <div className=" md:pt-[20px] pt-[20px]">
            <img
              className="w-full mt-[20px] mb-[30px]"
              src={ios14}
              alt=""
            />
          </div>


          <div className="mt-[40px]">
            <h3 className="sm:text-[28px] text-[22px] mt-[40px] mb-[30px] font-bold">All you need to know about iOS 14- Features, Compatibility, Release Date, and Reviews</h3>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              n June 2020, Apple announced the launch of its new operating system iOS 14. Which is set to be released in September the same year. From what can be gathered through the beta version of the OS for developers as well as the general public, this is one of the most important updates that Apple has introduced in a while.
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Some of the prominent changes in iOS 14 include:
            </p>

            <ul className="list-disc sm:ml-[70px] ml-[30px] leading-[42px] mt-[20px] text-[20px] text-[#222222] font-poppins">
              <li>ability to move widgets to your home screen</li>
              <li>compact calls that don’t take up the entire screen</li>
              <li>easy-to-use and automatically organized app library</li>
              <li>smarter Siri with an all-new compact design</li>
            </ul>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Mentioned above is just an overview of a handful of new features that the iOS 14 has to offer. The entire list of changes is extensive and will be discussed later on in the article.
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              With this software update, what Apple is basically aiming towards is optimizing the interface to make it more user friendly for its customers. Hence, it doesn’t come as a surprise that many functionalities have been made quicker and more responsive.
            </p>

          </div>

          <div className="mt-[40px]">
            <h3 className="sm:text-[28px] text-[22px] mt-[40px] mb-[30px] font-bold">When will iOS 14 be released?</h3>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Apple hasn’t announced a specific date for the official release of iOS 14. However, what’s certain is that the update shall be available in the Autumn season this year. Judging from the previous dates of new Operating System availability made by Apple, the iOS 14 can be expected to be released in the second or third week of September.
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              After Apple talked of its plans to introduce iOS 14 on June 22, 2020, at its annual Worldwide Developers Conference (WWDC), it released a developer beta to test out the update and fix bugs. The developer beta is currently on its 3rd version. Details of feedback from developers will be discussed later on in the article.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              The good news for people with an iPhone is that the company also made available a public beta version on July 9. Anyone can download and test out the iOS 14 updates provided they have registered with Apple’s beta software program (all you need is an Apple ID to register).
            </p>

          </div>

          <div className="mt-[40px]">
            <h3 className="sm:text-[28px] text-[22px] mt-[40px] mb-[30px] font-bold">What devices are compatible with iOS 14?</h3>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              If you have an iPhone 6 or the versions that came after it, you’re in luck because the all-new and exciting Operating System update (iOS14) can be downloaded on your device after it’s the official release.
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              A complete list of the compatible devices is given below:
            </p>

            <table className="w-[1140px] text-[14px] mt-[18px]">
              <tbody className="leading-[0px]">
                <tr>
                  <td className="border-none">iPhone 11</td>
                  <td className="border-none">iPhone 11 Pro	</td>
                  <td className="border-none">iPhone 11 Pro Max	</td>
                  <td className="border-none">iPhone Xs</td>
                </tr>

                <tr>
                  <td className="border-none">iPhone Xs Max	</td>
                  <td className="border-none">iPhone XR	</td>
                  <td className="border-none">iPhone X	</td>
                  <td className="border-none">iPhone 8</td>
                </tr>

                <tr>
                  <td className="border-none">iPhone 8 Plus	</td>
                  <td className="border-none">iPhone 7	</td>
                  <td className="border-none">iPhone 7 Plus	</td>
                  <td className="border-none">iPhone 6s</td>
                </tr>

                <tr>
                  <td className="border-none">iPhone 6s Plus	</td>
                  <td className="border-none">iPhone SE (1st gen)	</td>
                  <td className="border-none">iPhone SE (2nd gen)	</td>
                  <td className="border-none">iPod touch (7th generation)</td>
                </tr>
              </tbody>
            </table>

          </div>

          <div className="mt-[40px]">
            <h3 className="sm:text-[28px] text-[22px] mt-[40px] mb-[30px] font-bold">What do developers think about iOS 14?</h3>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              The majority consensus of developers can be summarized down to this- iOS 14 is one of the biggest updates Apple has released in years. It has revamped many features and shows a lot of potentials. One of the most remarkable features is the ability to place widgets on your home screen, which allows you to remember important things by a simple click instead of sliding through screens of apps to get to them. Many other features like Siri suggestions, App organization, Language translate, etc. have been made smarter and are being fixed to be more efficient as the company receives feedback from its developers.            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              However, there are several bugs with the developer as well as public beta versions of iOS 14 that Apple has released. Additionally, for comparatively older versions of the iPhone, this new update is going to drain a lot of battery which is quite inconvenient and not necessarily something that can be fixed.
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              It is recommended not to download the beta version of iOS 14 on your primary device as there’s always a risk of losing out on important data and coming across frustrating bugs without any solution. Therefore, if you plan to test out the public or developer beta version of iOS 14, do it on a device that you don’t use for everyday activities.
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Some Pros and Cons of the upcoming iOS 14 have been tabulated below.
            </p>

            <table className="w-[1140px] text-[14px] mt-[18px]">
              <tbody >
                <tr className="">
                  <th className="pl-[10px] pb-[2px]">Pros</th>
                  <th className="pl-[10px] pb-[2px]">Cons</th>

                </tr>

                <tr className="leading-[0px]">
                  <td className="border-none">Enhanced Navigation		</td>
                  <td className="border-none">	Beta versions are buggy</td>

                </tr>

                <tr className="leading-[0px]">
                  <td className="border-none">Advanced User Experience	</td>
                  <td className="border-none">Fast battery drain for old iPhone models	</td>

                </tr>

                <tr className="leading-[0px]">
                  <td className="border-none">Many new features that allow you to do more		</td>
                  <td className="border-none">Third-party apps are yet to align with the OS update 	</td>

                </tr>
              </tbody>
            </table>

          </div>

          <div className="mt-[40px]">
            <h3 className="sm:text-[28px] text-[22px] mt-[40px] mb-[30px] font-bold">iOS 14: Features to look out for</h3>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              iOS 14 is all set to be launched in fall 2020. iPhone 12, 12 Max, 12 Pro, and 12 Pro Max will come preinstalled with the latest operating system. iOS 14 comes with many advanced and new facilities. The software update is not only going to supersede its previous versions with the latest technology and ease of access, but also provide extreme security for its users.
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Discussed below are some of the salient features that users can access with iOS 14:
            </p>

            <ul className="list-disc sm:ml-[70px] ml-[30px] leading-[27px] mt-[20px] text-[20px] text-[#222222] font-poppins">
              <li className="mb-[14px]"><strong>Widgets on Home Screen & App Library</strong>: With iOS 14 you can stack up your widgets on your home screen. You can pick the size of your widget and glance at them simply by unlocking your device. Moreover, the apps will arrange themselves in the app library. This will categorize your apps in a manner that makes it easy to view and access.</li>
              <li className="mb-[14px]"><strong>Compact calls & Picture in Picture</strong>: Apple has finally fixed the age-old issue of calls taking up your entire screen. Now all calls will appear in a compact view that doesn’t take up your whole screen. The Picture in Picture feature will allow you to keep using an app in the background while using facetime or watching a video.</li>
              <li className="mb-[14px]"><strong>Ease of Messaging</strong>: Users can now pin important conversations in messages so they always appear on top. Group chats can be muted and you will only get a notification when someone mentions you in a message. New Memoji styles and stickers will make your messaging experience more fun.</li>
              <li className="mb-[14px]"><strong>Maps</strong>: Maps allow you to navigate cycling routes and electronic vehicle routes with great ease on the iOS 14. You can see congestion areas, locations with speed cameras or traffic light cameras, etc. Maps are way more smart and precise with the OS update. Furthermore, Guide suggestions will allow you to discover new places in cities and tourist destinations.</li>
              <li className="mb-[14px]"><strong>Siri & Translate</strong>: Siri comes with a refreshed compact design and highly extensive knowledge that is now 20 times what it was three years ago. The translation is available in both voice and text mode and a combination of 11 languages is supported on the device.</li>
              <li className="mb-[14px]"><strong>Home & Health</strong>: The new iOS update makes it easier for you to control any new accessories you get for your home. You can customize and use features that allow you to turn on your lights at a specific time or switch between them. Video cameras and doorbells can be attached with face recognition. And you can choose to be notified when someone enters your home if you tag them from your gallery.</li>
            </ul>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              The Health app comes with a customized sleep schedule option. You can also view new data types that allow you to choose a healthy lifestyle that suits your needs.
            </p>

            <ul className="list-disc sm:ml-[70px] ml-[30px] leading-[27px] mt-[20px] text-[20px] text-[#222222] font-poppins">
              <li className="mb-[14px]"><strong>Widgets on Home Screen & App Library</strong>: With iOS 14 you can stack up your widgets on your home screen. You can pick the size of your widget and glance at them simply by unlocking your device. Moreover, the apps will arrange themselves in the app library. This will categorize your apps in a manner that makes it easy to view and access.</li>

            </ul>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Altogether, iOS 14 is jam-packed with new and exciting features that apart from ensuring a user-friendly and smart experience. Also, pay careful attention to the customer’s security and privacy.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Click here: <Link to={'/ios14'} className="text-[#006a83] hover:text-[#000000]">What is New in iOS 14</Link>,
              <Link to={'/'} className="text-[#006a83] hover:text-[#000000]"> Software Development Agency</Link>
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

export default Ios14;

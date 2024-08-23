import React from "react";
import Container6 from "../../components/Container6";
import { FaRegCalendar } from "react-icons/fa6";
import { blog17, cost_app_development } from "../../assets";
import Portfolio from "./Portfolio";

const CostDevelop = () => {
  return (
    <div className="my-[80px]">
      <Container6>
        <div className="px-[15px] mb-[24px] font-[poppins]">
          <h1 className="text-[30px] md:text-[48px] pt-[20px] md:pt-[80px] leading-[1.2] text-center font-[400] ">
            How much does it cost to develop an app in Singapore?
          </h1>
          <div className="flex items-center justify-center gap-3 mt-[25px] md:mt-[30px] pb-[24px]">
            <FaRegCalendar className=" md:text-[25px] text-[20px]" />
            <span className="md:text-[16px]  text-[14px]"> May 13, 2022 </span>
          </div>
          <div className=" md:pt-[60px] pt-[30px]">
            <img
              className="w-full mt-[20px] mb-[30px]"
              src={blog17}  
              alt=""
            />
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              No two apps are the same, they vary in structure and are dependent
              on the mix of features and components. Therefore no two apps are
              really priced the same. In this article, it is our aim to give you
              an overview of the types of apps you can choose from according to
              your requirements. We also introduce some main “structural”
              features that need to be regarded in the app outlining and
              decision-making stage.
            </p>
            <p className="md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              In order to arrive at a decent cost estimation for an{" "}
              <b>app development cost</b>, at least for the{" "}
              <b>cost of creating an app in Singapore</b>, let’s jump right into
              the two main factors to consider: the type of app required; and
              its features.
            </p>
          </div>

          <div>
            <h2 className=" text-[28px] md:text-[32px] font-[800] mt-[40px] mb-[10px] md:mb-[20px] leading-[1.2]">
              Type of App
            </h2>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              There are many ways we can create an app, depending on the
              business stages, strategies and timelines, there are three main
              options, with different strengths and weaknesses, to deliver a
              positive experience for users.
              <b>
                All options are here to stay, and the choice between them should
                be made based on the goals of the project – mainly timeline &
                cost.
              </b>
            </p>
          </div>

          <div>
            <h2 className=" text-[28px] md:text-[32px] font-[800] mt-[40px] mb-[10px] md:mb-[20px] leading-[1.2]">
              Progressive Web app (PWA) vs. Hybrid app vs. Native app
            </h2>
            <table className="borderrs text-[14px]">
              <tbody>
                <tr>
                  <td>
                    <strong>Brief</strong>
                  </td>
                  <td>
                    A PWA runs on web technologies (HTML, CSS, JavaScript) like
                    a regular web app. Despite this, it gives a user experience
                    similar to a native mobile application
                  </td>
                  <td>
                    Hybrid apps are created to work on more than one operating
                    system or platform using one codebase
                  </td>
                  <td>
                    Native apps are developed to work on one operating system.
                    Native apps are built using Java, Swift, and Objective-C
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Timeline</strong>
                  </td>
                  <td>
                    Built quickly with real-time notifications and a native-like
                    experience on the web
                  </td>
                  <td>
                    Built quickly as it utilises the same codebase for both
                    Android and iOS
                  </td>
                  <td>
                    Built slower because of individual and separate code bases.
                    Differently programmed for Android and iOs
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Customer Acquisition</strong>
                  </td>
                  <td>Faster</td>
                  <td>Slower</td>
                  <td>Slower</td>
                </tr>
                <tr>
                  <td>
                    <strong>Customer Retention</strong>
                  </td>
                  <td>Slower</td>
                  <td> Faster</td>
                  <td>Faster</td>
                </tr>
                <tr>
                  <td>
                    <strong>Development Cost</strong>
                  </td>
                  <td>
                    Web apps take less time and cost less money. Companies on a
                    budget and tight schedule are recommended to opt for
                    responsive web applications <br /> <br /> Depending on
                    features, the development cost sits anywhere from{" "}
                    <b> $10K-70K</b>
                  </td>
                  <td>
                    Hybrid apps are in the middle of the scale in terms of cost,
                    being less expensive to develop than native apps but more
                    expensive than web apps. This type of app is also simpler to
                    maintain, as it only requires one codebase to create
                    multiple versions of the application <br /> <br /> Depending
                    on features, the development cost sits anywhere from{" "}
                    <b>$20K-100K</b>
                  </td>
                  <td>
                    Native apps are expensive, especially when multiple
                    operating systems are required, as these need to be built
                    separately. These apps also require higher maintenance,
                    factoring into the higher cost. <br /> <br /> Depending on
                    features, the development cost sits anywhere from{" "}
                    <b>$40K-200K</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Use Scenario</strong>
                  </td>
                  <td>
                    A new app is needed to serve as a starting point for an app
                    for your user
                  </td>
                  <td>
                    For frequently used apps and systems that need external
                    integration
                  </td>
                  <td>
                    For company’s that want a sense of establishment.Publishing
                    apps on app stores increases reliability – native apps have
                    more security options
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Features considerations</strong>
                  </td>
                  <td>
                    Content-based apps with interactive features <br />
                    <br /> PWAs do not require download yet enables you to
                    interact with users through push notifications. PWA works
                    similarly to a website and reaches a broader audience
                  </td>
                  <td>
                    For frequently used apps that need more interactive and
                    real-time features
                  </td>
                  <td>
                    Ideal for advanced smartphone features like geofencing and
                    sensor/detection is essential to UX or if your product
                    requires great computing power
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>User Experience</strong>
                  </td>
                  <td>Good</td>
                  <td>Better</td>
                  <td>Best</td>
                </tr>
                <tr>
                  <td>
                    <strong>Maintenance cost</strong>
                  </td>
                  <td>Cheaper and easy to deploy</td>
                  <td>
                    Expensive to maintain + Apple store and PlayStore costs
                  </td>
                  <td>
                    Expensive to maintain + Apple store and PlayStore costs + +
                    2 codebases for Android and iOS
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Technology used</strong>
                  </td>
                  <td>HTML + CSS + Javascript, Objective-C or Swift</td>
                  <td>
                    App frameworks using Flutter / React Native and other
                    technologies
                  </td>
                  <td>
                    iOS applications are built with Objective-C or Swift, while
                    Android-native apps are built with Java or Kotlin
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Benefits for business</strong>
                  </td>
                  <td>
                    – Contributes to SEO <br /> – Real-time notifications <br />{" "}
                    – Easier to deploy <br /> – Quick user acquisition since
                    users don’t need to download the app <br /> – Multiple
                    browser compatibility
                  </td>
                  <td>
                    – Excellent user experience <br /> – Greater reach in the
                    market
                  </td>
                  <td>
                    – Excellent user experience <br /> – Accuracy in features
                    that use camera, geofencing, geolocation, accelerometers{" "}
                    <br /> – Supports Augmented Reality
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Device Support</strong>
                  </td>
                  <td>All modern browsers. Responsive for all devices</td>
                  <td>Android and iOS devices, both phones and tablets</td>
                  <td>Android and iOS devices, both phones and tablets</td>
                </tr>
              </tbody>
            </table>

            <p className="md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              In summary,{" "}
              <span className="text-[20px] font-[800] text-[#006a83] hover:text-[#222] duration-75">
                Progressive Web Apps
              </span>{" "}
              are ideal for reaching a vast audience with simple solutions that
              do not require downloads. PWAs also cater best to smaller budgets
              and shorter timelines.
            </p>
            <p className="md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              <strong>Hybrid apps </strong> are ideal for content-based
              requirements or requirements that aren’t too complex. Given these
              apps are developed with only one code source that runs on both
              Android and iOS, it is a two-in-one solution.
            </p>
            <p className="md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              <strong>Native apps</strong> are ideal for better security,
              performance and user experience. Native apps also offer tailored
              solutions that utilise the phone’s hardware and functionalities
              such as its camera for a more seamless experience.
            </p>
          </div>
          <div>
            <h2 className="text-[28px] md:text-[32px] font-[800] mt-[40px] mb-[10px] md:mb-[20px] leading-[1.2]">
              App Features
            </h2>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              All the features needed can be strategically built-in in two ways
              – building the feature within the app or integrating from another
              product/service on a subscription or licence basis. When a company
              is building an app or platform, it is wise to have a mix of these
              two components. Building features can be strategic intellectual
              property, whereas looking at existing systems can be utilised for
              common operations. For example;
            </p>
            <ul className="list-disc text-[20px] md:font-[32px] font-[28px] mt-[20px] ml-[20px] md:ml-[40px] md:pl-[40px]">
              <li>
                Building an Email Marketing component in the backend ourselves
                vs using Mailchimp integration
              </li>
              <li>
                Building a component with Finance capabilities vs using Zoho or
                Xero system
              </li>
              <li>Building our own CRM vs using Active Campaign or Hubspot</li>
              <li>Building our own blog vs using Medium.com</li>
            </ul>
          </div>
          <div>
            <h2 className="text-[26px] md:text-[28px] font-[800] mt-[40px] mb-[10px] md:mb-[20px] leading-[1.2]">
              Feature Considerations
            </h2>
            <h4 className="text-[24px] leading-[1.2] mt-[40px] pb-[30px] font-[800]">
              Target Market
            </h4>
            <p className="text-[20px] leading-[28px] md:leading-[32px] mb-[20px] ">
              The app’s market decides if we keep a single language-only
              approach or go for the multi-language approach. The majority of
              apps in the European market support multiple languages while in
              Australia, a single language approach in most cases is a good
              choice. Multiple market launches also account for having the
              multi-language feature. In a country like Singapore, where there
              are 4 major races, official apps are also usually hosted in
              English, Chinese, Malay and Tamil.
            </p>
            <p className="text-[20px] leading-[28px] md:leading-[32px] mb-[20px] ">
              In more markets we launch, the type of integrations, such as
              payment integrations can vary. Singapore supports GrabPay while
              Korea has KakaoPay, and Europe and Africa have their own payment
              gateways.
            </p>
            <h4 className="text-[24px] leading-[1.2] mt-[40px] pb-[30px] font-[800]">
              Number of targetted users
            </h4>
            <p className="text-[20px] leading-[28px] md:leading-[32px] mb-[20px] ">
              The number of targetted users influences how we handle the
              security and scalability of the systems. The infrastructure
              scalability (horizontal preferred) requires some strategic
              planning in coding from day one.
            </p>
          </div>
          <div>
            <h4 className="text-[24px] leading-[1.2] mt-[40px] pb-[30px] font-[800]">
              Interface required
            </h4>
            <p className="text-[20px] leading-[28px] md:leading-[32px] mb-[20px] ">
              It is important to decide on the following:
            </p>
            <ul className="list-disc text-[20px] md:font-[32px] font-[28px] mt-[20px] ml-[20px] md:ml-[40px] md:pl-[40px]">
              <li>
                Number of platforms to launch whether web, Android, iOS or a
                combination
              </li>
              <li>Number of screens</li>
              <li>
                Device types, whether Mobile phone, Tablet, iPad, or computer
                support
              </li>
              <li>
                Screen orientation modes, whether both portrait and landscape
              </li>
              <li>Supported operating systems/browsers and their versions</li>
            </ul>
            <h4 className="text-[24px] leading-[1.2] mt-[40px] pb-[30px] font-[800]">
              Other factors
            </h4>
            <p className="text-[20px] leading-[28px] md:leading-[32px] mb-[20px] ">
              Other considerations include the:
            </p>
            <ul className="list-disc text-[20px] md:font-[32px] font-[28px] mt-[20px] ml-[20px] md:ml-[40px] md:pl-[40px]">
              <li>
                Number of different types of users within the system (vendor,
                user, admin, third parties)
              </li>
              <li>Security level supported</li>
              <li>
                Special functions (such as in-app payment support, stats, Push
                Notifications and more)
              </li>
              <li>
                Integrations like social media, marketing, and analytics tools
              </li>
              <li>Hardware integrations</li>
              <li>
                Type of support needed, usually managed through a Support Level
                Agreement
              </li>
              <li>
                The number of use cases and types of user stories (for example,
                a food ordering app system like Grab or Deliveroo supports 3
                user stories, i.e: an app for customers to order from, an app
                for merchants/restaurants to receive orders, and another app for
                the delivery personnel to track their deliveries and manage
                them. Depending on the complexities and the number of
                stakeholders involved, the cost can vary to support multiple
                operational points digitally)
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-[32px] leading-[1.2] mt-[40px] mb-[30px] font-[600]">
              Conclusion
            </h2>
            <p className="text-[20px] leading-[28px] md:leading-[32px] mb-[20px] ">
              App development costs and prices in Singapore can vary from
              <b>
                S$10,000 for basic features all the way to S$70,000 for more
                complex features for PWAs. For hybrid apps, expect to pay up to
                double the amount, and for Native apps, up to 4 times the amount
                that you would for PWAs.
              </b>{" "}
              When approaching a software developer to create an app, it is
              important to understand the basic types and options available to
              you, and carefully consider the main features needed from the
              onset. Scalability is another factor to consider and how future
              versions and feature enhancements can stand on structural
              foundations. However, in some cases, it is perfectly fine to opt
              to reinvent or upgrade to a new app as the business develops and
              the user base increases.
            </p>
            <p className="text-[20px] font-[800] mt-[40px] text-[#006a83]  hover:text-[#4169e1] duration-75 pb-[30px]">If you enjoyed this article and would like to download it, click here.</p>
          </div>
        </div>


        {/* add componant */}
        <Portfolio/>
      </Container6>
    </div>
  );
};

export default CostDevelop;

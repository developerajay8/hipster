


import React from "react";
import Container6 from "../../components/Container6";
import { barePack } from "../../assets";
import { FaRegCalendar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Portfolio from "./Portfolio";

const BarePack = () => {
  return (
    <div className="md:my-[80px] my-[20px] ">
      <Container6>
        <div className="font-[poppins] mb-[24px] px-[15px]">
          <h1 className="text-[30px] md:text-[48px] pt-[20px] md:pt-[80px] leading-[1.2] text-center font-[400] ">
            barePack: A Sustainability Startup’s Success Story
          </h1>
          <div className="flex items-center justify-center gap-3 mt-[25px] md:mt-[30px] pb-[24px]">
            <FaRegCalendar className=" md:text-[25px] text-[20px]" />
            <span className="md:text-[16px]  text-[14px]"> April 7, 2022</span>
          </div>
          <div className=" md:pt-[60px] pt-[30px]">
            <img
              className="w-full mt-[20px] mb-[30px]"
              src={barePack}
              alt=""
            />
          </div>

          <div>
            <h2 className=" text-[28px] md:text-[32px] font-[600] mt-[40px] mb-[10px] md:mb-[20px] leading-[1.2]">
              The barePack origin story:
            </h2>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              barePack (co-founded by Roxane Uzureau and presently known as &Repeat) was established in 2020 under the <Link to={''} className="text-[#006a83] hover:text-[#000000]">Jumanji</Link> group in Singapore with the clear mission to help people and businesses alike to be more sustainable, specifically in putting an end to single-use packaging that is so rampant in the food industry’s takeaway and delivery business. How they accomplish this is by partnering with restaurants so the restaurants can use the re-usable containers barePack provides to facilitate their customer’s needs. The customers thereafter take back the containers to any restaurant that is a part of the barePack network. <b className="font-[600]">barePack</b> simultaneously grew operations in France where it became the market leader for reusable containers with over 250 restaurants subscribing to the network.
            </p>
          </div>

          <div>
            <h2 className="text-[28px] md:text-[32px] font-[600] mt-[40px] mb-[10px] md:mb-[20px] leading-[1.2]">
              Enter & Repeat: the big break:
            </h2>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              In 2022, barePack got their big break when &Repeat, a sustainability market leader in Sweden for sustainable recycling and takeaway packaging solutions took notice of the French player. In Stockholm, &Repeat has a network of over 400 restaurants partnering in their re-using efforts. Combining their forces, &Repeat, even stronger through their acquisition, aims to go full speed in boosting recycling rates towards the elimination of single-use packaging.
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              What led to this startup’s huge success? barePAck co-founder Linh Le credits her success to wholeheartedly working towards a cause she strongly believes in, an incredible team where milestones are conquered together, and a <strong>reliable digital infrastructure</strong> to aid the small team in their quest for greatness.
            </p>

          </div>

          <div>
            <h2 className=" text-[26px] md:text-[28px] font-[600] mt-[40px] mb-[10px] md:mb-[20px] leading-[1.2]">
              Going digital: the barePack infrastructureVR Gear
            </h2>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Through this reliable digital infrastructure, barePack was able to achieve great things. The end to end process of facilitating operations and transactions between restaurants and customers to payment processes was automated.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              As the company grew, there was a need to scale the app infrastructure. barePack approached a new set of software developers, <strong><Link to={''} className="text-[#006a83] hover:text-[#000000]">Hipster Inc</Link></strong> to revamp the <strong>MVP (<Link className="text-[#006a83] hover:text-[#000000]"> minimum viable product </Link>)</strong> to fix issues in their bootstrapped app which they outgrew because of their vastly expanding user pool. Some of the business and user focus items Hipster Inc addressed were:
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              <strong className="'font-bold">Scalability: </strong>As more users and food outlets subscribed to the platform, the app slowed down. Speed and scalability issues were addressed by moving the infrastructure from Google Firebase to Google Firestore, ensuring the app was robust and the migration seamless so the app was kept live without any need for downtime.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              <strong className="'font-bold">Cross-Platform creation: </strong>Instead of creating a separate iOS and Android app, Hipster advised barePack to use Flutter, a cross-platform app that is compatible with both iOS and Android. Through this, costs were halved and the apps could quickly be launched. Any updates on the apps would also be published on the platforms concurrently.
            </p>

            <div>
              <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mb-[20px] mt-[20px]">
                <b>Integration:</b> The integration features done by the Hipster Inc. team were:
              </p>
              <ul className="list-disc font-poppins text-[16px] md:text-[20px] ml-[20px] md:ml-[40px] mb-[50px] pl-[20px] md:pl-[0px]">
                <li className="pb-[10px]">
                  Seamless integrations like QR codes,
                </li>
                <li className="pb-[10px]">
                  Tracking of containers and tumblers,
                </li>
                <li className="pb-[10px]">
                  Google Analytics with events for user behaviour,
                </li>
                <li className="pb-[10px]">
                  Stripe integration with subscription,
                </li>
                <li className="pb-[10px]">
                  Data integration using Google firebase and google firestore
                </li>
              </ul>
            </div>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mb-[20px] mt-[20px]">
              <b>User Experience Features:</b> Features such as the payment process was improved to allow the staff to generate a discount or promotion code. A map view was also incorporated to enhance the experience customers had with the app. With the map view, customer subscribers could easily find participating restaurants.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mb-[20px] mt-[20px]">
              <b>Data Analytics: </b>Transaction data is captured within the app to enable stakeholders to make informed business decisions. Examples of such gathered data are location-specific statistics of containers dropped off, picked up and unreturned.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mb-[20px] mt-[20px]">
              Click here for more details: <Link to={''} className="text-[#006a83] hover:text-[#000000]">barePack</Link>
            </p>



          </div>


          <div>
            <h2 className=" text-[28px] md:text-[32px] text-[500] md:font-[600] mt-[40px] mb-[10px] md:mb-[20px] leading-[1.2]">What’s Next for & Repeat?</h2>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">&Repeat has made recent announcements regarding exclusive partnership agreements with Not So Dark, and their 150 virtual restaurants across Europe, and Bagelstein and their 90 restaurants across France. The service rewards cashback to customers who recycle their packaging. The cashback can be used at any of the partner restaurants throughout &Repeat’s network. Furthermore, &Repeat has announced they are in the midst of developing new reusable packaging services.</p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">These monumental achievements in the first year of their founding do not stop the environmental services player from pushing forward. &Repeat is set to scale their service to other European countries with their eye on Germany, Spain, England and Italy. With these gaps in the market, and an opportunity to make a change for the better in creating a more circular world, &Repeat can make a large difference in the F&B takeaway and delivery scene for future generations to come.
            </p>
          </div>
        </div>


        <div>
          <Portfolio/>
        </div>
      </Container6>
    </div>
  );
};

export default BarePack;

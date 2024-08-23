import React from "react";
import Container6 from "../../components/Container6";
import { FaRegCalendar } from "react-icons/fa6";
import {
  HubSpott,
  Notion,
  PI_Analytics,
  Picture1,
  Picture2,
  blog26,
  google_drive,
  mk10,
  mk11,
  mk12,
  mk13,
  mk6,
  mk7,
  mk8,
  mk9,
  product_xero,
} from "../../assets";
import Portfolio from "./Portfolio";

const Productivity = () => {
  return (
    <div className="my-[80px]">
      <Container6>
        <div className="px-[15px] font-[poppins] mb-[24px]">
          <h1 className="text-[30px] md:text-[48px] pt-[20px] md:pt-[80px] leading-[1.2] text-center font-[400] ">
          6 Apps That Will Improve The Productivity of Your Business
          </h1>
          <div className="flex items-center justify-center gap-3 mt-[25px] md:mt-[30px] pb-[24px]">
            <FaRegCalendar className=" md:text-[25px] text-[20px]" />
            <span className="md:text-[16px]  text-[14px]"> June 28, 2021</span>
          </div>
          <div className=" md:pt-[60px] pt-[30px]">
            {/* <img
              className="w-full mt-[20px] mb-[30px]"
              src={Banners_for_Blog}
              alt=""
            /> */}
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Technology has changed the way people live their everyday lives.
              It is present in almost everything we do – from how we communicate
              with others to how we go about performing our day-to-day tasks.
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              For business owners out there, who are still doing every little
              thing on your own, stop, pause and think. Why are you not
              leveraging on technology to solve your problems? Orb
              <b> how does technology improve productivity</b> ? Well, fret not!
              In this article today, we will be introducing 6 application
              platforms that will help to
              <b>improve your business productivity.</b>
            </p>
          </div>
          <div>
            <h2 className=" text-[28px] mt-[40px] mb-[20px] font-[600] leading-[1.2] md:text-[32px]">
              1. Notion
            </h2>
            <img className="mx-[58px] mb-[30px]" src={mk6} alt="" />
            <p className=" text-[16px] md:leading-[32px] leading-[28px] md:text-[20px] mb-[20px]">
              Whether you are working alone, or with a group of people, Notion
              provides you with a single space to organize everything that
              matters using blocks. These blocks are special because they are
              recursive. Meaning that a block can contain another block. Below
              is a list of Notion’s basic blocks:
            </p>
            <ul className="md:text-[20px] list-disc ml-[40px] text-[16px] md:leading-[32px] leading-[28px]  ">
              <li className="pb-[15px]">Text</li>
              <li className="pb-[15px]">Headers</li>
              <li className="pb-[15px]">Images</li>
              <li className="pb-[15px]">Toggle Lists</li>
              <li className="pb-[15px]">To-do Lists</li>
              <li className="pb-[15px]">Tables</li>
              <li className="pb-[15px]">Call-outs</li>
              <li className="pb-[15px]">Embeds (Video, Map)</li>
            </ul>
            <img
              className=" mx-auto text-center  mb-[30px]"
              src={mk7}
              alt=""
            />
            <p className="md:text-[20px] text-[16px] md:leading-[32px] leading-[28px] mb-[20px]">
              From shared to-do lists to team calendars, to even providing users
              with @links for quick referencing of teammates, Notion puts
              everyone in the team on the same page through these blocks.
              Notion’s clean and minimalistic interface makes it simple for
              users to navigate the platform. The best part of Notion? You are
              able to use it for free forever. The only downside of the free
              plan is how much you can upload. This means you can explore the
              platform first, and commit to the paid plan much later when you
              have decided that you really like Notion!
            </p>
          </div>

          <div>
            <h2 className="md:text-[32px] text-[28px] leading-[1.2] font-[600] mt-[40px] mb-[30px]">
              2. Google Drive
            </h2>
            <img
              className=" mx-auto mb-[30px]"
              src={mk8}
              alt=""
            />
            <p className="md:text-[20px] text-[16px] md:leading-[32px] leading-[28px] mb-[20px]">
              Are you often hit with frequent notifications from your
              workstation that it is running out of disk space? Yes, we feel
              you; and we have a lifesaving solution for you. Google Drive – a
              cloud-based storage solution that allows you to save files online
              and access them anywhere from any smartphone, tablet, or computer.
            </p>
            <p className="md:text-[20px] text-[16px] md:leading-[32px] leading-[28px] mb-[20px]">
              It is also easy for team members to edit and collaborate on files
              all at once. Changes made to the document by any team member will
              be captured real-time. Not forgetting, Google Drive allows users
              to share files with users as well. For more control over these
              files, users can click the drop-down arrow to decide whether these
              people can edit, comment on, or simply view the file.
            </p>
            <img className="mx-auto" src={mk9} alt="" />
            <p className=" md:text-[20px] text-[16px] leading-[28px]  mb-[20px] md:leading-[32px]">
              If you have a Google account, you already have 15GB of free
              storage on Google Drive. However, if you do find yourself needing
              more storage space, you may upgrade to a Google One account,
              ranging from $1.99 to $9.99 per month depending on how much
              storage space you need.
            </p>
          </div>

          <div>
            <h2 className="md:text-[32px] text-[28px] leading-[1.2] font-[600] mt-[40px] mb-[30px]">
              3. Sprout Social
            </h2>
            <img
              className="mx-auto mb-[30px]"
              src={mk10}
              alt=""
            />
            <p className="md:text-[20px] text-[16px] md:leading-[32px] leading-[28px] mb-[20px]">
              In 2020 alone, it was noted that over 3.6 billion people were
              using social media worldwide. Hence, it is not surprising that
              most business owners have turned to social media platforms such as
              Instagram and Facebook for publicity of their services or
              products. Sprout Social is a marketing management tool targeted at
              helping individual entrepreneurs, small and medium-sized
              enterprises (SME) and even full-service and niche agencies
              integrate and partner with social media platforms. Below are the
              social media platforms that Sprout Social supports.
            </p>
            <ul className=" md:text-[20px] text-[16px] md:leading-[32px] leading-[28px] ml-[40px] mb-[30px]">
              <li className="pb-[15px]">Twitter</li>
              <li className="pb-[15px]">Instagram</li>
              <li className="pb-[15px]">Google+</li>
              <li className="pb-[15px]">Facebook</li>
              <li className="pb-[15px]">LinkedIn</li>
              <li className="pb-[15px]">Pinterest</li>
            </ul>
            <p className="text-[16px] md:leading-[32px] leading-[28px] mb-[20px] md:text-[20px]">
              If you are wondering how you are able to utilize Sprout Social,
              well, imagine this. Instead of having to update and work with
              every single one of your company’s social media platform pages,
              you can use Sprout Social as a one-stop location where you can
              manage everything associated with your social media marketing,
              including content curation, publishing, scheduling, and reporting
              and analytics.
            </p>
            <p className="text-[16px] md:leading-[32px] leading-[28px] mb-[20px] md:text-[20px]">
              Have a post where the engagement rate is not so high? No worries,
              Sprout Social will analyse that for you. On top of that, Sprout
              Social comes with several automation tools to help you interact
              with your customers more effectively. One example is the Bot
              Builder function. This function allows you to create social
              chatbots that are capable of responding to direct messages on
              Twitter and Facebook Messenger using pre-determined messages by
              you. Through Sprout Social, you will be able to save a substantial
              amount of time through automation.
            </p>
            <p className="text-[16px] md:leading-[32px] leading-[28px] mb-[20px] md:text-[20px]">
              Even though you have to pay to use the platform, Sprout Social
              allows a one-month free trial with no credit card required. During
              the trial, you are able to see how the platform works and if its
              performance is up to standard. Once the trial has ended, you can
              then decide whether it’s worth it to commit to a long-term plan
              with Sprout Social.
            </p>
          </div>

          <div>
            <h2 className="md:text-[32px] text-[28px] leading-[1.2] font-[600] mt-[40px] mb-[30px]">
              4. HubSpot
            </h2>
            <img
              className="mx-auto mb-[30px]"
              src={mk11}
              alt=""
            />
            <p className="md:text-[20px] text-[16px] md:leading-[32px] leading-[28px] mb-[20px]">
              HubSpot is an inbound marketing and sales software that assist
              businesses in attracting visitors, converting leads, and closing
              customers. HubSpot’s solutions allows you to host web and landing
              sites, build blogs and email sequences, and manage interactions
              with your leads and customers.
            </p>
            <p className="text-[16px] md:leading-[32px] leading-[28px] mb-[20px] md:text-[20px]">
              This is all done while analyzing campaign success and tracking
              user behaviour. HubSpot has a large variety of tools for business
              owners to choose from, and these tools are divided into “Hubs” –
              hence the name HubSpot. While some hubs are free to use, there are
              other hubs that can be purchased separately. When combined, these
              hubs come together seamlessly, giving you a full suite of tools
              across your marketing, sales, and support teams.
            </p>
            <p className="text-[16px] md:leading-[32px] leading-[28px] mb-[20px] md:text-[20px]">
              If you are new to HubSpot, you will be glad to know that they take
              customer training very seriously. Hence, do not be afraid of
              diving into using the platform, because HubSpot has a remarkable
              library of webinars that will aid you in understanding the process
              of inbound marketing. You are also able to participate in live
              webinars and view past recorded ones as well. If you require any
              help along the way, you will be pleased to know that HubSpot has
              its help resources readily available to meet your needs.
            </p>
          </div>

          <div>
            <h2 className="md:text-[32px] text-[28px] leading-[1.2] font-[600] mt-[40px] mb-[30px]">
              5. Xero
            </h2>
            <img
              className="mx-auto mb-[30px]"
              src={mk12}
              alt=""
            />
            <p className="md:text-[20px] text-[16px] md:leading-[32px] leading-[28px] mb-[20px]">
              Xero is a cloud-based accounting software that helps business
              owners manage the business’ finances at their fingertips. From
              functions such as accounts payable, accounts receivable and
              payroll, Xero makes it even more simple for you and I to use
              through its own mobile app – Xero Touch. Xero also uses real time
              data to allow for up-to-date accounts management. Do you know that
              a huge percentage of businesses choose to use Xero because of its
              beautiful interface? Xero allows users to customize their
              dashboard based on how they personal preferences, and even you to
              create your very own custom templates for invoicing and quotation
              purposes. Similar to Sprout Social, Xero offers its users a
              one-month free trial.
            </p>
          </div>

          <div>
            <h2 className="md:text-[32px] text-[28px] leading-[1.2] font-[600] mt-[40px] mb-[30px]">
              6. Figma
            </h2>
            <img
              className="mx-auto mb-[30px]"
              src={mk13}
              alt=""
            />
            <p className="md:text-[20px] text-[16px] md:leading-[32px] leading-[28px] mb-[20px]">
              Figma is a cloud-based graphics editing and user interface design
              application. You can use it to do all kinds of graphic design work
              from wireframing websites, designing mobile application
              interfaces, prototyping designs, crafting social media posts, and
              almost everything else you can think of! You can even work with
              other team members at the same time, on the same file! The best
              part? Figma offers a free version to all users. All you have to do
              is visit the
              <span className="text-[#006a83]"> Figma Website</span> to register
              for a free account.
            </p>
            <p className="md:text-[20px] text-[16px] md:leading-[32px] leading-[28px] mb-[20px]">
              If you are worried about the learning curve in using Figma, you
              will be glad to know that Figma has a very beginner-friendly
              editor where you can create your designs from scratch or using
              pre-uploaded templates. Figma also offers its users a plethora of
              resources to use. Nonetheless, if you do find yourself facing some
              difficulties with Figma, there are many YouTube tutorials
              available that can take you through Figma step-by-step. You can
              start with this video –
              <span className="text-[#006a83]">
                Get Started With Figma (YouTube).
              </span>
            </p>
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
                6 Apps to Improve Productivity of Your Business | Improve
                Productivity
              </p>
            </div>
            <p className="text-[20px] md:leading-[32px] leading-[28px] mb-[20px]">
              Click here for
              <span className="text-[#006a83]">
                10 Crucial SEO Ranking Factors.
              </span>
            </p>
          </div>
        </div>
        <Portfolio />
      </Container6>
    </div>
  );
};

export default Productivity;

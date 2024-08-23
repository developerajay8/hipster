import React from "react";
import Container6 from "../../components/Container6";
import { FaRegCalendar } from "react-icons/fa6";
import {
  Group_Imag,
  Virtual_Event_Management_Solution,
  Webinar14,
  fourthGrid,
  lastgridimage,
  pccomputer,
  shakeHello,
  sp1,
  sp2,
  sp3,
  sp4,
  sp5,
  sp6,
  sp7,
} from "../../assets";
import Portfolio from "./Portfolio";

const Managsolution = () => {
  return (
    <div className="my-[80px]">
      <Container6>
        <div className="px-[15px] font-[poppins] mb-[24px]">
          <div className="flex justify-center">
            <div className="text-[18px] md:px-[20px] mb-[30px] mt-[20px] px-[15px] py-[4px] md:py-[8px] bluerbgacolor">
              Technologies
            </div>
          </div>
          <h1 className=" text-[30px] md:text-[48px] pt-[20px] md:pt-[50px] leading-[1.2] text-center font-[400] ">
            Virtual Event Management Solution
          </h1>
          <div className="flex items-center justify-center gap-3 mt-[25px] md:mt-[30px] pb-[24px]">
            <FaRegCalendar className=" md:text-[25px] text-[20px]" />
            <span className="md:text-[16px]  text-[14px]">
              January 11, 2021
            </span>
          </div>
          <div className=" md:pt-[60px] pt-[30px]">
            <img
              className="w-full mt-[20px] mb-[30px]"
              src={sp1}
              alt=""
            />
          </div>

          <div>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mb-[40px]">
              When it comes to online event management, Hipster has the perfect
              tool to help organise your virtual events in an efficient and
              reliable manner. Our event management tool provides a complete
              solution and we work with you from the beginning to the end. After
              getting in touch with us and sharing the details of your virtual
              event, we create a personalized microsite for your event, just the
              way you plan a physical event but in this case, virtually with our
              event management tool. Your participants will receive regular
              notifications about the event and can view it live and interact
              with each other while it happens.
            </p>
            <div className="p-[5px]">
              <img src={sp2} className="w-full mb-[48px]" alt="" />
            </div>

            <h2 className=" mt-[20px] pb-[30px] md:text-[32px] text-[28px] leading-[28px] md:leading-[32px] font-[700]">
              Some basic features of Hipster’s Event Management Tool
            </h2>
            <ul className=" list-disc md:text-[20px] text-[#222] ml-[20px] mb-[40px] md:ml-[40px]  text-[16px] md:leading-[32px] leading-[28px]">
              <li className="pb-[15px]">
                It can organise formal as well as informal events.
              </li>
              <li className="pb-[15px]">
                The tool works for hybrid events too, i.e. events that are a
                mixture of in-person and virtual gatherings.
              </li>
              <li className="pb-[15px]">
                Attendees can view the live stream of your event and interact
                among each other using the chat option.
              </li>
              <li className="pb-[15px]">
                The tool incorporates all basic features of virtual event
                interaction.
              </li>
            </ul>

            <h2 className=" mt-[20px] pb-[30px] md:text-[32px] leading-[28px] md:leading-[32px] font-[700] text-[28px]">
              Types of Virtual Events
            </h2>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mb-[20px]">
              Face to face interaction will always be important, but on several
              occasions going virtual is a necessary step of your event. In
              virtual events individuals attend the event online instead of
              physically being present at a designated venue. Organizing a
              virtual and in-person event are not so different. In both types of
              events you have to promote the event, engage your audience, and
              run the show successfully. The only things that are missing
              include the venue and live audience. Virtual events can also be
              organized with an in person event as virtual events are not a
              replacement of an in person events but a new type to add.
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mb-[20px]">
              <strong>There are 4 main types of virtual events:</strong>
            </p>
          </div>
          <div className="grid pt-[20px] gap-5 grid-cols-1 md:grid-cols-2">
            <div>
              <img className="w-full" src={sp3} alt="" />
            </div>
            <div>
              <h3 className="text-[24px] leading-[1.2] text-[#222] font-[800] pb-[30px] pt-[40px]">
                1. WEBINAR:
              </h3>
              <p className="md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mb-[20px]">
                It is a live online seminar and generally lasts somewhere from
                40 to 90 minutes. Webinars are generally informative,
                interactive, asking questions and discussing their answer in
                real time. Organizations holding a webinar can also charge their
                audience or be offered for free. Due to their educational
                nature, a well promoted webinar has a large number of attendees.
                For example- Microsoft organized a webinar on “top 5 security
                threats facing your business and how to respond”.
              </p>
            </div>
            <div>
              <h3 className="text-[24px] leading-[1.2] text-[#222] font-[800] pb-[30px] pt-[40px]">
                2. VIRTUAL CONFERENCES:
              </h3>
              <p className="md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mb-[20px]">
                Just like in-person conferences, a virtual conference is
                organized in a way that participants can meet, chat and discuss
                themes of a common topic. Virtual conferences are usually built
                around a live and complicated topic. In person conferences are
                more effective in terms of lead capture and networking
                opportunities but virtual conferences allow attendees to view
                keynotes, built their own view point from apt and on demand
                content.
              </p>
            </div>
            <div>
              <img className="w-full" src={sp4} alt="" />
            </div>
            {/* .................... */}
            <div>
              <img className="w-full" src={sp5} alt="" />
            </div>
            <div>
              <h3 className="text-[24px] leading-[1.2] text-[#222] font-[800] pb-[30px] pt-[40px]">
                3. INTERNAL HYBRID EVENTS:
              </h3>
              <p className="md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mb-[20px]">
                There are many organizations that span across countries and even
                continents. Internal hybrid events are used to communicate with
                entire company while their employees are not gathered at one
                place. It is also financially viable as to fly every employee to
                your company’s headquarters is very expensive and time
                consuming.
              </p>
            </div>
            {/* ....................... */}

            <div>
              <h3 className="text-[24px] leading-[1.2] text-[#222] font-[800] pb-[30px] pt-[40px]">
                4. EXTERNAL HYBRID EVENTS:
              </h3>
              <p className="md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mb-[20px]">
                These events are held for participants outside the company but
                have similar interest or industry. Through external hybrid event
                they come together to exchange ideas, show their products or
                make announcements. These events need higher level of video
                production as they have to provide similar quality to virtual
                attendees as in person attendees.
              </p>
            </div>
            <div>
              <img className="w-full" src={sp6} alt="" />
            </div>
          </div>

          <div>
            <h2 className="text-[26px] md:text-[32px] font-[600] leading-[1.2] mt-[40px] mb-[20px] ">
              HOW VIRTUAL EVENT IS USEFUL ?
            </h2>
            <p className="md:text-[20px] text-[16px] mb-[20px] md:leading-[32px] text-[#222] leading-[28px]">
              Virtual events are held for the same reasons as in person events:
              to increase your company’s reach and revenue, deliver their
              message and build loyalty. When deciding to make your event
              virtual or not, consider what you hope to gain from the event and
              how virtual event is suitable for your goals.
            </p>
          </div>
          <div>
            <h2 className="text-[20px] pb-4  leading-[1.2] mt-[40px]">
              <strong> FEW REASONS TO HOST A VIRTUAL EVENT:</strong>
            </h2>
            <ul className="mb-[20px] list-decimal md:text-[20px] text-[16px] ml-[20px] pl-[20px] md:pl-[40px] md:ml-[40px]  md:leading-[32px] leading-[28px]">
              <li>
                It can enhance the reach of any in person event. As virtual
                option allow you to accommodate even those attendees who are
                unable to reach the venue.
              </li>
              <li>
                It is financially viable. Small events and webinars of an
                organization can be held virtually. And it help in saving money
                for the largest event of the year which brings in largest number
                of leads.
              </li>
              <li>
                Some situations allow only for virtual interaction. The recent
                advent of Covid-19 virus and the global lockdown has shown the
                entire world the importance of virtual communication. Similarly,
                natural calamities, political disturbances, travel bans, etc.
                all disallow for in-person events and call for an effective
                method of virtual event organization.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] pb-4  leading-[1.2] mt-[40px] ">
              <strong> FEW REASONS TO HOST A VIRTUAL EVENT:</strong>
            </h2>
            <ul className="mb-[20px] list-decimal md:text-[20px] text-[16px] ml-[20px] pl-[20px] md:pl-[40px] md:ml-[40px]  md:leading-[32px] leading-[28px]">
              <li>
                Virtual events like in person events needs good marketing
                strategy. Without good marketing and promotion the event will
                not have sufficient audience.
              </li>
              <li>
                Content is the most important part of the event. In virtual
                setting, your content is your event. It should have powerful
                keynotes, and engaging sessions for the audiences.
              </li>
            </ul>
            <ul className=" ml-[20px] md:ml-[40px] list-disc md:text-[20px] text-[16px] pb-[20px] md:leading-[32px] leading-[28px]">
              <li>
                Event success can only be measured by data, hence you have to
                measure engagement and capture attendee data in a way that shows
                event success.
              </li>
            </ul>
            <img src={sp7} className="w-full my-[20px]" alt="" />
          </div>
          <div>
            <h2 className=" md:text-[32px] text-[28px] leading-[1.2] mt-[40px] pb-[20px]">
              VIRTUAL EVENT ELEMENTS:
            </h2>
            <p className=" md:text-[20px] text-[16px] text-[#222] md:leading-[32px] leading-[28px] mb-[20px]">
              A virtual event rest on contents, attendees engagements and data.
              Virtual events do not need F&B , they require the same element as
              any other kind of event but video production quality and
              connectivity should be good.
            </p>
            <p className=" md:text-[20px] text-[16px] text-[#222] md:leading-[32px] leading-[28px] mb-[20px]">
              These are the few elements that make up a virtual event:
            </p>

            <ul className=" list-disc md:text-[20px] text-[#222] text-[16px] md:leading-[32px] leading-[28px] md:ml-[40px] ml-[20px] md:pl-[40px] pl-[20px]">
              <li className="pb-4">
                <b>EVENT MICROSITE:</b> It is used to promote the event. This is
                used for the same reason in both types of event. It is an
                important promotional tool to attract the possible audience and
                persuade them to register for your event. It should have all
                information about your event.
              </li>

              <li className="pb-4">
                <b>REGISTRATION: </b>It is an important process of virtual
                event. It allows attendees to register for event and make any
                payment if needed. A well made online registration platform will
                help attendees to register easily and provide organizers with
                the data which they need to plan an event and show its success.
              </li>
              <li className="pb-4">
                <b> EMAIL MARKETING:</b> It can increase the reach of your
                event, as it increases registration, give information to
                attendees and can also be used to engage them. It can also be
                used in feedback survey.
              </li>
              <li className="pb-4">
                <b>ONLINE EVENT GUIDE & MOBILE EVENT APP:</b> It is very
                important to have an online event guide or a mobile event app as
                they work home base for attendees during the event. These tools
                can enhance the experience of attendees and also connect them
                and provide messaging tools that allows them to network.
                Organizer can also get the required information about attendees
                through these tools.
              </li>
              <li className="pb-4">
                <b>EVENT FEEDBACK:</b> Feedback is important for virtual events
                as organizer cannot understand their expression nor have any
                verbal feedback from attendees. Through feedback tools we can
                collect feedback by post event surveys which can be used to show
                that event is a success.
              </li>
            </ul>
          </div>

          <div>
            <h2 className=" md:text-[32px] text-[28px] leading-[1.2] font-[1.2] pb-[30px] pt-[40px]">HOW HIPSTER’S VIRTUAL EVENT TOOL IS USEFUL:</h2>
            <ul className=" md:pl-[40px] pl-[20px] list-disc pb-[30px] md:text-[20px] text-[16px]  md:leading-[32px] leading-[28px] ml-[20px] md:ml-[40px] ">
                <li className="pb-[15px]">To get maximum audience participation a easy and simple registration process is must. An event registration platforms like Hipster, will make virtual event registration easier and interactive, it will also give access to useful attendee’s information.</li>
                <li className="pb-[15px]">To conduct virtual conferences, business meetings, team interaction, interviews, webinar, live streaming tools are necessary. Tools like Google, Zoom, Skype, Instagram help organizers to present online presentations, attendees in networking, and allow them to live stream their event, share screens, etc. Hipster’s Event Management Tool incorporates all of these tools and gives you the best virtual event experience.</li>
            </ul>
          </div>
          <div>
            <h2 className=" md:text-[32px] text-[28px] leading-[1.2] font-[1.2] pb-[30px] pt-[40px]">HOW HIPSTER’S THINGS TO KEEP IN MIND WHILE HOSTING A VIRTUAL EVENT:</h2>
            <ul className=" md:pl-[40px] pl-[20px] list-disc pb-[30px] md:text-[20px] text-[16px]  md:leading-[32px] leading-[28px] ml-[20px] md:ml-[40px] ">
                <li className="pb-[15px]">The attendees should not be in front of their computer for long interval of time.</li>
                <li className="pb-[15px]">You should prepare your attendees for virtual event. It is best to create a guide for attendees or allow them to practice launching sessions.</li>
                <li className="pb-[15px]">The attendees should be involved rather than making him sit for hours and listen to content. To engage attendee we can use live polling, live Q&A and entertaining activities.</li>
                <li className="pb-[15px]">Provide a messaging system to your attendees so that they can interact with each other, exhibitors, or sponsors.</li>
                <li className="pb-[15px]">Collect data before, during and after the event and it can be used to get possible customers, show event success and improve the event for next year.</li>
            </ul>
            <p className=" md:text-[20px] text-[16px] md:leading-[32px] text-[#222] leading-[28px] pb-[15px]">However, using Hipster’s Event Management Tool you can just sit back and let us do all the hard work. Our experienced team will perform every crucial task necessary to make your virtual event a success.</p>
            <p  className=" md:text-[20px] text-[16px] md:leading-[32px] text-[#222] leading-[28px] pb-[15px]">Click here: <span  className="text-[#006a83]"> How to Plan a Minimum Viable Product</span></p>
          </div>
        </div>
        {/* add componant here   */}
        <Portfolio/>
      </Container6>
    </div>
  );
};

export default Managsolution;

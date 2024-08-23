import React from "react";
import Container6 from "../../components/Container6";
import { FaRegCalendar } from "react-icons/fa6";
import { SEOBanner, blog18 } from "../../assets";
import Portfolio from "./Portfolio";

const Designbackend = () => {
  return (
    <div className="my-[80px] ">
      <Container6>
        <div className="mb-[24px] font-[poppins] px-[15px]">
          <h1 className="text-[30px] md:text-[48px] pt-[20px] md:pt-[80px] leading-[1.2] text-center font-[400] ">
          7 Essential Tips for UX Design backed by Psychology
          </h1>
          <div className="flex items-center justify-center gap-3 mt-[25px] md:mt-[30px] pb-[24px]">
            <FaRegCalendar className=" md:text-[25px] text-[20px]" />
            <span className="md:text-[16px]  text-[14px]"> May 11, 2022</span>
          </div>
          <div className=" md:pt-[60px] pt-[30px]">
            <img
              className="w-full mt-[20px] mb-[30px]"
              src={blog18}
              alt=""
            />
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              UX design is really important. Without it, we have something
              pretty, but empty because it doesn’t take into account how user’s
              actually want to use the product.{" "}
              <h2 className="text-[#006a83] font-[600] hover:text-[#222]">
                UX design
              </h2>{" "}
              is all about enhancing the user interaction with the product by
              giving users a better experience by improving the{" "}
              <b>usefulness</b>, <b>usability</b>, and <b>desirability</b>{" "}
              between the user and the product. There are many keys to building
              trust with users. A great thing to remember is to “speak human”,
              which simply means to practice <b>empathy</b>. Keeping this in
              mind, here are some essential tips for better UX design backed by
              the study of human behaviour.
            </p>
          </div>

          <div>
            <h2 className=" text-[28px] md:text-[32px] font-[800] mt-[40px] mb-[10px] md:mb-[20px] leading-[1.2]">
              1. Clear Call to Action
            </h2>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Have clarity of where you want users to go. This means, having
              your primary and secondary actions clearly visible and accessible.
              Before starting your project, define your clear goal or primary
              reason. Figure out what is important and bring your user there.
              There is a psychological principle called <b>Fitts’ law</b>, which
              explained simply, states that the time it takes to acquire a
              target has to do with the distance and size of the target. So make
              elements that should be easily selectable, larger and position
              them close.
            </p>
          </div>

          <div>
            <h2 className=" text-[28px] md:text-[32px] font-[800] mt-[40px] mb-[10px] md:mb-[20px] leading-[1.2]">
              2. Reduce Visual Clutter
            </h2>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Remember, information needs to be prioritised as a user’s
              attention is a precious resource. Clutter in the interface
              overloads the user’s attention, and while there will be a
              temptation to put across all sorts of information for users, it is
              our job to help the users focus and hone in on what is really
              important. Make it easier for people to make a decision by
              reducing visual clutter. This is in line with the psychological
              principle <b>Hick’s law</b> which states the more choices someone
              is given, the longer it will take them to make a decision.
              Therefore, streamline to only what’s important.
            </p>
          </div>

          <div>
            <h2 className=" text-[28px] md:text-[32px] font-[800] mt-[40px] mb-[10px] md:mb-[20px] leading-[1.2]">
              3. Reduce Amount of Text
            </h2>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              People. Don’t. Read. No matter how great the words are. It’s
              because of this that when we place words, we need to do it as
              intentionally and as meaningful as possible. We need to prioritise
              these words by trimming them down by using headings, using lists,
              changing the colours and sizes of words, avoiding really long
              blocks of texts and pairing texts with visuals.{" "}
              <b> Retention theory</b> is the relation between the quantity of
              information provided to the users vs time spent on the page. Users
              don’t want to be burdened by a large number of texts.
            </p>
          </div>

          <div>
            <h2 className=" text-[28px] md:text-[32px] font-[800] mt-[40px] mb-[10px] md:mb-[20px] leading-[1.2]">
              4. Organise Content
            </h2>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              A good design language has a strong hierarchy. Some great
              principles for this are applying contrast, organising content with
              a grid, and utilising negative space. Let things breathe by
              opening things up. Remember less is more.{" "}
              <b> The Law of Common Boundary</b> states that individuals tend to
              perceive elements into groups if they share an area with a clearly
              defined boundary. <b>Gestalt’s law of proximity</b> states that
              objects close to one another appear to form groups. Great user
              experience is in part a result of organised content that is
              desirable to the user.
            </p>
          </div>

          <div>
            <h2 className=" text-[28px] md:text-[32px] font-[800] mt-[40px] mb-[10px] md:mb-[20px] leading-[1.2]">
              5. Simplify the learning process
            </h2>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              People don’t want to have to sit down and decode new information.
              This is consistent with Jakob’s law that states that user’s spend
              most of their times on other sites and that they prefer your site
              to work the same way other sites would. Familiar design patterns
              minimises any learning curve so users do not have to devote extra
              time trying to understand new patterns. Improving clarity means
              making it effortless for users to accomplish their goals.
            </p>
          </div>

          <div>
            <h2 className=" text-[28px] md:text-[32px] font-[800] mt-[40px] mb-[10px] md:mb-[20px] leading-[1.2]">
              6. Consider How the Eye Scans Information
            </h2>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Avoid multi-column forms. During a series of user testings, it was
              found that users found it tiresome to have to scan up and down and
              then from left to right. Keep your forms in one column whenever
              possible. This is in line with{" "}
              <b>Gestalt’s principle of continuity</b> which states that the
              human eye is more likely to see a continuous path rather than
              jagged or interrupted ones.
            </p>
          </div>
          <div>
            <h2 className=" text-[28px] md:text-[32px] font-[800] mt-[40px] mb-[10px] md:mb-[20px] leading-[1.2]">
              7. Increase Consistency
            </h2>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Consistency is key to avoiding confusion. Use the same terminology
              across your design starting with the brand colours used
              appropriately. This is in line with a psychological principle
              called the <b>Aesthetic-Usability Effect</b> which states that
              users perceive aesthetically pleasing design to also be more
              usable.
            </p>
            <p className="md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Understanding human behaviour, sharpening observation skills and
              practising empathy are key to becoming a more adept{" "}
              <b>UX designer</b>. I would be remiss if I were not to mention
              that <b>User Experience</b> has a second part to it, as after
              design comes validation. Validation is the testing of our design.
              In testing, we discover if features are as functional as we think
              to the users. It also includes studying their behaviour to see if
              they completed tasks in our web apps, mobile apps and screens
              without frustration. Where the goal is to delight users, we need
              to ensure we do just that by testing.
            </p>
            <p className="md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              While doing user testing, humility is a virtue to uphold. No one
              likes to discover that our very cleverly done{" "}
              <span className="text-[#006a83] font-[700]">web design</span> or
              app design has some areas that need tweaking, but with humility,
              we can stay open and learn by being adaptive to be able to do
              iterations on your design. Through these factors, you will have
              the tools to solve problems and ensure the users have a delightful
              <b className="font-[800] text-[#222]"> digital user experience </b>through user-centred design.
            </p>
          </div>
        </div>
        {/* add to componant  */}
        <Portfolio />
      </Container6>
    </div>
  );
};

export default Designbackend;

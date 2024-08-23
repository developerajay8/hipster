import React from "react";
import Container6 from "../../components/Container6";
import { FaRegCalendar } from "react-icons/fa6";
import {
  Blunders_Software_Group,
  Blunders_Software_Tester,
  blog40,
  sp8,
} from "../../assets";
import Portfolio from "./Portfolio";

const SoftwareTester = () => {
  return (
    <div className="my-[80px]">
      <Container6>
        <div className="font-[poppins] mb-[24px] px-[15px]">
          <h1 className="text-[30px] md:text-[48px] pt-[20px] md:pt-[80px] leading-[1.2] text-center font-[400] ">
            9 Blunders Made by Software Tester
          </h1>
          <div className="flex items-center justify-center gap-3 mt-[25px] md:mt-[30px] pb-[24px]">
            <FaRegCalendar className=" md:text-[25px] text-[20px]" />
            <span className="md:text-[16px]  text-[14px]">
              January 5, 2021
            </span>
          </div>
          <div className=" md:pt-[60px] pt-[30px]">
            <img
              className="w-full mt-[20px] mb-[30px]"
              src={blog40}
              alt=""
            />
            <h2 className=" md:text-[32px] text-[26px] leading-[1.2] mt-[40px] mb-[30px] font-[600]">
              1. Not making Test cases before development starts
            </h2>
            <p className=" md:text-[20px] text-[16px] md:leading-[32px] leading-[28px] text-[#222] mb-[20px]">
              <b>Making Test cases</b> is an important part of development and
              this should be done before starting the development. If developers
              do not know what use cases they need to program, they will
              certainly miss out many points and it will be iterative and it
              will delay the work flow to cover up these test cases.
            </p>
            <p className=" md:text-[20px] text-[16px] md:leading-[32px] leading-[28px] text-[#222] mb-[20px]">
              Successful completion of testing requires a well-structured plan
              which describes every actions step by step. Each mobile
              app/website under test must have its own test plan and cases which
              states what test to execute and this will help programmers to plan
              the way they code. Therefore important elements like, scope of
              testing and requirements must be first defined.
            </p>
            <p className=" md:text-[20px] text-[16px] md:leading-[32px] leading-[28px] text-[#222] mb-[20px]">
              There is a saying that two products in the same horizon are not
              built the same. So every tech product has its own story, use
              cases, plan and requirements that fulfill user’s purpose.
            </p>
            <p className=" md:text-[20px] text-[16px] md:leading-[32px] leading-[28px] text-[#222] mb-[20px]">
              In order to prevent such mistakes, it is recommended to write an
              in-depth description of the project target, project cases and its
              target consumers, requirements, test cases and the expected result
              of test cases.
            </p>
          </div>
          <div>
            <h2 className=" md:text-[32px] text-[26px] leading-[1.2] mt-[40px] mb-[30px] font-[600]">
              2. Using same test data every time
            </h2>
            <p className=" md:text-[20px] text-[16px] md:leading-[32px] leading-[28px] text-[#222] mb-[20px]">
              Regression testing is the most crucial thing in the test life
              cycle but executing the same unchanged regression tests will not
              find new bugs. It is the same as Muscle training in the gym – Same
              exercise and reps are not long term benefits therefore either we
              try more reps or advance versions of it.
            </p>
            <p className=" md:text-[20px] text-[16px] md:leading-[32px] leading-[28px] text-[#222] mb-[20px]">
              When a tester is using an unchanged test scenario for several
              iterations then a moment comes when these scenarios wont detect
              new bugs. <br /> There is a saying – Insanity is doing same thing
              and expecting different results.
            </p>
          </div>
          <div>
            <h2 className=" md:text-[32px] text-[26px] leading-[1.2] mt-[40px] mb-[30px] font-[600]">
              3. Not working as a Team
            </h2>
            <p className=" md:text-[20px] text-[16px] md:leading-[32px] leading-[28px] text-[#222] mb-[20px]">
              Communication is as important as any other skill. Efficient
              teamwork is a key element in project management with quality
              assured.
            </p>
            <p className=" md:text-[20px] text-[16px] md:leading-[32px] leading-[28px] text-[#222] mb-[20px]">
              During a conversation with teammates, a QA must play the role of a
              team player who is finding rare use cases and help developers to
              improve the product. Blaming developers and their work can create
              a tense and toxic atmosphere and it could delay the project.
            </p>
            <p className=" md:text-[20px] text-[16px] md:leading-[32px] leading-[28px] text-[#222] mb-[20px]">
              A Tester should be diplomatic and a team player, very often people
              forget that a program is developed with thousands of lines of code
              and it is common to miss one or another scenario while coding. So
              a team player should point out developer’s mistakes in a positive
              way to ensure the quality of the product.{" "}
            </p>
          </div>
          <div>
            <h2 className=" md:text-[32px] text-[26px] leading-[1.2] mt-[40px] mb-[30px] font-[600]">
              4. Skipping regression testing after new feature
            </h2>
            <p className=" md:text-[20px] text-[16px] md:leading-[32px] leading-[28px] text-[#222] mb-[20px]">
              It is awesome when a feature being added works perfectly, but you
              cannot ignore the rest of the functionalities. A tester should do
              regression testing each time after adding a new feature to make
              sure that it has not caused any new defects and the basic
              functionalities of the modules are still working.
            </p>
            <p className=" md:text-[20px] text-[16px] md:leading-[32px] leading-[28px] text-[#222] mb-[20px]">
              Often, many testers forget about this rule and do not perform
              regression tests as they think it is not that significant for old
              functionalities that always work. You cannot assume that if
              something was working earlier, that is still working.
            </p>
            <img
              className="w-full mb-[30px]"
              src={sp8}
              alt=""
            />
          </div>
          <div>
            <h2 className=" md:text-[32px] text-[26px] leading-[1.2] mt-[40px] mb-[30px] font-[600]">
              5. Avoiding automated testing
            </h2>
            <p className=" md:text-[20px] text-[16px] md:leading-[32px] leading-[28px] text-[#222] mb-[20px]">
              If a website has 500 pages, Its tiring and time consuming to test
              each page for 4xx errors, so the best way to do it is to automate
              these unit tests. Every framework used in modern time provides
              automated testing methods within. Some QA may not know{" "}
              <b>how automated testing works</b> but it is worth learning.{" "}
            </p>
            <p className=" md:text-[20px] text-[16px] md:leading-[32px] leading-[28px] text-[#222] mb-[20px]">
              It is advisable to learn automation and keep learning if you want
              to make testing and the product relevant.
            </p>
          </div>

          <div>
            <h2 className=" md:text-[32px] text-[26px] leading-[1.2] mt-[40px] mb-[30px] font-[600]">
              6. Ignore a bug when you see it and thinking it’s not that
              important
            </h2>
            <p className=" md:text-[20px] text-[16px] md:leading-[32px] leading-[28px] text-[#222] mb-[20px]">
              If As testers you must address any situation you’re facing, even
              if one doesn’t have any immediate solution for these bugs. It is
              better to note them down in <b> bug tracking software</b> and park
              it under KIV (Keep in View) for future discussions rather than
              acting like it is not important.
            </p>
          </div>

          <div>
            <h2 className=" md:text-[32px] text-[26px] leading-[1.2] mt-[40px] mb-[30px] font-[600]">
              7. Making assumptions without asking questions or asking help
            </h2>
            <p className=" md:text-[20px] text-[16px] md:leading-[32px] leading-[28px] text-[#222] mb-[20px]">
              As a QA, you should never make assumptions! <br /> Best way is to ask out
              all the questions, it will help you to understand the product
              requirements and features, what needs to be tested, what was added
              or how the app under test is supposed to behave. <br /> Most of the time
              we are scared of being judged or afraid of looking stupid in front
              of our team members which results us in trying to find solutions
              to our problems by our own. It is not a bad thing but as a rule
              above – “Communication is as important as any other skill”
            </p>
          </div>
          <div>
            <h2 className=" md:text-[32px] text-[26px] leading-[1.2] mt-[40px] mb-[30px] font-[600]">
            8. Not thinking as an end user and skipping negative testing
            </h2>
            <p className=" md:text-[20px] text-[16px] md:leading-[32px] leading-[28px] text-[#222] mb-[20px]">
            It is better to put your feet into the user’s shoes and imagine how he will use and feel the application you are testing. It is known that the end user is the best tester which finds critical bugs. 
            </p>
          </div>
          <div>
            <h2 className=" md:text-[32px] text-[26px] leading-[1.2] mt-[40px] mb-[30px] font-[600]">
            9. Not describing the problem in detail & not providing additional information.
            </h2>
            <p className=" md:text-[20px] text-[16px] md:leading-[32px] leading-[28px] text-[#222] mb-[20px]">
            A frequently made mistake, a bug can be duplicated distinctly under specific conditions, for example, a particular program and form, screen goal, working framework and so forth. To reproduce and correct an error, it is extremely important to know in which version of the browser and on which operating system etc, a bug was found. 
            <br />
            <br />
            <strong>Click here for more about: </strong>
            </p>
          </div>
          <div className=" mt-[25px] max-w-[1024px] ">
            <div className="hispterLink w-full font-poppins mb-[30px] p-2">
              <h2 className="text-[#006a83]">Hipster Link Preview</h2>
              <h3 className="text-[#5e5e5] uppercase pt-[10px] pb-1">
                HIPSTER-INC.COM
              </h3>
              <p className="text-[#006a83] text-[14px] font-[900]">
              6 Apps to Improve Productivity of Your Business | Improve Productivity
              </p>
            </div>
          </div>
        </div>
        {/* Add componant here */}
        <Portfolio/>
      </Container6>
    </div>
  );
};

export default SoftwareTester;


import React from "react";
import Container6 from "../../components/Container6";
import { hybird, seo, speed, speed2, speed3, speed4, stp } from "../../assets";
import { FaRegCalendar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Portfolio from "./Portfolio";

const Automationtesting = () => {
  return (
    <div className="md:my-[80px] my-[20px] ">
      <Container6>
        <div className="font-[poppins] mb-[24px] px-[15px] xl:mx-[0px] lg:mx-[40px] md:mx-[40px] sm:mx-[20px] mx-[0px]">
          <h1 className="text-[30px] md:text-[48px] pt-[20px] md:pt-[80px] leading-[1.2] text-center font-[400] ">
            Automation Testing Vs. Manual Testing: What’s the Difference?
          </h1>
          <div className="flex items-center justify-center gap-3 mt-[25px] md:mt-[30px] pb-[24px]">
            <FaRegCalendar className=" md:text-[25px] text-[20px]" />
            <span className="md:text-[16px]  text-[14px]"> March 25, 2021</span>
          </div>

          <div className="mt-[40px]">
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Software testing is a crucial stage in the software development lifecycle. It is a process that is executed to evaluate the performance of a software application. The purpose of testing is to find whether there are any problematic areas that need fixing so that the software functions according to the specified requirements before the product is released to the users. Software testing is broadly categorized into two methods- manual testing and automated testing.
            </p>
            {/* <ul className="list-disc sm:ml-[70px] ml-[30px] leading-[42px] mt-[20px] text-[20px] text-[#222222] font-poppins">
              <li>As of 2021, there are nearly 7 billion mobile users worldwide.</li>
              <li>According to a <Link to={''} className="text-[#006a83] hover:text-[#000000]">study conducted by Hootsuite</Link> in January 2021 for internet users aged 16 to 64:</li>

            </ul>

            <ul className="list-none ml-[10px] leading-[42px] mt-[20px] text-[20px] text-[#222222] font-poppins">
              <li>a) 81.5% of users searched for a product/service online</li>
              <li>b)  69.4% of total internet users got on a shopping app through their mobile or tablet</li>
              <li>c) 77% of users purchased a product online, out of which 55.4% did it via their mobile devices.</li>

            </ul>

            <ul className="list-disc sm:ml-[70px] ml-[30px] leading-[42px] mt-[20px] text-[20px] text-[#222222] font-poppins">
              <li>92% of the total time spent on mobile phones is through apps, and only 8% is spent using a web browser.</li>
            </ul> */}


          </div>


          <div className="font-poppins">
            <h2 className="sm:text-[32px] text-[24px] mt-[40px] mb-[30px] font-semibold">Manual Testing</h2>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Manual testing is the most primitive technique in which the test cases are conducted manually by a tester to find defects and bugs without any help from automated tools. Therefore, someone goes on a device to evaluate various components like functionality, performance, and design by clicking through multiple elements of the application. It requires more effort and is conducted before the software can be automated. There are different types of manual testing-
            </p>

            <ul className="list-disc sm:ml-[70px] ml-[30px] leading-[27px] mt-[20px] text-[20px] text-[#222222] font-poppins">
              <li className="leading-[30px] mb-[16px]"><strong>Smoke Testing</strong>: It helps to determine the core functionality of the software and detect critical defects. It is often used to verify a new functionality that has been introduced to the piece of software.
              </li><li className="leading-[30px] mb-[16px]"><strong>Cross Browser Testing</strong>: A website does not look identical on all browsers due to various factors, hence, it is necessary to perform cross-browser testing to ensure a consistent experience across all platforms.
              </li><li className="leading-[30px] mb-[16px]"><strong>Acceptance Testing</strong>: It is performed after all bugs are removed to determine how closely the application complies with the user’s needs and expectations. Acceptance testing should be conducted by a client or user so that they can have clarity about how the app will look and act in the real world.
              </li><li className="leading-[30px] mb-[16px]"><strong>Beta Testing</strong>: It is the most common test that is done to collect feedback from the users before the software is finally launched in the market. For this type of testing the application must be able to endure a high volume of traffic.
              </li><li className="leading-[30px] mb-[16px]"><strong>Exploratory Testing</strong>: It is a form of ad-hoc testing that can be utilized during the entire development as has minimal guidelines which allow the tester to learn and explore the application.
              </li>
              <li className="leading-[30px] mb-[16px]"><strong>Negative Testing</strong>: It is done by the QA team or engineers to verify how an application responds to the input of purposely invalid inputs at various stages of development.
              </li><li className="leading-[30px] mb-[16px]"><strong>Usability Testing</strong>: This type of testing determines how the user’s behavior and reaction when engaging with your product. It can be conducted during any phase of the development process.
              </li>
            </ul>

            <h2 className="sm:text-[32px] text-[24px] mt-[40px] mb-[30px] font-semibold">Automated Testing</h2>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Automated testing involves the use of robust testing tools and scripts to conduct software tests through repeated pre-defined actions. The same script can be used to compare test outcomes, and report functions. Automated testing is divided into the type of testing, the type of tests, and the phase of testing-
            </p>

          </div>

          {/* <div className=" mt-[25px] max-w-[1024px] ">
            <div className="hispterLink w-full font-poppins mb-[30px] p-2">
              <h2 className="text-[#006a83] text-[13px]">Hipster Link Preview</h2>
              <h3 className="text-[#5e5e5] text-[13px] uppercase pt-[10px] pb-1">
                HIPSTER-INC.COM
              </h3>
              <p className="text-[#006a83] font-poppins text-[13px] font-[900]">
                10 Ways To Check If Your App Is Ready To Launch In 2021 | Hipster Inc
              </p>
            </div>
          </div>

          <div className="font-poppins">
            <h2 className="sm:text-[32px] text-[24px] mt-[40px] mb-[30px] font-[600]">Advantages of Mobile Apps in the Modern Business Environment</h2>
            <p className="md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Change is the only thing that’s permanent. Gone are the days when Mobile apps and digital transformation of businesses were a thing of the future. The recent pandemic has made online business transactions skyrocket in several economic industries. It is the responsibility of all businesses, no matter how big or small, to align their practices with market trends. Here’s a list of advantages that a mobile app can have for your business:
            </p>
          </div> */}


          <h3 className="font-poppins sm:text-[28px] text-[22px] mt-[40px] mb-[30px] font-bold">Type of testing:</h3>
          <div className="font-poppins">
            <h3 className="sm:text-[28px] text-[22px] mt-[40px] mb-[30px] font-bold">There are 2 main types, functional and non-functional:</h3>
            <ul className="list-disc sm:ml-[70px] ml-[30px] leading-[27px] mt-[20px] text-[20px] text-[#222222] font-poppins">
              <li className="mb-[12px]">Functional: They are written to test the business logic behind an application.
              </li>
              <li className="mb-[12px]">Non-functional: They are written to test the non-business requirements, for example, performance, security, data storage, etc of an application.
              </li>
            </ul>
          </div>

          <div className="font-poppins">
            <h3 className="sm:text-[28px] text-[22px] mt-[40px] mb-[30px] font-bold">Type of tests:</h3>
            <ul className="list-disc sm:ml-[70px] ml-[30px] leading-[27px] mt-[20px] text-[20px] text-[#222222] font-poppins">
              <li className="mb-[12px]">Integration Tests: Integration tests combine all the pieces and functionalities of the software and holistically test them to ensure an efficient operation.
              </li>
              <li className="mb-[12px]">Smoke Tests: Just like in manual testing, smoke tests cover the most crucial features of a software solution to ensure that it could be further tested.
              </li>
              <li className="mb-[12px]">Regression Tests: It is conducted through a combination of functional and non-functional tests to determine if the software has “regressed” after a given change.
              </li><li className="mb-[12px]">Security Tests: It covers functional and non-functional tests that screen the software for any defects.
              </li><li className="mb-[12px]">Performance Tests: Often non-functional tests that help testers evaluate the responsiveness and stability of the software.
              </li><li className="mb-[12px]">Acceptance Tests: These are functional tests that determine how acceptable the software is to the end-users before the final release.
              </li>


            </ul>
            <p className="text-[#222222] text-[20px] mb-[20px] mt-[40px]">Phase of testing</p>
            <ul className="list-disc sm:ml-[70px] ml-[30px] leading-[27px] mt-[20px] text-[20px] text-[#222222] font-poppins">
              <li className="mb-[12px]">Unit: Unit testing is the first phase of testing. It tests the individual components, or units, of software. It is usually done manually before it can be automated.
              </li>
              <li className="mb-[12px]">API: Application Programming Interface is tested post the development process to ensure smooth integration between systems and software.
              </li>
              <li className="mb-[12px]">UI: The end users interact with the User Interface and it is tested during the execution phase.</li>
            </ul>

          </div>

          <div>
            <h3 className="font-poppins sm:text-[28px] text-[22px] mt-[40px] mb-[30px] font-bold">Type of testing:</h3>
            <table className="w-full mt-[20px]">
              <tbody>
                <tr className="text-[14px] ">
                  <td>Manual Testing</td>
                  <td>Automated Testing</td>
                </tr>
                <tr>
                  <td>Tests are conducted manually</td>
                  <td>Tests are conducted with the help of automated tools</td>
                </tr>
                <tr>
                  <td>Less reliable due to human error	</td>
                  <td>More reliable as it eliminates human error</td>
                </tr>
                <tr>
                  <td>Time-consuming</td>
                  <td>It is faster than the manual approach</td>
                </tr>
                <tr>
                  <td>It is difficult to execute test cases in parallel in manual testing as it requires more human resource</td>
                  <td>Automation testing can be done in parallel</td>
                </tr>
                <tr>
                  <td>It is feasible in test cases that are run once or twice and which do not require frequent repetition.	</td>
                  <td>It is feasible for test cases that are run repeatedly over a long period of time</td>
                </tr>
                <tr>
                  <td>Exploratory testing is possible	</td>
                  <td>Exploratory testing is not possible</td>
                </tr>

                <tr>
                  <td>The reports are also generated manually		</td>
                  <td>A tool generates the test execution report</td>
                </tr>
                <tr>
                  <td>It is difficult to run manual tests across different operating system	</td>
                  <td>Automation testing can be easily done on different operating systems</td>
                </tr>
                <tr>
                  <td>It can fulfill the goal of testing user-friendliness and improve customer experience as it entails human observation	</td>
                  <td>Since human observation is not required, it does not guarantee user-friendliness and an improved customer experience.</td>
                </tr>
              </tbody>
            </table>

          </div>

          <div className=" mt-[45px] max-w-[1024px] ">
            <div className="hispterLink w-full font-poppins mb-[30px] p-2">
              <h2 className="text-[#006a83] text-[13px]">Hipster Link Preview</h2>
              <h3 className="text-[#5e5e5] text-[13px] uppercase pt-[10px] pb-1">
                HIPSTER-INC.COM
              </h3>
              <p className="text-[#006a83] font-poppins text-[13px] font-[900]">
                <Link to={''}>Automation Testing Vs. Manual Testing: What's the Difference?</Link>
              </p>
            </div>
          </div>


          <div className="mt-[40px]">
            <h2 className="sm:text-[32px] text-[24px] mt-[40px] mb-[30px] font-semibold">Advantages and Disadvantages of Manual and Automated testing</h2>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            As manual testing may have a possibility of human error, similarly any software is only capable of doing things that it has been programmed to do, this is a limitation. Both manual and automation testing are a part of software development, both have their pros and cons.
            </p>
          </div>





















          <div className="font-poppins">
            <h3 className="sm:text-[28px] text-[22px] mt-[40px] mb-[30px] font-bold">Pros of Manual Testing:</h3>
            <ul className="list-disc sm:ml-[70px] ml-[30px] leading-[42px] mt-[20px] text-[20px] text-[#222222] font-poppins">
              <li>It involves human judgment and intuition which benefits the manual element.</li>
              <li>Faster visual feedback.</li>
              <li>Less expensive as it does not require investment in automated tools.</li>
              <li>When small changes or elements are added to the software, it is easier to test them manually.</li>
            </ul>

          </div>

          <div className="font-poppins">
            <h3 className="sm:text-[28px] text-[22px] mt-[40px] mb-[30px] font-bold">Cons of Manual Testing:</h3>
            <ul className="list-disc sm:ml-[70px] ml-[30px] leading-[42px] mt-[20px] text-[20px] text-[#222222] font-poppins">
              <li>It is less reliable.</li>
              <li>It is not possible to reuse the manual test because it is not recorded.</li>
              <li>Certain tasks or repetitive testing are difficult to perform manually.</li>
            </ul>

          </div>

          <div className="font-poppins">
            <h3 className="sm:text-[28px] text-[22px] mt-[40px] mb-[30px] font-bold">Pros of Automated Testing</h3>
            <ul className="list-disc sm:ml-[70px] ml-[30px] leading-[42px] mt-[20px] text-[20px] text-[#222222] font-poppins">
              <li>Helps to determine more faults more accurately as compared to a human tester.</li>
              <li>It is a fast, reliable, and efficient process.</li>
              <li>You can execute the same kind of testing operations as automated testing is recorded.</li>
              <li>It supports various applications.</li>
              <li>In automated testing even the smallest unit is being checked, therefore there is an increased testing coverage.</li>
            </ul>

          </div>

          <div className="font-poppins">
            <h3 className="sm:text-[28px] text-[22px] mt-[40px] mb-[30px] font-bold">Cons of Automated Testing:</h3>
            <ul className="list-disc sm:ml-[70px] ml-[30px] leading-[42px] mt-[20px] text-[20px] text-[#222222] font-poppins">
              <li>Visual aspects of the user interface cannot be tested without human observation.</li>
              <li>The investment to set up tools for automated testing is higher and increases the cost of testing projects.</li>
              <li>The testing script also requires debugging.</li>
            </ul>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            Considering all of the points above, you must decide which type of testing is more suitable in a particular scenario.
            </p>

          </div>

          <div className="pt-[30px]">
            <p className="text-[20px]"><strong>Preference to manual testing over automated testing in the following cases:</strong></p>
            <ul className="list-decimal sm:ml-[70px] ml-[30px] leading-[42px] mt-[20px] text-[20px] text-[#222222] font-poppins">
              <li>Visual aspects of the user interface cannot be tested without human observation.</li>
              <li>The investment to set up tools for automated testing is higher and increases the cost of testing projects.</li>
              <li>The testing script also requires debugging.</li>
              <li>It should be executed for Exploratory, Usability, and Ad-hoc testing</li>
            </ul>
          </div>

          <div className="pt-[30px]">
            <p className="text-[20px]"><strong>Preference to automated testing over manual testing in the following cases:</strong></p>
            <ul className="list-decimal sm:ml-[70px] ml-[30px] leading-[42px] mt-[20px] text-[20px] text-[#222222] font-poppins">
              <li>To handle time-consuming and repetitive tasks</li>
              <li>The investment to set up tools for automated testing is higher and increases the cost of testing projects.</li>
              <li>The testing script also requires debugging.</li>
              <li>It should be executed for Exploratory, Usability, and Ad-hoc testing</li>
            </ul>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            Testing is an integral part of the software development journey. Choosing between the two types of testing depends on many factors like the project requirement, time duration, and budget. The optimum results can be derived from manual and automated testing when the right type of testing is utilized in the right environment.
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

export default Automationtesting;

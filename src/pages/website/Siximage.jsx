


import React from "react";
import Container6 from "../../components/Container6";
import { hybird, pickright, seo, siximg, speed, speed2, speed3, speed4, stp } from "../../assets";
import { FaRegCalendar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Portfolio from "./Portfolio";

const Siximage = () => {
  return (
    <div className="md:my-[80px] my-[20px] ">
      <Container6>

        <div className="">
          <li className="list-none text-center ">
          <Link to={''} className="rounded-3xl mr-[4px] text-[18px] font-poppins bg-[#00b1ac33] py-[10px] px-[26px]">New Launch</Link>
            <Link to={''} className="rounded-3xl text-[18px] font-poppins bg-[#00b1ac33] py-[10px] px-[26px]">Technologies</Link>
          </li>
          
        </div>
        <div className="font-[poppins] mb-[24px] px-[15px] xl:mx-[0px] lg:mx-[40px] md:mx-[40px] sm:mx-[20px] mx-[0px]">
          <h1 className="text-[30px] md:text-[48px] pt-[20px] md:pt-[80px] leading-[1.2] text-center font-[400] ">
          Image Matching Technologies to Use in App
          </h1>
          <div className="flex items-center justify-center gap-3 mt-[25px] md:mt-[30px] pb-[24px]">
            <FaRegCalendar className=" md:text-[25px] text-[20px]" />
            <span className="md:text-[16px]  text-[14px]"> October 22, 2020</span>
          </div>

          <div className=" md:pt-[20px] pt-[20px]">
            <img
              className="w-full mt-[20px] mb-[30px]"
              src={siximg}
              alt=""
            />
          </div>


          <div className="mt-[40px]">
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            There is a saying – A Picture speaks a thousand words and with AI, you can actually extract those words and make use of it.  There are a plethora of use cases of Image AI technology where we are already using one or another and it is applicable to every startup product out there.
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            <b>Face recognition Authentication</b> –
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            After the launch of iPhone X and after, we all tend to use face recognition for authenticating our phones,  instead of email passwords which are hard to remember and easy to reveal. Our face is another biometric which creates mathematical algorithms based on our face structure, gaps between eyes, forehead size and so many millions of small details of our face which makes it unique for security.
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            <b>Object Detection for computer vision</b> – Object detection in a computer is more popular than we actually think it is. It makes decision making automatic and
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            Some very popular usage is:
            </p>
            <ul className="list-disc sm:ml-[70px] ml-[30px] leading-[42px] mt-[20px] text-[20px] text-[#222222] font-poppins">
              <li>Self-driving cars detecting humans, traffic lights (with the colours of course) and other moving cars</li>
              <li>Visitor detection for home security,</li>
              <li>Analyzing shopper behaviour in-store,</li>
              <li>People counting camera for security and safe distancing during COVID</li>
              <li>Bag checking and object detection along with Xray images</li>
            </ul> 

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            <b>Online Shopping Suggestions</b> – When we are on one product, either it shows you similar products for the same colours from another style or shows you different items with matching patterns. This AI utilizes colour and pattern recognition for smart recommendations for matching clothes and accessories based on one purchase. Next time if your customers buy yellow Sneakers, you can also show them a yellow t-shirt.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            <b>Interpreting Emotions</b> – emotional AI helps to get companies to decide the emotions of their customers and employees based on their emotional reactions in real-time — by decoding facial expressions, reading voice patterns and voice pitch, eye movements, and measuring neurological immersion levels. This is still very early to have something for a very high accurate solution but it is definitely worth trying.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            <b>Content moderation</b> – In the age of social media and user-centric content which is mostly created by users,  It is very hard to determine manually if an image or a video includes unsafe content such as explicit adult or violent graphics. For the app with a rating of 13+, an app can be blacklisted by Google play store or Apple store if app developers do not check the content for their audience. Thanks to AI,  We can automatically block the NSFW content from users without manual moderation and blacklist the users automatically for violating our privacy policies.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            <b>Optical character recognition (OCR)</b> –  We commonly have texts in images and videos. Whenever we take pictures of our notes in classrooms or client meetings, If we ever need to get those text from images, The app powered by OCR   can then convert the detected text into machine-readable text. You can following apps to use the machine-readable text detection in images
            </p>

            <ul className="list-disc sm:ml-[70px] ml-[30px] leading-[42px] mt-[20px] text-[20px] text-[#222222] font-poppins">
              <li>Microsoft OfficeLens</li>
              <li>Google Lens</li>
              <li>Cam Scanner</li>
              
            </ul> 

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            <Link to={'/'} className="text-[#006a83] hover:text-[#000000]">
            Software Development Agency
            </Link>
            </p>

          </div>































          {/* <div className="font-poppins">
            <h3 className="sm:text-[28px] text-[22px] mt-[40px] mb-[30px] font-bold">1. Proactive Management</h3>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            IT companies everywhere mostly focus on resolving service tickets such as troubleshooting email problems and dealing with busted printers. After all, most of the problems encountered by small businesses fall within these areas.
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            However, if the IT company is proactive enough, it will closely manage your network to reduce the number of service tickets and make sure that the operations of your business don’t get interrupted due to a minor technical problem.
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            Simply put, we recommend going for an IT company that will address the root of the problem to ensure that fewer technical issues will arise in the future.
            </p>
            
          </div>

          <div className="font-poppins">
            <h3 className="sm:text-[28px] text-[22px] mt-[40px] mb-[30px] font-bold">2. Weekend Services</h3>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            This is perhaps one of the top requirements when looking for an IT company. Since technical problems are unpredictable, the IT company that will be hired should be able to respond as soon as possible, regardless of the day and time.
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            For businesses whose working days bleed into the weekend, you might want to look for an IT company that offers their services 7 days a week. In case the network goes down on a weekend, there won’t be any business interruptions if there’s an IT team that can fix it immediately.
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            Click here for about:
              <Link to={''} className="text-[#006a83] hover:text-[#000000]">
            How to make a successful app?
              </Link>
            </p>
            
          </div>

          <div className="font-poppins">
            <h3 className="sm:text-[28px] text-[22px] mt-[40px] mb-[30px] font-bold">3. Highly Trained Staff</h3>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            It’s also equally important to consider the skills and experience of its team. We strongly recommend going for an IT company that regularly sends its team to different training programs to ensure that everyone’s up to date when it comes to trends in technology.
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            As a business owner, you wouldn’t hire anyone who lacks the skills, especially when you’re under an industry that strives for customer satisfaction, right?
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            For example, when the owners of <Link to={''} className="text-[#006a83] hover:text-[#000000]">
              Singapore Carpet Cleaning
              </Link> were looking for an IT company to resolve a recurring Internet connection problem, they stated that they also checked the credentials of key staff or team leads in every IT company they were considering. That helped them gauge the expertise of their options.
              
            </p>
            
          </div>

          <div className="font-poppins">
            <h3 className="sm:text-[28px] text-[22px] mt-[40px] mb-[30px] font-bold">4. No Long-term Contracts</h3>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            It’s no secret there are some IT companies that will lock small businesses into long-term contracts, mostly spanning from 2 to 3 years.
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            It’s stressful to be obliged to stick to a contract, especially when an IT company under-performs most of the time. Nobody wants to have to repeatedly deal with a faulty server that should’ve already been fixed in the first place.
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            In line with that, we recommend looking for an IT company with month-to-month contracts and an “out clause” of up to 60 days. Before signing any papers, make sure to ask for the length of their contracts.
            </p>
            
          </div>

          <div className="font-poppins">
            <h3 className="sm:text-[28px] text-[22px] mt-[40px] mb-[30px] font-bold">5. Varied Levels of Support</h3>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            If you own a small company that can’t afford to shell out a lot for IT services, then it’s best to look for an IT company that provides different levels of support to accommodate your business’s needs, budget, and requirements.
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            /For businesses that don’t always deal with technology, you might want to look for an IT company that offers one-time services only when needed. This is the more practical option compared to signing a monthly or yearly contract.
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            Anyway, that’s it for our list of factors to consider when looking for an IT company. It’s important that small business owners be made aware of this in order to avoid signing contracts with mediocre IT support companies.
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            If you can think of other ways that will help business owners find the right IT company, don’t hesitate to share them with us! We love to hear what other people have to say regarding this matter.
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            Click here: We are introducing  <Link to={''} className="text-[#006a83] hover:text-[#000000]">
            20 Useful Tools for Every Startup
              </Link>.
            </p>
            
          </div> */}

          

         

        </div>


        <div>
          <Portfolio />
        </div>
      </Container6>
    </div>
  );
};

export default Siximage;

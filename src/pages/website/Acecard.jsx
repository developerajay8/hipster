




import React from 'react'
import { AAB, AAb, Ajay, Downlogo, GN, MM, MP, TF, TS, aabbottom, ab2, abbanner, ace, applanding, apple, aws, bcircle, bd, bluesuits, bomb, btn1, btn2, btn4, cna, commonbanner, curve, exit, int, map, mblue, mm, mobile, ms, mt, nearapp, nearbanner, payment, pencil3, personalisation, ratingbox, sharebanner, shareend, star, sunstart, tab, two, ui_ux, userdashboard, warning } from '../../assets'
import { Link } from 'react-router-dom'
import { TiArrowRight } from "react-icons/ti";
import { PiCircleFill } from "react-icons/pi";
import { FaCircle } from "react-icons/fa";
import Container2 from '../../components/Container2';
import Container4 from '../../components/Container4';
import AutoPlay from './Autoplay';


export default function Acecard() {
  return (
    <div>
      <div className='lg:mt-[80px] md:mt-[110px] mt-[110px]'>
        <div className="max-w-[1300px] mx-auto xl:px-0 px-[20px] mb-[48px] ">
          <h2>
            <span className='md:text-[30px] sm:text-[24px] text-[16px] font-poppins'>
              <span className='md:text-[30px] sm:text-[24px] text-[16px] text-[#00b0ab] font-poppins font-semibold'> ACE Card</span>— Food and Bevarages
            </span>

            <div className='md:mt-[10px] mt-[5px]'>
              <span className='xl:text-[48px] md:text-[40px] sm:text-[30px] text-[24px] text-[#000000] font-poppins font-semibold'>Easily book your favourite restaurants while earning points, and enjoying exclusive rewards.</span>
            </div>
          </h2>
        </div>
        <div className='w-[100%] h-[100%] md:px-[0px] px-[14px]'>
          <img className='w-[100%] h-[100%]' src={abbanner} alt="" />
        </div>
      </div>

      <div className='pt-[80px]'>
        <Container4>
          <div className="grid md:grid-cols-5 grid-cols-1 xl:px-[0px] px-[20px]">
            <div className="md:col-span-3 col-span-1  lg:pr-[50px] pr-[20px]">
              <h2 className='lg:text-[50px] text-[35px] text-[#000000] font-poppins mb-[15px]'>Overview</h2>
              <p className='font-poppins sm:text-[20px] text-[16px] mt-[25px] text-[#606e6e]'>An app designed for dining and lifestyle experiences. Members can effortlessly explore and make reservations at their preferred restaurants, earn points, and use them to access premium privileges, including coupons, exclusive discounts, and promotional offers.</p>
            </div>
            <div className="md:col-span-2 col-span-1 lg:pt-0 sm:pt-[80px] pt-[45px]">
              <div className="mb-[35px]">
                <p className='text-[18px] font-poppins text-[#001817] mb-[10px]'>Client</p>
                <p className='text-[24px] text-[#001817] font-semibold'>ACE Card</p>
              </div>
              <div className="flex mb-[35px]">
                <div className=''>
                  <p className='text-[18px] font-poppins mb-[10px] text-[#001817]'>Period</p>
                  <p className='text-[24px] font-poppins font-semibold text-[#001817]'>2023</p>
                </div>
                <div className='ml-[45px]'>
                  <p className='text-[18px] font-poppins mb-[10px] text-[#001817]'>Geography</p>
                  <p className='text-[24px] font-poppins font-semibold text-[#001817]'>Thailand</p>
                </div>
                <div className=''></div>
              </div>
              <div className='mb-[35px]'>
                <p className='text-[18px] text-[#001817] mb-[10px] font-poppins'>Work Done</p>
                <div className="flex-wrap flex">
                  <li className='list-none mb-[20px] px-[9px] w-[114px]'>
                    <Link to={''}>
                      <img className='w-[50px] h-[50px] mx-[22px]' src={int} alt="" />
                    </Link>
                    <li className='text-center  text-[#001817] font-semibold'>
                      <Link to={''}>
                        Website
                      </Link>
                    </li>
                  </li>
                  <li className='list-none mb-[20px] px-[9px] w-[114px]'>
                    <Link to={''}>
                      <img className='w-[50px] h-[50px] mx-[22px]' src={ui_ux} alt="" />
                    </Link>
                    <li className='text-center  text-[#001817] font-semibold'>
                      <Link to={''}>
                        UI/UX
                      </Link>
                    </li>
                  </li>
                  
                  
                 
                </div>
              </div>
            </div>
          </div>
        </Container4>
      </div>

     <div className="md:py-[80px] sm:py-[50px] mx-auto max-w-[1140px] xl:px-[0px] px-[20px]  py-[34px] ">
        <div className="">
          <h2 className="mb-[15px] text-[50px] font-poppins text-[#000000]">
            Services
          </h2>
          <ul className="flex flex-wrap">
          <li className='bg-[#ccefee] duration-1000  hover:bg-[#73dedb] mb-[20px] mr-[10px] py-[18px] px-[32px] w-[204px] rounded-full'>
              <Link className='text-[18px] font-poppins hover:text-[#FFFFFF] duration-1000 text-[#001817]' to={'/shareapp'}>Product Design</Link>
            </li>

            <li className='bg-[#ccefee] duration-1000  hover:bg-[#73dedb] mb-[20px] mr-[10px] py-[18px] px-[32px] w-[114px] rounded-full'>
              <Link className='text-[18px] font-poppins hover:text-[#FFFFFF] duration-1000 text-[#001817]' to={'/uiuxdesign'}>UI/UX</Link>
            </li>
            <li className='bg-[#ccefee] duration-1000  hover:bg-[#73dedb] mb-[20px] mr-[10px] py-[18px] px-[32px] w-[294px] rounded-full'>
              <Link className='text-[18px] font-poppins hover:text-[#FFFFFF] duration-1000 text-[#001817]' to={'/mobileappdevelopment'}>Mobile App Development</Link>
            </li>
          </ul>
        </div>
      </div>

            {/* <AutoPlay/> */}
      {/* <div className=" ">
        <div className="grid grid-cols-2 bg-[#d4af37]">
          <div className="col-span-1 border   py-[60px] ">
            <img className='w-[600px] mx-auto h-[600px] text-center ' src={ace} alt="" />
          </div>
          <div className="col-span-1 border">asxdfghjkl</div>
        </div>
      </div> */}


      {/* Compleate responsive */}
      <div className="">
        <Container4>
          <div className="grid grid-cols-2 lg:gap-8 gap-7 lg:mx-[20px] md:mx-[25px] sm:mx-[28px] mx-[15px]">
            <div className="md:col-span-1 col-span-2 my-auto">
              <img src={ab2} alt="" />
            </div>
            <div className="md:col-span-1 col-span-2 my-auto">
              <div className="">
                <p className='xl:text-[20px] sm:text-[18px] text-[16px] text-[#657676] font-poppins'>
                  It started with a random phone call from the Abroadly team to find a Laravel developer. The platform’s demand was increasing, and the Facebook group and WordPress landing page setup the AAB Team had to register interest from backpackers all over the world was proving to have reached its limit.
                </p>
                <br />
                <p className='xl:text-[20px] text-[18px] mb-[22px] text-[#657676] font-poppins'>Founders Miguel and Nikki came to us with their design prototypes that helped us analyse the platform’s flow and site information to build the platform structure.</p>
              </div>
            </div>
          </div>
        </Container4>
      </div>


      <div className="pt-[80px]">
        <Container4>
          <div className=''>
            <div className="grid grid-cols-1 xl:px-[10px] lg:px-[30px] md:px-[20px] px-[20px]">
              <h2 className='xl:text-[50px] lg:text-[43px] sm:text-[35px] text-[30px]  font-poppins mb-[15px] text-[#001817]'>But First, a Rebranding</h2>
              <p className='xl:text-[20px] md:text-[18px] text-[16px] font-poppins mb-[45px] text-[#657676]'>Before we could even begin our development of the platform, we knew that a total rebranding was necessary, which the Abroadly team reluctantly agreed to since they already had the full set of designs. We eased the team to our suggestions, starting from  the logo. The result was awesome and they loved it!</p>
            </div>

            <div className="grid grid-cols-2 gap-6 xl:px-[10px] lg:px-[30px] md:mx-[20px] sm:mx-[30px] mx-[26px]">
              <div className="md:col-span-1 col-span-2 wsqss">
                <h5 className='text-[48px] font-poppins text-[#000000]'>Before:</h5>
                <img src={AAB} alt="" />
              </div>
              <div className="md:col-span-1 col-span-2">
                <div className="sm:pl-[64px]">
                  <h5 className='text-[48px] font-poppins text-[#000000]'>After:</h5>
                  <img src={aabbottom} className='w-[100%] max-h-[340px]' alt="" />
                </div>
              </div>
            </div>
          </div>
        </Container4>
      </div>

      <div className="py-[80px]">
        <Container4>
          <div className=''>
            <div className="grid grid-cols-1 xl:px-[10px] lg:px-[30px] md:px-[20px] px-[20px]">
              <h2 className='xl:text-[50px] lg:text-[43px] sm:text-[35px] text-[30px] font-poppins mb-[15px] text-[#001817]'>Aligning the visual language</h2>
              <p className='xl:text-[20px] md:text-[18px] text-[16px] font-poppins mb-[45px] text-[#657676]'>The problem with the existing design was mainly the design language that did not well-cater to the platform’s target audience – an adventurous bunch! A more modern interface was better suited vs a traditional one. This was achieved with changing the fonts – finding one with a more reflective personality and selecting a body text with a better x-height for readability.  We also  streamlined visual elements such as the typography and iconography, and stripped down the original design to  give it breathing space so the pages did not feel so cluttered. </p>
            </div>

            <div className="grid grid-cols-2 gap-3 xl:px-[10px] lg:px-[30px] md:mx-[20px] sm:mx-[30px] mx-[26px]">
              <div className="md:col-span-1 col-span-2">
                <h5 className='text-[48px] font-poppins text-[#000000] pb-[24px]'>Before:</h5>
                <img src={TF} alt="" />
              </div>
              <div className="md:col-span-1 col-span-2 xl:pl-[64px] lg:pl-[50px] md:pl-[30px] sm:pl-[20px] ">
                <div className="">
                  <h5 className='text-[48px] font-poppins text-[#000000]'>After:</h5>
                  <img src={TS} alt="" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:px-[10px] lg:px-[30px] md:px-[20px] px-[20px]">
              <p className='xl:text-[20px] md:text-[18px] text-[16px] text-[#657676] font-poppins lg:mb-[45px] md:mb-[30px] mb-[30px] md:leading-[32px] sm:leading-[27px]'>
                The brands’ colours were also changed from orange and teal to deep blue and lime green. The existing colour combinations had poor contrast of less than the standard 4.05:1.  There wasn’t enough colour differentiation in status buttons, so user’s would have to find tasks with precision, causing frustration. The new colours had better contrast and were selected to be more reflective of the earth and its elements such as the sea, sky and fields- elements that most of the backpackers and travellers using the platform sought after.
              </p>
            </div>
            <div className="h-[77px]">
            </div>

            <div className="grid grid-cols-1 xl:px-[10px] lg:px-[30px] md:px-[20px] px-[20px]">
              <h2 className='xl:text-[50px] lg:text-[43px] sm:text-[35px] text-[30px] font-poppins mb-[15px] text-[#001817] lg:leading-[60px] md:leading-[38px] sm:leading-[38px] leading-[34px]'>Building the Information Architecture for a Better User Experience</h2>
              <p className='xl:text-[20px] md:text-[18px] text-[16px] font-poppins mb-[16px] text-[#657676]'>To fix navigational problems, we seperated the website into two parts:</p>
            </div>

            <div className="grid grid-cols-3 lg:gap-3 lg:px-[10px]">
              <div className="lg:col-span-2 col-span-3 xl:px-[100px] lg:px-[60px] lg:mx-[0px] mx-auto sm:px-[0px] px-[10px]">
                <img src={MP} alt="" />
              </div>
              <div className="col-span-1 my-auto lg:block hidden">
                <div className=" ">
                  <ul>
                    <li className='flex items-center'><FaCircle className='text-[10px] mr-[20px]' /> <span className='text-[20px] text-[#666666] font-poppins'>Informative pages</span></li>
                    <ul className='pl-[42px]'>
                      <li className='flex items-center'><FaCircle className='text-[10px] mr-[20px]' /> <span className='text-[20px] font-poppins text-[#666666] '>About Us</span></li>
                      <li className='flex items-center'><FaCircle className='text-[10px] mr-[20px]' /> <span className='text-[20px] font-poppins text-[#666666] '>How It Works</span></li>
                      <li className='flex items-center'><FaCircle className='text-[10px] mr-[20px]' /> <span className='text-[20px] font-poppins text-[#666666] '>Safety</span></li>
                      <li className='flex items-center'><FaCircle className='text-[10px] mr-[20px]' /> <span className='text-[20px] font-poppins text-[#666666] '>FAQ</span></li>
                      <li className='flex items-center'><FaCircle className='text-[10px] mr-[20px]' /> <span className='text-[20px] font-poppins text-[#666666] '>Terms and Conditions</span></li>
                      <li className='flex items-center'><FaCircle className='text-[10px] mr-[20px]' /> <span className='text-[20px] font-poppins text-[#666666] '>Contact Us</span></li>
                    </ul>
                  </ul>
                  <ul className='mt-[20px]'>
                    <li className='flex items-center'><FaCircle className='text-[10px] mr-[20px]' /> <span className='text-[20px] text-[#666666] font-poppins'>Interactive pages</span></li>
                    <ul className='pl-[42px]'>
                      <li className='flex items-center'><FaCircle className='text-[10px] mr-[20px]' /> <span className='text-[20px] font-poppins text-[#666666] '>Login/Signup/Onboarding</span></li>
                      <li className='flex items-center'><FaCircle className='text-[10px] mr-[20px]' /> <span className='text-[20px] font-poppins text-[#666666] '>Map/List view of Profiles </span></li>
                      <li className='flex items-center'><FaCircle className='text-[10px] mr-[20px]' /> <span className='text-[20px] font-poppins text-[#666666] '>Profile Details </span></li>
                      <li className='flex items-center'><FaCircle className='text-[10px] mr-[20px]' /> <span className='text-[20px] font-poppins text-[#666666] '>Interactive Community Wall</span></li>
                      <li className='flex items-center'><FaCircle className='text-[10px] mr-[20px]' /> <span className='text-[20px] font-poppins text-[#666666] '>Stories </span></li>
                      <li className='flex items-center'><FaCircle className='text-[10px] mr-[20px]' /> <span className='text-[20px] font-poppins text-[#666666] '>Membership and User Profile</span></li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:px-[10px] lg:px-[30px] md:px-[20px] px-[20px]">
              <p className='xl:text-[20px] md:text-[18px] text-[16px] text-[#657676] font-poppins mb-[45px] leading-[32px] pt-[8px]'>
                Information about the platform, the community, what it offers and how it works, needed to be easier accessed and understood by the user. Hence, we listed down all of the pages on the website that users generally look for before they start using the platform, and classified the Interactive pages in the category of the user journey. We redefined the way users register and verify their accounts, from the subscription process to how they search for backpackers/hosts on the platform. We had many more ideas and features to suggest but for first version, but we kept it simple, releasing only the MVP.
              </p>
              <p className='xl:text-[20px] md:text-[18px] text-[16px] text-[#657676] font-poppins leading-[32px] '>
                We split up content for pages only relevant to the specific use case, i.e host or backpacker. Content heavy pages such as the safety screen, were made to be more appealing by changing the information structure and text leading.
              </p>
            </div>
          </div>
        </Container4>
      </div>

      <div className=''>
        <Container4>
          <div className="grid grid-cols-1 pt-[80px] xl:px-[10px] lg:px-[30px] md:px-[20px] px-[20px]">
            <h2 className='xl:text-[50px] lg:text-[43px] sm:text-[35px] text-[30px] text-[#000000] font-poppins mb-[15px] lg:leading-[60px] md:leading-[38px] sm:leading-[38px] leading-[34px]'>A Responsive Design and Progressive Web App</h2>
            <p className='xl:text-[20px] md:text-[18px] text-[16px] text-[#657676] font-poppins mb-[16px]'>We followed mobile-first as the design methodology where every screen was designed first on mobile devices since surveys show that over 70% of people use websites on mobile devices. Following this, all screens were adapted for computers and tablets/iPads for a seamless experience no matter the device. We also strategized the website as a progressive web app  (instead of a regular website) which enabled the platform to:</p>
            <ul className='sm:pl-[30px] pl-[10px]'>
              <li className='flex items-center'><FaCircle className='text-[10px] sm:block hidden' /> <span className='sm:pl-[50px] md:text-[20px] text-[18px] font-poppins text-[#666666] '>run faster than a normal website</span></li>
              <li className='flex items-center'><FaCircle className='text-[10px] sm:block hidden' /> <span className='sm:pl-[50px]  md:text-[20px] text-[18px] font-poppins text-[#666666] '>save data in offline mode</span></li>
              <li className='flex items-center'><FaCircle className='text-[10px] sm:block hidden' /> <span className='sm:pl-[50px]  md:text-[20px] text-[18px] font-poppins text-[#666666] '>save the website with as an icon for frequent use</span></li>
              <li className='flex items-center'><FaCircle className='text-[10px] sm:block hidden' /> <span className='sm:pl-[50px]  md:text-[20px] text-[18px] font-poppins text-[#666666] '>have real-time notifications in the browser</span></li>
            </ul>
          </div>
        </Container4>
      </div>

      <div className="">
        <Container4>
          <div className="grid grid-cols-2 pt-[80px] md:mx-[20px] sm:mx-[30px] mx-[26px]">
            <div className="md:col-span-1 col-span-2">
              <h2 className='xl:text-[50px] lg:text-[43px] sm:text-[35px] text-[30px] font-poppins text-[#001817] mb-[15px] lg:leading-[60px] md:leading-[38px] sm:leading-[38px] leading-[34px]'>Mapview of Backpackers and Hosts</h2>
              <p className='xl:text-[20px] md:text-[18px] text-[16px] text-justify text-[#657676] font-poppins mb-[24px]'>Deciding on the number of users to be displayed is more calculated than it appears. If all the app’s users are shown, the interface looks cluttered. If only a few users are shown, it appears like the platform doesn’t have enough users. To strike the balance between user experience and user content for AAB, we showed 100 location-based users on the map as the default view. Filters were also made available to cater to location-switching or to filter the type of users.</p>
            </div>
            <div className="md:col-span-1 col-span-2 lg:pl-[68px] md:pl-[40px] sm:pl-[10px] my-auto">
              <img src={mm} alt="" />
            </div>
          </div>
        </Container4>
      </div>

      <div className="">
        <Container4>
          <div className="grid grid-cols-2 pt-[80px] gap-7 md:mx-[20px] sm:mx-[30px] mx-[26px]">
            <div className="md:col-span-1 col-span-2">
              <img src={GN} alt="" />
            </div>

            <div className="md:col-span-1 col-span-2 xl:pl-[68px] lg:pl-[50px] md:pl-[30px] sm:pl-[14px] pl-[8px] my-auto">
              <h2 className='xl:text-[50px] lg:text-[43px] sm:text-[35px] text-[30px] font-poppins text-[#001817] mb-[15px] lg:leading-[60px] md:leading-[38px] sm:leading-[38px] leading-[34px]'>Real-time Community Wall</h2>
              <p className='xl:text-[20px] md:text-[18px] text-[16px] text-[#657676] font-poppins mb-[19px]'>The community wall functions like a Facebook feed. It gives flexibility for users to post their jobs, request for adoption, community tips, and everything in between. Each type of post works slightly differently and everything happens in real-time with engagement tools like comments, user tagging, likes and shares of posts. The speed and user experience were one of Hipster’s priorities while implementing the features.</p>
            </div>
          </div>
        </Container4>
      </div>

      <div className="">
        <Container4>
          <div className="grid grid-cols-2 pt-[80px] md:mx-[20px] sm:mx-[30px] mx-[26px]">
            <div className="md:col-span-1 col-span-2 my-auto">
              <h2 className='xl:text-[50px] lg:text-[43px] sm:text-[35px] text-[30px] font-poppins text-[#001817] mb-[15px] lg:leading-[60px] md:leading-[38px] sm:leading-[38px] leading-[34px]'>A Global Platform – languages, payments</h2>
              <p className='xl:text-[20px] md:text-[18px] text-[16px] text-[#657676] font-poppins mb-[24px]'>A global platform doesn’t just differ in languages, it also differs in behaviours and other localizations – in example, how locals prefer to pay for services. We initially integrated payment gateways using credit card and debit card subscriptions, but soon some users from Europe gave feedback that Paypal happened to be their first choice of payment. Our team quickly adapted the suggestion to add Paypal as an optional method of payment. We also kept the system open for more future payment integrations. Abroadly also currently offers 5 language capabilities that can be extended.</p>
            </div>
            <div className="md:col-span-1 col-span-2 lg:pl-[68px] md:pl-[30px]">
              <img src={mt} alt="" />
            </div>
          </div>
        </Container4>
      </div>

      <div className="">
        <Container4>
          <div className="grid grid-cols-1 pt-[80px] xl:px-[10px] lg:px-[30px] md:px-[20px] px-[20px]">
            <div className="col-span-1">
              <h2 className='xl:text-[50px] lg:text-[43px] sm:text-[35px] text-[30px] font-poppins text-[#001817] mb-[15px] lg:leading-[60px] md:leading-[38px] sm:leading-[38px] leading-[34px]'>Making community real and meaningful</h2>
              <p className='xl:text-[20px] md:text-[18px] text-[16px] text-[#657676] font-poppins mb-[45px]'>Avoiding fake people and NSFW content was one of our key targets. To achieve this, we did an ID verification and also planned for government API integrations to verify the real person behind the screen. We further used Artificial intelligence to avoid any content or pictures that do not follow the platform’s standard guidelines.</p>
            </div>
          </div>
        </Container4>
      </div>


      <div className='py-[80px] '>
        <div className=" relative b-black max-w-[377px] max-h-[513px] pt-[50px] pl-[50px] pb-[50px] rounded-[30px] mx-auto">
          <p className='text-[20px] text-[#FFFFFF] font-poppins'>
            Success Metrics
          </p>
          <h3 className='text-[42px] my-[5px] font-poppins text-[#FFFFFF]'>Impact</h3>
          <div className='mt-[96px]'>
            <img src={Downlogo} className='w-[62px] h-[61px]' alt="" />
            <h3 className='text-[#ffffff] text-[42px] font-poppins'>11000+</h3>
            <p className='text-[#ffffff] text-[20px] font-poppins'>Downloads</p>
          </div>
          <div className=''>
            <div className="absolute top-[161px] right-[-168px] lamap">
              <img className='max-w-[304px] max-h-[313px]' src={ratingbox} alt="" />
              <h3 className='font-semibold text-[42px] absolute top-[80px] right-[120px] text-[#FFFFFF] font-poppins'>4.6</h3>
              <p className=' text-[20px] absolute top-[135px] right-[96px] text-[#FFFFFF] font-poppins'>Star rating</p>
            </div>
            <div className=' absolute lamps top-[181px] right-[25px]'>
              <img className='max-w-[80px] max-h-[156px]' src={star} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="sm:py-[80px]">
        <div className=" lg:mx-[198px] md:mx-[80px] mx-[30px] ">
        <div className="">
  <h2 className="text-center text-[28px] md:text-[36px] lg:text-[42px] text-[#000000] font-poppins">
    <Link className="bbn" to={"/alotool"}>
      Next Case Study
    </Link>
  </h2>
  <div className="py-[30px] md:py-[40px] lg:py-[50px] text-center">
    <div className="text-[18px] md:text-[20px] lg:text-[24px] font-poppins text-[#001817] mb-[10px] md:mb-[12px] lg:mb-[15px]">
      <Link to={"/alotool"}>AIO — Event Registration tool</Link>
    </div>
    <h3 className="font-semibold text-[24px] md:text-[28px] lg:text-[32px] max-w-[100%] md:max-w-[600px] lg:max-w-[500px] mx-auto text-center leading-[30px] md:leading-[36px] lg:leading-[42px] text-[#001817] font-poppins">
      <Link className="mb-[8px] md:mb-[10px] lg:mb-[12px]" to={""}>
      An Interactive and Multi-Functioning Mobile App for Physical Events.
      </Link>
    </h3>
  </div>
</div>

        </div>
      </div>
      
    </div>
  )
}





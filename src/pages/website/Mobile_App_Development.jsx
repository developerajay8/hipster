

import React from 'react'
import Container4 from '../../components/Container4'
import { Focus, Fx, Mirror, warning, Ajay, bomb, Nimble, Sx, groups, invalidname, notched, pencil3, two, rep, edt, ast, atn, SS, gm } from '../../assets'
import { TiArrowRight } from "react-icons/ti";


import Data from './data'
import Accord from './Accord'
import { Link } from 'react-router-dom'
import Container2 from '../../components/Container2'
import SimpleSlider from './SimpleSlider';
import Trusted from './Trusted';


export default function Mobile_App_Development() {
  const accordElems = Data.map(
    (d, i) => {
      // console.log(d,i);
      return <Accord key={i} title={d.title} body={d.body} seo={d.seo} sep={d.sep} seps={d.seps} />

    }
  )
  return (
    <div>
      <Container4>
        <div className=" pt-[100px] sm:pb-[80px] pb-[50px] xl:px-0 lg:px-[30px] md:px-[40px] sm:px-[30px] px-[26px]">
          <div className="">
            <h1 className='lg:text-[56px] md:text-[42px] sm:text-[35px] text-[35px]  font-poppins text-[#000000]' data-aos="slide-right" data-aos-duration="500">
              Mobile App Development

            </h1>
            <h2 className='max-w-[865px] font-semibold text-[#001817] xl:text-[32px] lg:text-[28px] sm:text-[24px]
           text-[22px] font-poppins lg:mt-[60px] md:mt-[30px] sm:mt-[18px] mt-[16px] mb-[15px] sm:leading-[40px] leading-[27px]' data-aos="slide-left" data-aos-duration="500">Transforming innovative ideas into high performing mobile applications</h2>
          </div>
        </div>
      </Container4>
      <div className="topst lg:min-h-[800px] md:min-h-[540px] sm:min-h-[340px] min-h-[240px]">
      </div>

      <div className="py-[80px]">
        <Container4>
          <div className="grid grid-cols-1 xl:px-[0px] lg:px-[10px] md:px-[30px] px-[20px] ">
            <h2 className='lg:text-[46px] text-[35px] font-poppins font-semibold mb-[15px] text-[#000000]'>Our recipe to making successful mobile apps</h2>
          </div>


          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 lg:px-[0px] md:px-[60px] sm:px-[100px] px-[10px]">
            <div className="col-span-1 lg:pr-[60px] pr-[12px] pt-[48px] pl-[12px]" data-aos="slide-right" data-aos-duration="500">
              <img src={Nimble} alt="" />
              <h3 className='lg:text-[28px] text-[22px] font-poppins mb-[16px] text-[#000000] font-semibold'>User Interface and Experience Design</h3>
              <p className='lg:text-[20px] text-[16px] text-[#596868] font-poppins '>Mobile users prefer apps that look great and function well. Hipster adopts a design-first approach – offering UI UX design services for mobile apps developed by us. We convert your ideas into wireframes and prototypes to finalize the app requirements before development begins.</p>
            </div>
            <div className="col-span-1 lg:pl-[60px] pl-[12px] pt-[48px] pr-[12px]" data-aos="slide-left" data-aos-duration="500">
              <img src={notched} alt="" />
              <h3 className='lg:text-[28px] text-[22px] font-poppins mb-[16px] text-[#000000] font-semibold'>IOS, Andriod and Hybrid Apps</h3>
              <p className='lg:text-[20px] text-[16px] text-[#596868] font-poppins '>Choose from IOS, Andriod and, cross-platform mobile app. Our team of 60 comprises experts who can specialize in different areas of development.</p>
            </div>
          </div>


          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 lg:px-[0px] md:px-[60px] sm:px-[100px] px-[10px]">
            <div className="col-span-1 lg:pr-[60px] pr-[12px] pt-[48px] pl-[12px]" data-aos="slide-right" data-aos-duration="500">
              <img src={Focus} alt="" />
              <h3 className='lg:text-[28px] text-[22px] font-poppins mb-[16px] text-[#000000] font-semibold'>Scalable and secure technical architecture</h3>
              <p className='lg:text-[20px] text-[16px] text-[#596868] font-poppins '>It is essential to plan for scalability from day one. From our experience, companies struggle when their architecture is too rigid to handle a sudden increase in workload. While it might be possible to work around the architecture constraints later, it is often expensive and time-consuming.</p>
            </div>
            <div className="col-span-1 lg:pl-[60px] pl-[12px] pt-[48px] pr-[12px]" data-aos="slide-left" data-aos-duration="500">
              <img src={Mirror} alt="" />
              <h3 className='lg:text-[28px] text-[22px] font-poppins mb-[16px] text-[#000000] font-semibold'>Project Management Experience</h3>
              <p className='lg:text-[20px] text-[16px] text-[#596868] font-poppins '>We have experience in the traditional waterfall and agile project management. Our project manager will work with you to bring your app or MVP to market efficiently and effectively.</p>
            </div>
          </div>
        </Container4>
      </div>



      <div className="py-[80px]">
        <Container4>
          <div className="grid grid-cols-1 xl:px-[0px] lg:px-[10px] md:px-[70px] sm:px-[40px] px-[12px]">
            <h2 className=' lg:text-[46px] md:text-[38px] text-[34px]  font-poppins text-[#000000] font-semibold'>Our work</h2>
            <h3 className='lg:text-[32px] md:text-[24px] text-[22px] max-w-[700px] lg:leading-[45px] md:leading-[30px] md:mt-[25px] mt-[15px] font-poppins text-[#000000]'>Explore websites created for our clients all around the world and across industries</h3>
          </div>

          <div className="pt-[60px]">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-[80px] xl:px-[0px] lg:px-[14px] md:px-[20px] sm:px-[100px] px-[20px]" data-aos="slide-up" data-aos-duration="500">
              <div className="col-span-1 ">
                <Link to={"/tueetoredutech"}>
                <img src={edt} alt="" />
                <div className="py-[25px]">
                  <h4 className='mb-[12px] text-[24px] font-poppins text-[#001817]'>Tueetor — Edutech</h4>
                  <h3 className='lg:text-[32px] text-[24px] font-poppins font-bold text-[#001817]'>Online platform for finding digital tutors</h3>
                  <ul classNameclassName='mt-[20px]'>
                    <li className='text-[14px] font-poppins text-[#000000]'>Match Making Platform, Education Tech</li>
                  </ul>
                </div>
                </Link>
              </div>
              <div className="col-span-1  mb-[17px]">
                <Link to={'/mintutor'}>
                <div className='lg:pt-[92px] md:pt-[72px]'>
                  <img src={Sx} alt="" />
                  <div className="py-[25px]">
                    <h4 className='mb-[12px] text-[24px] font-poppins text-[#001817]'>10-min Tutor — Edutech</h4>
                    <h3 className='lg:text-[32px] text-[24px] font-semibold font-poppins text-[#001817]'>On-demand tutor app with video-telephony & marketplace functionalities</h3>
                    <ul className='mt-[20px]'>
                      <li className='text-[14px] font-poppins text-[#000000]'>On-Demand Video Solutions, Education Tech</li>
                    </ul>
                  </div>
                </div>
                </Link>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-[80px] xl:px-[0px] lg:px-[14px] md:px-[20px] sm:px-[100px] px-[20px]" data-aos="slide-up" data-aos-duration="500">
              <div className="col-span-1 ">
              <Link to={"/physicleteam"}>
                <img src={SS} alt="" />
                <div className="py-[25px]">
                  <h4 className='mb-[12px] text-[24px] font-poppins text-[#001817]'>Tbit — Team Engagement</h4>
                  <h3 className='lg:text-[32px] text-[24px] font-poppins font-bold text-[#001817]'>A physical team-building app: say no to boring activities!</h3>
                  <ul classNameclassName='mt-[20px]'>
                    <li className='text-[14px] font-poppins text-[#000000]'>Gamification in Tech, Event Management</li>
                  </ul>
                </div>
                </Link>
              </div>
              <div className="col-span-1  mb-[17px]">
                <Link to={'/wsg'}>
                <div className='lg:pt-[92px] md:pt-[72px]'>
                  <img src={gm} alt="" />
                  <div className="py-[25px]">
                    <h4 className='mb-[12px] text-[24px] font-poppins text-[#001817]'>WSG — Workforce Singapore — Career Guidance</h4>
                    <h3 className='lg:text-[32px] text-[24px] font-semibold font-poppins text-[#001817]'>Pilot of Mobile Kiosks.</h3>
                    <ul className='mt-[20px]'>
                      <li className='text-[14px] font-poppins text-[#000000]'>On-Demand Video Solutions, Mobile Apps, Web App, Admin Panel / Dashboard, UI/UX Design</li>
                    </ul>
                  </div>
                </div>
                </Link>
              </div>
            </div>
          </div>

        </Container4>
      </div>

      <div className="">
        <div className="grid md:grid-cols-5 grid-cols-1">
          <div className="md:col-span-3 col-span-1 p-[20px] grdnt ">
            <div className="max-w-[535px] my-auto mx-auto">
              <div className="my-[100px]">
                <h2 className='text-[50px] font-poppins mb-[15px] text-[#FFFFFF] '>Bring your brand and customers closer</h2>
                <p className='text-[20px] font-poppins text-[#FFFFFF]'>Hipster understands the importance of mobile apps to scale, automate the business operations and engage with consumers for your brand.</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 col-span-1 p-[20px] backgrou">
            <div className="max-w-[310px] my-auto mx-auto ">
              <div className="my-[160px]">
                <h2 className='text-[50px] font-poppins mb-[15px] leading-[60px] text-[#FFFFFF] '>Only the
                  best is good
                  enough.</h2>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="py-[80px] bg-[#e6e8f9]">
        <Container4>
          <div className="grid grid-cols-1 xl:px-[0px] lg:px-[10px] md:px-[70px] sm:px-[40px] px-[12px]">
            <h2 className='lg:text-[46px] md:text-[38px] sm:text-[30px] text-[30px] text-[#000000] font-poppins font-bold'>Our Process</h2>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 lg:px-[0px] md:px-[50px] sm:px-[80px] px-[12px]">
            <div className="col-span-1 pt-[48px] px-[15px]">
              <h1 className='font-poppins text-[60px]'>1</h1>
              <div className="lg:pr-[60px] ">
                <h3 className='lg:text-[28px] text-[22px] font-poppins text-[#000000] font-[600]'>Discover, Define and Strategize</h3>
                <p className='lg:text-[20px] text-[16px] font-poppins mt-[20px] text-[#576464]'>We listen to your short and long term goals. Study your industry, conduct competitor's research and recommend you the right solutions. We don't just wait for instructions from you, we offer our point of view.</p>
              </div>
            </div>
            <div className="col-span-1 pt-[48px] px-[15px]">
              <h1 className='font-poppins text-[60px]'>2</h1>
              <div className="lg:pr-[60px] ">
                <h3 className='lg:text-[28px] text-[22px] font-poppins text-[#000000] font-[600]'>Design and Evaluate</h3>
                <p className='lg:text-[20px] text-[16px] font-poppins mt-[20px] text-[#576464]'>UI UX design is crucial to a website’s success. Prototyping is a key activity that we undertake in the early project stage. This enables all stakeholders to visualise the product, interact with it and make changes early.</p>
              </div>
            </div>
            {/* <div className="col-span-1"></div> */}
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 lg:px-[0px] md:px-[50px] sm:px-[80px] px-[12px]">
            <div className="col-span-1 pt-[48px] px-[15px]">
              <h1 className='font-poppins text-[60px]'>3</h1>
              <div className="lg:pr-[60px] ">
                <h3 className='lg:text-[28px] text-[22px] font-poppins text-[#000000] font-[600]'>Mobile App and Backend Development</h3>
                <p className='lg:text-[20px] text-[16px] font-poppins mt-[20px] text-[#576464]'>Our app and backend developers work together to provide you with an end-to-end solution.</p>
              </div>
            </div>
            <div className="col-span-1 pt-[48px] px-[15px]">
              <h1 className='font-poppins text-[60px]'>4</h1>
              <div className="lg:pr-[60px] ">
                <h3 className='lg:text-[28px] text-[22px] font-poppins text-[#000000] font-[600]'>Quality Assurance and Testing</h3>
                <p className='lg:text-[20px] text-[16px] font-poppins mt-[20px] text-[#576464]'>We conduct testing at every phase of the development. The rigorous performance, integration, load, and security testing ensure that the product is of the highest possible quality.</p>
              </div>
            </div>
            {/* <div className="col-span-1"></div> */}
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 lg:px-[0px] md:px-[50px] sm:px-[80px] px-[12px]">
            <div className="col-span-1 pt-[48px] px-[15px]">
              <h1 className='font-poppins text-[60px]'>5</h1>
              <div className="lg:pr-[60px] ">
                <h3 className='lg:text-[28px] text-[22px] font-poppins text-[#000000] font-[600]'>Launch in Apple Store and Google Play Store</h3>
                <p className='lg:text-[20px] text-[16px] font-poppins mt-[20px] text-[#576464]'>We are here to help with the launching of any app and preparing of necessary materials.</p>
              </div>
            </div>
            <div className="col-span-1 pt-[48px] px-[15px]">
              <h1 className='font-poppins text-[60px]'>6</h1>
              <div className="lg:pr-[60px] ">
                <h3 className='lg:text-[28px] text-[22px] font-poppins text-[#000000] font-[600]'>After launch care</h3>
                <p className='lg:text-[20px] text-[16px] font-poppins mt-[20px] text-[#576464]'>Have a peace of mind by working with us. Apps developed by Hipster always comes with a minimum of one year of warranty.</p>
              </div>
            </div>
            {/* <div className="col-span-1"></div> */}
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 lg:px-[0px] md:px-[50px] sm:px-[80px] px-[12px]">
            <div className="col-span-1 pt-[48px] px-[15px]">
              <h1 className='font-poppins text-[60px]'>7</h1>
              <div className="lg:pr-[60px] ">
                <h3 className='lg:text-[28px] text-[22px] font-poppins text-[#000000] font-[600]'>Evolve</h3>
                <p className='lg:text-[20px] text-[16px] font-poppins mt-[20px] text-[#576464]'>As time goes by, your software needs may change. Hipster is here to support you and ensure your business’ tech solution remains relevant.</p>
              </div>
            </div>
          </div>
        </Container4>
      </div>

      <div className="py-[80px] lg:px-[20px] md:px-[50px] px-[10px] CAQ">
        <Container4>
          <div className="grid grid-cols-1">
            <h2 className='lg:text-[46px] md:text-[38px] sm:text-[30px] text-[30px] text-[#FFFFFF] font-poppins'>Commonly Asked Questions</h2>
          </div>

          <div className="grid grid-cols-1 pt-[60px]">
            <div className=' max-w-[1140px]'>
              {accordElems}
            </div>
            <p className='mt-[48px] mb-[15px] text-[20px] font-poppins text-[#FFFFFF] '>Still have more questions? Check out our full list of <Link className='FAQ' to={''}>FAQ</Link> .Alternatively, <Link className='SUM' to={''}>send us a message.</Link></p>
          </div>
        </Container4>
      </div>

      <Trusted />


      

      <div className="client md:py-[100px] sm:py-[70px]  py-[30px] xl:px-[20px] md:px-[20px] sm:px-[15px] px-[15px]">
      <Container2>
        <div className=" grid grid-cols-2">
          <div className="relative lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-2 pr-[80px]">
            <h2 className="text-[50px] text-[#FFFFFF] font-poppins mb-[15px]">
              What Our <br className="xl:block hidden" />
              Clients say
            </h2>
            <div>
              <div className="">
                <img
                  src={invalidname}
                  data-aos="slide-down"
                  data-aos-duration="2000"
                  alt=""
                  className="absolute top-[160px] left-[70px]"
                />
              </div>
              <div className="h-[300px] w-[100%]">
                <img
                  src={groups}
                  alt=""
                  className="absolute top-[210px] left-[50px]"
                />
                <img
                  src={groups}
                  alt=""
                  className="absolute top-[270px] left-[0px]"
                />
                <img
                  src={groups}
                  alt=""
                  className="absolute top-[180px] left-[120px]"
                />
                <img
                  src={groups}
                  alt=""
                  className="absolute xl:block hidden top-[213px] right-[214px]"
                />
                <img
                  src={groups}
                  alt=""
                  className="absolute xl:block hidden top-[270px] right-[160px]"
                />
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-2 lg:pr-[80px] lg:px-[0px] md:px-[50px] sm:px-[20px] px-[12px]">
            <SimpleSlider />
          </div>
        </div>
      </Container2>
    </div>

    </div>
  )
}







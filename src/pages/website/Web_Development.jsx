import React from 'react'
import Container4 from '../../components/Container4'
import { Focus, Fx, Mirror, warning, Ajay, bomb, Nimble, Sx, groups, invalidname, notched, pencil3, two, rep, edt, ast, atn, m7, m6, m5, m4, m3, m2, m1, setting, clientcircle } from '../../assets'
import { TiArrowRight } from "react-icons/ti";


import Data from './data'
import Accord from './Accord'
import { Link } from 'react-router-dom'
import Container2 from '../../components/Container2'
import SimpleSlider from './SimpleSlider';
import Marquee from 'react-fast-marquee';


export default function Web_Development() {
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
            Web Development

            </h1>
            <h2 className='max-w-[865px] font-semibold text-[#001817] xl:text-[32px] lg:text-[28px] sm:text-[24px]
           text-[22px] font-poppins lg:mt-[60px] md:mt-[30px] sm:mt-[18px] mt-[16px] mb-[15px] sm:leading-[40px] leading-[27px]' data-aos="slide-left" data-aos-duration="500">A website is the face and hands to a brand. Besides being a powerful marketing tool, it dramatically increases business efficiency.</h2>
          </div>
        </div>
      </Container4>
      <div className="tops lg:min-h-[840px] md:min-h-[540px] sm:min-h-[340px] min-h-[240px]">
      </div>

      <div className="py-[80px]">
        <Container4>
          <div className="grid grid-cols-1 xl:px-[0px] lg:px-[10px] md:px-[30px] px-[20px] ">
            <h2 className='lg:text-[46px] text-[35px] font-poppins font-semibold mb-[15px] text-[#000000]'>Our recipe to making successful websites</h2>
          </div>


          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 lg:px-[0px] md:px-[60px] sm:px-[100px] px-[10px]">
            <div className="col-span-1 lg:pr-[60px] pr-[12px] pt-[48px] pl-[12px]" data-aos="slide-right" data-aos-duration="1000">
              <img src={Nimble} alt="" />
              <h3 className='lg:text-[28px] text-[22px] font-poppins mb-[16px] text-[#000000] font-semibold'>Nimble Team</h3>
              <p className='lg:text-[20px] text-[16px] text-[#596868] font-poppins '>As a digital agency with experience working with companies across industries, we utilize creative website development strategies. Working on multiple projects exposes us to different technologies and keeps us at the forefront of the industry.</p>
            </div>
            <div className="col-span-1 lg:pl-[60px] pl-[12px] pt-[48px] pr-[12px]" data-aos="slide-left" data-aos-duration="1000">
              <img src={notched} alt="" />
              <h3 className='lg:text-[28px] text-[22px] font-poppins mb-[16px] text-[#000000] font-semibold'>Top-notched <br />
                Quality & Security</h3>
              <p className='lg:text-[20px] text-[16px] text-[#596868] font-poppins '>We conduct rigorous quality assurance testing of the website before going live. We also take security measures such as SSL and data encryption, making asset files private and using 2FA login.</p>
            </div>
          </div>


          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 lg:px-[0px] md:px-[60px] sm:px-[100px] px-[10px]">
            <div className="col-span-1 lg:pr-[60px] pr-[12px] pt-[48px] pl-[12px]" data-aos="slide-right" data-aos-duration="1000">
              <img src={Focus} alt="" />
              <h3 className='lg:text-[28px] text-[22px] font-poppins mb-[16px] text-[#000000] font-semibold'>Focus on ROI</h3>
              <p className='lg:text-[20px] text-[16px] text-[#596868] font-poppins '>We work with you to solve your business problems and don’t copy-paste solutions. Through our SEO optimization services, analytics integration and create multi language websites to help you reach your target audience and results.</p>
            </div>
            <div className="col-span-1 lg:pl-[60px] pl-[12px] pt-[48px] pr-[12px]" data-aos="slide-left" data-aos-duration="1000">
              <img src={Mirror} alt="" />
              <h3 className='lg:text-[28px] text-[22px] font-poppins mb-[16px] text-[#000000] font-semibold'>Responsive Websites <br />
                Quality & Security</h3>
              <p className='lg:text-[20px] text-[16px] text-[#596868] font-poppins '>Hipster’s experience with responsive design is handy in a world where majority of the web traffic is on mobile. Our websites work elegantly across devices, be it desktop, tablets or mobile.</p>
            </div>
          </div>


        </Container4>
      </div>

      <div className="">
        <div className="grid md:grid-cols-5 grid-cols-1">
          <div className="md:col-span-3 col-span-1 p-[20px] grdnt ">
            <div className="max-w-[535px] my-auto mx-auto">
              <div className="my-[100px]">
                <h2 className='text-[50px] font-poppins mb-[15px] text-[#FFFFFF] '>Websites promote you 24/7</h2>
                <p className='text-[20px] font-poppins text-[#FFFFFF]'>Hipster Inc. understands the importance of the website to your business. Our forte lies in creating websites that are stunning, responsive, and functional.</p>
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

      <div className="py-[80px]">
        <Container4>
          <div className="grid grid-cols-1 xl:px-[0px] lg:px-[10px] md:px-[70px] sm:px-[40px] px-[12px]">
            <h2 className=' lg:text-[46px] md:text-[38px] text-[34px]  font-poppins text-[#000000] font-semibold'>Our work</h2>
            <h3 className='lg:text-[32px] md:text-[24px] text-[22px] max-w-[700px] lg:leading-[45px] md:leading-[30px] md:mt-[25px] mt-[15px] font-poppins text-[#000000]'>Explore websites created for our clients all around the world and across industries</h3>
          </div>

          <div className="pt-[60px]">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-[80px] xl:px-[0px] lg:px-[14px] md:px-[20px] sm:px-[100px] px-[20px]" data-aos="slide-up" data-aos-duration="1000">
              <div className="col-span-1 ">
                <Link to={"/lhommes"}>
                <img src={Fx} alt="" />
                </Link>
                <Link to={"/lhommes"}>
                <div className="py-[25px]">
                  <h4 className='mb-[12px] text-[24px] font-poppins text-[#001817]'>L’Hommes — Fashion E-commerce</h4>
                  <h3 className='lg:text-[32px] text-[24px] font-poppins font-bold text-[#001817]'>Custom suits e-commerce platform with fit visualization</h3>
                  <ul classNameclassName='mt-[20px]'>
                    <li className='text-[14px] font-poppins text-[#000000]'>Personalized Fashion</li>
                  </ul>
                </div>
                </Link>
              </div>
              <div className="col-span-1  mb-[17px]">
                <div className='lg:pt-[92px] md:pt-[72px]'>
                <Link to={'/mintutor'}>
                  <img src={Sx} alt="" />
                  </Link>
                    <Link to={'/mintutor'}>
                  <div className="py-[25px]">
                    <h4 className='mb-[12px] text-[24px] font-poppins text-[#001817]'>10-min Tutor — Edutech</h4>
                    <h3 className='lg:text-[32px] text-[24px] font-semibold font-poppins text-[#001817]'>On-demand tutor app with video-telephony & marketplace functionalities</h3>
                    <ul className='mt-[20px]'>
                      <li className='text-[14px] font-poppins text-[#000000]'>On-Demand Video Solutions, Education Tech</li>
                    </ul>
                    
                  </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-[80px] xl:px-[0px] lg:px-[14px] md:px-[20px] sm:px-[100px] px-[20px]" data-aos="slide-up"data-aos-duration="1000">
              <div className="col-span-1 ">
              <Link to={'/tueetoredutech'}>
                <img src={edt} alt="" />
                </Link>
                <Link to={'/tueetoredutech'}>
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
                <div className='lg:pt-[92px] md:pt-[72px]'>
                <Link to={'/accesetsingapore'}>
                  <img src={ast} alt="" />
                  </Link>
                  <Link to={'/accesetsingapore'}>
                  <div className="py-[25px]">
                    <h4 className='mb-[12px] text-[24px] font-poppins text-[#001817]'>Acceset Singapore — Mental Health Care</h4>
                    <h3 className='lg:text-[32px] text-[24px] font-semibold font-poppins text-[#001817]'>Transforming mental health care through anonymous online text-based therapy.</h3>
                    <ul className='mt-[20px]'>
                      <li className='text-[14px] font-poppins text-[#000000]'>Mental Health</li>
                    </ul>
                  </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className=" grid md:grid-cols-2 grid-cols-1 gap-[80px] xl:px-[0px] lg:px-[14px] md:px-[20px] sm:px-[100px] px-[20px]" data-aos="slide-up"data-aos-duration="1000">
              <div className="col-span-1 ">
              <Link to={'/abroadly'}>
                <img src={atn} alt="" />
                </Link>
                <Link to={'/abroadly'}>
                <div className="py-[25px]">
                  <h4 className='mb-[12px] text-[24px] font-poppins text-[#001817]'>Abroadly — Travel</h4>
                  <h3 className='lg:text-[32px] text-[24px] font-poppins font-bold text-[#001817]'>An interactive "Home away from Home" community for backpackers, travellers and hosts</h3>
                  <ul classNameclassName='mt-[20px]'>
                    <li className='text-[14px] font-poppins text-[#000000]'>Match Making Platform, Mobile Apps, Web App, Admin Panel / Dashboard, UI/UX Design</li>
                  </ul>
                </div>
                </Link>
              </div>
            </div>
          </div>

        </Container4>
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
                <h3 className='lg:text-[28px] text-[22px] font-poppins text-[#000000] font-[600]'>Code, Test and Launch</h3>
                <p className='lg:text-[20px] text-[16px] font-poppins mt-[20px] text-[#576464]'>Our frontend and backend developers work together to provide you with an end-to-end solution. Following this, we optimize the SEO and do vigorous quality assurance testing before launching it.</p>
              </div>
            </div>
            <div className="col-span-1 pt-[48px] px-[15px]">
              <h1 className='font-poppins text-[60px]'>4</h1>
              <div className="lg:pr-[60px] ">
                <h3 className='lg:text-[28px] text-[22px] font-poppins text-[#000000] font-[600]'>Evolve</h3>
                <p className='lg:text-[20px] text-[16px] font-poppins mt-[20px] text-[#576464]'>As time goes by, your software needs may change. Hipster is here to support you and ensure your business’ tech solution remains relevant.</p>
              </div>
            </div>
            {/* <div className="col-span-1"></div> */}
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
            <p className='mt-[48px] mb-[15px] sm:text-[20px] text-[16px] font-poppins text-[#FFFFFF] '>Still have more questions? Check out our full list of <Link className='FAQ' to={'/'}>FAQ</Link> .Alternatively, <Link className='SUM' to={''}>send us a message.</Link></p>
          </div>
        </Container4>
      </div>


     

    <div className="pt-[80px] pb-[120px] Truste">
      <div className=" ">
        <h2 className="text-[50px] text-[#FFFFFF] mb-[30px] font-poppins tr">
          Trusted by
        </h2>
        <div className="relative sm:block hidden THID">
          <img
            src={clientcircle}
            className="absolute top-[-253px] right-0"
            alt=""
          />
          <img
            src={setting}
            className="absolute top-[-179px] right-[122px]"
            alt=""
          />
        </div>

        <div className="w-full ">
          <div className="w-[100%] flex flex-col">
            <Marquee autoFill pauseOnHover>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m1}
                  alt=""
                />
              </div>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m2}
                  alt=""
                />
              </div>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m3}
                  alt=""
                />
              </div>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m4}
                  alt=""
                />
              </div>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m5}
                  alt=""
                />
              </div>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m6}
                  alt=""
                />
              </div>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m7}
                  alt=""
                />
              </div>
            </Marquee>
            <Marquee autoFill pauseOnHover direction="right">
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m1}
                  alt=""
                />
              </div>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m2}
                  alt=""
                />
              </div>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m3}
                  alt=""
                />
              </div>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m4}
                  alt=""
                />
              </div>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m5}
                  alt=""
                />
              </div>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m6}
                  alt=""
                />
              </div>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m7}
                  alt=""
                />
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>





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




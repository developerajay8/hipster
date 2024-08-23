

import React from 'react'
import Container4 from '../../components/Container4'
import { Focus, Fx, Mirror, warning, Ajay, bomb, Nimble, Sx, groups, invalidname, notched, pencil3, two, rep, edt, ast, atn, SS, gm, kt, wtcl, sstf, olm } from '../../assets'
import { TiArrowRight } from "react-icons/ti";


import Data from './data'
import Accord from './Accord'
import { Link } from 'react-router-dom'
import Container2 from '../../components/Container2'
import SimpleSlider from './SimpleSlider';


export default function UIUX_Design() {
  const accordElems = Data.map(
    (d, i) => {
      // console.log(d,i);
      return <Accord key={i} title={d.title} body={d.body} seo={d.seo} sep={d.sep} seps={d.seps} />

    }
  )
  return (
    <div>
      <Container4>
        <div className=" pt-[100px] sm:pb-[80px] pb-[50px] xl:px-0 lg:px-[30px] md:px-[40px] sm:px-[20px] px-[20px]">
          <div className="">
            <h1 className='lg:text-[56px] md:text-[42px] sm:text-[35px] text-[35px]  font-poppins text-[#000000]'data-aos="slide-right" data-aos-duration="500">
              UI/UX
              
            </h1>
            <h2 className='max-w-[865px] font-semibold text-[#001817] xl:text-[32px] lg:text-[28px] sm:text-[24px]
           text-[22px] font-poppins lg:mt-[60px] md:mt-[30px] sm:mt-[18px] mt-[16px] mb-[15px] sm:leading-[40px] leading-[27px]' data-aos="slide-left" data-aos-duration="500">Crafting digital products that improve the lives of the humans using them</h2>
          </div>
        </div>
      </Container4>
      <div className="topstk lg:min-h-[800px] md:min-h-[540px] sm:min-h-[340px] min-h-[240px]">
      </div>

      <div className="py-[80px]">
        <Container4>
          <div className="grid grid-cols-1 xl:px-[0px] lg:px-[10px] md:px-[30px] px-[20px] ">
            <h2 className='lg:text-[46px] text-[35px] font-poppins font-semibold mb-[15px] text-[#000000]'>Our Design Principles</h2>
          </div>


          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 lg:px-[0px] md:px-[60px] sm:px-[100px] px-[10px]">
            <div className="col-span-1 lg:pr-[60px] pr-[12px] pt-[48px] pl-[12px]"data-aos="slide-right" data-aos-duration="500">
              <img src={Nimble} alt="" />
              <h3 className='lg:text-[28px] text-[22px] font-poppins mb-[16px] text-[#000000] font-semibold'>Designing with Agility</h3>
              <p className='lg:text-[20px] text-[16px] text-[#596868] font-poppins '>Our UI UX Designers work in teams using prototyping tools to iterate and deliver fast while still sharing insights within the group. Not to mention, they are well-versed in mobile app and website UI UX design.</p>
            </div>
            <div className="col-span-1 lg:pl-[60px] pl-[12px] pt-[48px] pr-[12px]"data-aos="slide-left" data-aos-duration="500">
              <img src={notched} alt="" />
              <h3 className='lg:text-[28px] text-[22px] font-poppins mb-[16px] text-[#000000] font-semibold'>User-centric Design</h3>
              <p className='lg:text-[20px] text-[16px] text-[#596868] font-poppins '>The key to designing a superb digital experience lies in understanding the users and close collaboration with our clients. Our firm belief is that the interface has to be functional and helps the users to achieve what they want to do.</p>
            </div>
          </div>


          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 lg:px-[0px] md:px-[60px] sm:px-[100px] px-[10px]">
            <div className="col-span-1 lg:pr-[60px] pr-[12px] pt-[48px] pl-[12px]"data-aos="slide-right" data-aos-duration="500">
              <img src={Focus} alt="" />
              <h3 className='lg:text-[28px] text-[22px] font-poppins mb-[16px] text-[#000000] font-semibold'>Flexible Collaboration Methods</h3>
              <p className='lg:text-[20px] text-[16px] text-[#596868] font-poppins '>Hipster has experience working in waterfall or agile teams. Our UI UX designers in Singapore and India will adapt their design process to fulfil your business requirements.</p>
            </div>
            <div className="col-span-1 lg:pl-[60px] pl-[12px] pt-[48px] pr-[12px]" data-aos="slide-left" data-aos-duration="500">
              <img src={Mirror} alt="" />
              <h3 className='lg:text-[28px] text-[22px] font-poppins mb-[16px] text-[#000000] font-semibold'>Bringing Experience to Life</h3>
              <p className='lg:text-[20px] text-[16px] text-[#596868] font-poppins '>Design is more than a phase; and it is a continuous iteration. We work with you to operationalize and get the design to market cost-effectively. As your customer needs evolve, we measure and optimize the app over time. We strive to give you the best because we do well when your business does well.</p>
            </div>
          </div>
        </Container4>
      </div>


      <div className="">
        <Container4>
          <div className="h-[80px]"></div>
        </Container4>
        <Container4>
          <div className="grid grid-cols-1 xl:mx-[0px] lg:mx-[70px] md:mx-[100px] sm:mx-[100px] mx-[20px]">
            <h2 className='font-semibold lg:text-[46px] md:text-[34px] text-[28px] text-[#000000] font-poppins lg:mb-[15px]'>Our Capabilities</h2>
            <h3 className='lg:text-[32px] text-[22px] mt-[25px] font-poppins text-[#000000] max-w-[690px]'>What Hipster’s UI/UX Designers can offer to support your digital journey.</h3>
          </div>

          <div className='py-[80px] '>
            <div className="grid lg:grid-cols-5 grid-cols-1 gap-6 xl:px-[0px] lg:px-[50px] md:px-[100px] sm:px-[80px] px-[20px]">
              <div className="lg:col-span-3 col-span-1">
                <div className="xl:pr-[68px] lg:pr-[40px]">
                  <h2 className='xl:text-[50px] lg:text-[35px] text-[35px] text-[#001817] font-poppins mb-[15px]' data-aos="slide-left" data-aos-duration="500">User Experience (UX) Design</h2>
                  <p className='xl:text-[20px] lg:text-[18px] text-[18px] text-[#657676] font-poppins xl:mb-[23px] lg:mb-[19px]'>Deliver exceptional user experience whilst generating business value through ux research. Broadly, the process comprises five stages – research, define, ideate, prototype and test. We don’t just apply the standard UX process, instead we seek to solve problems by using a combination of UX research activities. Some of our capabilities include:</p>
                  <ul className="pl-[20px] mt-[10px] xl:text-[20px] lg:text-[18px] text-[18px] text-[#666666] font-poppins">
                    <li>User interviews and personas</li>
                    <li>User journey mapping</li>
                    <li>Information architecture</li>
                    <li>Storyboarding</li>
                    <li>User flow</li>
                    <li>UX writing</li>
                    <li>Wireframing and prototyping</li>
                    <li>Usability testing</li>
                    <li>Running different types of UX workshops</li>
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-2 col-span-1 mx-auto lg:my-auto">
                <img src={kt} className='rounded-[17px] ' data-aos="slide-left" data-aos-duration="500" alt="" />
              </div>
            </div>
          </div>
        </Container4>

        <Container4>
          <div className='py-[80px] '>
            <div className="grid lg:grid-cols-5 grid-cols-1 gap-3 xl:px-[0px] lg:px-[50px] md:px-[100px] sm:px-[80px] px-[20px]">
              <div className="lg:col-span-2 col-span-1 ">
                <img src={wtcl} className='rounded-[17px] ' data-aos="slide-right" data-aos-duration="1000" alt="" />
              </div>
              <div className="lg:col-span-3 col-span-1 my-auto ">
                <div className="xl:pl-[68px] lg:pl-[40px]" data-aos="slide-left" data-aos-duration="1000">
                  <h2 className='xl:text-[50px] lg:text-[35px] text-[35px] text-[#001817] font-poppins mb-[15px]'>User Interface (UI) Design</h2>
                  <p className='xl:text-[20px] lg:text-[18px] text-[18px] text-[#657676] font-poppins xl:mb-[23px] lg:mb-[19px]'>User interfaces are the elements that users interact with on the screen. Work with Hipster to create user interfaces that incorporate your branding, adhere to design patterns, and are aesthetically beautiful.</p>
                  <p className='xl:text-[20px] lg:text-[18px] text-[18px] text-[#657676] font-poppins xl:mb-[23px] lg:mb-[19px]'>User interfaces are the elements that users interact with on the screen. Work with Hipster to create user interfaces that incorporate your branding, adhere to design patterns, and are aesthetically beautiful.</p>
                </div>
              </div>
            </div>
          </div>
        </Container4>

        <Container4>
          <div className='py-[80px] '>
            <div className="grid lg:grid-cols-5 grid-cols-1 gap-6 xl:px-[0px] lg:px-[50px] md:px-[100px] sm:px-[80px] px-[20px]">
              <div className="lg:col-span-3 col-span-1 my-auto ">
                <div className="xl:pr-[68px] lg:pr-[40px]" data-aos="slide-left" data-aos-duration="1000">
                  <h2 className='xl:text-[50px] lg:text-[35px] text-[35px] text-[#001817] font-poppins mb-[15px]' >The Design Sprint</h2>
                  <p className='xl:text-[20px] lg:text-[18px] text-[18px] text-[#657676] font-poppins xl:mb-[23px] lg:mb-[19px]'>Developed by Jake Knapp at Google Ventures, the Design Sprint is a 5-day process to create digital products through design, prototyping, and testing with your customers.</p>
                  <p className='xl:text-[20px] lg:text-[18px] text-[18px] text-[#657676] font-poppins xl:mb-[23px] lg:mb-[19px]'>Deliver exceptional user experience whilst generating business value through ux research. Broadly, the process comprises five stages – research, define, ideate, prototype and test. We don’t just apply the standard UX process, instead we seek to solve problems by using a combination of UX research activities. Some of our capabilities include:</p>

                </div>
              </div>
              <div className="lg:col-span-2 col-span-1 mx-auto lg:my-auto ">
                <img src={sstf} className='rounded-[18px] ' data-aos="slide-right" data-aos-duration="1000" alt="" />
              </div>
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
                <div className='lg:pt-[92px] md:pt-[72px]'>
                  <Link to={'/lhommes'}> 
                  <img src={olm} alt="" />
                  <div className="py-[25px]">
                    <h4 className='mb-[12px] text-[24px] font-poppins text-[#001817]'>L’Hommes — Fashion E-commerce</h4>
                    <h3 className='lg:text-[32px] text-[24px] font-semibold font-poppins text-[#001817]'>Custom suits e-commerce platform with fit visualization</h3>
                    <ul className='mt-[20px]'>
                      <li className='text-[14px] font-poppins text-[#000000]'>Personalized Fashion</li>
                    </ul>
                  </div>
                  </Link>
                </div>
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
                <h2 className='text-[50px] font-poppins mb-[15px] text-[#FFFFFF] '>Making a good product requires planning</h2>
                <p className='text-[20px] font-poppins text-[#FFFFFF]'>Designers in Hipster understand that how product looks (form), how it works (function) and how people feel about a product (emotion) are three equally important aspects in design. Investing time in user research is crucial to creating products that users love.</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 col-span-1 p-[20px] backgrou">
            <div className="max-w-[310px] my-auto mx-auto ">
              <div className="my-[160px]">
                <h2 className='text-[50px] font-poppins mb-[15px] leading-[60px] text-[#FFFFFF] '>Using a minimalist design style isn’t going to solve all problems</h2>
              </div>
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

      <div className="">
        <Container4>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 w-full md:h-[600px] h-[300px] xl:px-[0px] md:px-[60px] sm:px-[50px] px-[20px]">
            <div className="col-span-1  my-auto">
              <div className='px-[15px]'>
                <h2 className='lg:text-[46px] text-[34px] text-[#000000] font-poppins' data-aos="slide-right" data-aos-duration="500">Check out our
                 <br className='md:block hidden'/> other services</h2>
              </div>
            </div>
            <div className="col-span-1  my-auto">
              <div className='px-[15px]' data-aos="slide-left"data-aos-duration="500">
                <h3 className=' lg:text-[32px] text-[22px] lg:leading-[60px] leading-[40px] TU text-[#000000] font-poppins'>
                  <Link to={'/webdevelopment'}>Website Development</Link>
                </h3>
                <h3 className=' lg:text-[32px] text-[22px] lg:leading-[60px] leading-[40px] TU text-[#000000] font-poppins'>
                  <Link to={'/mobileappdevelopment'}>Mobile App Development</Link>
                </h3>
                <h3 className=' lg:text-[32px] text-[22px] lg:leading-[60px] leading-[40px] TU text-[#000000] font-poppins'>
                  <Link to={'/offtheshelfproducts'}>Off-the-shelf Products</Link>
                </h3>
              </div>
            </div>
          </div>
        </Container4>
      </div>
      
    </div>
  )
}



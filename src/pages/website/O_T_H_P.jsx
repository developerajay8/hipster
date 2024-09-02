


import React from 'react'
import Container4 from '../../components/Container4'
import { Focus, Fx, Mirror, warning, Ajay, bomb, Nimble, Sx, groups, invalidname, notched, pencil3, two, rep, edt, ast, atn, SS, gm, kt, wtcl, sstf, olm, f, s, t, fo, fi, si } from '../../assets'
import { TiArrowRight } from "react-icons/ti";


import Data from './data'
import Accord from './Accord'
import { Link } from 'react-router-dom'
import Container2 from '../../components/Container2'
import SimpleSlider from './SimpleSlider';


export default function O_T_H_P() {
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
            <h1
              className="lg:text-[56px] md:text-[42px] sm:text-[35px] text-[35px]  font-poppins text-[#000000]"
              data-aos="slide-right"
              data-aos-duration="500"
            >
              Off The Shelf Products
            </h1>
            <h2
              className="max-w-[865px] font-semibold text-[#001817] xl:text-[32px] lg:text-[28px] sm:text-[24px]
           text-[22px] font-poppins lg:mt-[60px] md:mt-[30px] sm:mt-[18px] mt-[16px] mb-[15px] sm:leading-[40px] leading-[27px]"
              data-aos="slide-left"
              data-aos-duration="500"
            >
              Creating tailor-made software for your business needs is our forte! Our team works with a flow to cover every stage from inception to completion in understanding your requirements through to testing and final releases.
            </h2>
          </div>
        </div>
      </Container4>
      <div className="nit lg:min-h-[800px] md:min-h-[500px] min-h-[300px]">
      </div>


      <div className="py-[80px]">
        <Container4>
          <div className="grid grid-cols-1 xl:px-[0px] lg:px-[10px] md:px-[30px] px-[20px] ">
            <h2 className='lg:text-[46px] text-[35px] font-poppins font-semibold mb-[15px] text-[#000000]'>Need to launch quickly?</h2>
            <h5 className='text-[20px] text-[#000000] font-poppins'>We’re here for you. Check out our commercial ready-made products</h5>
          </div>
          <div className="h-[60px]"></div>
          <div className="grid grid-cols-1 xl:px-[0px] lg:px-[10px] md:px-[30px] px-[20px] ">
            <h2 className='lg:text-[46px] text-[35px] font-poppins font-semibold mb-[15px] text-[#000000]'>Our Design Principles</h2>
          </div>


          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 lg:px-[0px] md:px-[60px] sm:px-[100px] px-[10px]">
            <div className="col-span-1 lg:pr-[60px] pr-[12px] pt-[48px] pl-[12px]" data-aos="slide-right" data-aos-duration="500">
              <img src={f} alt="" />
              <h3 className='lg:text-[28px] text-[22px] font-poppins mb-[16px] text-[#000000] font-semibold'>Survey App</h3>
              <p className='lg:text-[20px] text-[16px] text-[#596868] font-poppins '>Create surveys with complex question logic using the survey app. Pick from various question types – like multiple choice, scaling, conditional questions, and more. Roles can also be assigned within your organization, giving individuals different levels of access.</p>
              <div className="my-[20px]">
                <Link className='px-[20px] rounded-full py-[14px] bg-dark text-[#efecec] font-poppins' to={'/kwsh'}>Explore more</Link>
              </div>
            </div>
            <div className="col-span-1 lg:pl-[60px] pl-[12px] pt-[48px] pr-[12px]"data-aos="slide-left" data-aos-duration="500">
              <img src={s} alt="" />
              <h3 className='lg:text-[28px] text-[22px] font-poppins mb-[16px] text-[#000000] font-semibold'>Hybrid Event Management Platform</h3>
              <p className='lg:text-[20px] text-[16px] text-[#596868] font-poppins '>Virtual Breaker is a platform by Hipster that powers all your onsite and virtual events –be it meetings, exhibitions, or conferences. This platform seamlessly connects your in-person and virtual attendees for an interactive and engaging event experience. Find out more by visiting Virtual Breaker’s website.</p>
              <div className="my-[20px]">
                <Link className='px-[20px] rounded-full py-[14px] bg-dark text-[#efecec] font-poppins' to={'https://virtualbreaker.com/'}>Explore more</Link>
              </div>
            </div>
          </div>


          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 lg:px-[0px] md:px-[60px] sm:px-[100px] px-[10px]">
            <div className="col-span-1 lg:pr-[60px] pr-[12px] pt-[48px] pl-[12px]" data-aos="slide-right" data-aos-duration="500">
              <img src={t} alt="" />
              <h3 className='lg:text-[28px] text-[22px] font-poppins mb-[16px] text-[#000000] font-semibold'>Learning Management Platform</h3>
              <p className='lg:text-[20px] text-[16px] text-[#596868] font-poppins '>This all-in-one cloud-based system brings experiential learning everywhere and anywhere – from online learning, scheduling of classes, and connecting educators to students. Use technology to focus time on student learning rather than fulfilling administrative duties.</p>
              <div className="my-[20px]">
                <Link className='px-[20px] rounded-full py-[14px] bg-dark text-[#efecec] font-poppins' to={'/tueetoredutech'}>Explore more</Link>
              </div>
            </div>
            <div className="col-span-1 lg:pl-[60px] pl-[12px] pt-[48px] pr-[12px]" data-aos="slide-left" data-aos-duration="500">
              <img src={fo} alt="" />
              <h3 className='lg:text-[28px] text-[22px] font-poppins mb-[16px] text-[#000000] font-semibold'>Virtual Streaming Platform</h3>
              <p className='lg:text-[20px] text-[16px] text-[#596868] font-poppins '>Connect with your customers virtually. The virtual streaming platform can be used for businesses such as (but not limited to):</p>
              <ul className='text-[14px] font-poppins'>
                <li>Teleconsultation with doctors</li>
                <li>E-learning with tutors</li>
                <li>Virtual events</li>
                <li>Live shopping</li>
              </ul>
              <div className="my-[20px]">
                <Link className='px-[20px] rounded-full py-[14px] bg-dark text-[#efecec] font-poppins' to={''}>Explore more</Link>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 lg:px-[0px] md:px-[60px] sm:px-[100px] px-[10px]">
            <div className="col-span-1 lg:pr-[60px] pr-[12px] pt-[48px] pl-[12px]" data-aos="slide-right" data-aos-duration="500">
              <img src={fi} alt="" />
              <h3 className='lg:text-[28px] text-[22px] font-poppins mb-[16px] text-[#000000] font-semibold'>Feedback App</h3>
              <p className='lg:text-[20px] text-[16px] text-[#596868] font-poppins '>Create your own white label feedback app to capture your customers’ feedback about your business through an iPad or QR code. This app gives you the most valuable insights and data analytics about your business and consumers.</p>
              <div className="my-[20px]">
                <Link className='px-[20px] rounded-full py-[14px] bg-dark text-[#efecec] font-poppins' to={''}>Explore more</Link>
              </div>
            </div>
            <div className="col-span-1 lg:pl-[60px] pl-[12px] pt-[48px] pr-[12px]"data-aos="slide-left" data-aos-duration="500" >                                          
              <img src={si} alt="" />
              <h3 className='lg:text-[28px] text-[22px] font-poppins mb-[16px] text-[#000000] font-semibold'>Virtual call assistant</h3>
              <p className='lg:text-[20px] text-[16px] text-[#596868] font-poppins '>Want a system to connect your customers to customer service representatives virtually? Hipster’s virtual call assistant app offers video calls, text, estimated queue time, content to browse while waiting, and feedback rating at the end of the call. Administrators can track data and access customer feedback. Use our easy-to-navigate system to mold your service for the next growth phase.</p>
              <div className="my-[20px]">
                <Link className='px-[20px] rounded-full py-[14px] bg-dark text-[#efecec] font-poppins' to={''}>Explore more</Link>
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
                <h2 className='text-[50px] font-poppins mb-[15px] text-[#FFFFFF] '>Hipster’s special formula</h2>
                <p className='text-[20px] font-poppins text-[#FFFFFF]'>Most commercial off-the-shelf applications are standardized with little room for customization. Understanding that business needs are very different, we offer a good level of customization when you work with us. This allows you to get the benefits of both bespoke and off the shelf product.</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 col-span-1 p-[20px] backgrou">
            <div className="max-w-[310px] my-auto mx-auto ">
              <div className="my-[160px]">
                <h2 className='text-[50px] font-poppins mb-[15px] leading-[60px] text-[#FFFFFF] '>80% Ready-made & 20% customized</h2>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="">
        <Container4>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 w-full md:h-[600px] h-[300px] xl:px-[0px] md:px-[60px] sm:px-[50px] px-[20px]">
            <div className="col-span-1  my-auto">
              <div className='px-[15px]'>
                <h2 className='lg:text-[46px] text-[34px] text-[#000000] font-poppins'data-aos="slide-right" data-aos-duration="500">Check out our
                  <br className='md:block hidden' /> other services</h2>
              </div>
            </div>
            <div className="col-span-1  my-auto"data-aos="slide-left" data-aos-duration="500">
              <div className='px-[15px]'>
                <h3 className=' lg:text-[32px] text-[22px] lg:leading-[60px] leading-[40px] TU text-[#000000] font-poppins'>
                  <Link to={'/webdevelopment'}>Website Development</Link>
                </h3>
                <h3 className=' lg:text-[32px] text-[22px] lg:leading-[60px] leading-[40px] TU text-[#000000] font-poppins'>
                  <Link to={'/mobileappdevelopment'}>Mobile App Development</Link>
                </h3>
                <h3 className=' lg:text-[32px] text-[22px] lg:leading-[60px] leading-[40px] TU text-[#000000] font-poppins'>
                  <Link to={'/uiuxdesign'}>UI/UX Design</Link>
                </h3>
              </div>
            </div>
          </div>
        </Container4>
      </div>
    </div>
  )
}



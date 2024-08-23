

import React from "react";
import Container6 from "../../components/Container6";
import { seo, speed, speed2, speed3, speed4, stp } from "../../assets";
import { FaRegCalendar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Portfolio from "./Portfolio";

const Speedsite = () => {
  return (
    <div className="md:my-[80px] my-[20px] ">
      <Container6>
        <div className="font-[poppins] mb-[24px] px-[15px] xl:mx-[0px] lg:mx-[40px] md:mx-[40px] sm:mx-[20px] mx-[0px]">
          <h1 className="text-[30px] md:text-[48px] pt-[20px] md:pt-[80px] leading-[1.2] text-center font-[400] ">
            What is site speed and why is it so important?
          </h1>
          <div className="flex items-center justify-center gap-3 mt-[25px] md:mt-[30px] pb-[24px]">
            <FaRegCalendar className=" md:text-[25px] text-[20px]" />
            <span className="md:text-[16px]  text-[14px]"> August 10, 2021</span>
          </div>

          <div className="mt-[40px]">
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              When a consumer visits a new place for the first time, say a restaurant, long waiting time for the food to arrive may cause negative google reviews, leading to fewer customers visiting. In the same way, slow site speed can result in poor search engine rankings, fewer overall site traffic, and bad user experiences.
            </p>
          </div>


          <div className="font-poppins">
            <h3 className="text-[28px] mt-[40px] mb-[30px] font-semibold">What is site speed?</h3>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Site speed refers to the speed at which a browser is able to load fully functional web pages from a given site – and it matters very much in today’s digital era.
            </p>
            <div className=" md:pt-[20px] pt-[20px]">
              <img
                className="w-full mt-[20px] mb-[30px]"
                src={speed}
                alt=""
              />
            </div>

          </div>


          <h3 className="text-[28px] mt-[40px] mb-[30px] font-semibold">Who is your target audience?</h3>

          <div className="font-poppins">
            <h4 className="text-[24px] mt-[40px] mb-[30px] font-normal">1. Conversion</h4>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Websites that load faster have been linked to lower bounce rates and increased conversions. According to data shared by <Link to={''} className="text-[#006a83] hover:text-[#000000]">Small SEO Tools and Strangeloop</Link>, a one-second delay in page load time will drop your conversion rate by 7%. This means that if your website drives $50,000 per day in sales, you could lose $1.25 million per year in lost conversions.
            </p>
          </div>

          <div className="font-poppins">
            <h4 className="text-[24px] mt-[40px] mb-[30px] font-normal">2. Loyalty from Consumers</h4>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Have you ever heard of this phrase – “It’s cheaper to get current customers to make a repeat purchase than it is to find new customers”? If you are thinking about how this relates to site speed, well, based on data shared by <Link to={''} className="text-[#006a83] hover:text-[#000000]">Search Engine Journal</Link>, 70% of customers believe that a slow website negatively affects their decision to purchase. Hence, it is highly possible that you will be able to get more customers with a site that loads faster.
            </p>
            <div className=" md:pt-[20px] pt-[20px]">
              <img
                className="w-full mt-[20px] mb-[30px]"
                src={speed2}
                alt=""
              />
            </div>

          </div>


          <div className="font-poppins">
            <h4 className="text-[24px] mt-[40px] mb-[30px] font-normal">3. Google Search Ranking</h4>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Everyone here knows Google is the most popular search engine. And it is every business’s goal to appear as one of the top finds when consumers search for a particular product or service. One factor that Google looks at when deciding what to show for search results is site speed. The faster your site speed, the higher your site will rank on Google. This means that potential customers can discover your site more easily now.
            </p>
          </div>

          <div className="font-poppins">
            <h3 className="text-[28px] mt-[40px] mb-[30px] font-semibold">How to improve your site speed? </h3>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Now that we have uncovered all the benefits of having fast and efficient site speed, you might be wondering, “how can I check and improve my site speed”? Keep reading for six tips to improve your site speed.
            </p>

          </div>

          <div className="font-poppins">
            <h4 className="text-[24px] mt-[40px] mb-[30px] font-semibold">1. Checking Your Site Speed</h4>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Well, while there is no free lunch in this world, you’ll be glad to know that there are quite a number of websites out there that allow you to check your site speed for free. I recommend using <Link to={''} className="text-[#006a83] hover:text-[#000000]">Pingdom</Link>.
            </p>

          </div>

          <div className="font-poppins">
            <h4 className="text-[24px] mt-[40px] mb-[30px] font-semibold">
              2. Utilizing a Content Delivery Network (CDN)</h4>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Well, while there is no free lunch in this world, you’ll be glad to know that there are quite a number of websites out there that allow you to check your site speed for free. I recommend using One way to increase your site speed is to host your media files on a CDN. CDNs work by distributing your files across a global network of servers. For example, when a user from Australia accesses your site, the files are downloaded from the server that is nearest to them. Because the bandwidth is distributed among so many servers, the stress on any single server is significantly reduced, allowing site speed to perform better than before. One of the more popular choices for CDN is <Link to={''} className="text-[#006a83] hover:text-[#000000]">Cloudflare</Link>. It is worth noting that the services Cloud flare provides are free as well. If you are already using Amazon Web Services, You can use <Link to={''} className="text-[#006a83] hover:text-[#000000]">AWS Cloudfront,</Link>  which not only connects your assets from the domain name but also makes sure your dynamic assets stored in S3 are also cached to load faster.
            </p>

            <div className=" md:pt-[20px] pt-[20px]">
              <img
                className="w-full mt-[20px] mb-[30px]"
                src={speed3}
                alt=""
              />
            </div>

          </div>

          <div className="font-poppins pt-[10px]">
            <h4 className="text-[24px] mt-[40px] mb-[30px] font-semibold">
              3. Compress Your Website With Gzip  </h4>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Gzip is one of the simplest ways to compress your website’s files to save bandwidth and speed up page load time. Gzip compresses your file – much like how we compress our documents into a zip folder, enabling the files to load faster in the user’s browser. The user’s browser will then unzip the file to display the content. This approach of sending data from the server to the browser is a lot more efficient and helps save a significant amount of time.
            </p>
            <div className=" md:pt-[20px] pt-[20px]">
              <img
                className="w-full mt-[20px] mb-[30px]"
                src={speed4}
                alt=""
              />
            </div>
          </div>

          <div className="font-poppins pt-[10px]">
            <h4 className="text-[24px] mt-[40px] mb-[30px] font-semibold">
              4. Reduce Image Sizes  </h4>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Images are often made up of very large files, which can cause your site speed to decrease notably. However, we all know that removing all the images on your site is not an option. Humans are visual creatures and are naturally drawn towards images. One of the simplest methods to reduce image file sizes is cropping your images to the correct size. For example, if you want your image to appear as 1080px wide, you should resize the image to that width.
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              If your site runs on WordPress, lucky you! There are many plugins available that help to compress your image files. One example is<Link to={''} className="text-[#006a83] hover:text-[#000000]"> WP Smush</Link>. Simply check the box next to “Automatically smush my images on upload,” and all the images meant for your site will be compressed without any effort.
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              However, if your site does not run on WordPress, don’t worry; you haven’t been forgotten! You can use non-WordPress tools such as <Link to={''} className="text-[#006a83] hover:text-[#000000]">Compressor.io</Link>.
            </p>

          </div>

          <div className="font-poppins pt-[10px]">
            <h4 className="text-[24px] mt-[40px] mb-[30px] font-semibold">
              5. Switch Off / Disable Plugins & Pages That You Don’t Use  </h4>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Plugins are probably the most common cause of slow site speed on sites hosted on WordPress. If you no longer use a particular plugin, it would be best to switch it off or disable it completely!
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              For non-wordpress Websites, clearing server logs and deleting files and pages that you no longer use can improve the performance of the system dramatically.  Sometimes, broken links could be the culprit as well. Therefore, it is crucial to ensure that your site does not have these broken links.
            </p>

          </div>

          <div className="font-poppins pt-[10px]">
            <h4 className="text-[24px] mt-[40px] mb-[30px] font-semibold">
              6. Load Data Smartly </h4>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              If a page has a number of records to load, it is better to load data with pagination. Doing so allows the page to load faster and too much data loading can be avoided. For mobile websites, the data can be loaded differently than on a computer web. Moreover, layouts can also be optimized for mobile devices for quick load time.
            </p>

          </div>

          <div className="font-poppins">
            <h3 className="text-[28px] mt-[40px] mb-[30px] font-semibold">Conclusion</h3>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Now that we know the importance of site speed, it is vital that you get it fixed while you can. Internet users are less tolerant of slow websites than ever, and if you’re not fast enough, you will not be seen.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Click here for best <Link to={''} className="text-[#006a83] hover:text-[#000000]">SEO Services Singaporen</Link>.
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

export default Speedsite;

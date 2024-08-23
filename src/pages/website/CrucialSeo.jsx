

import React from "react";
import Container6 from "../../components/Container6";
import { seo, stp } from "../../assets";
import { FaRegCalendar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Portfolio from "./Portfolio";

const CrucialSeo = () => {
  return (
    <div className="md:my-[80px] my-[20px] ">
      <Container6>
        <div className="font-[poppins] mb-[24px] px-[15px] xl:mx-[0px] lg:mx-[40px] md:mx-[40px] sm:mx-[20px] mx-[0px]">
          <h1 className="text-[30px] md:text-[48px] pt-[20px] md:pt-[80px] leading-[1.2] text-center font-[400] ">
            Digital Transformation: It’s Importance In Today’s Business World
          </h1>
          <div className="flex items-center justify-center gap-3 mt-[25px] md:mt-[30px] pb-[24px]">
            <FaRegCalendar className=" md:text-[25px] text-[20px]" />
            <span className="md:text-[16px]  text-[14px]">  March 30, 2022</span>
          </div>
          <div className=" md:pt-[60px] pt-[30px]">
            <img
              className="w-full mt-[20px] mb-[30px]"
              src={seo}
              alt=""
            />
          </div>

          <div className="">

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              It is important to know about the <b>SEO ranking</b> factors if you want your website to rank higher in online searches. Higher SEO ranking means more traffic and the ultimate goal of any website is to attract more and more potential clients and turn them into valuable customers. Google and every other search engine follow some rules and algorithms to rank all the websites that are uploaded on the internet. Although there are over 200 factors that affect the ranking of any website, there are <Link to={''} className="text-[#006a83] hover:text-[#000000] font-semibold">10 crucial SEO ranking factors</Link> that are quite powerful and popular. In case you are wondering what those factors are, let’s go through this post in more detail.
            </p>




          </div>

          <div className="">
            <h2 className="text-[28px] md:text-[32px] font-[600] mt-[40px] mb-[10px] md:mb-[30px] leading-[1.2]">
              Best SEO ranking factors in 2022
            </h2>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Check out the top 10 ranking factors which if known about and used correctly can make any website rank higher in web searches.
            </p>


          </div>

          <div className="font-poppins">
            <h3 className="text-[28px] mt-[40px] mb-[30px] font-semibold">1. Content is important:</h3>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              The quality of content that you post on your website plays an important role in determining the ranking of your page. Well-researched, informative, unique and creative- your content must have these attributes to rank higher on search engine page results. High-quality content also means more time on page, low bounce rates both of which are a sign that your website is attracting potential clients.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Here are some tips for crafting content:
            </p>

            <ul className="sm:ml-[70px] ml-[30px] list-disc leading-[38px] mt-[20px] mb-[40px] text-[20px] text-[#222222] font-poppins">
              <li>First, list relevant topics relating to your business</li>
              <li>Second, research the topics ensuring you provide quality information</li>
              <li>Third, research keywords relating to the articles</li>
              <li>Fourth, start writing</li>

            </ul>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              To improve your content on a Wordpress website, install the plugin “Yoast SEO”
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              To check the originality, readability and SEO score of your content use <Link to={''} className="text-[#006a83] hover:text-[#000000]">SEMrush</Link>  & <Link to={''} className="text-[#006a83] hover:text-[#000000]">Small SEO Tools</Link>
            </p>
          </div>

          <div className="font-poppins">
            <h3 className="text-[28px] mt-[40px] mb-[30px] font-semibold">2. Backlinks:</h3>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Providing backlinks that are relevant and genuine is one of the leading SEO components for those who want a good ranking for their website. If your page gets backlinks from a website having higher authority, your website is more likely to achieve an even greater ranking. And remember it isn’t the quantity of backlinks you create for your post, but the quality that matters.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Some ways to maximise this are:
            </p>

            <ul className="sm:ml-[70px] ml-[30px] list-disc leading-[38px] mt-[20px] mb-[40px] text-[20px] text-[#222222] font-poppins">
              <li>Guest posting on bigger websites</li>
              <li>Podcasting</li>
              <li>Sending social signals from social media</li>
              <li>Updating directories with real business information</li>
              <li>And all other off-page activities</li>

            </ul>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Bonus tip!
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Give your customers more ways to reach you by fixing up your Google business page:
            </p>

            <ul className="sm:ml-[70px] ml-[30px] list-disc leading-[38px] mt-[20px] mb-[40px] text-[20px] text-[#222222] font-poppins">
              <li><Link className="text-[#006a83] hover:text-[#000000]">Google.com/business</Link></li>
            </ul>


          </div>


          <div className="font-poppins">
            <h3 className="text-[28px] mt-[40px] mb-[30px] font-semibold">3. Keyword Optimization::</h3>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              After content and backlinks comes keyword as another major <b>SEO ranking factor</b>. Keywords are basically the terms used by people to look things up on search engines. Optimized keywords are effective in driving the right traffic to your site and at the same time, it also makes your website rank high so that the right traffic can find it easily.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Here are some tools you can use to check if your content is optimised
            </p>

            <ul className="sm:ml-[70px] ml-[30px] list-disc leading-[38px] mt-[20px] mb-[40px] text-[20px] text-[#222222] font-poppins">
              <li><Link className="text-[#006a83] hover:text-[#000000]">Google Trends</Link> to analyse the popularity of top search queries</li>
              <li><Link className="text-[#006a83] hover:text-[#000000]">Uber Suggest</Link> to get insights into strategies of your competitors</li>
              <li><Link className="text-[#006a83] hover:text-[#000000]">WordStream</Link> to research top keyword phrases</li>
              <li><Link className="text-[#006a83] hover:text-[#000000]">Wordtracker</Link> for finding new keywords for your market</li>
              <li><Link className="text-[#006a83] hover:text-[#000000]">Moz</Link> an all-in-one tool for site audits, rank tracking, backlink analysis and keyword research</li>
              <li><Link className="text-[#006a83] hover:text-[#000000]">Keyword Planner</Link> You can utilize this free tool to find new keywords related to your business and see estimates of the searches they get and the expense to target them.</li>
              <li>Bonus: <Link className="text-[#006a83] hover:text-[#000000]">SEMRush</Link> is a powerful too that combines many of the above functionalities, but its free functionalities are limited</li>

            </ul>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              To improve your content on a Wordpress website, install the plugin “Yoast SEO”
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              To check the originality, readability and SEO score of your content use <Link to={''} className="text-[#006a83] hover:text-[#000000]">SEMrush</Link>  & <Link to={''} className="text-[#006a83] hover:text-[#000000]">Small SEO Tools</Link>
            </p>
          </div>


          <div className="font-poppins">
            <h3 className="text-[28px] mt-[40px] mb-[30px] font-semibold">4. Page Speed:</h3>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Another important ranking factor to consider is the <b>page speed</b> or website loading speed. If your page loads slower, the chances of visitors leaving the site gets higher. Fast loading pages provide a better user experience and help you retain existing customers and make new clients. Two aspects that influence page speed is your server from your hosting service and your code or the programming you have on your website.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Some ways to maximise this are:
            </p>

            <ul className="sm:ml-[70px] ml-[30px] list-disc leading-[38px] mt-[20px] mb-[40px] text-[20px] text-[#222222] font-poppins">
              <li><Link className="text-[#006a83] hover:text-[#000000]">PageSpeed Insights</Link> Google’s official tool for checking page speed. The analysed results should be given to your developer</li>
              <li><Link className="text-[#006a83] hover:text-[#000000]">Gtmetrix</Link> For checking website loading performance.</li>
            </ul>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Click here for more information: <Link className="text-[#006a83] hover:text-[#000000]">What is site speed and why is it so important?</Link>
            </p>

          </div>


          <div className="font-poppins">
            <h3 className="text-[28px] mt-[40px] mb-[30px] font-semibold">5. Image alt-text</h3>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Alt-text or alt-tag helps search engines understand the image uploaded on a website and index it properly. With optimized alt-text your images can move to the first page of image results and <b>improve website ranking.</b>
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Tip: Include your relevant keyword in your image alt-text.
            </p>

          </div>

          <div className="font-poppins">
            <h3 className="text-[28px] mt-[40px] mb-[30px] font-semibold">6. Domain Authority:</h3>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Higher domain authority means higher chances of getting top rankings in search engines. Domain authority is calculated in terms of score from 1 to 100 and a website with a higher score means a better ranking. The authority of a website increases as it gets older. There are many other strategies too that can be followed to boost domain authority.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Tip: To find your website’s domain authority score, go to MOZ and input the domain name.
            </p>

          </div>

          <div className="font-poppins">
            <h3 className="text-[28px] mt-[40px] mb-[30px] font-semibold">7. Mobile Friendliness:</h3>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              A website that is mobile friendly is likely to rank high in web searches as most people use mobile phones rather than a desktop or laptop to search things online. Optimising your website for mobile phones can help it get indexed quickly and accurately, thus increasing its ranking.
            </p>


            <ul className="sm:ml-[70px] ml-[30px] list-disc leading-[38px] mt-[20px] mb-[40px] text-[20px] text-[#222222] font-poppins">
              <li><Link className="text-[#006a83] hover:text-[#000000]">PageSpeed Insights </Link> Analyse mobile-friendliness score using this tool</li>
              <li><Link className="text-[#006a83] hover:text-[#000000]">Google Search Console </Link> Navigate to “Mobile Usability” and “Page Experience” tabs to see analysis and error diagnosis</li>


            </ul>


          </div>


          <div className="font-poppins">
            <h3 className="text-[28px] mt-[40px] mb-[30px] font-semibold">8. User Experience:</h3>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              User Experience is very crucial for good SEO ranking. With a better UX, you can enhance client engagement and also make new customers. There are different ranking signals used by search engines to evaluate the user experience of any website and provide ranking accordingly.
            </p>


            <ul className="sm:ml-[70px] ml-[30px] list-disc leading-[38px] mt-[20px] mb-[40px] text-[20px] text-[#222222] font-poppins">
              <li>First Contentful Paint</li>
              <li>Speed Index</li>
              <li>Largest Contentful Paint</li>


            </ul>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              <Link to={'https://gtmetrix.com/'} className="text-[#006a83] hover:text-[#000000]">Gtmetrix</Link> Navigate to the Performance tab to see your websites UX score for the above 3 factors
            </p>


          </div>

          <div className="font-poppins">
            <h3 className="text-[28px] mt-[40px] mb-[30px] font-semibold">9. Website Architecture:</h3>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            From indexing and crawling point of view, the structure or architecture of a website is very important. The best way to improve the structure of a website is to create a sitemap for it. This is not just better for site navigation but also helps search engine crawlers in finding more pages on a site.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              <Link to={'https://gtmetrix.com/'} className="text-[#006a83] hover:text-[#000000]">XML Sitemaps</Link>  use this tool to generate a sitemap for your website. Apart from this, you will need to maintain the priority of pages.
            </p>


          </div>

          <div className="font-poppins">
            <h3 className="text-[28px] mt-[40px] mb-[30px] font-semibold">10. Website Security:</h3>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            Other than architecture, the security of a website is also a major factor that affects its SEO ranking. HTTPS is a signal used to measure the security of any website and consequently affects its ranking as well. Websites without HTTPS connection are shown as “not secure” in the address bar which can be a prominent pulling factor that drives traffic away.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            How to achieve this:
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            On your wordpress backend panel, click on “Plugins” and search “Really Simple SSL”, click on “Install” and “Activate”
            </p>


          </div>

          <div className="font-poppins">
            <h3 className="text-[28px] mt-[40px] mb-[30px] font-semibold">Conclusion</h3>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            Following these tips above will allow you to optimise your website, organically, without paying for ads. Remember, the goal is to stay focused on the type of content people will want to consume, and to find answers for the questions people have. When you approach SEO from the perspective of serving your audience better, through research on what your audience is looking for, you can increase your website’s ranking in web searches.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            You can also check <Link to={''} className="text-[#006a83] hover:text-[#000000]">Digital Transformation</Link>
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

export default CrucialSeo;

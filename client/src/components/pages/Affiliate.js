import React, { useEffect } from "react";
import "../../Css/Affiliate.css";
import AffiliateCard from "../AffiliateCard";
import arrow from "../../images/arrow.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Affiliate = ({setProgress}) => {

  useEffect(() => {
    setProgress(10);
    setProgress(30);
    setProgress(50);
    setProgress(100);
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);
  const [toggleBtn, setToggleBtn] = useState(1);
  
  const handleToggleTab = (index) => {
    setToggleBtn(index);
  };

  return (
    <div className="Affiliate">
      <div className="container py-5">

        {/* *********************************************************
                          Hero Banner
      ********************************************************* */}
        <div className="heroBanner pb-5">
          <div className="heroImage">
            <img
              src="https://cdn.shopify.com/s/files/1/0508/7461/3942/files/1e17183f88b46558cf45b25a9d3faf78_1200x.jpg?v=1631006426"
              alt=""
            />
          </div>
          <div className="heroText">
            <h1>GEMS AFFILIATE PROGRAM</h1>
            <p> Start earning by promoting technology that has an everyday place
              in people's lives.</p>
          </div>
        </div>

        {/* *********************************************************
                        Affilitate TabSection
      ******************************************************** */}
        <div className="affilitate_container">
          <hr />
          <div className="affilitate_navbar">
            <div className={`affilitate_navbar_heading ${toggleBtn === 1 ? "activeBtn" : ""}`} onClick={() => handleToggleTab(1)}>HOW IT WORKS</div>
            <div className={`affilitate_navbar_heading ${toggleBtn === 2 ? "activeBtn" : ""}`} onClick={() => handleToggleTab(2)}>YOUR BENEFITS</div>
            <div className={`affilitate_navbar_heading ${toggleBtn === 3 ? "activeBtn" : ""}`} onClick={() => handleToggleTab(3)}>YOUR CUSTOMERS BENEFITS</div>
            <div className={`affilitate_navbar_heading ${toggleBtn === 4 ? "activeBtn" : ""}`} onClick={() => handleToggleTab(4)} >JOIN US</div>
          </div>
          <hr />
          <div className="affilitate_navbar_section_container mt-4">
            <div className="affilitate_navbar_section">
              <div className={`affilitate_navbar_section_innertxt ${toggleBtn === 1 ? "active_section_innertxt" : "section_innertxt"}`}>
                <h2 className="innertxt_heading">HOW IT WORKS</h2>
                <div className="innertxt_list">
                  <ol className="ps-3">
                    <li>Affiliate promotes GEMS on social platforms</li>
                    <li>Potential customer clicks on the posts</li>
                    <li>Customer orders at GEMS</li>
                    <li>Affiliate receives commissions</li>
                  </ol>
                </div>
              </div>

              <div className={`affilitate_navbar_section_innertxt ${toggleBtn === 2 ? "active_section_innertxt" : "section_innertxt"}`}>
                <h2 className="innertxt_heading">YOUR BENEFITS</h2>
                <div className="innertxt_list">
                  <ol className="ps-3">
                    <li>10%~20% commission on each referred sale.</li>
                    <li>Extra monthly Cash Bonus by sharing promotions.</li>
                    <li>New monthly profitable activities , updating banners and coupons.</li>
                    <li>Newsletters when new activity and promotions update.</li>
                  </ol>
                </div>
              </div>

              <div className={`affilitate_navbar_section_innertxt ${toggleBtn === 3 ? "active_section_innertxt" : "section_innertxt"}`}>
                <h2 className="innertxt_heading">YOUR CUSTOMERS BENEFITS</h2>
                <div className="innertxt_list">
                  <ol className="ps-3">
                    <li>Different styles of latest earbuds and headphones available.</li>
                    <li>Affordable prices.</li>
                    <li>Customer service and Live chat service.</li>
                    <li>Worry-free Return and Refund.</li>
                  </ol>
                </div>
              </div>

              <div className={`affilitate_navbar_section_innertxt ${toggleBtn === 4 ? "active_section_innertxt" : "section_innertxt"}`}>
                <h2 className="innertxt_heading">JOIN US</h2>
                <div className="innertxt_list">
                  <h2>REGISTER NOW!</h2>
                  <h3>* 10% ~ 20% *</h3>
                  <span>Commission per order</span>
                </div>
              </div>

              <div className="SignUp mb-4">
                <Link to="/signup">SIGN UP/LOG IN FOR FREE NOW &gt;</Link>
              </div>

              <div className="Email ">
                <p>If you have any other queries, please do not hesitate to email us:<Link className="text-decoration-none" to="mailto:marketing@gemsaudio.com" title="mailto:marketing@gemsaudio.com"> Marketing@gemsaudio.com</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* *********************************************************
                        Affilitate Platforms
      ********************************************************* */}
      <div className="affilitate_platforms">
        <h2 className="affilitate_platforms_heading">PROCESS</h2>
        <div className="Affiliate_card_container row">
          <AffiliateCard
            image="https://cdn.shopify.com/s/files/1/0508/7461/3942/files/5c1c18adb65c7850c0e95c123d529df6_f95a88f2-592a-42fc-b4b3-2e6c412902c2_62x.png?v=1629253001"
            title="Visit site to apply for the affiliate program"
            arrow_icon={arrow}
          />

          <AffiliateCard
            image="https://cdn.shopify.com/s/files/1/0508/7461/3942/files/1_36f57dd6-2a14-4147-bd83-4d3fb5e49d7d_61x.png?v=1629252916"
            title="Share an affiliate link"
            arrow_icon={arrow}
          />

          <AffiliateCard
            image="https://cdn.shopify.com/s/files/1/0508/7461/3942/files/2_0e4b4cf2-d286-4300-b1b4-3de8a154a7cd_61x.png?v=1629252937"
            title="Get customers to make a purchase"
            arrow_icon={arrow}
          />

          <AffiliateCard
            image="https://cdn.shopify.com/s/files/1/0508/7461/3942/files/4_f5d49b71-b701-4f24-8fba-8e112bcf9cc7_61x.png?v=1629252948"
            title="Wait for your order to be confirmed"
            arrow_icon={arrow}
          />

          <AffiliateCard
            image="https://cdn.shopify.com/s/files/1/0508/7461/3942/files/5_bda96c6a-509a-46d5-acdb-6b2df2022821_61x.png?v=1629253212"
            title="Get your commission!"
          />
        </div>
      </div>

      {/* *********************************************************
                            ShareASale
      ********************************************************* */}
      <div className="affilitate_ShareASale container py-5 text-center">
        <h3>GET STARTED WITH PARTNER AFFILIATE PLATFORMS</h3>
        <img className="mb-4" src="https://cdn.shopify.com/s/files/1/0508/7461/3942/files/4532de5a6fc6f01392a1576217f2fd5c_296x.png?v=1629257809" alt="" />
        <div className="SignUp mb-5"><a href="https://account.shareasale.com/newsignup.cfm">SIGN UP/LOG IN NOW &gt;</a></div>
        <h3 className=""> MORE COMING SOON...</h3>
      </div>

      {/* *********************************************************
                                FAQs
      ********************************************************* */}
      <div className="accordion accordion-flush container" id="accordionFlushExample">
        <h2>FAQs</h2>
        <div className="accordion-item border-0">
          <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              HOW DOES THE PROGRAM WORK?
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">The GEMS Affiliate Program allows you to make money by referring customers. Each time you refer a customer to one of our websites and that customer makes a purchase, you earn a commission (a percentage of each sale). We handle the transaction processing, fulfillment and customer service. We provide you with detailed reports on sales that were referred from your website and every month, we send you a check for the commission you earned.</div>
          </div>
        </div>
        <div className="accordion-item border-0">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              WHAT DOES IT COST TO JOIN?
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Applying to and participating in the GEMS Affiliate Program is absolutely FREE. There are no fees of any kind - there is no charge to apply and no minimum sales requirement.</div>
          </div>
        </div>
        <div className="accordion-item border-0">
          <h2 className="accordion-header" id="flush-headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              HOW DO I GET STARTED?
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Register a ShareASale affiliate account. Sign up for GEMS & ShareASale Program. Get accepted to the program. Create links to GEMS brands from the Ads section on Impact. Promote GEMS family of brands on your site. Login to Impact at any time to see reports of how your website is doing, how many people are browsing and what they're buying. Run reports your way whenever you want - they're updated every day. Get paid up to 20% commission!</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affiliate;
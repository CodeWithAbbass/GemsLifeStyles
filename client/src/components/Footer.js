import React, { useEffect } from 'react';
import Company1 from '../images/Company1.png'
import Company2 from '../images/Company2.png'
import Company3 from '../images/Company3.png'
import Company4 from '../images/Company4.png'
import PaymentList from '../images/PaymentList-removebg-preview.png'
import UPS from '../images/Footer Company Logo/upslogo.png';
import DHL from '../images/Footer Company Logo/dhllogo.png';
import FEDEX from '../images/Footer Company Logo/fedexlogo.png';
import GOOGLE from '../images/Footer Company Logo/google.png';
import APPLE from '../images/Footer Company Logo/apple.png';
import '../Css/Footer.css'
import '../Css/General.css'
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/admin") {
      document.querySelector(".footer").style.display = "none";
    }
    // eslint-disable-next-line
  }, [location]);


  return (
    <div className='footer'>
      <div className="why_choose_us py-5 text-center ">
        <h2 className='py-4'>SHOP BUDS FROM OUR 'GRAM</h2>
        <div className="why_choose_us_items d-flex flex-wrap justify-content-between align-items-center w-100">
          <div className="why_choose_us_item d-flex flex-wrap justify-content-center align-items-center my-3">
            <i className='fas fa-plane' /><p> Worldwide Shipping</p>
          </div>
          <div className="why_choose_us_item d-flex flex-wrap justify-content-center align-items-center my-3">
            <i className="fa-regular fa-sack-dollar" /><p> Money-Back Guarantee</p>
          </div>
          <div className="why_choose_us_item d-flex flex-wrap justify-content-center align-items-center my-3">
            <i className="fa-regular fa-shield-halved" /><p> Hassle-Free Warranty</p>
          </div>
          <div className="why_choose_us_item d-flex flex-wrap justify-content-center align-items-center my-3">
            <i className='fas fa-headset'></i><p> Online Customer Service</p>
          </div>
        </div>
      </div>
      {/* ***************DESKTOP FOOTER******************** */}
      <div className='newsletter text-white text-center py-5 '>
        <p className='mb-4'>Sign up for our newsletter for the latest news and exclusive deals</p>
        <div className="container">
          <form action='' className=''>
            <div className='input-icon'>
              <input type="email" className="form-control ps-3 py-3 rounded-0 m-auto border-0 outline-0 shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email address" />
              <i className="fa fa-angle-right" />
            </div>
          </form>
        </div>
      </div>
      <div className='footer_desktop text-center text-white bg-black'>
        <section>
          <div className="col">
            {/* // ******************Supponser Companies****************** */}
            <div className='hidden-phone row justify-content-around opacity-50 w-100' style={{ paddingTop: '78px' }}>
              <div className='col-3 align-self-center'><img className='w-25' src={Company1} alt="" /> </div>
              <div className='col-3 align-self-center'><img className='w-25' src={Company2} alt="" /> </div>
              <div className='col-3 align-self-center'><img className='w-25' src={Company3} alt="" /> </div>
              <div className='col-3 align-self-center'><img className='w-25' src={Company4} alt="" /> </div>
            </div>
            <div className='row p-5 m-0' style={{ textAlign: 'left' }}>
              {/* // ******************SoundPeats Menus****************** */}
              <div className='col'>
                <h6 className='text-uppercase text-white pb-3'><strong>GEMS</strong></h6>
                <li className="Linklist__Item py-2">
                  <Link to="/about" rel="noreferrer" className="d-block py-2 Link--primary">ABOUT US</Link>
                  <Link to="/affiliate" rel="noreferrer" className="d-block py-2 Link--primary">AFFILIATE</Link>
                  <Link to="/blog" rel="noreferrer" className="d-block py-2 Link--primary">NEWSROOM</Link>
                </li>
              </div>

              {/* // ******************Account Menus****************** */}
              <div className='col' >
                <h6 className='text-uppercase text-white pb-3'><strong>ACCOUNT</strong></h6>
                <li className="Linklist__Item py-2">
                  <Link to="/user" className="d-block py-2 Link--primary">PROFILE</Link>
                  <Link to="/signup"  className="d-block py-2 Link--primary">REGISTER</Link>
                  <Link to="/wheretobuy" rel="noreferrer" className="d-block py-2 Link--primary">WHERE TO BUY</Link>
                </li>
              </div>

              {/* // ******************Support Menus****************** */}
              <div className='col'>
                <h6 className='text-uppercase text-white pb-3'><strong>SUPPORT</strong></h6>
                <li className="Linklist__Item py-2">
                  <Link to="/helpcenter" rel="noreferrer" className="d-block py-2 Link--primary">HELP CENTER</Link>
                  <Link to="/download" rel="noreferrer" className="d-block py-2 Link--primary">DOWNLOADS</Link>
                  <Link to="/warranty" rel="noreferrer" className="d-block py-2 Link--primary">WARRANTY &amp; SERVICE</Link>
                  <Link to="/warranty" rel="noreferrer" className="d-block py-2 Link--primary">CLAIM YOUR WARRANTY</Link>
                  <Link to="/returnpolicy" rel="noreferrer" className="d-block py-2 Link--primary">RETURN &amp; REFUND POLICY</Link>
                </li>
              </div>

              {/* // ******************Shop Menus****************** */}
              <div className='col'>
                <h6 className='text-uppercase text-white pb-3'><strong>SHOP</strong></h6>
                <li className="Linklist__Item py-2">
                  <Link to="/allproducts" rel="noreferrer" className="d-block py-2 Link--primary">ALL PRODUCTS</Link>
                  <Link to="/shipping" rel="noreferrer" className="d-block py-2 Link--primary">SHIPPING POLICY</Link>
                  <Link to="/wheretobuy" rel="noreferrer" className="d-block py-2 Link--primary">WHERE TO BUY</Link>
                </li>
              </div>

              {/* // ******************Social Icons****************** */}
              <div className="col align-self-end ">
                <Link className='twitter text-light px-1' to="https://twitter.com/SOUNDPEATS/" target={'_blank'} rel="noreferrer"><i className="fa-brands fa-twitter socialIcon" /></Link>
                <Link className='facebook text-light px-1' to="https://www.facebook.com/SOUNDPEATS.Official/" target={'_blank'} rel="noreferrer"><i className="fa-brands fa-facebook socialIcon" /></Link>
                <Link className='instagram text-light px-1' to="https://www.instagram.com/soundpeats_global/" target={'_blank'} rel="noreferrer"><i className="fa-brands fa-instagram socialIcon" /></Link>
                <Link className='youtube text-light px-1' to="https://www.youtube.com/channel/UCYRNJk2TjaTj_fWJ5omNoBA/" target={'_blank'} rel="noreferrer"><i className="fa-brands fa-youtube socialIcon" /></Link>
                <Link className='tiktok text-light px-1' to="https://www.tiktok.com/@soundpeatsaudio/" target={'_blank'} rel="noreferrer"><i className="fa-brands fa-tiktok socialIcon" /></Link>
              </div>
            </div>
          </div>

          {/* // ******************Companies****************** */}
          <div className="d-flex my-5">
            <div className="curiourCompany w-25 d-flex justify-content-evenly align-items-center ">
              <div className="dropdown navBar__currency  ps-2 px-0">
                <button className="btn dropdown-toggle text-white fw-bold px-0 py-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className="currency_Btn">USD$</span>
                </button>
                <ul className="dropdown-menu w-100 text-center px-6 py-1" aria-labelledby="dropdownMenuButton1">
                  <li><button className="dropdown-item fw-bold border-bottom-0 px-0 py-1">CNY¥</button></li>
                  <li><button className="dropdown-item fw-bold border border-bottom-0 px-0 py-1">EUR€</button></li>
                  <li> <button className="dropdown-item fw-bold border border-bottom-0 px-0 py-1">MXN$</button></li>
                </ul>
              </div>
              <li className=''><img className='w-100' src={UPS} alt="" /></li>
              <li className=''><img className='w-100' src={DHL} alt="" /></li>
              <li className=''><img className='w-100' src={FEDEX} alt="" /></li>
            </div>
            <div className="PaymentList w-50 ">
              <li><img className='w-100' src={PaymentList} alt="" /></li>
            </div>
            <div className="appcrb w-25 d-flex align-items-center justify-content-evenly ">
              <div className="applestore w-25"><img className='w-100' src={APPLE} alt="" /></div>
              <div className="playstore w-25"><a href={GOOGLE}><img className='w-100' src="https://cdn.shopify.com/s/files/1/0508/7461/3942/files/google_314x.png?v=1626084523" alt="" /></a></div>
            </div>
          </div>
        </section>

        {/* // ******************Bottom Footer****************** */}
        <div className='desktop__Footer_bottom Footer__content py-5 d-flex bg-black justify-content-evenly' >
          <p className="Footer__ThemeAuthor w-25"> © 2019-2022, <Link rel="noreferrer" title="">GEMS</Link>. All Rights Reserved</p>
          <Link rel="noreferrer">Privacy Policy</Link>
          <Link rel="noreferrer">Cookie Policy</Link>
          <Link rel="noreferrer">Term of Use</Link>
          <Link rel="noreferrer">WEEE</Link>
          <Link rel="noreferrer">Intellectual Property Rights</Link>
          <Link rel="noreferrer">粤ICP备2020078239号</Link>
        </div>
      </div>

      {/* ***************MOBILE FOOTER******************** */}
      <div className="footer__mobile me-4 ms-4">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item bg-transparent">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed bg-transparent text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseTwo">GEMS</button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                <Link className='text-decoration-none link-light d-block py-2' to="/about">ABOUT US</Link>
                <Link className='text-decoration-none link-light d-block py-2' to="/affiliate">AFFILIATE</Link>
                <Link className='text-decoration-none link-light d-block py-2' to="/newsroom">NEWSROOM</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion accordion-flush mt-2" id="accordionFlushExample">
          <div className="accordion-item bg-transparent">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed bg-transparent text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseTwo">ACCOUNT</button>
            </h2>
            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                <Link className='text-decoration-none link-light d-block py-2' to="/user">PROFILE</Link>
                <Link className='text-decoration-none link-light d-block py-2' to="/signup">REGISTER</Link>
                <Link className='text-decoration-none link-light d-block py-2' to="/cart">CART</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion accordion-flush mt-2" id="accordionFlushExample">
          <div className="accordion-item bg-transparent">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed bg-transparent text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseTwo">SUPPORT</button>
            </h2>
            <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                <Link className='text-decoration-none link-light d-block py-2 py-2' to="/helpcenter">HELP CENTER</Link>
                <Link className='text-decoration-none link-light d-block py-2 py-2' to="/download">DOWNLOADS</Link>
                <Link className='text-decoration-none link-light d-block py-2 py-2' to="/warranty">WARRANTY & SERVICES</Link>
                <Link className='text-decoration-none link-light d-block py-2 py-2' to="/claim">CLAIM YOUR WARRANTY</Link>
                <Link className='text-decoration-none link-light d-block py-2 py-2' to="/refundpolicy">RETURN & REFUND POLICY</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion accordion-flush mt-2" id="accordionFlushExample">
          <div className="accordion-item bg-transparent">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed bg-transparent text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseTwo">SHOP</button>
            </h2>
            <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                <Link className='text-decoration-none link-light d-block py-2' to="/allproducts">ALL PRODUCTS</Link>
                <Link className='text-decoration-none link-light d-block py-2' to="/shippingpolicy">SHIPPING POLICY</Link>
                <Link className='text-decoration-none link-light d-block py-2' to="/wheretobuy">WHERE TO BUY</Link>
              </div>
            </div>
          </div>
        </div>
        {/* *****************CTA*************** */}
        <div className=" mt-2 ">
          <Link className='twitter text-light pe-4' to="https://twitter.com/SOUNDPEATS/" target={'_blank'} rel="noreferrer"><i className="fa-brands fa-twitter socialIcon" /></Link>
          <Link className='facebook text-light pe-4' to="https://www.facebook.com/SOUNDPEATS.Official/" target={'_blank'} rel="noreferrer"><i className="fa-brands fa-facebook socialIcon" /></Link>
          <Link className='instagram text-light pe-4' to="https://www.instagram.com/soundpeats_global/" target={'_blank'} rel="noreferrer"><i className="fa-brands fa-instagram socialIcon" /></Link>
          <Link className='youtube text-light pe-4' to="https://www.youtube.com/channel/UCYRNJk2TjaTj_fWJ5omNoBA/" target={'_blank'} rel="noreferrer"><i className="fa-brands fa-youtube socialIcon" /></Link>
          <Link className='tiktok text-light pe-4' to="https://www.tiktok.com/@soundpeatsaudio/" target={'_blank'} rel="noreferrer"><i className="fa-brands fa-tiktok socialIcon" /></Link>
        </div>
        {/* *****************COMPANY*************** */}
        <div className='d-flex flex-wrap text-center opacity-100 justify-content-center pt-5'>
          <div className='w-50 mb-2'><img className='cell' src={Company1} alt="Company1" /></div>
          <div className='w-50 mb-2'><img className='cell' src={Company2} alt="Company2" /></div>
          <div className='w-50 mb-2'><img className='cell' src={Company3} alt="Company3" /></div>
          <div className='w-50 mb-2'><img className='cell' src={Company4} alt="Company4" /></div>
        </div>
        {/* *****************COPYRIGHT*************** */}
        <div className='Footer__content text-center bg-black pb-5 '>
          <p className="Footer__ThemeAuthor"> © 2019-2022,<a href="/en-mx" title="">
            SOUNDPEATS</a>. All Rights Reserved</p>
          <Link to="/en-mx/pages/privacy-policy">Privacy Policy</Link>
          <Link to="//en-mx/pages/cookie-preferences">Cookie Policy</Link>
          <Link to="/en-mx/pages/terms-of-use">Term of Use</Link>
          <Link to="/en-mx/pages/weee">WEEE</Link>
          <Link to="/en-mx/pages/intellectual-property-rights">Intellectual Property Rights</Link>
          <Link to="/en-mx/pages/intellectual-property-rights">粤ICP备2020078239号</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;

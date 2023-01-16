import "../Css/MainSlider.css";
import React, { } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "./styles.css";
import BTW86 from "../images/GEMS/1600x700/BTW86.jpg";
import BTW92 from "../images/GEMS/1600x700/BTW92.jpg";
import BTW98 from "../images/GEMS/1600x700/BTW98.jpg";
import BT260 from "../images/GEMS/1600x700/BT260.jpg";
import SliderImg5 from "../images/SliderImg5.png";
import SliderImg6 from "../images/SliderImg6.png";
import SliderImg8 from "../images/SliderImg8.png";
import SliderImgMB2 from "../images/SliderImgMB2.png";
import SliderImgMB4 from "../images/SliderImgMB4.png";
import SliderImgMB5 from "../images/SliderImgMB5.png";
import SliderImgMB6 from "../images/SliderImgMB6.png";
import SliderImgMB8 from "../images/SliderImgMB8.png";
// import BT001 from "../images/GEMS/1500x420/BT001-PRO.jpg";
// import SliderImg7 from "../images/SliderImg7.png";
// import SliderImgMB1 from "../images/SliderImgMB1.png";
// import SliderImgMB3 from "../images/SliderImgMB3.png";
// import SliderImgMB7 from "../images/SliderImgMB7.png";


import { Autoplay, Pagination, EffectFade } from "swiper"; // import required modules 

const MainSlider = () => {
    return (
        <div className="Main_Slider">
            <Swiper
                effect={"fade"}
                pagination={{ dynamicBullets: true }}
                loop={true}
                grabCursor={true}
                autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
                modules={[Autoplay, EffectFade, Pagination]}
                className="mySwiper"
            >
                {/* Item 1 */}
                <SwiperSlide>
                    <div className="Swiper_inner">
                        <img src={BTW86} className="d-block desktop_img w-100 sliderImg" alt="earbuds" />
                        <img src={BTW86} className="d-none mobile_img w-100 sliderImg" alt="earbuds" />
                        <div className="overlay"></div>
                        <div className="carousel-caption d-md-block px-5 text-center">
                            <div className="btn_container">
                                <Link to={"_blank"} className="sliderBtn rounded-0 bg-white border border-white outline-0">ENTER NOW</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Item 2 */}
                <SwiperSlide>
                    <div className="Swiper_inner">
                        <img src={BTW92} className="d-block desktop_img w-100 sliderImg" alt="earbuds" />
                        <img src={SliderImgMB2} className="d-none mobile_img w-100 sliderImg" alt="earbuds" />
                        <div className="overlay"></div>
                        <div className="overlay"></div>
                        <div className="carousel-caption d-md-block px-5">
                            <h3>TRUE Wireless Earphones</h3>
                            <h2 className='py-2' >TRUE | Playtime 36 Hours</h2>
                            <div className="btn_container life_btn">
                                <Link to={"_blank"} className="sliderBtn rounded-0 m-2 bg-white border border-white outline-0" href='' type="button">GET A TRUE!</Link>
                                <Link to={"_blank"} className="sliderBtn rounded-0 m-2 bg-white border border-white outline-0" href='#' type="button">LEARN MORE</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Item 3 */}
                <SwiperSlide>
                    <div className="Swiper_inner">
                        <img src={BTW98} className="d-block desktop_img w-100 sliderImg" alt="earbuds" />
                        <img src={BTW98} className="d-none mobile_img w-100 sliderImg" alt="earbuds" />
                        <div className="overlay"></div>

                        <div className="carousel-caption Half_in_Ear d-md-block air3_container px-5 text-end">
                            <h3>Half in Ear True Wireless Earbuds</h3>
                            <h2 className='py-2' >Air3 Deluxe</h2>
                            <div className="btn_container air3_btn">
                                <Link to={"_blank"} className="sliderBtn rounded-0 m-2 bg-white border border-white outline-0" href='#' type="button" >LEARN MORE</Link>
                                <Link to={"_blank"} className="sliderBtn rounded-0 m-2 bg-white border border-white outline-0" href='#' type="button" >SHOP NOW</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Item 4 */}
                <SwiperSlide>
                    <div className="Swiper_inner">
                        <img src={BT260} className="d-block desktop_img w-100 sliderImg" alt="earbuds" />
                        <img src={SliderImgMB4} className="d-none mobile_img mobile_img_imagination w-100 sliderImg" alt="earbuds" />
                        <div className="overlay"></div>
                        <div className="carousel-caption d-md-flex justify-content-between w-100 align-items-center minipro_container px-5">
                            <div className="caption_container text-start">
                                <h3>MINI PRO</h3>
                                <h2 className='py-2'>COMPACT YET POWERFUL</h2>
                            </div>
                            <div className="btn_container align-self-end">
                                <Link to={"_blank"} className="sliderBtn learn_more rounded-0 m-2 border border-white outline-0" href='#' type="button" >LEARN MORE</Link>
                                <Link to={"_blank"} className="sliderBtn rounded-0 m-2 bg-white border border-white outline-0" href='#' type="button" >SHOP NOW</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Item 5 */}
                <SwiperSlide>
                    <div className="Swiper_inner">
                        <img src={SliderImg5} className="d-block desktop_img w-100 sliderImg" alt="earbuds" />
                        <img src={SliderImgMB5} className="d-none mobile_img w-100 sliderImg" alt="earbuds" />
                        <div className="overlay"></div>
                        <div className="carousel-caption d-md-flex justify-content-between w-100 align-items-center minipro_container px-5">
                            <div className="caption_container text-start">
                                <h3>AIR3</h3>
                                <h2 className='py-2'>LITTLE BUDS WITH SUPRIOR SOUND</h2>
                            </div>
                            <div className="btn_container align-self-end">
                                <Link to={"_blank"} className="sliderBtn learn_more rounded-0 m-2 border border-white outline-0" href='#' type="button" >LEARN MORE</Link>
                                <Link to={"_blank"} className="sliderBtn rounded-0 m-2 bg-white border border-white outline-0" href='#' type="button" >SHOP NOW</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Item 6 */}
                <SwiperSlide>
                    <div className="Swiper_inner">
                        <img src={SliderImg6} className="d-block desktop_img w-100 sliderImg" alt="earbuds" />
                        <img src={SliderImgMB6} className="d-none mobile_img w-100 sliderImg" alt="earbuds" />
                        <div className="carousel-caption d-md-flex justify-content-between w-100 align-items-center minipro_container px-5">
                            <div className="caption_container text-start">
                                <h3>H2</h3>
                                <h2 className='py-2'>UNLEASH THE TRUE SOUND</h2>
                            </div>
                            <div className="btn_container align-self-end">
                                <Link to={"_blank"} className="btn sliderBtn rounded-0 m-2 bg-white border border-white outline-0" href='#' type="button">LEARN MORE</Link>
                                <Link to={"_blank"} className="btn sliderBtn rounded-0 m-2 bg-white border border-white outline-0" href='#' type="button">SHOP NOW</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Item 7 */}
                <SwiperSlide>
                    <div className="Swiper_inner">
                        <img src={SliderImg8} className="d-block desktop_img w-100 sliderImg" alt="earbuds" />
                        <img src={SliderImgMB8} className="d-none mobile_img w-100 sliderImg" alt="earbuds" />
                        <div className="overlay"></div>
                        <div className="overlay"></div>
                        <div className="carousel-caption d-md-block px-5">
                            <h3>Air3 Delux HS</h3>
                            <h2 className='py-2' >Redefining The Standard For Wireless Earbuds</h2>
                            <div className="btn_container life_btn">
                                <Link to={"_blank"} className="sliderBtn rounded-0 m-2 bg-white border border-white outline-0" href='' type="button">LEARN MORE</Link>
                                <Link to={"_blank"} className="sliderBtn rounded-0 m-2 bg-white border border-white outline-0" href='#' type="button">SHOP NOW</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
export default MainSlider;

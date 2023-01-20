import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";// Import Swiper React components
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Css/FeatureReviewSlider.css";
import { Pagination, Navigation } from "swiper";
import CNET from "../images/CNET.png"
import FORBES from "../images/FORBES.png"
import NEWSWEEK from "../images/NEWSWEEK.png"
import ANDROIDCENTRAL from "../images/ANDROIDCENTRAL.png"
import DIGITALTRENDS from "../images/DIGITALTRENDS.png"
import GIZCHINA from "../images/GIZCHINA.png"
import NEWATLAS from "../images/NEWATLAS.png"
import { Link } from 'react-router-dom';
// import NotFound from "../images/ImgNotFound.jpg";

const FeatureReviewSlider = () => {
    return (
        <div className='FeatureReviewSlider'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                // loop={true}
                // loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='Desktop_Slide py-3'>
                    <div className="fpc">
                        <Link to="#" className="">
                            <div className="FeatureReviewtxtContainer">
                            <p>The Gems earbuds sound good. Very good. Way better, in fact, than you'd expect for $37. Credit the dual dynamic drivers, Qualcomm 3020 chipset, aptX technology or some other techno-blab I won't pretend to understand. They're just good.</p>
                            </div>
                            <div className="FeatureReviewimgContainer my-5">
                            <img src={CNET} alt="CompanyLogo" className=''/>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='Desktop_Slide py-3'>
                    <div className="fpc">
                        <Link to="#" className="">
                            <div className="FeatureReviewtxtContainer">
                            <p>I wasn't expecting all that much from the Gems H1 true wireless earphones. However, one listen and I was hooked. The dual-driver hybrid design makes a much more coherent and dynamic sound that brings the music alive. The decision by Gems to use balanced armature drivers from Knowles and foam tips from Comply, set the seal on the deal for me.</p>
                            </div>
                            <div className="FeatureReviewimgContainer my-5">
                            <img src={FORBES} alt="CompanyLogo" />
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='Desktop_Slide py-3'>
                    <div className="fpc">
                        <Link to="#" className="">
                            <div className="FeatureReviewtxtContainer">
                            <p>In fact, about 30 or 40 pairs adorn my testing shelves right now. So when I first learned about the existence of Gems just a few weeks ago, I was skeptical. But their H1 model's features and specifications piqued my curiosity. And after trying them out, they actually wound up surprising me (in a good way).</p>
                            </div>
                            <div className="FeatureReviewimgContainer my-5">
                            <img src={NEWSWEEK} alt="CompanyLogo" />
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='Desktop_Slide py-3'>
                    <div className="fpc">
                        <Link to="#" className="">
                            <div className="FeatureReviewtxtContainer">
                            <p>When looking at all of the core building blocks of true wireless earbuds, the TrueFree+ have just about everything you could want. The earbuds are built well, sound great, the battery life is wonderfully long, and wireless performance is reliable.</p>
                            </div>
                            <div className="FeatureReviewimgContainer my-5">
                            <img src={ANDROIDCENTRAL} alt="CompanyLogo" />
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
               
                <SwiperSlide className='Desktop_Slide py-3'>
                    <div className="fpc">
                        <Link to="#" className="">
                            <div className="FeatureReviewtxtContainer">
                            <p>What can you expect from a $40 set of true wireless earbuds? If they are the Gems Truengine SE, the answer is: Good fit, comfort, controls, and sound quality. We think that's more than enough to recommend them to anyone looking for a budget set of buds.</p>
                            </div>
                            <div className="FeatureReviewimgContainer my-5">
                            <img src={DIGITALTRENDS} alt="CompanyLogo" />
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
               
                <SwiperSlide className='Desktop_Slide py-3'>
                    <div className="fpc">
                        <Link to="#" className="">
                            <div className="FeatureReviewtxtContainer">
                            <p>When it comes to sound performance, the Gems Truengine 2 provides a better experience than expected. The sound quality is way better than what we get from most of the similar products. The sound is well balanced and the mid-tones are not overwhelmed by an excessive amount of bass. And there is enough beat to give the sound a great depth.</p>
                            </div>
                            <div className="FeatureReviewimgContainer my-5">
                            <img src={GIZCHINA} alt="CompanyLogo" />
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='Desktop_Slide py-3'>
                    <div className="fpc">
                        <Link to="#" className="">
                            <div className="FeatureReviewtxtContainer">
                            <p>So my very subjective and largely worthless opinion on the sound of the H1s is this: they sound terrific.The overall effect is pleasing, engaging and immersive to me - but I really enjoyed the last ones too, so maybe Gems' chief audio designer has very similar ears to me.</p>
                            </div>
                            <div className="FeatureReviewimgContainer my-5">
                            <img src={NEWATLAS} alt="CompanyLogo" />
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
               

            </Swiper>
        </div>
    );
}

export default FeatureReviewSlider;

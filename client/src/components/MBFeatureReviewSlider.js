import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";// Import Swiper React components
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Css/MBFeatureReviewSlider.css";
import { Pagination,} from "swiper";
import CNET from "../images/CNET.png"
import FORBES from "../images/FORBES.png"
import NEWSWEEK from "../images/NEWSWEEK.png"
import ANDROIDCENTRAL from "../images/ANDROIDCENTRAL.png"
import DIGITALTRENDS from "../images/DIGITALTRENDS.png"
import GIZCHINA from "../images/GIZCHINA.png"
import NEWATLAS from "../images/NEWATLAS.png"
// import NotFound from "../images/ImgNotFound.jpg";

const MBFeatureReviewSlider = () => {
    return (
        <div className='MBFeatureReviewSlider'>
            <Swiper
                slidesPerView={1}
                centeredSlides={true}
                spaceBetween={30}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}

                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="review">
                        <a href="https://www.cnet.com/tech/mobile/soundpeats-says-its-28-true-wireless-earbuds-are-better-than-samsung-galaxy-buds-are-they/" className="d-flex flex-column justify-content-between">
                            <div className="MBFeatureReviewimgContainer mt-5 mb-3">
                                <img src={CNET} alt="CompanyLogo" className='' />
                            </div>
                            <div className="MBFeatureReviewtxtContainer mb-5">
                                <p>The Soundpeats earbuds sound good. Very good. Way better, in fact, than you'd expect for $37. Credit the dual dynamic drivers, Qualcomm 3020 chipset, aptX technology or some other techno-blab I won't pretend to understand. They're just good.</p>
                            </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="review">
                        <a href="https://www.forbes.com/sites/marksparrow/2021/08/06/soundpeats-h1-true-wireless-hybrid-earphones-are-well-worth-a-listen/?sh=68a5b02656f1" className="d-flex flex-column justify-content-between">
                            <div className="MBFeatureReviewimgContainer mt-5 mb-3">
                            <img src={FORBES} alt="CompanyLogo" />
                            </div>
                            <div className="MBFeatureReviewtxtContainer mb-5">
                            <p>I wasn't expecting all that much from the Soundpeats H1 true wireless earphones. However, one listen and I was hooked. The dual-driver hybrid design makes a much more coherent and dynamic sound that brings the music alive. The decision by Soundpeats to use balanced armature drivers from Knowles and foam tips from Comply, set the seal on the deal for me.</p>
                            </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="review">
                        <a href="https://www.newsweek.com/soundpeats-h1-earbuds-strike-perfect-balance-MBFeatures-sound-price-1613228" className="d-flex flex-column justify-content-between">
                            <div className="MBFeatureReviewimgContainer mt-5 mb-3">
                            <img src={NEWSWEEK} alt="CompanyLogo" />
                            </div>
                            <div className="MBFeatureReviewtxtContainer mb-5">
                            <p>In fact, about 30 or 40 pairs adorn my testing shelves right now. So when I first learned about the existence of Soundpeats just a few weeks ago, I was skeptical. But their H1 model's MBFeatures and specifications piqued my curiosity. And after trying them out, they actually wound up surprising me (in a good way).</p>
                            </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="review">
                        <a href="https://www.androidcentral.com/soundpeats-truefree-plus-review" className="d-flex flex-column justify-content-between">
                            <div className="MBFeatureReviewimgContainer mt-5 mb-3">
                            <img src={ANDROIDCENTRAL} alt="CompanyLogo" />
                            </div>
                            <div className="MBFeatureReviewtxtContainer mb-5">
                            <p>When looking at all of the core building blocks of true wireless earbuds, the TrueFree+ have just about everything you could want. The earbuds are built well, sound great, the battery life is wonderfully long, and wireless performance is reliable.</p>
                            </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="review">
                        <a href="https://www.digitaltrends.com/headphone-reviews/soundpeats-truengine-se-review/" className="d-flex flex-column justify-content-between">
                            <div className="MBFeatureReviewimgContainer mt-5 mb-3">
                            <img src={DIGITALTRENDS} alt="CompanyLogo" />
                            </div>
                            <div className="MBFeatureReviewtxtContainer mb-5">
                            <p>What can you expect from a $40 set of true wireless earbuds? If they are the SoundPeats Truengine SE, the answer is: Good fit, comfort, controls, and sound quality. We think that's more than enough to recommend them to anyone looking for a budget set of buds.</p>
                            </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="review">
                        <a href="https://www.gizchina.com/2019/09/25/soundpeats-truengine-2-review-truewireless-plus-works-miracles/" className="d-flex flex-column justify-content-between">
                            <div className="MBFeatureReviewimgContainer mt-5 mb-3">
                            <img src={GIZCHINA} alt="CompanyLogo" />
                            </div>
                            <div className="MBFeatureReviewtxtContainer mb-5">
                            <p>When it comes to sound performance, the Soundpeats Truengine 2 provides a better experience than expected. The sound quality is way better than what we get from most of the similar products. The sound is well balanced and the mid-tones are not overwhelmed by an excessive amount of bass. And there is enough beat to give the sound a great depth.</p>
                            </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="review">
                        <a href="https://newatlas.com/music/soundpeats-h1-wireless-earphones-review/" className="d-flex flex-column justify-content-between">
                            <div className="MBFeatureReviewimgContainer mt-5 mb-3">
                            <img src={NEWATLAS} alt="CompanyLogo" />
                            </div>
                            <div className="MBFeatureReviewtxtContainer mb-5">
                            <p>So my very subjective and largely worthless opinion on the sound of the H1s is this: they sound terrific.The overall effect is pleasing, engaging and immersive to me - but I really enjoyed the last ones too, so maybe Soundpeats' chief audio designer has very similar ears to me.</p>
                            </div>
                        </a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default MBFeatureReviewSlider;

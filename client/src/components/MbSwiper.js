import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Css/MbSwiper.css";
import MbEarbud1 from "../images/MbSwiperEarbud1.png";
import MbEarbud2 from "../images/MbSwiperEarbud2.png";
import MbEarbud3 from "../images/MbSwiperEarbud3.png";

export default class MbSwiper extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "40px",
            slidesToShow: 1,
            speed: 500,
        };
        return (
            <div className="SliderSlicker">
                <Slider {...settings}>
                    <div className="slick-wrapper">
                        <div className="fpc text-center">
                            <div className="fpc_imgContainer">
                                <img src={MbEarbud1} alt="ProductImg" />
                            </div>
                            <div className="text_box align-self-end">
                                <p className="subtitle fw-bold mt-5" >T3</p>
                                <p className="title fw-bold my-2" >BEST BUDGET ANC</p>
                                <button type="button" className="btn rounded-0 shadow-0 border-1 border-dark bg-black text-white">DISCOVER</button>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className="fpc">
                            <div className="fpc_imgContainer">
                                <img src={MbEarbud2} alt="ProductImg" />
                            </div>
                            <div className="text_box align-self-end">
                                <p className="subtitle fw-bold mt-5" >Air3 Pro</p>
                                <p className="title fw-bold my-2" >Best AirPods Alternative</p>
                                <button type="button" className="btn rounded-0 shadow-0 border-1 border-dark bg-black text-white">DISCOVER</button>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className="fpc">
                            <div className="fpc_imgContainer">
                                <img src={MbEarbud3} alt="ProductImg" />
                            </div>
                            <div className="text_box align-self-end">
                                <p className="subtitle fw-bold mt-5" >Free2 Classic</p>
                                <p className="title fw-bold my-2" >STYLISH ALL-DAY COMPANION</p>
                                <button type="button" className="btn rounded-0 shadow-0 border-1 border-dark bg-black text-white">DISCOVER</button>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className="fpc">
                            <div className="fpc_imgContainer">
                                <img src={MbEarbud1} alt="ProductImg" />
                            </div>
                            <div className="text_box align-self-end">
                                <p className="subtitle fw-bold mt-5" >Mini Pro</p>
                                <p className="title fw-bold my-2" >NEXT LEVEL ANC EXPERIENCE</p>
                                <button type="button" className="btn rounded-0 shadow-0 border-1 border-dark bg-black text-white">DISCOVER</button>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}
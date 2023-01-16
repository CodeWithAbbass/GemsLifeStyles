import React from "react";
import "../Css/SingleProductSlider.css";
import ReactImageMagnify from 'react-image-magnify';
import "../Css/SingleProductSlider.css";
import Slider from "react-slick";

const SingleProductSlider = ({ image }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="SingleProductSlider">
            <Slider {...settings}>
                {image.map((item, index) => {
                    return (
                        <div key={index}>
                            <ReactImageMagnify {...{
                                smallImage: {
                                    alt: 'Wristwatch by Versace',
                                    isFluidWidth: true,
                                    src: item,
                                    sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px',
                                },
                                largeImage: {
                                    src: item,
                                    width: 1426,
                                    height: 2000,
                                },
                                // shouldUsePositiveSpaceLens: true,
                            }} />
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
}

export default SingleProductSlider;


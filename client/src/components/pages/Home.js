import React from 'react';
import MainSlider from '../MainSlider';
import '../../Css/Home.css';
import '../../Css/General.css';
import Productitem from '../Productitem';
import OverlayBgProduct from '../OverlayBgProduct';
import MbSwiper from '../MbSwiper';
import earbud1 from "../../images/Air3-pro-556-556x.png";
import earbud2 from "../../images/free2_classic.png";
import earbud3 from "../../images/Earbud3.png";
import earbud4 from "../../images/T3-400_400x.png";
import BTW69 from "../../images/GEMS/800x800/BTW69.jpg";
import BTW88 from "../../images/GEMS/800x800/BTW88.jpg";
import BTW91 from "../../images/GEMS/800x800/BTW91.jpg";
import BTW95 from "../../images/GEMS/800x800/BTW95.jpg";
import BT001 from "../../images/GEMS/1500x420/BT001-PRO.jpg";
import BTW055 from "../../images/GEMS/1500x420/BT055-PRO.jpg";
import BTW96 from "../../images/GEMS/1500x420/BTW96.jpg";

import FeatureReviewSlider from '../FeatureReviewSlider';
import MBFeatureReviewSlider from '../MBFeatureReviewSlider';
import SliderUnboxing from '../SliderUnboxing';

const Home = (props) => {

  return (
    <div>
      <div className='home'>
        <MainSlider />
        <a href="#home__container  " className="btn scrollDown bg-white border-5 border-white"><i className="fa fa-angle-down" /></a>
        <div id="home__container">
          <div className="peopleLoved my-4 pb-0 px-4 Mobile_Banner">
            <img src={BT001} alt="Product Banner" />
          </div>
          <div className="MbSwiper"><MbSwiper /></div>
          <div className="desktop_Products px-4">
            <Productitem
              id={44644454}
              title={"Best AirPods Alternative"}
              subtitle={"Air3 Pro"}
              ProductImage={earbud1}
              btntxt={"DISCOVER"}
            />
            <Productitem
              id={44644444}
              title={"STYLISH ALL-DAY COMPANION"}
              subtitle={"Free2 classic"}
              ProductImage={earbud2}
              btntxt={"DISCOVER"}
            />
            <div className="d-flex flex-wrap justify-content-between align-items-stretch mt-4">
              <div className="twoProduct">
                <Productitem
                  id={65613134}
                  title={"NEXT LEVEL ANC EXPERIENCE"}
                  subtitle={"Mini Pro"}
                  ProductImage={earbud3}
                  btntxt={"DISCOVER"}
                />
              </div>
              <div className="twoProduct">
                <Productitem
                  id={44644444}
                  title={"BEST BUDGET ANC"}
                  subtitle={"T3"}
                  ProductImage={earbud4}
                  btntxt={"DISCOVER"}
                />
              </div>
            </div>
          </div>
          <div className="peopleLoved my-4 pb-0 px-4">
            <img src={BTW055} alt="Product Banner" />
          </div>
          <h2 className="overlayBgProductTitle my-3">SHOP BY CATEGORY</h2>
          <div className="d-flex flex-wrap justify-content-between overlayBgProduct mb-4 px-4">
            <div className="twoOverlayProduct mt-2">
              <OverlayBgProduct
                id={4561378}
                title={"TRUE WIRELESS"}
                AnotherProductImg={BTW69}
                MBAnotherProductImg={BTW69}
                btntxt={"MORE"}
              /></div>
            <div className="twoOverlayProduct mt-2">
              <OverlayBgProduct
                id={4561378}
                title={"AUDIOPHILE"}
                AnotherProductImg={BTW88}
                MBAnotherProductImg={BTW88}
                btntxt={"MORE"}
              /></div>
          </div>
          <div className="d-flex flex-wrap justify-content-between overlayBgProduct px-4">
            <div className="twoOverlayProduct mt-2">
              <OverlayBgProduct
                id={4561377}
                title={"NOISE CANCELLING"}
                AnotherProductImg={BTW91}
                MBAnotherProductImg={BTW91}
                btntxt={"MORE"}
              /></div>
            <div className="twoOverlayProduct mt-2">
              <OverlayBgProduct
                id={456136}
                title={"OTHERS"}
                AnotherProductImg={BTW95}
                MBAnotherProductImg={BTW95}
                btntxt={"MORE"}
              /></div>
          </div>
          <div className="peopleLoved my-4 pb-0 px-4">
            <img src={BTW96} alt="Product Banner" />
          </div>
          <div className="FeatureReviewSlider"><FeatureReviewSlider /></div>
          <div className="MBFeatureReviewSlider"><MBFeatureReviewSlider /></div>
          <div className="SliderUnboxing"><SliderUnboxing /></div>
        </div>
      </div>
    </div>
  );
}

export default Home;

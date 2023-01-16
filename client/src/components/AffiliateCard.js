import React from "react";
import '.././Css/AffiliateCard.css';

const Affilitate_inner = ({ image, title, arrow_icon }) => {
  return (
    <div className="Affiliate_card col-2" >
      <div className="Affiliate_card_info">
        <img className="Affiliate_card_image" src={image} alt="" />
        <div className="Affiliate_card_heading">{title}</div>
      </div>

      <div className="Affiliate_card_arrow">
        <img className="arrow" src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default Affilitate_inner;
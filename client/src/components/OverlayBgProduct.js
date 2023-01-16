import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Css/OverlayBgProduct.css"

import NotFound from "../images/ImgNotFound.jpg";
const AnotherProduct = ({ id, AnotherProductImg, MBAnotherProductImg, title, btntxt }) => {

    const [Hovered, setHovered] = useState(false);

    const MouseOver = () => {
        setHovered(true);
    }
    const MouseDown = () => {
        setHovered(false)
    }


    return (
        <div className="card overlayBgProduct text-bg-dark rounded-0 border-0 position-relative" id={id}>
            <img src={AnotherProductImg} className={`card-img AnotherProductImg rounded-0 border-0 ${Hovered ? "imgHoverd" : ""}`} alt="Product" />
            <img src={MBAnotherProductImg} className={`card-img MBAnotherProductImg rounded-0 border-0 ${Hovered ? "imgHoverd" : ""}`} alt="Product" />
            <div className="card_Overlay" onMouseOver={MouseOver} onMouseLeave={MouseDown}></div>
            <div className="overlayBgProduct_textBox" >
                <p className="title" >{title}</p>
                <Link to="/allproducts" className="btn rounded-0 shadow-0 border-1 border-dark fw-semibold bg-black text-white">{btntxt}</Link>
            </div>
        </div>
    );
}

AnotherProduct.defaultProps = {
    AnotherProductImg: NotFound,
    title: "NOT FOUND",
    btntxt: "MORE"
}

export default AnotherProduct;

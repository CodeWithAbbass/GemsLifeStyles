import React from 'react';
import Timer from "./Timer";
import Optin from "./Optin";
import Preloader from "./Preloader";
import "./ComingSoon.css";
const ComingSoon = () => {
    return (
        <div className='Coming_Soon'>
            <div className="container">
                <h1>
                    Website
                    Coming Soon
                </h1>
                <Timer />
                <Optin />
                <Preloader />
            </div>
        </div>
    );
}

export default ComingSoon;

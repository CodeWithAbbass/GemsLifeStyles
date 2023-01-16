import React from 'react';

const Checkout_Progressbar = () => {
    return (
        <div className="checkout_progress-bar_Container">
            <ul className="checkout-progress-bar p-0">
                <li className="active"><span>Shipping</span></li>
                <li className=''><span>Review &amp; Payments</span></li>
            </ul>
        </div>
    );
}

export default Checkout_Progressbar;

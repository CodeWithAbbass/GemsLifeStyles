import React from 'react';
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import { useProductContext } from '../context/product_context';
import PriceFormat from '../Helpers/PriceFormat';

const CartItem = ({ _id, productID, name, color, discount, price, image, quantity, }) => {
    const { CalcDiscount } = useProductContext();
    const NewAmount = CalcDiscount(discount, price);
    const { removeItem, setDecrease, setIncrement, } = useCartContext(); // Destructure

    return (
        <div className="cart_item d-flex">
            {/* Item Details  */}
            <div className="cart_item_details d-flex">
                <div className="cart_item_img">
                    <img src={image[0]} alt="item" />
                </div>
                <div className="cart_item_details_info align-self-center">
                    <h2><Link to={`/singleproduct/${productID}`}>{window.innerWidth <= 768 ? `${name.slice(0, 50)}...` : name}</Link></h2>
                    <p>{color}</p>
                    <div className="cart_item_details_info_priceList">
                        <span className="">{`${discount > 0 ? PriceFormat(NewAmount) : PriceFormat(price)}`}</span>
                        <span className={`oldPrice ms-2 ${discount > 0 ? "d-inline-block" : "d-none"}`}>{PriceFormat(price)}</span>
                    </div>
                </div>
            </div>
            {/* Action  */}
            <div className="cart_item_action d-flex flex-column align-self-center">
                <div className="cart_item_action_innerDiv">
                    <i className="fa-solid fa-minus" onClick={() => setDecrease(productID)}></i>
                    <input type="text" readOnly placeholder={`${quantity}`} />
                    <i className="fa-solid fa-plus" onClick={() => setIncrement(productID)}></i>
                </div>
                <button className="Remove p-0" onClick={() => { removeItem(productID) }}>Remove</button>
            </div>
            {/* Total  */}
            <div className="cart_item_priceList d-flex justify-content-end">
                <div className="cart_item_priceList_innerDiv align-self-center">
                    <span className="Total">{`${discount > 0 ? PriceFormat(NewAmount) : PriceFormat(price)}`}</span>
                </div>
            </div>
        </div>
    );
}

export default CartItem;

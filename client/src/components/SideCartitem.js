import React from 'react';
import { Link } from "react-router-dom";
import PriceFormat from '../Helpers/PriceFormat';
import { useCartContext } from "../context/cart_context";
import "../Css/SideCartitem.css";
import { useProductContext } from '../context/product_context';
const SideCartitem = ({ _id, productID, name, color, price, discount, image, quantity, }) => {
    const { CalcDiscount } = useProductContext();
    const { removeItem, setDecrease, setIncrement, } = useCartContext(); // Destructure
    const NewAmount = CalcDiscount(discount, price);
 
    return (
        <div className='SideCartitem row my-4'>
            <div className="SideCartitem_img col-4">
                <img src={image[0]} alt="Product img" />
            </div>
            <div className="SideCartitem_details col-8 d-flex flex-column justify-content-between">
                <div className="SideCartitem_details_info">
                    <Link to={`/singleproduct/${productID}`}>{window.innerWidth <= 768 ? `${name.slice(0, 29)}...` : name}</Link>
                    <span className='priceList_newPrice'>{`${NewAmount > 0 ? PriceFormat(NewAmount) : PriceFormat(price)}`}</span>
                    <span className={`priceList_oldPrice ${NewAmount > 0 ? "d-inline-block" : "d-none"}`}>{PriceFormat(price)}</span>
                </div>
                <div className="SideCartitem_details_action d-flex justify-content-between">
                    <div className="SideCartitem_details_action_innerDiv">
                        <i className="fa-solid fa-minus col" onClick={() => setDecrease(productID)}></i>
                        <input type="text" readOnly placeholder={`${quantity}`} />
                        <i className="fa-solid fa-plus col" onClick={() => setIncrement(productID)}></i>
                    </div>
                    <button className="Remove" onClick={() => { removeItem(productID) }}>Remove</button>
                </div>
            </div>
        </div>
    );
}

export default SideCartitem;


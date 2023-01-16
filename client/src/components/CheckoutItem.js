import React from 'react';
import { Link } from "react-router-dom";
import PriceFormat from '../Helpers/PriceFormat';
import { useProductContext } from '../context/product_context';

const CheckoutItem = ({ id, name, color, price, image, quantity, discount }) => {
    const { CalcDiscount } = useProductContext();
    // const { total_item } = useCartContext();
    const NewAmount = CalcDiscount(discount, price)
    const OldProductID = parseFloat(id);
    return (
        <>
            <div className="cart_item d-flex mb-3" key={id}>
                {/* Item Details  */}
                <div className="cart_item_details d-flex">
                    <div className="cart_item_img">
                        <span className="total_cartProduct">{quantity}</span>
                        <img src={image} alt="item" />
                    </div>

                    <div className="cart_item_details_info align-self-center">
                        <h6><Link to={`/singleproduct/${OldProductID}`}>{window.innerWidth <= 768 ? `${name.slice(0, 50)}...` : name}</Link></h6>
                        <p>{color}</p>
                    </div>

                    <div className="cart_item_details_price align-self-center">
                        <div className="cart_item_details_info_priceList text-center">
                            <div className={`oldPrice ms-2 ${discount > 0 ? "d-block" : "d-none"}`}>{PriceFormat(price)}</div>
                            <div className="newPrice ms-2">{`${discount > 0 ? PriceFormat(NewAmount) : PriceFormat(price)}`}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckoutItem;

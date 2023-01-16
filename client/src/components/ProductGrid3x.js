import React, { useState } from 'react';
import ".././Css/ProductGrid3x.css"
import { Link } from "react-router-dom";
import PriceFormat from '../Helpers/PriceFormat';
import { useProductContext } from '../context/product_context';

const ProductGrid3x = ({ id, discount, tag, brand, name, description, price, pMainImg, pOtherImg, }) => {
    const { CalcDiscount } = useProductContext();  // Destructure

    const [isHovering, setIsHovering] = useState(false);
    function handleHoverIn() {
        setIsHovering(true);
    }
    function handleHoverOut() {
        setIsHovering(false)
    }

    const NewAmount = CalcDiscount(discount, price);

    return (
        <div className='ProductGrid3x'>
            <Link to={`/singleproduct/${id}`} onMouseOver={handleHoverIn} onMouseOut={handleHoverOut}>
                <div className="item_header d-flex">
                    <li className={`item_header_items discount me-2 text-center ${discount > 0 ? "d-block" : "d-none"}`}>-{discount}%</li>
                    <li className='item_header_items tag me-2 text-center'>{tag}</li>
                </div>
                <div className="pImg">
                    <img className={`pMainImg ${isHovering ? "active_pMainImg" : " "} `} src={pMainImg} alt="" />
                    <img className={`pOtherImg ${isHovering ? "active_pOtherImg" : " "}`} src={pOtherImg} alt="" />
                </div>
                <div className="item_info mt-5">
                    <div className="brand"><p>{brand}</p></div>
                    <h2 className="name_heading d-flex justify-content-between">
                        <p>{name}</p>
                        <i className={`fas fa-long-arrow-alt-right ${isHovering ? "active_i" : ""}`} />
                    </h2>
                    <div className={`item_footer ${isHovering ? "active_footer" : ""}`}>
                        <div className="description"><p>{description}</p></div>
                        <div className="priceList">
                            <span className="priceList_newPrice">{`${NewAmount > 0 ? PriceFormat(NewAmount) : PriceFormat(price)}`}</span>
                            <span className={`priceList_oldPrice ms-3 ${NewAmount > 0 ? "d-inline-block" : "d-none"}`}>{PriceFormat(price)}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ProductGrid3x;

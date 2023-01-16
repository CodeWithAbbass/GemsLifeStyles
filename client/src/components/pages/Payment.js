import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCartContext } from '../../context/cart_context';
import { useOrderContext } from '../../context/order_context';
import { useProductContext } from '../../context/product_context';
import { useUserContext } from '../../context/user_context';
import "../../Css/Checkout.css";
import "../../Css/General.css";
import PriceFormat from '../../Helpers/PriceFormat';
import CheckoutProgressbar from '../CheckoutProgressbar';

const Payment = () => {
  let Navigate = useNavigate();
  const { cart, total_item, total_price, shipping_fee, getCartItems, clearCart } = useCartContext();
  const { CalcDiscount } = useProductContext();
  const { user } = useUserContext();
  const { orderData } = useOrderContext();
  const { fname, lname, email, phone, address, state } = user;
  const [orderInst, setOrderInst] = useState(
    { instructions: '', userInfo: '', products: '', total_item: '', total_price: '', shipping_fee: '' }
  );


  const onChange = (e) => {
    const { name, value } = e.target;
    setOrderInst({ ...orderInst, [name]: value, method: "Cash on Delivery", userInfo: [user], products: cart, total_item, total_price, shipping_fee });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   try {
    const { instructions, userInfo, products, method, total_item, total_price, shipping_fee } = orderInst;
    const URL = 'https://gemlifestylesserver.gemlifestyles.com/api/orders/placeorder';
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        Accept: "application/json",
        'Content-Type': "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ instructions, userInfo, products, method, total_item, total_price, shipping_fee }),
    });
    const data = await response.json();
    if (data.success) {
      orderData(data.Order);
      clearCart();
      alert("Order Placed Successfully");
      Navigate("/user");
    }
    else {
      alert(data.Error);
    }

   } catch (error) {
    console.error(error);
   }
  };

  const openOrderDetails = () => {
    document.querySelector('.MobileOrderDetailsSidebar').style.width = "100%";
  }

  const closeOrderDetails = () => {
    document.querySelector('.MobileOrderDetailsSidebar').style.width = "0%";
  }

  useEffect(() => {
    getCartItems();
    if (cart.length !== 0) {
      document.querySelectorAll('.checkbox').onclick = (e) => {
        e.preventDefault();
      }
    }
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [location]);



  ////////////////////////////////////////////
  if (cart.length === 0) {
    return (
      <div className="Continue_Shopping w-100 d-flex flex-column justify-content-center align-items-center">
        <h1 className="EmptyStateTitle">Your cart is empty</h1>
        <Link to={"/allproducts"} className="Continue_Shopping_Btn">Continue Shopping</Link>
      </div>
    );
  }
  ////////////////////////////////////////////

  return (
    <div className='Payment Checkout container'>
      <CheckoutProgressbar />
      <div className="Checkout_MainContainer row justify-content-between">
        <div className="formContainer col-8 pe-lg-5">
          <form className="CheckoutForm mb-3 row px-4" id="CheckoutFormId" method='POST' onSubmit={handleSubmit} >
            <h3 className='pb-2 mb-1'>Payment Method</h3>
            <div className="form-check">
              <input className="form-check-input rounded-circle" type="checkbox" name="CashOnDelivery" readOnly checked={true} id="flexRadioDefault1" />
              <label className="form-check-label" htmlFor="flexRadioDefault1"> Cash On Delivery</label>
            </div>
            <div className="form-check">
              <input className="form-check-input p-1 rounded-circle checkbox" type="checkbox" readOnly checked={false} name="exampleRadios" id="flexRadioDefault2" />
              <label className="form-check-label" htmlFor="flexRadioDefault2">Online Visa/MasterCard</label>
            </div>
            <div className="form-check">
              <input className="form-check-input p-1 rounded-circle checkbox" type="checkbox" readOnly checked={false} name="exampleRadios" id="flexRadioDefault3" />
              <label className="form-check-label" htmlFor="flexRadioDefault3">UnionPay Debit/Credit Cards</label>
            </div>
            <div className="form-check">
              <input className="form-check-input p-1 rounded-circle checkbox" type="checkbox" readOnly checked={false} name="exampleRadios" id="flexRadioDefault4" />
              <label className="form-check-label" htmlFor="flexRadioDefault4">Keenu NetConnect</label>
            </div>
            <div className="my-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label mb-4">Order Instructions:</label>
              <textarea className="form-control rounded-0 shadow-none mb-3" id="exampleFormControlTextarea1" name='instructions' value={orderInst.instructions} rows="3" maxLength={300} placeholder='Do you have any special instructions regarding the order?' onChange={onChange} required></textarea>
              <span className='fw-light fs-6 text-secondary'>Remaining characters: {300 - orderInst.instructions.length}</span>
            </div>
            <div className="col-sm-4 p-0 mt-4 text-center ">
              <button type='submit' className="btn shadow-none rounded-0 float-sm-end w-100">Place Order</button>
            </div>
          </form>
        </div>
        <div className="col-4 align-self-center OrderSummery_MainContainer p-0">
          <div className="DesktopOrderSummery">
            <div className="OrderSummery" >
              <div className="OrderSummery_Header">
                <p className='OrderSummery_heading mb-2'>Order Summery</p>
              </div>
              <div className="OrderSummery_Cart_Subtotal row py-2">
                <span className='Cart_Subtotal_item col-8 text-start'>Cart Subtotal</span>
                <span className='Cart_Subtotal_item col-4 text-end'>{PriceFormat(total_price)}</span>
              </div>
              <div className="OrderSummery_Shipping row py-2">
                <div className='OrderSummery_Shipping_item col-8 text-start'>
                  <p className='Shipping_item_heading fw-semibold'>Shipping</p>
                  <p className='OrderSummery_Shipping_item'>Standard Shipping - Fixed</p>
                </div>
                <span className='OrderSummery_Shipping_item col-4 text-end'>{PriceFormat(shipping_fee)}</span>
              </div>
              <div className="OrderSummery_Total row py-2">
                <span className='OrderSummery_Total_item_heading col-8 text-start fw-semibold'>Order Total</span>
                <span className='OrderSummery_Total_item_amount col-4 text-end fw-semibold'>{PriceFormat(total_price + shipping_fee)}</span>
              </div>
              <div className="OrderProduct_Details">
                <div className="accordion accordion-flush bg-none" id="accordionFlushExample">
                  <div className="accordion-item bg-transparent">
                    <h2 className="accordion-header bg-transparent d-flex justify-content-between py-3" id="flush-headingOne">
                      <div className="accordion-button px-0 collapsed bg-transparent shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">{total_item} Item in Cart
                      </div>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body p-0">
                        {cart.map((curItem, index) => {
                          let { discount, price, image, name, quantity } = curItem;
                          let [MainImage] = image;
                          const Price = CalcDiscount(discount, price);
                          return (
                            <div className="Checkout_ProductInfo row mb-4" key={index}>
                              <div className="row">
                                <div className="col-3"><img src={MainImage} alt="Product" className='w-100' /></div>
                                <div className="col-6">
                                  <p className='fw-bold'>{name}</p>
                                  <p className='fw-bold'>Qty: <span className='fw-normal'>{quantity}</span></p>
                                </div>
                                <div className="col-3 text-end">{PriceFormat(Price)}</div>
                              </div>
                              <hr />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ShipTo mt-4">
              <div className="ShipTo_Header mb-2 d-flex justify-content-between align-items-center">
                <p className='ShipTo_heading mb-2'>Ship To</p>
                <Link to="/checkout" className='text-black'><i className="fa-solid fa-pencil"></i></Link>
              </div>
              <div className="ShipTo_Body">
                <p className='py-1'>{fname} {lname}</p>
                <p className='py-1'>{email}</p>
                <p className='py-1'>{phone}</p>
                <p className='py-1'>{state}</p>
                <p className='py-1'>{address}</p>
              </div>
              <div className="ShipTo_Footer mt-4">
                <div className="ShipTo_Header mb-2 d-flex justify-content-between align-items-center">
                  <p className='ShipTo_heading mb-2'>Shipping Method</p>
                  <Link to="/checkout" className='text-black'><i className="fa-solid fa-pencil"></i></Link>
                </div>
                <p className='py-1'>Standard Shipping - Fixed</p>
              </div>
            </div>
          </div>
          {/* Order Summery For Mobile  */}
          <div className="MobileOrderSummery container">
            <div className="row justify-content-between align-items-center py-2">
              <ul className="col-6 mb-0 OrderSummery_EstimatedHeading ">
                <li className="OrderSummery_EstimatedAmount_item">Estimated Total</li>
                <li className="OrderSummery_EstimatedAmount_item">{PriceFormat(total_price)}</li>
              </ul>
              <div className="col-6 OrderSummery_EstimatedAmount text-end">
                <button className='btn' onClick={openOrderDetails}>View Details</button>
              </div>
            </div>
          </div>
          <div className="MobileOrderDetailsSidebar">
            <div className="DesktopOrderSummery MobileOrderSummerySidebar px-2 py-2">
              <div className="OrderSummery container">
                <div className="OrderSummery_Header row align-items-center">
                  <p className='OrderSummery_heading d-inline border-0 col-10 p-0'>Order Summery</p>
                  <div className="MobileOrderSummerySidebar_closebtn text-end d-inline col-2 p-0" onClick={closeOrderDetails}>&times;</div>
                </div>
                <div className="OrderSummery_Cart_Subtotal row py-2">
                  <span className='Cart_Subtotal_item col-8 text-start'>Cart Subtotal</span>
                  <span className='Cart_Subtotal_item col-4 text-end'>{PriceFormat(total_price)}</span>
                </div>
                <div className="OrderSummery_Shipping row py-2">
                  <div className='OrderSummery_Shipping_item col-8 text-start'>
                    <p className='Shipping_item_heading fw-semibold'>Shipping</p>
                    <p className='OrderSummery_Shipping_item'>Standard Shipping - Fixed</p>
                  </div>
                  <span className='OrderSummery_Shipping_item col-4 text-end'>{PriceFormat(shipping_fee)}</span>
                </div>
                <div className="OrderSummery_Total row py-2">
                  <span className='OrderSummery_Total_item_heading col-8 text-start fw-semibold'>Order Total</span>
                  <span className='OrderSummery_Total_item_amount col-4 text-end fw-semibold'>{PriceFormat(total_price + shipping_fee)}</span>
                </div>
                <div className="OrderProduct_Details">
                  <div className="accordion accordion-flush bg-none" id="accordionFlushExample">
                    <div className="accordion-item bg-transparent">
                      <h2 className="accordion-header bg-transparent d-flex justify-content-between py-3" id="flush-headingOne">
                        <div className="accordion-button px-0 collapsed bg-transparent shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">{total_item} Item in Cart
                        </div>
                      </h2>
                      <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body p-0">
                          {cart.map((curItem, index) => {
                            let { discount, price, image, name, quantity } = curItem;
                            let [MainImage] = image;
                            const Price = CalcDiscount(discount, price);
                            return (
                              <div className="Checkout_ProductInfo" key={index}>
                                <div className="row my-4">
                                  <div className="col-3"><img src={MainImage} alt="Product" className='w-100' /></div>
                                  <div className="col-6">
                                    <p className='fw-bold'>{name}</p>
                                    <p className='fw-bold'>Qty: <span className='fw-normal'>{quantity}</span></p>
                                  </div>
                                  <div className="col-3 text-end">{PriceFormat(Price)}</div>
                                </div>
                                <hr />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ShipTo bg-white mt-4">
                <div className="ShipTo_Header mb-2 d-flex justify-content-between align-items-center">
                  <p className='ShipTo_heading mb-2'>Ship To</p>
                  <Link to="/checkout" className='text-black'><i className="fa-solid fa-pencil"></i></Link>
                </div>
                <div className="ShipTo_Body">
                  <p className='py-1'>{fname} {lname}</p>
                  <p className='py-1'>{email}</p>
                  <p className='py-1'>{phone}</p>
                  <p className='py-1'>{state}</p>
                  <p className='py-1'>{address}</p>
                </div>
                <div className="ShipTo_Footer mt-4">
                  <div className="ShipTo_Header mb-2 d-flex justify-content-between align-items-center">
                    <p className='ShipTo_heading mb-2'>Shipping Method</p>
                    <Link to="/checkout" className='text-black'><i className="fa-solid fa-pencil"></i></Link>
                  </div>
                  <p className='py-1'>Standard Shipping - Fixed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Payment;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../Css/User.css';
import { useOrderContext } from '../../context/order_context';
import { useProductContext } from '../../context/product_context';
import { useUserContext } from '../../context/user_context';
import PriceFormat from '../../Helpers/PriceFormat';
import ProfileImage from '../../images/UserProfile.png';

const User = () => {
  const { user } = useUserContext();
  const { fname, lname, email, phone, address, state, avatar } = user;
  const { orders, StatusFinder } = useOrderContext();
  const { getParsedDate, CalcDiscount } = useProductContext();


  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);

  return (
    <div className='User'>
      <div className="container py-5">
        <div className="row justify-content-between">
          <div className="col-lg-4 card mb-4">
            <div className="card-body text-center">
              <img src={avatar ? avatar : ProfileImage} alt="avatar" className="rounded-circle" style={{ width: "150px", height:"150px" }} />
              <h5 className="my-3">{fname}</h5>
              <p className="text-muted mb-1">{email}</p>
            </div>
          </div>
          <div className="col-lg-7 card mb-4">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Name</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{fname} {lname}</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Email</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{email}</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Phone</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{phone}</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Address</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{address}</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">State</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{state}</p>
                </div>
              </div>
            </div>
          </div>
        </div >
        <div className="row text-center">
          {orders.length === 0 ? <Link to={'/allproducts'} className="btn">Order Now</Link> : orders.map((item, index) => {
            const { _id, instructions, products, method, total_price, shipping_fee, status, date } = item;

            let DiscountAmount = 0;
            let ProductPrice = 0;
            return (
              <div className="card mb-4 p-0" key={index}>
                <div className="card-header px-4 py-5">
                  <h5 className="text-muted mb-0">Thanks for your Order, <span className='text-black fw-semibold'>{fname}</span>!</h5>
                </div>
                <div className="card-body py-5 h-100">
                  <div className="row d-flex justify-content-center align-items-center h-100">

                    <div className="col-lg-12 col-xl-12" >
                      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
                        <p className="lead fw-semibold mb-0">Receipt :</p>
                        <p className="small text-muted mb-0">{_id}</p>
                      </div>
                      {!products.length > 0 ? "" : products.map((item, index) => {
                        const { name, color, quantity, image, price, discount } = item;
                        let amount = CalcDiscount(+discount, +price);
                        ProductPrice = ProductPrice + ((+price) * (+quantity));
                        DiscountAmount = DiscountAmount + (+amount * +quantity);

                        return (
                          <div className="card shadow-0 border mb-4" key={index}>
                            <div className="card-body">
                              <div className="row">
                                <div className="col-md-2">
                                  <img src={image[0]} className="img-fluid" alt="Phone" />
                                </div>
                                <div className="col-md-4 text-center d-flex justify-content-center align-items-center">
                                  <p className="text-muted mb-0">{name.slice(0, 25)}...</p>
                                </div>
                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                  <p className="text-muted mb-0 small">{color}</p>
                                </div>
                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                  <p className="text-muted mb-0 small">Qty: {quantity}</p>
                                </div>
                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                  <p className="text-muted mb-0 small">{PriceFormat(price)}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                      <hr className="mb-4" style={{ backgroundColor: "#e0e0e0", opacity: "1" }} />
                      <div className="row d-flex align-items-center">
                        <div className="col-md-2">
                          <p className="text-muted mb-0 small">Track Order</p>
                        </div>
                        <div className="col-md-10">
                          <div className="progress-track">
                            <ul id="progressbar">
                              <li className={`step0 active text-start`} id="step1">Ordered</li>
                              <li className={`step0  ${StatusFinder(status) >= 2 ? "active" : ""} text-center`} id="step2">Shipped</li>
                              <li className={`step0  ${StatusFinder(status) >= 3 ? "active" : ""} text-center`} id="step3">On the way</li>
                              <li className={`step0  ${StatusFinder(status) === 4 ? "active" : ""} text-end`} id="step4">Delivered</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="Order_Details_Container pt-2">
                        <div className="Order_Details d-flex justify-content-between pt-2 flex-wrap">
                          <div className="Order_Details_Heading">
                            <p className="fw-bold mb-0">Order Details</p>
                          </div>
                          <div className="Order_Details_Content">
                            <p className="text-muted mb-0"><span className="fw-bold me-2">Total</span>{PriceFormat(ProductPrice)}</p>
                          </div>
                        </div>
                        <div className="Order_Details d-flex justify-content-between pt-2 flex-wrap">
                          <div className="Order_Details_Heading">
                            <p className="text-muted mb-0">Order Instructions</p>
                          </div>
                          <div className="Order_Details_Content">
                            <p className="text-muted mb-0">{instructions}</p>
                          </div>
                        </div>
                        <div className="Order_Details d-flex justify-content-between pt-2 flex-wrap">
                          <div className="Order_Details_Heading">
                            <p className="text-muted mb-0">Delivery Method : </p>
                          </div>
                          <div className="Order_Details_Content">
                            <p className="text-muted mb-0">{method}</p>
                          </div>
                        </div>
                        <div className="Order_Details d-flex justify-content-between pt-2 flex-wrap">
                          <div className="Order_Details_Heading">
                            <p className="text-muted mb-0">Invoice Date : </p>
                          </div>
                          <div className="Order_Details_Content">
                            <p className="text-muted mb-0">{getParsedDate(date)}</p>
                          </div>
                        </div>
                        <div className="Order_Details d-flex justify-content-between pt-2 flex-wrap">
                          <div className="Order_Details_Heading">
                            <p className="text-muted fw-bold me-4">Discount :</p>
                          </div>
                          <div className="Order_Details_Content">
                            <p className="text-muted mb-0 fw-bold">{PriceFormat(ProductPrice - DiscountAmount)}</p>
                          </div>
                        </div>
                        <div className="Order_Details d-flex justify-content-between pt-2 flex-wrap">
                          <div className="Order_Details_Heading">
                            <p className="text-muted fw-bold me-4">Shipping Fee :</p>
                          </div>
                          <div className="Order_Details_Content">
                            <p className="text-muted mb-0 fw-bold">{PriceFormat(shipping_fee)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer px-4 py-5" >
                  <h5 className="text-end text-white text-uppercase mb-0 text-muted mb-0">Total paid: <span className="h2 mb-0 ms-2 text-dark" >{PriceFormat((+total_price) + (+shipping_fee))}</span></h5>
                </div>
              </div>
            )
          })}
        </div>
      </div >
    </div >
  );
}

export default User;

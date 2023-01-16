import React, { useEffect } from 'react';
import { useOrderContext } from '../../context/order_context';
import { useProductContext } from '../../context/product_context';
import PriceFormat from '../../Helpers/PriceFormat';

const CompletedOrder = () => {

    const { getAllOrders, CompletedOrders, DeleteOrder } = useOrderContext();
    const { getParsedDate, CalcDiscount } = useProductContext();


    useEffect(() => {
        getAllOrders();
        window.scrollTo(0, 0);
        // eslint-disable-next-line
    }, []);


    return (
        <div className='CompletedOrder'>
            <div className="row text-center p-0">
                {CompletedOrders === "" ? <h2 className="">No Orders</h2> : CompletedOrders.map((item, index) => {

                    const { _id, instructions, method, total_price, shipping_fee, products, userInfo, date } = item;
                    const [userData] = userInfo;
                    const { fname, lname, email, phone, address, state } = userData;

                    let DiscountAmount = 0;
                    let ProductPrice = 0;
                    return (
                        <div className="card mb-4 p-0 position-relative" key={index}>
                            <div className="card-header py-4 px-0">
                                <div className="row w-100 m-0">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Name</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{fname} {lname}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row w-100 m-0">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Email</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{email}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row w-100 m-0">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Phone</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{phone}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row w-100 m-0">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Address</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{address}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row w-100 m-0">
                                    <div className="col-sm-3">
                                        <p className="mb-0">State</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{state}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body py-4 h-100">
                                <div className="row d-flex justify-content-center align-items-center h-100">
                                    <div className="col-lg-12 col-xl-12" >
                                        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
                                            <p className="lead fw-semibold mb-0">Receipt :</p>
                                            <p className="small text-muted mb-0">{_id}</p>
                                        </div>
                                        {products.map((item, index) => {
                                            const { name, color, quantity, image, price, discount } = item;
                                            let amount = CalcDiscount(+discount, +price);
                                            ProductPrice = ProductPrice + ((+price) * (+quantity));
                                            DiscountAmount = DiscountAmount + (+amount * +quantity);
                                            return (
                                                <div className="card shadow-0 mb-4" key={index}>
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-1">
                                                                <img src={image[0]} className="img-fluid" alt="Phone" />
                                                            </div>
                                                            <div className="col-md-5 text-center d-flex justify-content-center align-items-center">
                                                                <p className="text-muted mb-0">{name.slice(0, 40)}...</p>
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
                                        <div className="row w-100 Status_Container m-0">
                                            <div className="col-lg-4 py-2">
                                                <button disabled className="btn btn-outline-warning shadow-0 rounded-1 fst-italic">Shipped</button>
                                            </div>
                                            <div className="col-lg-4 py-2">
                                                <button disabled className="btn btn-outline-info shadow-0 rounded-1 fst-italic">On The Way</button>
                                            </div>
                                            <div className="col-lg-4 py-2">
                                                <button disabled className="btn btn-outline-success shadow-0 rounded-1 fst-italic">Completed</button>
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
                            <div className="card-footer px-4 py-4" >
                                <h5 className="text-end text-white text-uppercase mb-0 text-muted mb-0">Total Sale: <span className="h2 mb-0 ms-2" >{PriceFormat((+total_price) + (+shipping_fee))}</span></h5>
                            </div>
                            <button className='btn Trash_Order position-absolute top-0 right-0' onClick={() => DeleteOrder(_id)}>Trash Order</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default CompletedOrder;


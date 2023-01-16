import React, { useEffect, useState } from 'react';
import { useOrderContext } from '../../context/order_context';
import PriceFormat from "../../Helpers/PriceFormat";
import PendingOrder from './PendingOrder';
import CompletedOrder from './CompletedOrder';
import "../Css/DHome.css";

const DHome = () => {
  const { DOrders, PendingOrders, CompletedOrders } = useOrderContext();
  const [active, setActive] = useState("Pending");

  let sale = 0;

  // For Transition From One to Another Component 
  const ProductFunc = (str) => {
    setActive(str);
  }

  if (DOrders.length > 0) {
    CompletedOrders.forEach(element => {
      let value = 0;
      value = value + +element.total_price + +element.shipping_fee;
      sale = sale + value;
    });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);

  const style1 = {
    display: "block",
    visibility: "visible",
  }
  const style2 = {
    display: "none",
    visibility: "hidden",
  }

  return (
    <div className='DHome container'>
      <div className="DHome_Container row flex-md-wrap w-100 py-4 mx-auto align-items-center justify-content-evenly">
        <div className="Container_Item col-md-3 mb-3 rounded d-flex align-items-center justify-content-between">
          <i className='fa fa-chart-line fa-3x'></i>
          <div className="Item_txt">
            <p className='Item_txt_heading'>Today Sale</p>
            <h6 className='Item_txt_value'>{sale ? PriceFormat(sale).slice(0, 10) : ""}</h6></div>
        </div>
        <div className="Container_Item col-md-3 mb-3 rounded d-flex align-items-center justify-content-between" onClick={() => ProductFunc("Pending")}>
          <i className='fa fa-chart-area fa-3x'></i>
          <div className="Item_txt">
            <p className='Item_txt_heading'>Pending Orders</p>
            <h6 className='Item_txt_value'>{PendingOrders.length}</h6>
          </div>
        </div>
        <div className="Container_Item col-md-3 mb-3 rounded d-flex align-items-center justify-content-between" onClick={() => ProductFunc("Completed")}>
          <i className='fa fa-chart-pie fa-3x'></i>
          <div className="Item_txt">
            <p className='Item_txt_heading'>Completed</p>
            <h6 className='Item_txt_value'>{CompletedOrders.length}</h6>
          </div>
        </div>
      </div>

      <div className="Pending_Orders" style={active === "Pending" ? style1 : style2}>
        <PendingOrder />
      </div>

      <div className="Completed_Orders" style={active === "Completed" ? style1 : style2}>
        <CompletedOrder />
      </div>

    </div>
  );
}

export default DHome;

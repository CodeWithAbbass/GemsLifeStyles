import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Paypal_Checkout_Button = (props) => {
  // const initialOptions = {
  //   "client-id": "test",
  //   currency: "USD",
  //   intent: "capture",
  //   "data-client-token": "abc123xyz==",
  // };

  return (
    <PayPalScriptProvider
    // deferLoading={true}
    // options={{
    // "client-id":process.env.REACT_APP_PAYPAL_CLIENT_ID
    // initialOptions}}
    >
      <PayPalButtons
        style={{
          layout: "horizontal",
          tagline: "false",
          shape: "rect",
          label: "paypal",
          color: "gold",
          height: 40,
        }}
        createOrder={async (data, actions) => {
          return await actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "1.99",
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          return await actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
          });
        }}
      />
    </PayPalScriptProvider>
  );
};

export default Paypal_Checkout_Button;

import React from "react";


import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const pubishableKey =
    "pk_test_51IQpxdFI0Y0iOjsNcGvpMXPsq6hYBRvL1GUXAAwMdDY11EgrQndDAL7We6mlOVYX645BjXDuEal2dZLOg2LLrkBL00bMhszE5e";

  const onToken = (token) => {
    console.log(token);
    alert("PAYMENT SUCCESSFUL!");
  };

  return (
    <StripeCheckout
      label="Pay Now "
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      imag="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={pubishableKey}
    />
  );
};


export default StripeCheckoutButton
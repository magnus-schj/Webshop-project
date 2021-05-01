import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckOutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IkExoLpTqo5oKfKHHfQ4ra98nvuqkWk2Fc9iMQak3mWPT5HrUrlYI8Q7yNuFOofCc5WeswZXfHXY7gjFP4usohc007eCzsgHC";

  const onToken = (token) => {
    console.log(token);
    alert("Payment sucesfull");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckOutButton;

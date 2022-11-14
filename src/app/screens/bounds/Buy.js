import React from "react";
import { Root } from "./styles";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {PaymentElement} from '@stripe/react-stripe-js';
const stripePromise = loadStripe('pk_test_51M3u1vIzcGFb48GUz20hBuQXzMnrROio40lA80MYMQPJYipl6b5PMBNkb6QuweQ4emGR2bAAZdz2zIgeUMvLhzJG00HVhNYGQt');

const CheckoutForm = () => {
  return (
    <form>
      <PaymentElement />
      <button>Submit</button>
    </form>
  );
};

const Buy = (props) => {
  const { theme } = props;

  return (
    <Root theme={theme}>
      {" "}
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </Root>
  );
};

export default Buy;

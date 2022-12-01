import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { PaymentForm, PaymentFiledSet } from "./styles";
import PrimaryBtn from "../atoms/buttons/Primary";

const CardPayment = (props) => {
  const { theme, total } = props;
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  console.log(stripe, elements);

  const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
      base: {
        iconColor: theme.primaryColor,
        borderColor: theme.primaryColor,
        color: theme.fonts,
        fontWeight: 500,
        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
        fontSize: "18px",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": { color: theme.primaryColor },
        "::placeholder": { color: theme.disabled },
      },
      invalid: {
        iconColor: theme.error,
        color: theme.error,
      },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { error, paymentMethod } = stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    console.log(paymentMethod, error, total);
    const { id } = paymentMethod;
    console.log(id)
    setSuccess(true)
        
  };
  

  return (
    <>
      {!success ? (
        <PaymentForm onSubmit={handleSubmit}>
          <PaymentFiledSet>
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </PaymentFiledSet>
          <PrimaryBtn
            theme={theme}
            type="submit"
            label="Pay"
            margin={3}
            width={500}
          />
        </PaymentForm>
      ) : (
        <div>
          <h2>
            You just bought a sweet spatula congrats this is the best decision
            of youre life
          </h2>
        </div>
      )}
    </>
  );
};

export default CardPayment;

import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { PaymentForm, PaymentFiledSet } from "./styles";
import PrimaryBtn from "../atoms/buttons/Primary";
import { connect, useDispatch } from "react-redux";
import { paymentRequest } from "../../../redux/actions/payment";
import { Spinner } from "react-bootstrap";
import ModalSeed from "../modal/Modal";
import {Body, BodyBold, Title} from "../foundation/Typography"
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CardPayment = (props) => {
  const { theme, total, paymentSuccess } = props;
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  const {t} = useTranslation();
  const stripe = useStripe();
  const elements = useElements();
  const dipatch = useDispatch();

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

  useEffect(() => {
    if (paymentSuccess) {
      setIsLoading(false);
      setSuccess(true);
      setOpen(!isModalOpen)
    }

  }, [paymentSuccess])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    setIsLoading(true);

    if (!error) {
      try {
        const { id } = paymentMethod;
        dipatch(
          paymentRequest({
            amount: total,
            id,
            description: `${total} USD for ${total / 1000} bound(s)`,
          })
        );       
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
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
          {isLoading ? (
            <Spinner />
          ) : (
            <PrimaryBtn
              theme={theme}
              type="submit"
              label={t('pay')}
              margin={3}
              width={500}
            />
          )}
        </PaymentForm>
      ) : (
        <ModalSeed isModalOpen={isModalOpen} setOpen={setOpen} theme={theme}>
          <Title theme={theme}>{t('paymentSuccessful')}</Title>
          <Body theme={theme}>{t('resumePayment')}</Body>
          <BodyBold theme={theme}>{`${total / 1000} ${t('bondsVal')} ${total} USD`}</BodyBold>
          <PrimaryBtn theme={theme} width={351} label={t('backProfile')} onClick={() => navigate("/profile")} />
        </ModalSeed>
      )}
    </>
  );
};

const mapToStateProps = (state) => {
  const { paymentSuccess } = state.paymentReducer;
  return {
    paymentSuccess: paymentSuccess,
  };
};

export default connect(mapToStateProps, null)(CardPayment);

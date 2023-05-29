import { Payment } from './constants';

export const paymentRequest = (payload) => {
  return {
    type: Payment.FETCH_PAYMENT,
    payload: payload
  };
};

export const paymentSuccessed = (data) => {
  return {
    type: Payment.PAYMENT_SUCCESS,
    data: data
  };
};

export const paymentFailed = (error) => {
  return {
    type: Payment.PAYMENT_FAILED,
    error: error
  };
};

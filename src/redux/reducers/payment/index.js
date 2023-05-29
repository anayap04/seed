import { Payment } from '../../actions/payment/constants';

const initialState = {
  isLoadingPayment: false,
  paymentSuccess: null,
  paymentError: null
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case Payment.FETCH_PAYMENT:
      return {
        ...state,
        isLoadingPayment: true,
        paymentSuccess: null,
        paymentError: null
      };
    case Payment.PAYMENT_SUCCESS:
      return {
        ...state,
        isLoadingPayment: false,
        paymentSuccess: action.data,
        paymentError: null
      };
    case Payment.PAYMENT_FAILED:
      return {
        ...state,
        isLoadingPayment: false,
        paymentSuccess: null,
        paymentError: action.error
      };
    default:
      return state;
  }
};

export default paymentReducer;

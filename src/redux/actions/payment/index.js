import { Payment } from "./constants"


export const paymentRequest = (payload) => {
  return {
    type: Register.FETCH_PAYMENT,
    payload: payload 
  }
}

export const paymentSuccessed = (data) => {
  return {
    type: Register.PAYMENT_SUCCESS,
    data: data,
  }
}


export const paymentFailed = (error) => {
  return {
    type: Register.PAYMENT_FAILED,
    error: error,
  }
}

import { put } from "redux-saga/effects";

import axios from "axios";
import { paymentFailed, paymentSuccessed } from "../../redux/actions/payment";
const token = localStorage.getItem('token')

export function* payment(payload) {
  try {
    const response = yield axios.post(
      "http://pruebaproyecto3-env.eba-hqp2m6wq.us-east-1.elasticbeanstalk.com/user/payment",
      JSON.stringify(payload.payload),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",
          'Authorization': `Bearer ${token}`,
          accept: "text/html; charset=utf-8",
        },
      }
    );

    if (response.status === 201) {
      yield put(paymentSuccessed(response.data));
    }
  } catch (error) {
    yield put(paymentFailed(error.response.data));
  }
}

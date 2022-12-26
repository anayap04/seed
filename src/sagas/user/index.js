import { put } from "redux-saga/effects";
import axios from "axios";
import { userError, userSucceed, userUpdateError, userUpdateSuccess } from "../../redux/actions/user";
const token = localStorage.getItem('token')
export function* userSaga() {
  try {
    const response = yield axios.get(
      "http://pruebaproyecto3-env.eba-hqp2m6wq.us-east-1.elasticbeanstalk.com/v2/users/profile",
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
    if (response.status === 200) {
      yield put(userSucceed(response.data));
    }
  } catch (error) {
    yield put(userError(error.response.data));
  }
}

export function* userUpdateSaga(payload) {
  try {
    const response = yield axios.put(
      "http://pruebaproyecto3-env.eba-hqp2m6wq.us-east-1.elasticbeanstalk.com/user/update",
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
    if (response.status === 200) {
      yield put(userUpdateSuccess(response.data));
    }
  } catch (error) {
    yield put(userUpdateError(error.response.data));
  }
}

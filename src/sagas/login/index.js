import { put } from 'redux-saga/effects';
import {
  changePasswordError,
  changePasswordSuccess,
  loginFailed,
  loginSuccessed,
  requestNewPassSuccess,
  requestNewPassdError
} from '../../redux/actions/login';
import axios from 'axios';

export function* login(payload) {
  try {
    const response = yield axios.post(
      'http://pruebaproyecto3-env.eba-hqp2m6wq.us-east-1.elasticbeanstalk.com/login',
      JSON.stringify(payload.payload),
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          accept: 'text/html; charset=utf-8'
        }
      },
      { withCredentials: true }
    );

    if (response.status === 200) {
      yield put(loginSuccessed(response.data));
    }
  } catch (error) {
    yield put(loginFailed(error.response.data));
  }
}

export function* requestNewPassword(payload) {
  try {
    const response = yield axios.post(
      'http://pruebaproyecto3-env.eba-hqp2m6wq.us-east-1.elasticbeanstalk.com/requestResetPassword',
      JSON.stringify(payload.payload),
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          accept: 'text/html; charset=utf-8'
        }
      }
    );

    if (response.status === 200) {
      yield put(requestNewPassSuccess(response.data));
    }
  } catch (error) {
    yield put(requestNewPassdError(error.response.data));
  }
}

export function* resetPassword(payload) {
  try {
    const response = yield axios.post(
      'http://pruebaproyecto3-env.eba-hqp2m6wq.us-east-1.elasticbeanstalk.com/resetPassword',
      JSON.stringify(payload.payload),
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          accept: 'text/html; charset=utf-8'
        }
      }
    );

    if (response.status === 200) {
      yield put(changePasswordSuccess(response.data));
    }
  } catch (error) {
    yield put(changePasswordError(error.response.data));
  }
}

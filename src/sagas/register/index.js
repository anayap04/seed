import { put } from 'redux-saga/effects';
import { registerFailed, registerSuccessed } from '../../redux/actions/register';
import axios from 'axios';

export function* signup(payload) {
  try {
    const response = yield axios.post(
      'http://pruebaproyecto3-env.eba-hqp2m6wq.us-east-1.elasticbeanstalk.com/signup',
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

    if (response.status === 201) {
      yield put(registerSuccessed(response.data));
    }
  } catch (error) {
    yield put(registerFailed(error.response.data));
  }
}

import { put } from 'redux-saga/effects';
import axios from 'axios';
import {
  allInitiativesSuccessed,
  allInitiativesError,
  supportInitiativesSuccessed,
  supportInitiativesError
} from '../../redux/actions/initiatives';
const token = localStorage.getItem('token');

export function* allInitiativesSaga() {
  try {
    const response = yield axios.get(
      'http://pruebaproyecto3-env.eba-hqp2m6wq.us-east-1.elasticbeanstalk.com/v2/iniciatives',
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*',
          accept: 'text/html; charset=utf-8'
        }
      }
    );
    if (response.status === 200) {
      yield put(allInitiativesSuccessed(response.data));
    }
  } catch (error) {
    yield put(allInitiativesError(error.response.data));
  }
}

export function* supportInitiativesSaga(payload) {
  try {
    const response = yield axios.put(
      'http://pruebaproyecto3-env.eba-hqp2m6wq.us-east-1.elasticbeanstalk.com/iniciative/support',
      JSON.stringify(payload.payload),
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*',
          Authorization: `Bearer ${token}`,
          accept: 'text/html; charset=utf-8'
        }
      }
    );
    if (response.status === 200) {
      yield put(supportInitiativesSuccessed(response.data));
    }
  } catch (error) {
    yield put(supportInitiativesError(error.response.data));
  }
}

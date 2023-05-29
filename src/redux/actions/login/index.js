import { Login } from './constants';

export const loginRequest = (payload) => {
  return {
    type: Login.FETCH_LOGIN,
    payload: payload
  };
};

export const loginSuccessed = (data) => {
  return {
    type: Login.LOGIN_SUCCESS,
    data: data
  };
};

export const loginFailed = (error) => {
  return {
    type: Login.LOGIN_FAILED,
    error: error
  };
};

export const logout = () => {
  return {
    type: Login.LOGOUT
  };
};

export const changePasswordFetch = (payload) => {
  return {
    type: Login.CHANGE_PASSWORD_FETCH,
    payload: payload
  };
};

export const changePasswordSuccess = (data) => {
  return {
    type: Login.CHANGE_PASSWORD_SUCCESS,
    data: data
  };
};

export const changePasswordError = (error) => {
  return {
    type: Login.CHANGE_PASSWORD_ERROR,
    error: error
  };
};

export const requestNewPass = (payload) => {
  return {
    type: Login.RESQUEST_NEW_PASS_FETCH,
    payload: payload
  };
};

export const requestNewPassSuccess = (data) => {
  return {
    type: Login.RESQUEST_NEW_PASS_SUCCESS,
    data: data
  };
};

export const requestNewPassdError = (error) => {
  return {
    type: Login.RESQUEST_NEW_PASS_ERROR,
    error: error
  };
};

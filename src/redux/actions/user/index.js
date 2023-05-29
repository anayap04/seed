import { User } from './constants';

export const fetchUser = () => {
  return {
    type: User.FETCH_USER
  };
};

export const userSucceed = (data) => {
  return {
    type: User.USER_SUCCESS,
    data: data
  };
};

export const userError = (error) => {
  return {
    type: User.USER_ERROR,
    error: error
  };
};

export const userUpdateFetch = (payload) => {
  return {
    type: User.USER_UPDATE_LOAD,
    payload: payload
  };
};

export const userUpdateSuccess = (data) => {
  return {
    type: User.USER_UPDATE_SUCCESS,
    date: data
  };
};

export const userUpdateError = (error) => {
  return {
    type: User.USER_UPDATE_SUCCESS,
    error: error
  };
};

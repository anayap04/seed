import { Initiatives } from "./constants";

export const fetchAllInitiatives = () => {
  return {
    type: Initiatives.FETCH_ALL_INITIATIVES,
  };
};

export const allInitiativesSuccessed = (data) => {
  return {
    type: Initiatives.ALL_INITIATIVES_SUCCEED,
    data: data,
  };
};

export const allInitiativesError = (error) => {
  return {
    type: Initiatives.ALL_INITIATIVES_ERROR,
    error: error,
  };
};

export const fetchSupportInitiatives = (payload) => {
  return {
    type: Initiatives.FETCH_SUPPORT_INITIATIVES,
    payload: payload
  };
};

export const supportInitiativesSuccessed = (data) => {
  return {
    type: Initiatives.SUPPORT_INITIATIVES_SUCCEED,
    data: data,
  };
};

export const supportInitiativesError = (error) => {
  return {
    type: Initiatives.SUPPORT_INITIATIVES_ERROR,
    error: error,
  };
};

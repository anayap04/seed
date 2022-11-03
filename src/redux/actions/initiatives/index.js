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

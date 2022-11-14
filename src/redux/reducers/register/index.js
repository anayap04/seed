import { Register } from "../../actions/register/constants";

const initialState = {
  isLoading: false,
  registerData: null,
  registerError: null,
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case Register.FETCH_REGISTER:
      return {
        ...state,
        isLoading: true,
      };
    case Register.REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        registerData: action.data,
      };
    case Register.REGISTER_FAILED:
      return {
        ...state,
        isLoading: false,
        registerError: action.error,
      };
    default:
      return state;
  }
};

export default registerReducer;

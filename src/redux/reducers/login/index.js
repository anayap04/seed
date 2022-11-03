import { Login } from "../../actions/login/constants";

const initialState = {
  isLoading: false,
  userData: null,
  loginError: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case Login.FFETCH_LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case Login.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userData: action.data,
      };
    case Login.LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        loginError: action.error,
      };
    case Login.LOGOUT:
      return {
        ...state,
        isLoading: false,
        userData: null,
        loginError: null,
      }
    default:
      return state;
  }
};

export default loginReducer;

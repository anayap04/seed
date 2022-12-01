import { Login } from "../../actions/login/constants";

const initialState = {
  isLoading: false,
  userData: null,
  loginError: null,
  isLoadingChangePass: false,
  passwordChangedSuccess: null,
  passwordChangedError: null,
  isLoadingRequest: false,
  requestNewPassData: null,
  requestNewPassError: null,
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
      };
    case Login.CHANGE_PASSWORD_FETCH:
      return {
        ...state,
        isLoadingChangePass: true,
        passwordChangedSuccess: null,
        passwordChangedError: null,
      };
    case Login.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoadingChangePass: false,
        passwordChangedSuccess: action.data,
        passwordChangedError: null,
      };
    case Login.CHANGE_PASSWORD_ERROR:
      return {
        ...state,
        isLoadingChangePass: false,
        passwordChangedSuccess: null,
        passwordChangedError: action.error,
      };
    case Login.RESQUEST_NEW_PASS_FETCH:
      return {
        ...state,
        isLoadingRequest: true,
        requestNewPassData: null,
        requestNewPassError: null,
      }
    case Login.RESQUEST_NEW_PASS_SUCCESS:
      return {
        ...state,
        isLoadingRequest: false,
        requestNewPassData: action.data,
        requestNewPassError: null,
      } 
    case Login.RESQUEST_NEW_PASS_ERROR:
      return {
        ...state,
        isLoadingRequest: false,
        requestNewPassData: null,
        requestNewPassError: action.error,
      }
    default:
      return state;
  }
};

export default loginReducer;

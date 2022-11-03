import { User } from "../../actions/user/constants";

const initialState = {
  isLoading: false,
  userInfo: null,
  userError: null,
  userUpdated: null,
  userUpdateError: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case User.FETCH_USER:
      return {
        ...state,
        isLoading: true,
      };
    case User.USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userInfo: action.data,
      };
    case User.USER_FAILED:
      return {
        ...state,
        isLoading: false,
        userError: action.error,
      };
    case User.USER_UPDATE_LOAD:
      return {
        ...state,
        isLoading: true,
      };
    case User.USER_UPDATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userUpdated: action.data,
      };
    case User.USER_UPDATE_ERROR:
      return {
        ...state,
        isLoading: false,
        userUpdateError: action.error,
      };
    default:
      return state;
  }
};

export default userReducer;

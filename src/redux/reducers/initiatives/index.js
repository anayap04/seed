import { Initiatives } from "../../actions/initiatives/constants";

const initialState = {
  isLoading: false,
  allInitiatives: null,
  initiativesError: null,
  initiativeSupported: null,
  initiativeSupportedError: null,
};

const initiativesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Initiatives.FETCH_ALL_INITIATIVES:
      return {
        ...state,
        isLoading: true,
      };
    case Initiatives.ALL_INITIATIVES_SUCCEED:
      return {
        ...state,
        isLoading: false,
        allInitiatives: action.data,
      };
    case Initiatives.ALL_INITIATIVES_ERROR:
      return {
        ...state,
        isLoading: false,
        initiativesError: action.error,
      };
    case Initiatives.FETCH_SUPPORT_INITIATIVES:
      return {
        ...state,
        isLoading: true,
      }
    case Initiatives.SUPPORT_INITIATIVES_SUCCEED: 
      return {
        ...state,
        isLoading: false,
        initiativeSupported: action.data,
        initiativeSupportedError: null,
      }
    case Initiatives.SUPPORT_INITIATIVES_ERROR:
      return {
        ...state,
        isLoading: false,
        initiativeSupported: null,
        initiativeSupportedError: action.error,
      }
    default:
      return state;
  }
};

export default initiativesReducer;

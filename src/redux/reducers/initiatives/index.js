import { Initiatives } from "../../actions/initiatives/constants";

const initialState = {
  isLoading: false,
  allInitiatives: null,
  initiativesError: null,
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
    default:
      return state;
  }
};

export default initiativesReducer;

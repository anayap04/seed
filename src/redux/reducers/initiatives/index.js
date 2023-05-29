import { Initiatives } from '../../actions/initiatives/constants';

const initialState = {
  isLoadingAllInitiatives: false,
  allInitiatives: null,
  initiativesError: null,
  isLoadingSupported: false,
  initiativeSupported: null,
  initiativeSupportedError: null
};

const initiativesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Initiatives.FETCH_ALL_INITIATIVES:
      return {
        ...state,
        isLoadingAllInitiatives: true
      };
    case Initiatives.ALL_INITIATIVES_SUCCEED:
      return {
        ...state,
        isLoadingAllInitiatives: false,
        allInitiatives: action.data
      };
    case Initiatives.ALL_INITIATIVES_ERROR:
      return {
        ...state,
        isLoadingAllInitiatives: false,
        initiativesError: action.error
      };
    case Initiatives.FETCH_SUPPORT_INITIATIVES:
      return {
        ...state,
        isLoadingSupported: true
      };
    case Initiatives.SUPPORT_INITIATIVES_SUCCEED:
      return {
        ...state,
        isLoadingSupported: false,
        initiativeSupported: action.data,
        initiativeSupportedError: null
      };
    case Initiatives.SUPPORT_INITIATIVES_ERROR:
      return {
        ...state,
        isLoadingSupported: false,
        initiativeSupported: null,
        initiativeSupportedError: action.error
      };
    default:
      return state;
  }
};

export default initiativesReducer;

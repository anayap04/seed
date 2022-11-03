import { createStore, applyMiddleware } from "redux";
import createSagaMiddleWare from "redux-saga";
import rootReducer from "../redux/reducers";
import appSagas from "../sagas";
// create middleware of redux-saga
const sagaMiddleWare = createSagaMiddleWare();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
// run saga
sagaMiddleWare.run(appSagas);
export default store;

import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./login";
import userReducer from "./user";
import initiativesReducer from "./initiatives";
import registerReducer from "./register";

export default combineReducers({loginReducer, userReducer, initiativesReducer, registerReducer})
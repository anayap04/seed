import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./login";
import userReducer from "./user";
import initiativesReducer from "./initiatives";

export default combineReducers({loginReducer, userReducer, initiativesReducer})
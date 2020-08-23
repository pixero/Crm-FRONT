import {combineReducers} from "redux";
import {authReducer} from "./AuthReducer";

export const mainReducer = combineReducers({
    auth: authReducer
})
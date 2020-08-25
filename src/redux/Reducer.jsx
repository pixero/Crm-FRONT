import {combineReducers} from "redux";
import {Authreducer} from './authorization/Reducer'
import {profileReducer} from "./profile/Reducer";

export const reducer = combineReducers({
    auth: Authreducer,
    profile:profileReducer
})
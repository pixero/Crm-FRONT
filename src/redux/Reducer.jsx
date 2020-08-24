import {combineReducers} from "redux";
import {Authreducer} from './authorization/Reducer'

export const reducer = combineReducers({
    auth: Authreducer
})
import { combineReducers } from "redux";

import UserAddReducer from "./adduser";
import UserShowReducer from './showuser'


const rootReducer = combineReducers({
    UserAddReducer,
    UserShowReducer
});
export default rootReducer;

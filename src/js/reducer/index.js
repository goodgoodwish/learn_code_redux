import { combineReducers } from "redux"

import tweetsDS from "./tweetsReducer"
import userDS from "./userReducer"
import stockDS from "./stockReducer"

export default combineReducers({
	tweetsDS,
	userDS,
	stockDS,
});

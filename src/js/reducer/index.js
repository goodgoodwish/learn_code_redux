import { combineReducers } from "redux"

import tweetsDS from "./tweetsReducer"
import userDS from "./userReducer"

export default combineReducers({
	tweetsDS,
	userDS,
});

import {combineReducers, createStore} from "redux"

const userReducer = function (state = {}, action) {
	switch (action.type) {
		case 'CHANGE_NAME':
			state = {...state, name: action.payload};
			break;
		case 'CHANGE_AGE':
			state = {...state, age: action.payload};
			break;
		default:
			// statements_def
			break;
	}
	return state;
}

const tweetReducer = function (state = [], action) {
	switch (action.type) {
		case 'ADD_TWEET':
			state = [...state, action.payload];
			break;
		default:
			// statements_def
			break;
	}
	return state;
}

const reducers = combineReducers({
	userA: userReducer,
	tweetsB: tweetReducer,
})

const store = createStore(reducers);

store.subscribe(() => {
  console.log("store changed", store.getState());
})

store.dispatch({type: "CHANGE_NAME", payload: ''})
store.dispatch({type: "CHANGE_NAME", payload: 'Juliet'})
store.dispatch({type: "CHANGE_AGE", payload: 18})

store.dispatch({type: "ADD_TWEET", payload: ''})
store.dispatch({type: "ADD_TWEET", payload: 'Good wish'})
store.dispatch({type: "ADD_TWEET", payload: 'Mindful listening'})

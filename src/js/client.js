import {applyMiddleware, combineReducers, createStore} from "redux"

const logger = (store) => (next) => (action) => {
	console.log('Log: Action fired, ', action);
	//action.payload = 1;
	next(action);
}

const error = (store) => (next) => (action) => {
	try {
		next(action);
	} catch(e) {
		console.log('Error : ', e.message);
	}
}

const middleware = applyMiddleware(logger, error);

const singleReducer = function (initState = 0, action) {
	switch (action.type) {
		case 'INC':
			initState += action.payload;
			break;
		case 'DEC':
			initState -= action.payload;
			break;
		case 'E':
			throw new Error('Throw a new error!!!!');
			break;
		default:
			// statements_def
			break; 
	}
	return initState;
}
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
			state = [...state, {id: Date.now(), text:action.payload}];
			break;
		default:
			// statements_def
			break;
	}
	return state;
}

const reducers = combineReducers({
	useRS: userReducer,
	tweetsRS: tweetReducer,
})

//const store = createStore(reducers);
//const store = createStore(singleReducer, 1, middleware);
const store = createStore(reducers, {}, middleware);


store.subscribe(() => {
  console.log("store changed", store.getState());
})

store.dispatch({type: "CHANGE_NAME", payload: ''})
store.dispatch({type: "CHANGE_NAME", payload: 'Juliet'})
store.dispatch({type: "CHANGE_AGE", payload: 18})
//
//store.dispatch({type: "ADD_TWEET", payload: ''})
//store.dispatch({type: "ADD_TWEET", payload: 'Good wish'})
//store.dispatch({type: "ADD_TWEET", payload: 'Mindful listening'})

//store.dispatch({type: "INC", payload: 1})
//store.dispatch({type: "DEC", payload: 1})
//store.dispatch({type: "E", payload: 1})

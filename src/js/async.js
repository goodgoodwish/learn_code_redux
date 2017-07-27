import {applyMiddleware, combineReducers, createStore} from "redux"
import {createLogger} from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import axios from "axios"

const initState = {
	fetching: false,
	fetched: false,
	users: [],
	error: null,
}
const userReducer = function (state = initState, action) {
	switch (action.type) {
		case 'CHANGE_NAME':
			state = {...state, name: action.payload};
			break;
		case 'CHANGE_AGE':
			state = {...state, age: action.payload};
			break;
		case 'FETCH_USERS_START':
			state = {...state, fetching: true};
			break;
		case 'RECEIVE_USERS':
			state = {...state, fetching: false, fetched: true, users: action.payload};
			break;
		case 'FETCH_USERS_ERROR':
			state = {...state, fetching: false, error: action.payload};
			break;
		default:
			// statements_def
			break;
	}
	return state;
}

const yiReducer = function (state = [], action) {
	switch (action.type) {
		case 'YI_PENDING':
			state = [...state, {id: Date.now(), text:'start fetching.'}];
			break;
		case 'YI_FULFILLED':
			state = [...state, {id: Date.now(), text:action.payload}];
			break;
		case 'YI_REJECTED':
			state = [...state, {id: Date.now(), fetched: false, theError:action.payload}];
			break;
		default:
			// statements_def
			break;
	}
	return state;
}


const reducers = combineReducers({
	useRS: userReducer,
	yiRS: yiReducer,
})


const middleware = applyMiddleware(promise(), thunk, createLogger());

const store = createStore(reducers, {}, middleware);

export function doSomething() {

	console.log('Demo async dispatch, and Redux promise.');
	
  // promise() for Redux, return action _PENDING _FULFILLED _REJECTED,
  store.dispatch({
    type: "YI",
    payload: axios.get("http://rest.learncodeaaa.academy/api/wstern/users"),
  });

  store.dispatch((dispatch) => {
    dispatch({
      type: 'FETCH_USERS_START'
    });

    axios.get("http://rest.learncode.academy/api/wstern/users")
      .then(function(response) {
        dispatch({
          type: "RECEIVE_USERS",
          payload: response.data
        });
      })
      .catch((err) => {
        dispatch({
          type: 'FETCH_USERS_ERROR',
          payload: err
        });
      });
  });

}

//export {doSomething};

export function hello() {
  return "Hello";
}

const initState = {
	user: {
		id: null,
		name: null,
		age: null,
	},
	fetching: false,
	fetched: false,
	error: null,
}

export default function reducer(state = initState, action) {
	switch (action.type) {
		case 'CHANGE_NAME':
			state = {
				...state, 
				user: {...state.user, name: action.payload}
			};
			break;
		case 'CHANGE_AGE':
			state = {
				...state, 
				user: {...state.user, age: action.payload}
			};
			break;
		case 'FETCH_USER_START':
			state = {...state, fetching: true};
			break;
		case 'FETCH_USER_FULFILLED':
			state = {...state, fetching: false, fetched: true, user: action.payload.data[1]};
			break;
		case 'FETCH_USER_ERROR':
			state = {...state, fetching: false, error: action.payload};
			break;
		default:
			// statements_def
			break;
	}
	return state;
}

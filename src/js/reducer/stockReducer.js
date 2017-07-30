const initState = {
	fetched: false,
	fetching: false,
  stocks: [{
    //price: 12.11,
    qty: 420
  }]
};
export default function reducer(state = initState, action) {
	switch (action.type) {
		case 'FETCH_STOCK_PENDING':
			state = {...state, fetching: true};
			break;
		case 'FETCH_STOCK_FULFILLED':
			state = {...state, fetching: false, fetched: true, stocks: action.payload.data};
			break;
		case 'FETCH_STOCK_ERROR':
			state = {...state, fetching: false, error: action.payload};
			break;
		case 'CLEAR_STOCK':
			state = {
				...state,
				fetching: false, fetched: true,
			  stocks: [],
			};
			break;
		case 'ADD_STOCK_FULFILLED':
			state = {...state, fetching: false, fetched: true, 
				stocks: [...state.stocks, action.payload.data]
			};
			break;
		default:
			// statements_def
			break;
	}
	return state;
}

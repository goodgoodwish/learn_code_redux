const initState = {
	fetched: false,
	fetching: false,
  stocks: [{
    //price: 12.11,
    qty: 420
  }]
};
export default function reducer(state = initState, action) {
	let stockName='', qty=0, price=0, stockIdx;
	let newStocks = [];
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
		case 'DELETE_STOCK_FULFILLED':
		  stockName = action.payload.data.stockName;
			//state = {...state, fetching: false, fetched: true, 
			//	stocks: state.stocks.filter(stock => stock.stockName !== stockName),
			//};
		  newStocks = state.stocks.concat();
			stockIdx = newStocks.findIndex(stock => stock.stockName === stockName);
			newStocks.splice(stockIdx, 1);
			state = {...state, fetching: false, fetched: true, 
				stocks: newStocks,
			};
			console.log('idx:', stockIdx, "state: ", state);
			break;
		case 'UPDATE_STOCK_FULFILLED':
		  let {stockName, qty, price} = action.payload.data;
			newStocks = [...state.stocks];
			stockIdx = newStocks.findIndex(stock => stock.stockName === stockName);
			newStocks[stockIdx].qty += qty;
			newStocks[stockIdx].price += price;
			state = {...state, fetching: false, fetched: true, 
				stocks: newStocks,
			};
			break;
		default:
			// statements_def
			break;
	}
	return state;
}

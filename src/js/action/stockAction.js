import axios from "axios"

export function fetchStock() {
  // async AJAX action,
  //return function(dispatch) {
  //  // promise() for Redux, return action _PENDING _FULFILLED _REJECTED,
  //  dispatch({
  //    type: "FETCH_STOCK",
  //    payload: axios.get("/stock"),
  //  });
  //}

  return {
    type: "FETCH_STOCK_FULFILLED",
    payload: {
      data: [{
        stockName: 'TSLA',
        price: 320.99,
        qty: 58
      }, {
        stockName: 'AMZN',
        price: 920.99,
        qty: 10
      }, ]
    }
  }
}

export function clearStock() {
	return {
		type: 'CLEAR_STOCK',
		payload: null,
	}
}

export function addStock(name, price, qty) {
	return {
		type: 'ADD_STOCK_FULFILLED',
		payload: {
      data: {
        stockName: name,
        price: Number(price),
        qty: Number(qty),
      }
    }
	}
}

export function deleteStock(name) {
	return {
		type: 'DELETE_STOCK_FULFILLED',
		payload: {
      data: {
        stockName: 'COST',
      }
    }
	}
}

export function updateStock(name, price, qty) {
	return {
		type: 'UPDATE_STOCK_FULFILLED',
		payload: {
      data: {
        stockName: 'COST',
        price: 10,
        qty: 7,
      }
    }
	}
}

export function updateStockPrice(name, price) {

  let stockUrl = 'http://download.finance.yahoo.com/d/quotes.csv?s=COST&f=a';
  //stockUrl = 'http://rest.learncode.academy/api/test123/tweets';
  // Promise(), and async AJAX action,
  return function(dispatch) {
    // promise() for Redux, return action _PENDING _FULFILLED _REJECTED,
    dispatch({
      type: "UPDATE_STOCK_PRICE",
      payload: axios.get(stockUrl),
    });
  }
}


export function setStockName(name) {
	return {
		type: 'CHANGE_STOCK_NAME',
		payload: name,
	}
}

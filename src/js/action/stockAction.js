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
        stockName: 'COST',
        price: 168.29,
        qty: 70
      }
    }
	}
}

export function setStockName(name) {
	return {
		type: 'CHANGE_STOCK_NAME',
		payload: name,
	}
}

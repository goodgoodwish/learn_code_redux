import {createStore} from "redux"

const reducer = (initialState = 0, action) => {
  if (action.type === "INC") {
    return initialState + action.payload;
  } else if (action.type === "DEC") {
    return initialState - action.payload;
  }
  return initialState;
}

const store = createStore(reducer, 1)
store.subscribe(() => {
  console.log("store changed", store.getState());
})

store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "DEC", payload: 1})
store.dispatch({type: "DEC", payload: 41})
store.dispatch({type: "DDD", payload: 1})
store.dispatch({type: "EEE", payload: 1})
store.dispatch({type: "EEE", payload: 1})

var a = {name: "Charlie"}
var b = {...a, age: 42}
console.log(a, b);

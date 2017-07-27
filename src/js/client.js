import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import Layout from "./components/Layout"
import store from "./store"

const app = document.getElementById('app');

// Any component, anywhere down the chain can import data from the Redux store,
// and can also dispatch actions,

ReactDOM.render(<Provider store = {store}>
	<Layout />
</Provider>, app);


import React from "react"
import { connect } from "react-redux"

import { fetchUser, fetchLocalUser } from "../action/userAction"
import { fetchStock, addStock, clearStock } from "../action/stockAction"

import Footer from "./Footer"
import Header from "./Header"

@connect((store) => {
  return {
    user: store.userDS.user,
    stockFetched: store.stockDS.fetched,
    stockFetching: store.stockDS.fetching,
    stocks: store.stockDS.stocks,
  }
})

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome ",
    };
  }

  changeTitle(title) {
    this.setState({title: title});
  }

  componentWillMount() {
    //this.props.dispatch(fetchStock());
    this.props.dispatch(fetchLocalUser());
    console.log(this.props);
  }

  fetchStock() {
    this.props.dispatch(fetchStock());
  }

  clearStock() {
    this.props.dispatch(clearStock());
  }

  addStock() {
    this.props.dispatch(addStock());
  }

  render() {
    console.log("Init:", this.props);

    // Destructuring assignment,
    const { user, stocks } = this.props;
    console.log('Stocks: ', stocks);

    let listStock = <li>...</li>;
    if (!this.props.stockFetched) {
      listStock = <li key="1" >Fetching ...</li>;
      console.log("Li: ", listStock);
    } else {
      //listStock = this.props.stocks.map(
      listStock = stocks.map(
        val => <li key={val.stockName}>{val.stockName + ', ' + val.price + ', ' + val.qty} </li>
      );
    }

    return (
      <div>
        <h4> User: {this.props.user.name} , User (Destructuring assignment): {user.name}</h4>
        <button onClick={this.fetchStock.bind(this)}>fetchStock</button>
        <button onClick={this.addStock.bind(this)}>addStock</button>
        <button onClick={this.clearStock.bind(this)}>clearStock</button>
        <ul>{listStock}</ul>


        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}
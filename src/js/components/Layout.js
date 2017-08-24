import React from "react"
import { connect } from "react-redux"

import { fetchUser, fetchLocalUser } from "../action/userAction"
import { fetchStock, addStock, updateStock, updateStockPrice, deleteStock, clearStock } from "../action/stockAction"

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
      qty: 18,
      price: 150,
      stockName: 'COST'
    };
  }

  changeTitle(title) {
    this.setState({title: title});
  }

  changeInput(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const elementName = target.name;

    this.setState({
      [elementName]: value,
    })
    console.log('changeInput: : ', elementName, value);
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
    const {stockName, qty, price} = this.state;
    this.props.dispatch(addStock(stockName, qty, price));
  }
  updateStock() {
    this.props.dispatch(updateStock());
  }
  updateStockPrice() {
    this.props.dispatch(updateStockPrice());
  }
  deleteStock() {
    this.props.dispatch(deleteStock());
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
        <h4> User: {this.props.user.name} , User (Destructuring assignment [user.name]): {user.name}</h4>
        <br />
        <form>
          <lable>
            Name:
            <input name="stockName" value={this.state.stockName} onChange={this.changeInput.bind(this)} />
          </lable>
          <lable>
            Quantity:
            <input name="qty" value={this.state.qty} onChange={this.changeInput.bind(this)} />
          </lable>
          <lable>
            Price:
            <input name="price" value={this.state.price} onChange={this.changeInput.bind(this)} />
          </lable>
        </form><hr />

        <button onClick={this.fetchStock.bind(this)}>fetchStock</button>
        <button onClick={this.addStock.bind(this)}>addStock</button>
        <button onClick={this.updateStock.bind(this)}>updateStock</button>
        <button onClick={this.deleteStock.bind(this)}>deleteStock</button>
        <button onClick={this.clearStock.bind(this)}>clearStock</button>
        <button onClick={this.updateStockPrice.bind(this)}>updateStockPrice</button>
        <ul>{listStock}</ul>


        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}
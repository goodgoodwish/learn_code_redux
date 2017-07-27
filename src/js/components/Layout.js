import React from "react"
import { connect } from "react-redux"

import { fetchUser } from "../action/userAction"
import { fetchTweet, clearTweet } from "../action/tweetAction"

import Footer from "./Footer"
import Header from "./Header"

@connect((store) => {
  return {
    user: store.userDS.user,
    userFetched: store.userDS.fetched,
    tweets: store.tweetsDS.tweets,
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
    this.props.dispatch(fetchUser());
  }

  fetchTweet() {
    this.props.dispatch(fetchTweet());
    console.log(this.props);
  }

  clearTweet() {
    this.props.dispatch(clearTweet());
    console.log(this.props);
  }

  render() {
    console.log(this.props);

    const listTweet = this.props.tweets.map(tweet => <li key={tweet.id}>{tweet.text}</li>);
    return (
      <div>
        <h1>Welcome user: {this.props.user.name}</h1>
        <button onClick={this.fetchTweet.bind(this)}>Load tweet</button>
        <button onClick={this.clearTweet.bind(this)}>Clear tweet</button>
        <ul>{listTweet}</ul>


        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}
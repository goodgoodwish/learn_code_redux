import axios from "axios"

// syntax, export a function for each action type,

export function fetchTweet() {
	// return a thunk, from dispatching thunk middleware,
  return function(dispatch) {

  	dispatch({type: "FETCH_TWEET"});

    axios.get("http://rest.learncode.academy/api/test123/tweets")
      .then(function(response) {
        dispatch({
          type: "FETCH_TWEET_FULFILLED",
          payload: response.data
        });
      })
      .catch((err) => {
        dispatch({
          type: 'FETCH_TWEET_REJEDTED',
          payload: err
        });
      });
  }
}

export function addTweet(id, text) {
	return {
		type: 'ADD_TWEET',
		payload: {
			id,
			text,
		}
	}
}

export function updateTweet(id, text) {
	return {
		type: 'UPDATE_TWEET',
		payload: {
			id,
			text,
		}
	}
}

export function deleteTweet(id) {
	return {
		type: 'DELETE_TWEET',
		payload: id,
	}
}

export function clearTweet() {
	return {
		type: 'CLEAR_TWEET',
	}
}


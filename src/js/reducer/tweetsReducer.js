export default function reducer(state = {
	tweets: [],
	fetching: false,
	fetched: false,
	error: null,
}, action) {
	switch (action.type) {
		case 'FETCH_TWEET':
			state = {...state, fetching: true};
			break;
		case 'FETCH_TWEET_REJECTED':
			state = {...state, fetching: false, error: action.payload};
			break;
		case 'FETCH_TWEET_FULFILLED':
			state = {...state, fetching: false, fetched: true, tweets: action.payload};
			break;
		case 'ADD_TWEET':
			state = {...state,
			  tweets: [...state.tweets, action.payload]
			};
			break;
		case 'UPDATE_TWEET':
		  const {id, text} = action.payload;
		  newTweets = state.tweets.map(function (val) {
		  	if (val.id === id) {
		  		val.text = text;
		  	}
		  	return val;
		  });

			state = {...state,
			  tweets: newTweets,
			};
			break;
		case 'DELETE_TWEET':
			state = {...state,
			  tweets: state.tweets.filter(tweet => tweet.id !== action.payload),
			};
			break;
		case 'CLEAR_TWEET':
			state = {...state,
			  tweets: [],
			};
			break;
		default:
			// statements_def
			break;
	}
	return state;
}

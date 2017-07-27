import axios from "axios"

export function fetchUserFake() {
	// faked async AJAX action,
	return {
		type: 'FETCH_USER_FULFILLED',
		payload: {
			name: "Yi",
			age: 42
		}
	}
}

export function fetchUser() {
  // async AJAX action,
  return function(dispatch) {
    // promise() for Redux, return action _PENDING _FULFILLED _REJECTED,
    dispatch({
      type: "FETCH_USER",
      payload: axios.get("http://rest.learncode.academy/api/wstern/users"),
    });

  }
}


export function setUserName(name) {
	return {
		type: 'CHANGE_NAME',
		payload: name,
	}
}

export function setUserAge(age) {
	return {
		type: 'CHANGE_AGE',
		payload: age,
	}
}

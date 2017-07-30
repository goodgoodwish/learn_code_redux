import axios from "axios"

export function fetchLocalUser() {
	// faked async AJAX action,
  return {
    type: 'FETCH_LOCAL_USER_FULFILLED',
    payload: {
      data: {
        user: {
          id: 1,
          name: "Charlie Yi",
          age: 42,
        }
      }
    }
  }

}

export function fetchUser() {
  // async AJAX action,
  return function(dispatch) {
    // promise() for Redux, return action _PENDING _FULFILLED _REJECTED,
    dispatch({
      type: "FETCH_LOCAL_USER",
      payload: axios.get("/user"),
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

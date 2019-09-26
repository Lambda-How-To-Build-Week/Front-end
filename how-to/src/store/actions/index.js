import axiosWithAuth from "../../utils/axiosWithAuth";
import axios from "axios";

//Login Action

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = (username, password) => dispatch => {
  dispatch({ type: LOGIN_START });
  return axiosWithAuth()
    .post(`https://backend-v1.herokuapp.com/api/users/login`, {
      username: username,
      password: password
    })
    .then(res => {
      // localStorage.setItem('token',res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      return true;
    })
    .catch(res => {
      dispatch({
        type: LOGIN_FAILURE,
        payload: res.data
      });
    });
};

//Registration Action

export const REGISTRATION_START = "REGISTRATION_START";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILURE = "REGISTRATION_FAILURE";

export const addUser = user => dispatch => {
  dispatch({ type: REGISTRATION_START });
  axios
    .post(`https://backend-v1.herokuapp.com/api/users/register`, {
      username: user.username,
      password: user.password
    })
    .then(res => {
      // localStorage.setItem('token', res.data.token);
      console.log(res.data);
      dispatch({ type: REGISTRATION_SUCCESS, payload: res.data });
      return true;
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: REGISTRATION_FAILURE, payload: err.response });
    });
};

// Get Tutorial

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchItem = getStuff => dispatch => {
  dispatch({ type: FETCH_START });
  axiosWithAuth()
    .get(
      `https://backend-v1.herokuapp.com/api/auth/:id/posts

    `,
      getStuff
    )
    .then(res => {
      console.log("fetched items", res);
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_FAILURE, payload: err.response });
    });
};

// New Tutorial
export const TUTORIAL_START = "TUTORIAL_START";

export const newTutorial = addStuff => dispatch => {
  dispatch({ type: TUTORIAL_START });
  axiosWithAuth()
    .post("https://backend-v1.herokuapp.com/api/auth/:id/posts", addStuff)
    .then(res => {
      console.log("added item", res.data);
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
      return true;
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_FAILURE });
    });
};

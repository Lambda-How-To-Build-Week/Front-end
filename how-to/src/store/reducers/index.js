import {
  REGISTRATION_START,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  TUTORIAL_START
} from "../actions/index";

//REGISTRATION

const initialState = {
  error: "",
  fetchingData: false,
  users: [],
  addUser: []
};

export const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_START:
      return {
        ...state,
        error: "",
        fetchingData: true
      };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        addUser: action.payload,
        error: "",
        fetchingData: false,
        username: action.payload
      };
    case REGISTRATION_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingData: false
      };
    default:
      return state;
  }
};

//LOGIN

const initialState = {
  isLoadingLOGIN: false,
  successLOGIN: false,
  username: "",
  password: ""
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoadingLOGIN: true,
        successLOGIN: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoadingLOGIN: false,
        successLOGIN: true,
        username: action.payload,
        password: action.payload
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isloadingLOGIN: false,
        successLOGIN: false,
        username: "",
        password: ""
      };
    default:
      return state;
  }
};

// FETCHING / NEW TUTORIAL

export const initialState = {
  data: [],
  error: "",
  fetchingData: false
};

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, fetching: true };
    case TUTORIAL_START:
      return { ...state, fetching: true };
    case FETCH_SUCCESS:
      return { ...state, data: action.payload, fetching: false };
    case FETCH_FAILURE:
      return { ...state, error: action.payload, fetching: false };
    // case SEARCH_ITEM:
    //     return {
    //         ...state,
    //         filteredItems: action.payload
    //     }
    default:
      return state;
  }
};

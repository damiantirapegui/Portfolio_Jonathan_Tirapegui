// import {
//   FETCH_REPOS_FAILURE,
//   FETCH_REPOS_REQUEST,
//   FETCH_REPOS_SUCCESS,
// } from "/@fs/C:/Users/Damian/OneDrive/Dokument/FE23/Frontend-ramverk/Portfolio-React/src/redux/actions.js";

import {
  FETCH_REPOS_FAILURE,
  FETCH_REPOS_REQUEST,
  FETCH_REPOS_SUCCESS,
} from "./action";

const initialState = {
  repos: [],
  loading: false,
  error: null,
};

const repoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REPOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        repos: action.payload, // Uppdaterat här
        error: null,
      };
    case FETCH_REPOS_FAILURE:
      return {
        ...state,
        loading: false,
        repos: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default repoReducer;

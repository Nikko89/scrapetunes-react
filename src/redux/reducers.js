import { combineReducers } from "redux";

const resultsDisplay = (state = [], action) => {
  switch (action.type) {
    case "SEARCH_QUERY":
      return action.query.results;
    case "KILL_QUERY":
      state = [];
      return state;
    default:
      return state;
  }
};

/* const resultsDisplay = (state = "", action) => {
  switch (action.type) {
    case "SEARCH_QUERY":
      let newState = `https://itunes.apple.com/search?term=${
        action.query
      }&limit=25&entity=album`;
      state = newState;
      return state;
    case "KILL_QUERY":
      state = "";
      return state;
    default:
      return state;
  }
}; */
export default resultsDisplay;

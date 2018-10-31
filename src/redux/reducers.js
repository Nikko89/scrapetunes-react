import { combineReducers } from "redux";

const resultsDisplay = (state = [], action) => {
  switch (action.type) {
    case "SEARCH_QUERY":
      const query = [];
      fetch(
        `https://itunes.apple.com/search?term=${
          action.query
        }&limit=25&entity=album`
      )
        .then(res => res.json())
        .then(res => res.results.map(item => query.push(item)))
        .catch(error => console.log(error));
      state = query;
      return state;
    default:
      return state;
  }
};

/* const resultsDisplay = (state = "", action) => {
  switch (action.type) {
    case "SEARCH_QUERY":
      state = action.query;
      return state;
    default:
      return state;
  }
}; */
export default resultsDisplay;

import { combineReducers } from "redux";
import { ActionTranslate } from "material-ui/svg-icons";

const fetchedMusic = (state = [], action) => {
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

const layoutState = (state = "verticalView", action) => {
  let newState;
  switch (action.type) {
    case "VERTICAL_VIEW":
      newState = "verticalView";
      return newState;
    case "GRID_VIEW":
      newState = "gridView";
      return newState;
    default:
      return state;
  }
};

const reducers = combineReducers({ music: fetchedMusic, layout: layoutState });

export default reducers;

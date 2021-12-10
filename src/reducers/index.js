import { combineReducers } from "redux";
import movies from "./movies";
import videos from "./videos";

export default combineReducers({
  movies,
  videos,
});

import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import phonesPage from "./phonesPage";

import phones from "./phones";

export default combineReducers({
  routing: routerReducer,
  phones,
  phonesPage
});
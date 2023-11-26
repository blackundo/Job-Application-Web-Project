import { combineReducers } from "redux";
import LoginReducer from "./storeLogin";
import jobReducer from "./PostJob";

export default combineReducers({
  login: LoginReducer,
  job: jobReducer,
});

import { combineReducers } from "redux";
<<<<<<< HEAD
import LoginReducer from "./storeLogin";
import jobReducer from "./PostJob";

export default combineReducers({
  login: LoginReducer,
  job: jobReducer,
=======
import Login from "./storeLogin";
import Jobs from "./StoreJobs";
export default combineReducers({
  Login,
  // Jobs,
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505
});

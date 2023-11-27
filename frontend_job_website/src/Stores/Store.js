

import { createStore, applyMiddleware } from "redux";
import CombineReducers from "./CombineReducers";
import thunk from "redux-thunk";
import authMiddleware from "../Middleware/authMiddleware";

const store = createStore(
  CombineReducers,
  applyMiddleware(thunk, authMiddleware)
);

export default store;

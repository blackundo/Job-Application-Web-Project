<<<<<<< HEAD
// src/store.js
import { createStore, applyMiddleware } from "redux";
import CombineReducers from "./CombineReducers";
import thunk from "redux-thunk";
import authMiddleware from "../Middleware/authMiddleware";

const store = createStore(
  CombineReducers,
  applyMiddleware(thunk, authMiddleware)
);

export default store;
=======
// import { createStore } from "redux";
// import LoginReducer from "./storeLogin";

// const store = createStore(LoginReducer);
// export default store;
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505

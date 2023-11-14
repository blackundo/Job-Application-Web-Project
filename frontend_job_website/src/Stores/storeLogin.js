import { createStore, applyMiddleware } from "redux";
import {
  REFRESH_TOKEN_FAILURE,
  REFRESH_TOKEN_SUCCESS,
} from "../Utils/RefreshToken";
import { PROFILE } from "../Utils/TokenToProfile";
import thunk from "redux-thunk";
import authMiddleware from "../Middleware/authMiddleware";

const initialState = {
  isLoggedIn: false,
  token: null,
  profile: null,
  error: null,
  role: null,
};
const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("Token", JSON.stringify(action.payload));
      console.log("Login");
      return { ...state, isLoggedIn: true, token: action.payload };
    case "LOGOUT":
      localStorage.removeItem("Profile");
      localStorage.removeItem("Token");
      return { ...state, isLoggedIn: false, token: null };
    case PROFILE:
      localStorage.setItem("Profile", JSON.stringify(action.payload));
      console.log(action.payload);
      return {
        ...state,
        profile: action.payload.profile,
        role: action.payload.role,
      };
    case REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        error: null,
      };
    case REFRESH_TOKEN_FAILURE:
      return {
        ...state,
        token: null,
        error: "Refresh token failed.",
      };
    default:
      return state;
  }
};
export default LoginReducer;

// const store = createStore(LoginReducer, applyMiddleware(thunk, authMiddleware));
// export default store;

<<<<<<< HEAD
import {
  REFRESH_TOKEN_FAILURE,
  REFRESH_TOKEN_SUCCESS,
} from "../Utils/RefreshToken";
import { PROFILE } from "../Utils/TokenToProfile";

const initialState = {
  token: null,
  acc: null,
  error: null,
};
const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("Token", JSON.stringify(action.payload));
      console.log("Login");
      return { ...state, token: action.payload };
    case "LOGOUT":
      localStorage.removeItem("Profile");
      localStorage.removeItem("Token");
      return { ...state, token: null };
    case PROFILE:
      console.log("Profile");
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
=======
import { createStore } from "redux";
const initialState = {
  isLoggedIn: false,
  user: null,
  profile: null,
};
function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { ...state, isLoggedIn: true, user: action.payload };
    case "LOGOUT":
      localStorage.removeItem("user");
      return { ...state, isLoggedIn: false, user: null };
    case "PROFILE":
      return { ...state, profile: action.payload };
    default:
      return state;
  }
}

const store = createStore(LoginReducer);
export default store;
>>>>>>> 676d1e3ba76ba2ce92afb318650fea72a2fba505

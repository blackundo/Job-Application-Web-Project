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

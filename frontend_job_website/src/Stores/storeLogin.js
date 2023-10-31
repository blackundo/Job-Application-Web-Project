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

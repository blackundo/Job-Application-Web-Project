import { createStore } from "redux";
const initialState = {
  isLoggedIn: false,
  user: null,
};
function loginReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { ...state, isLoggedIn: true, user: action.payload };
    case "LOGOUT":
      localStorage.removeItem("user");
      return { ...state, isLoggedIn: false, user: null };
    default:
      return state;
  }
}

const store = createStore(loginReducer);
export default store;
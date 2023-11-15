// src/reducers/jobReducer.js
const initialState = {
  content: "",
  details: {},
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DETAILS":
      return { ...state, details: action.payload };
    case "SET_CONTENT":
      return { ...state, content: action.payload };
    default:
      return state;
  }
};

export default jobReducer;

// src/reducers/jobReducer.js
const initialState = {
  content: "",
  details: {}, // Các trường thông tin từ bước DetailsJobs
  description: "", // Nội dung từ bước WriteJobs
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CONTENT":
      return { ...state, content: action.payload };
    case "SET_DETAILS":
      return { ...state, details: action.payload };
    case "SET_DESCRIPTION":
      return { ...state, description: action.payload };
    default:
      return state;
  }
};

export default jobReducer;

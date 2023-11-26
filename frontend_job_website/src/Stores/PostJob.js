// src/reducers/jobReducer.js
const initialState = {
  inforCompany: {},
  details: {
    hiringName: "",
    applicationLimit: 0,
    dateSubmit: "",
    dateEnd: "",
    titlePost: "",
    contentPost: "",
    minSalary: 0,
    maxSalary: 0,
    status: true,
    fieldName: "",
  },
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

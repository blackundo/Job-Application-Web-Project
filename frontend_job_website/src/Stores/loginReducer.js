export default function loginReducer(state, action) {
  switch (action.type) {
    case "INPUT_CHANGE":
      return {
        ...state,
        [action.fieldName]: action.payload,
      };

    default:
      throw state;
  }
}

const initialState = {
  jobs: null,
};

export default function StoreJob(state = initialState, action) {
  switch (action.type) {
    case "Apply":
      return { ...state, jobs: "Apply" }; // Thay đổi giá trị của jobs tùy theo logic của ứng dụng
    case "Ban":
      return { ...state, jobs: "Ban" }; // Tương tự, thay đổi giá trị jobs theo logic
    default:
      return state;
  }
}

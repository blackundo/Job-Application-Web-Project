import axios from "../api/axios";

export const REFRESH_TOKEN_SUCCESS = "REFRESH_TOKEN_SUCCESS";
export const REFRESH_TOKEN_FAILURE = "REFRESH_TOKEN_FAILURE";

export const refreshSuccess = (token) => ({
  type: REFRESH_TOKEN_SUCCESS,
  payload: { token },
});

export const refreshFailure = () => ({
  type: REFRESH_TOKEN_FAILURE,
});

export const refreshAccessToken = (refreshToken) => async (dispatch) => {
  try {
    const response = await axios.post("/refresh-token", {
      refreshToken,
      withCredentials: true,
    });
    const { accessToken } = response.data;
    console.log(accessToken);
    dispatch(refreshSuccess(accessToken));
  } catch (err) {
    console.log("Refresh Token Error: ", err);
    dispatch(refreshFailure());
  }
};

import axios from "axios";

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
    const response = await axios.post("http://localhost:80/api/refresh-token", {
      refreshToken,
    });
    const { accessToken } = response.data;
    dispatch(refreshSuccess(accessToken));
  } catch (err) {
    console.log("Refresh Token Error: ", err);
    dispatch(refreshFailure());
  }
};

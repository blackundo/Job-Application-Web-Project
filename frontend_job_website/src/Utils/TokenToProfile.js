import axiosPrivate from "../api/axios";

export const PROFILE = "PROFILE_USER";

export const showProfile = (info) => ({
  type: PROFILE,
  payload: {
    user: info,
  },
});

export const informationUser = (accessToken) => async (dispatch) => {
  console.log(accessToken);
  const controller = new AbortController();
  // let config = {
  //   method: "post",
  //   maxBodyLength: Infinity,
  //   url: "http://localhost:80/api/profile/",
  //   headers: {
  //     Authorization: `Bearer ${accessToken}`,
  //   },
  //   signal: controller.signal,
  // };

  await axiosPrivate
    .post(
      "api/profile/",
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        signal: controller.signal,
      }
    )
    .then((res) => {
      const data = res.data;
      dispatch(showProfile(data));
    })
    .catch((error) => {
      console.log("Error Profile: ", error);
    });
  controller.abort();
};

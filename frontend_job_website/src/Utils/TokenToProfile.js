import axiosPrivate from "../api/axios";

export const PROFILE = "PROFILE_USER";

export const showProfile = (info, role) => ({
  type: PROFILE,
  payload: {
    profile: info,
    role: role,
  },
});

export const informationUser = (accessToken) => async (dispatch) => {
  console.log(accessToken);
  const controller = new AbortController();
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:80/api/profile/",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    signal: controller.signal,
  };

  await axiosPrivate
    .request(config)
    .then((res) => {
      const data = res.data;
      // console.log(res);
      const role = res.data.role.roleName;

      dispatch(showProfile(data, role));
    })
    .catch((error) => {
      console.log("Error Profile: ", error);
    });
  controller.abort();
};

import axiosPrivate from "../api/axios";
import axios from "../api/axios";

export const PROFILE = "PROFILE_USER";

export const showProfile = (info, role) => ({
  type: PROFILE,
  payload: {
    profile: info,
    role: role,
  },
});

export const informationUser = (accessToken) => async (dispatch) => {
  // const controller = new AbortController();
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:80/api/profile/",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    // signal: controller.signal,
  };

  await axiosPrivate
    .request(config)
    .then((res) => {
      const data = res.data;
      const role = res.data.role.roleName;
      console.log(data);
      dispatch(showProfile(data, role));
    })
    .catch((error) => {
      console.log(error);
    });
  // controller.abort();
};

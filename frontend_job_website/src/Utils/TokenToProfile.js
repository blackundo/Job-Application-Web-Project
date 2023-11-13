export const PROFILE = "PROFILE_USER";
import axios from "axios";

export const showProfile = (info, role) => ({
  type: PROFILE,
  payload: {
    profile: info,
    role: role,
  },
});

export const informationUser = (accessToken) => async (dispatch) => {
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:80/api/profile/",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  axios
    .request(config)
    .then((res) => {
      const data = res.data;
      const role = res.data.role.roleName;
      dispatch(showProfile(data, role));
    })
    .catch((error) => {
      console.log(error);
    });
};

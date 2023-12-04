import { jwtDecode } from "jwt-decode";
import axiosPrivate from "../api/axios";
export const PROFILE = "PROFILE_USER";

export const showProfile = (info, image, role) => ({
  type: PROFILE,
  payload: {
    user: info,
    image: image,
    role: role,
  },
});

export const informationUser = (accessToken) => async (dispatch) => {
  // console.log(accessToken);
  const controller = new AbortController();
  const decoded = jwtDecode(accessToken);
  try {
    if (decoded.roles[0] === "ROLE_Candidate") {
      axiosPrivate
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
          dispatch(showProfile(res.data, "", decoded.roles[0]));
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          controller.abort();
        });
    } else {
      try {
        const [profileResponse, imageResponse] = await Promise.all([
          axiosPrivate.post(
            "api/profile/",
            {},
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
              signal: controller.signal,
            }
          ),
          // axiosPrivate.get(
          //   `/api/profile/company-cover/${id}`,
          //   {},
          //   {
          //     headers: {
          //       Authorization: `Bearer ${accessToken}`,
          //     },
          //     signal: controller.signal,
          //   }
          // ),
        ]);
        const profileDate = profileResponse.data;
        // const image = imageResponse.data;

        dispatch(showProfile(profileDate, "", decoded.roles[0]));
      } catch (error) {
        console.log(error);
      } finally {
        controller.abort();
      }
    }
  } catch (err) {
    console.log(err);
  }
};

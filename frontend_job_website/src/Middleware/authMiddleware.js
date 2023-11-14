import axios from "axios";

const authMiddleware =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    switch (action.type) {
      case "CHECK_TOKEN":
        {
          const accessToken = JSON.parse(
            localStorage.getItem("Token")
          )?.access_token;
          const refreshToken = JSON.parse(
            localStorage.getItem("Token")
          )?.refresh_token;

          if (!accessToken || !refreshToken) {
            console.log("Logout or handle other actions");
            return;
          }
          try {
            const response = await axios.post(
              "http://localhost:80/api/profile/",
              {},
              {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
                withCredentials: true,
              }
            );
            // console.log(response);
          } catch (error) {
            console.log(error);
            if (axios.isAxiosError(error) && !error.response) {
              console.log(accessToken);
              try {
                const refreshResponse = await axios.post(
                  "http://localhost:80/api/refresh-token",
                  {
                    refreshToken,
                  }
                );
                console.log(refreshResponse);
              } catch (err) {
                console.log("Refresh token error: " + err);
              }
            }
          }
        }

        break;
      case "LOGOUT":
        localStorage.removeItem("Token");
        localStorage.removeItem("Profile");
        break;
      case "LOGIN":
        localStorage.setItem("Token", JSON.stringify(action.payload));
        break;
      default:
        break;
    }
    return next(action);
  };

export default authMiddleware;

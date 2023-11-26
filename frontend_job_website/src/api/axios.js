import axios from "axios";
const BASE_URL = "http://localhost";
// "https://7d24-2405-4802-604b-8e0-8183-e5e8-5ff-f38.ngrok-free.app/";

const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

axiosPrivate.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("Token"))?.access_token;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (err) => {
    // console.log("error: " + err);
    return Promise.reject(err);
  }
);
axiosPrivate.interceptors.response.use(
  (response) => {
    return response;
  },
  async (err) => {
    console.log("err", err);
    const originalConfig = err.config;
    const refreshToken = JSON.parse(
      localStorage.getItem("Token")
    )?.refresh_token;
    if (err.response.data.status === 401) {
      console.log("err response");
    }
    if (err.response.data.status === 403) {
      const refreshResponse = await axios.post(
        BASE_URL + "/api/auth/refresh-token",
        {},
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );
      // console.log(refreshResponse);
      const data = refreshResponse?.data;
      console.log(data);
      localStorage.setItem("Token", JSON.stringify(data));
      originalConfig.headers["Authorization"] = `Bearer ${data.access_token}`;
      return axios(originalConfig);
    }

    return Promise.reject(err);
  }
);

export default axiosPrivate;

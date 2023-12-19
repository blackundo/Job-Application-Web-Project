import axios from "axios";
const BASE_LOCAL = "http://localhost";
const BASE_SERVER = "http://api.modundo.com";
const BASE_PORT = "http://168.138.104.2";
const BASE_URL = BASE_SERVER;

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
      console.log(data);
      // console.log(refreshResponse);
      const data = refreshResponse?.data;
      localStorage.setItem("Token", JSON.stringify(data));
      originalConfig.headers["Authorization"] = `Bearer ${data.access_token}`;
      return axios(originalConfig);
    }

    return Promise.reject(err);
  }
);

export default axiosPrivate;

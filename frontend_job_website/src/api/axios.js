import axios from "axios";
const BASE_URL = "http://localhost:80";

// export default axios.create({
//   baseURL: BASE_URL,
// });
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
        "http://localhost:80/api/refresh-token",
        {},
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );
      console.log(refreshResponse);
      const data = refreshResponse?.data;
      console.log(data);
      localStorage.setItem("Token", JSON.stringify(data));
      originalConfig.headers["Authorization"] = `Bearer ${data.access_token}`;
      return axios(originalConfig);
    }

    /*   try {
      const refreshResponse = await axios.post(
        "http://localhost:80/api/refresh-token",
        {},
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );
      const data = refreshResponse?.data;
      console.log(data);
      localStorage.setItem("Token", JSON.stringify(data));
      originalConfig.headers["Authorization"] = `Bearer ${data.access_token}`;
      return axios(originalConfig);
    } catch (refreshError) {
      console.log(err);
      localStorage.removeItem("Token");
      // window.location.href = "/";
      Promise.reject(refreshError);
    } */
    /*    console.log("LogErr", err);
    if (err && err.request && !err.response && navigator.onLine !== false) {
      console.log("NetworkError", err);
    }
    if (err.response) {
      console.log("Response data:", err.response.data);
      console.log("Response status:", err.response.status);
      console.log("Response headers:", err.response.headers);

      // You can handle 403 status here
      if (err.response.status === 403) {
        // Handle 403 response, e.g., refresh token
        console.log("Token expired. Refreshing...");
        // Add your logic for refreshing the token here
      }
    } else if (err.request) {
      // The request was made but no response was received
      console.error("No response received:", err.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error during request setup:", err.message);
    } */
    return Promise.reject(err);
  }
);

export default axiosPrivate;

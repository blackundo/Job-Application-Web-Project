import axios from "axios";

const fetchedSkills = axios.create({
  baseURL: "https://auth.emsicloud.com/",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
});

fetchedSkills.interceptors.response.use(
  (response) => {
    return response;
  },
  async (err) => {
    console.log("err", err);
    const originalConfig = err.config;
    let data = JSON.stringify({
      client_id: "mq77ngheemcifeix",
      client_secret: "oDveptwd",
      scope: "emsi_open",
      grant_type: "client_credentials",
    });
    if (err.response.data.status === 400) {
      const refreshResponse = await axios.post(
        "https://auth.emsicloud.com/connect/token",
        data,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      //console.log(refreshResponse);
      const data = refreshResponse?.data.access_token;
      console.log(data);
      localStorage.setItem("access_token_skills", JSON.stringify(data));
      originalConfig.headers["Authorization"] = `Bearer ${data.access_token}`;
      return axios(originalConfig);
    }

    return Promise.reject(err);
  }
);

export default fetchedSkills;

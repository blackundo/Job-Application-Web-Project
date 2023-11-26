import { useEffect } from "react";
import { axiosPrivate } from "../../api/axios";
import { useSelector } from "react-redux";

export const useAxiosPrivate = () => {
  const accessToken = useSelector((state) => state?.token);
  useEffect(() => {
    const reqIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
      },
      (err) => {
        Promise.reject(err);
      }
    );

    const res = axiosPrivate.interceptors.response.use(
      (resp) => resp,
      async (err) => {
        const prevReq = err?.config;
        if (err?.response.status === 403 && !prevReq?.sent) {
          prevReq.sent = true;
          await console.log("Refresh");
        }
        return Promise.reject(err);
      }
    );
    return () => {
      axiosPrivate.interceptors.request.eject(reqIntercept);
      axiosPrivate.interceptors.response.eject(res);
    };
  }, []);

  return axiosPrivate;
};

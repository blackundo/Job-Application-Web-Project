import axios from "axios";
import { useEffect, useState } from "react";

function useJobs({ query, location }) {
  const [jobs, setJobs] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchJobs() {
        setIsLoading(true);
        setError("");
        let URL = "http://localhost:9001/Jobs";
        // if (query && query.length > 0) {
        //   URL += `&job_title=${query}`;
        // }
        // if (location && location.length > 0) {
        //   URL += query ? `&location=${location}` : `?location=${location}`;
        // }

        await axios
          .get(URL, {
            signal: controller.signal,
          })
          .then((res) => {
            const jobNew = res.data.filter(
              (j) =>
                (!location || j.location.includes(location)) &&
                (!query || j.job_title.includes(query))
            );

            //console.log(jobNew);
            setJobs(jobNew);
            setIsLoading(false);
          })
          .catch((err) => {
            setIsLoading(true);
            setError(err);
          });
      }

      fetchJobs();
      return () => {
        controller.abort();
      };
    },
    [query, location]
  );
  return { jobs, isLoading, error };
}

export default useJobs;

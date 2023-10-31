import Navbar from "../../Components/Home/Navbar";
import BoxFindJob from "../../Components/FindJob/BoxFindJob/BoxFindJob";
import DisplayJobs from "../../Components/FindJob/DisplayJobs/DisplayJobs";
import FooterHome from "../../Components/Home/FooterHome";
import { useEffect, useState } from "react";

import useJobs from "../../Components/FindJob/BoxFindJob/useJobs";
import axios from "axios";

function FindJobPage() {
  const [cities, setCities] = useState(null);
  const [query, setQuery] = useState({ query: "", location: "" });

  const { isLoading, jobs, error } = useJobs(query);

  // const [jobs, setJobs] = useState(null);
  // const [load, setLoad] = useState(true);
  // const [error, setError] = useState(false);

  useEffect(() => {
    async function citiesFetch() {
      await axios.get("http://localhost:9001/Jobs").then((res) => {
        const data = res.data;
        const citiesNew = data?.map((d) => d.location);
        setCities([...new Set(citiesNew)]);
      });
    }
    citiesFetch();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="xl:w-[1200px] lg:w-[1000px] md:w-[900px] sm:w-[700px] w-full">
          <Navbar />
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="w-full  ">
          <BoxFindJob cities={cities} setQuery={setQuery} />
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="xl:w-[1200px] lg:w-[1000px] md:w-[900px] sm:w-[700px] ">
          <DisplayJobs Jobs={jobs} load={isLoading} error={error} />
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="xl:w-[1200px] lg:w-[1000px] md:w-[900px] sm:w-[700px] ">
          <FooterHome />
        </div>
      </div>
    </>
  );
}

export default FindJobPage;

import Navbar from "../../Components/Home/Navbar";

import DisplayJobs from "../../Components/FindJob/DisplayJobs/DisplayJobs";
import FooterHome from "../../Components/Home/FooterHome";
import BoxFindJob from "../../Components/FindJob/BoxFindJob/BoxFindJob";
import { useState } from "react";
import { useEffect } from "react";

function FindJobPage() {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState(null);
  // const [filters, setFilters] = useState({});

  useEffect(() => {
    console.log(query);
  }, [query]);

  // function handleSubmitFilters(filters) {
  //   setQuery({
  //     ...query,
  //     ...filters,
  //   });
  // }
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="xl:w-[1200px] lg:w-[1000px] md:w-[900px] sm:w-[700px] w-full">
          <Navbar />
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="w-full  ">
          <BoxFindJob setQuery={setQuery} query={query} />
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="xl:w-[1200px] lg:w-[1000px] md:w-[900px] sm:w-[700px] ">
          <DisplayJobs jobs={jobs} setJobs={setJobs} />
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

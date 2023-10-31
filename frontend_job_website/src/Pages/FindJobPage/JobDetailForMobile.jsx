import Navbar from "../../Components/Home/Navbar";
import FooterHome from "../../Components/Home/FooterHome";
import { useState } from "react";

import useJobs from "../../Components/FindJob/BoxFindJob/useJobs";
import DetailJobOnMobile from "../../Components/FindJob/DetailJobOnMobile/DetailJobOnMobile";

function JobDetailForMobile() {
  const [query, setQuery] = useState({ query: "", location: "" });

  const { isLoading, jobs, error } = useJobs(query);

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="xl:w-[1200px] lg:w-[1000px] md:w-[900px] sm:w-[700px] w-full">
          <Navbar />
        </div>
      </div>

      <div className="flex items-center justify-center w-full">
        <div className="xl:w-[1200px] lg:w-[1000px] md:w-[900px] sm:w-[700px] max-md:mt-[5.625rem]">
          <DetailJobOnMobile />
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

export default JobDetailForMobile;

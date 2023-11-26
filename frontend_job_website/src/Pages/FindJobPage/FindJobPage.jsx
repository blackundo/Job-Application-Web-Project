import Navbar from "../../Components/Home/Navbar";

import DisplayJobs from "../../Components/FindJob/DisplayJobs/DisplayJobs";
import FooterHome from "../../Components/Home/FooterHome";
import BoxFindJob from "../../Components/FindJob/BoxFindJob/BoxFindJob";
import { useState } from "react";

function FindJobPage() {
  // const [cities, setCities] = useState(null);
  const [query, setQuery] = useState({ query: "", location: "" });
  // const { isLoading, jobs, error } = useJobs(query);

  // useEffect(() => {
  //   async function citiesFetch() {
  //     await axiosPrivate.get("http://localhost:9001/Jobs").then((res) => {
  //       const data = res.data;
  //       const citiesNew = data?.map((d) => d.location);
  //       setCities([...new Set(citiesNew)]);
  //     });
  //   }
  //   citiesFetch();
  // }, []);

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="xl:w-[1200px] lg:w-[1000px] md:w-[900px] sm:w-[700px] w-full">
          <Navbar />
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="w-full  ">
          <BoxFindJob setQuery={setQuery} />
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="xl:w-[1200px] lg:w-[1000px] md:w-[900px] sm:w-[700px] ">
          <DisplayJobs />
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

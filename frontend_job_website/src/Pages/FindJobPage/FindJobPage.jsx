import Navbar from "../../Components/Home/Navbar";

import DisplayJobs from "../../Components/FindJob/DisplayJobs/DisplayJobs";
import FooterHome from "../../Components/Home/FooterHome";
import BoxFindJob from "../../Components/FindJob/BoxFindJob/BoxFindJob";
import { useCallback, useState } from "react";
import { useEffect } from "react";
import axiosPrivate from "../../api/axios";

function FindJobPage() {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState(null);
  // const [filters, setFilters] = useState({});
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState("5");
  const [totalItems, setTotalItems] = useState(0);
  const [loadJob, setLoadJob] = useState(false);
  const [load, setLoad] = useState(false);
  /*   useEffect(() => {
    console.log(query);
  }, [query]); */

  const fetchDataJobs = useCallback(async () => {
    setJobs(null);
    await axiosPrivate
      .get(
        `/api/hiring/get?page=${page}&size=${
          pageSize === "All" ? "" : pageSize
        }`
      )
      .then((res) => {
        const data = res.data.content;
        setJobs(data);

        setTotalItems(res.data.totalElements);
      })
      .catch((err) => {
        setLoadJob(true);
        console.log(err);
      });
  }, [page, pageSize]);
  useEffect(() => {
    fetchDataJobs();
  }, [fetchDataJobs]);

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="xl:w-[1200px] lg:w-[1000px] md:w-[900px] sm:w-[700px] w-full">
          <Navbar />
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="w-full">
          <BoxFindJob setQuery={setQuery} query={query} setJob={setJobs} />
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="xl:w-[1200px] lg:w-[1000px] md:w-[900px] sm:w-[700px] ">
          <DisplayJobs
            jobs={jobs}
            loadJob={loadJob}
            pageSize={pageSize}
            setPage={setPage}
            setPageSize={setPageSize}
            totalItems={totalItems}
          />
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

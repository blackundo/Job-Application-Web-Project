import { useState, useEffect } from "react";

import Header from "./Header";
import axiosPrivate from "../../../api/axios";
import TableCollapsible from "../../TableCustom/TableCollapsible";
import { ToastCustom } from "../../ToastCustom/ToastCustom";
import LoadingComponent from "../../LoadingComponent/LoadingComponent";
import { transformJob } from "../transformJob";
import { useMemo } from "react";
import { useCallback } from "react";
import swal from "sweetalert";
import HeaderJobCustom from "./HeaderJobCustom";

function Jobs() {
  const [myJobs, setMyJobs] = useState([]);
  const [statusJobs, setStatusJobs] = useState("OpenAndClose");
  const [refresh, setRefresh] = useState(false);
  const [query, setQuery] = useState("");
  const access_token = JSON.parse(localStorage.getItem("Token"))?.access_token;
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState("All");
  const [totalItems, setTotalItems] = useState(0);

  const memoizedJobs = useMemo(() => {
    const transformedData = myJobs?.map((d) => transformJob(d));

    const filteredData =
      statusJobs === "Close"
        ? transformedData?.filter((job) => job.status === "Close")
        : transformedData;
    return filteredData;
  }, [myJobs, statusJobs]);

  useEffect(() => {
    async function getHiring() {
      await axiosPrivate
        .get("api/hiring/get")
        .then((res) => {
          const data = res.data.content;

          setMyJobs(data);
          console.log(res);
          setRefresh(true);
        })
        .catch((err) => {
          setRefresh(false);
          console.log(err);
        });
    }
    getHiring();
  }, [statusJobs, refresh]);

  const handleDeleteJob = async (id) => {
    const accessToken = JSON.parse(localStorage.getItem("Token")).access_token;
    await swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axiosPrivate
          .delete(`/api/hiring/${id}`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then((res) => {
            swal("Poof! Your imaginary file has been deleted!", {
              icon: "success",
            });
            setRefresh(true);
          })
          .catch((error) => {
            ToastCustom.error("Delete Error!, You can delete again", {
              autoClose: 2500,
            });
            console.log(error);
          });
      } else {
        swal("Cancelled");
      }
    });
  };
  const debounce = (func, delay) => {
    let debounceTimer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };
  const handleSearch = useCallback(
    (query) => {
      axiosPrivate
        .get("/api/hiring/find-hirings", {
          params: {
            text: query,
          },
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        })
        .then((res) => {
          setMyJobs(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [access_token]
  );

  useEffect(() => {
    const debouncedSearch = debounce((query) => handleSearch(query), 500);

    debouncedSearch(query);
  }, [query, handleSearch]);

  return (
    <>
      <Header Title={"Jobs"} />
      <HeaderJobCustom
        setStatusJobs={setStatusJobs}
        statusJobs={statusJobs}
        query={query}
        setQuery={setQuery}
        setPage={setPage}
        setPageSize={setPageSize}
        pageSize={pageSize}
      />
      <div className="pt-3  ">
        {memoizedJobs?.length === 0 ? (
          Array.from({ length: 5 }, (_, i) => {
            return <LoadingComponent key={i} />;
          })
        ) : (
          <TableCollapsible
            rows={memoizedJobs}
            handleDeleteJob={handleDeleteJob}
          />
        )}
      </div>
    </>
  );
}

export default Jobs;

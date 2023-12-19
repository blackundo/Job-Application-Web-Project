import { useCallback, useEffect, useMemo, useState } from "react";
import { transformJob } from "../../CompanyView/transformJob";
import axiosPrivate from "../../../api/axios";
import LoadingComponent from "../../LoadingComponent/LoadingComponent";
import TableCollapsibleJobMn from "./TableCollapsibleJobMn";
import { ToastCustom } from "../../ToastCustom/ToastCustom";
import swal from "sweetalert";

function JobManager() {
  const [myJobs, setMyJobs] = useState([]);
  const [statusJobs, setStatusJobs] = useState("OpenAndClose");
  const [refresh, setRefresh] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  // const [totalItems, setTotalItems] = useState(0);

  const memoizedJobs = useMemo(() => {
    const transformedData = myJobs?.map((d) => transformJob(d));

    const filteredData =
      statusJobs === "Close"
        ? transformedData?.filter((job) => job.status === "Close")
        : transformedData;
    return filteredData;
  }, [myJobs, statusJobs]);

  const getHiring = useCallback(async () => {
    await axiosPrivate
      .get(`api/hiring/get?page=${page}&size=${pageSize}`)
      .then((res) => {
        const data = res.data.content;
        setMyJobs(data);
        setRefresh(true);
      })
      .catch((err) => {
        setRefresh(false);
        console.log(err);
      });
  }, [page, pageSize]);

  useEffect(() => {
    getHiring();
  }, [statusJobs, refresh, pageSize, page, getHiring]);
  const handlePreviousPage = () => {
    setPage((prevPage) => Math.max(0, prevPage - 1));
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleDeleteJob = async (id) => {
    // const accessToken = JSON.parse(localStorage.getItem("Token")).access_token;
    await swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axiosPrivate
          .delete(`/api/hiring/${id}`)
          .then(() => {
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

  return (
    <div>
      <div className="pt-3  ">
        {!refresh ? (
          Array.from({ length: 5 }, (_, i) => {
            return <LoadingComponent key={i} />;
          })
        ) : memoizedJobs.length === 0 ? (
          <div className="text-center">Job không có</div>
        ) : (
          <TableCollapsibleJobMn
            rows={memoizedJobs}
            handleDeleteJob={handleDeleteJob}
          />
        )}
        <div className="text-center mt-3">
          <button onClick={handlePreviousPage} disabled={page === 0}>
            Previous
          </button>
          <span className="mx-2">{`Page ${page + 1}`}</span>
          <button
            onClick={handleNextPage}
            disabled={memoizedJobs.length < pageSize}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobManager;

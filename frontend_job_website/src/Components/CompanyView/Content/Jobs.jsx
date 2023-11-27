import { useState, useEffect } from "react";
import Header from "./Header";
import axiosPrivate from "../../../api/axios";
import TableCollapsible from "../../TableCustom/TableCollapsible";
import { ToastCustom } from "../../ToastCustom/ToastCustom";
import LoadingComponent from "../../LoadingComponent/LoadingComponent";
import { transformJob } from "../transformJob";
import { useMemo } from "react";
import { useCallback } from "react";
function Jobs() {
  const [sortByVisible, setSortByVisible] = useState(false);
  const [orderVisible, setOrderVisible] = useState(false);
  const [selectedSortBy, setSelectedSortBy] = useState("Date Posted");
  const [selectedOrder, setSelectedOrder] = useState("Descending");
  const [myJobs, setMyJobs] = useState([]);
  const [statusJobs, setStatusJobs] = useState("OpenAndClose");
  const [refresh, setRefresh] = useState(false);
  const [query, setQuery] = useState("");
  const access_token = JSON.parse(localStorage.getItem("Token"))?.access_token;
  const toggleSortBy = () => {
    setSortByVisible(!sortByVisible);
    setOrderVisible(false);
  };

  const toggleOrder = () => {
    setOrderVisible(!orderVisible);
    setSortByVisible(false);
  };

  const handleSortByClick = (value) => {
    setSelectedSortBy(value);
    setSortByVisible(false);
  };

  const handleOrderClick = (value) => {
    setSelectedOrder(value);
    setOrderVisible(false);
  };
  const memoizedJobs = useMemo(() => {
    const transformedData = myJobs?.map((d) => transformJob(d));
    console.log("transformed jobs", transformedData);
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
          console.log(data);
          setMyJobs(data);
          console.log(memoizedJobs);
        })
        .catch((err) => {
          setRefresh(false);
          console.log(err);
        });
    }
    getHiring();
  }, [statusJobs, refresh]);

  const handleOnChangeStatusJobs = (e) => {
    setStatusJobs(e);
  };
  const handleDeleteJob = async (id) => {
    try {
      const accessToken = JSON.parse(
        localStorage.getItem("Token")
      ).access_token;

      const response = await axiosPrivate.delete(
        `http://localhost/api/hiring/${id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      ToastCustom.success("Delete Success!", {
        autoClose: 2500,
      });
      setRefresh(true);
      console.log(response.data);
    } catch (error) {
      ToastCustom.error("Delete Error!, You can delete again", {
        autoClose: 2500,
      });
      console.log(error);
    }
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
          console.log(res.data);
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
      <div className="border w-fit rounded-lg tabs flex items-center max-md:w-full">
        <button
          className={`h-12 p-3 ${
            statusJobs === "OpenAndClose"
              ? "bg-blue-600 text-white"
              : "text-blue-500 "
          }  font-bold rounded-l-lg max-md:w-1/2 `}
          onClick={() => handleOnChangeStatusJobs("OpenAndClose")}
        >
          Open and pause (X)
        </button>
        <button
          className={`h-12 p-3 ${
            statusJobs === "Close" ? "bg-blue-600 text-white" : "text-blue-600"
          }  font-bold rounded-r-lg max-md:w-1/2 `}
          onClick={() => handleOnChangeStatusJobs("Close")}
        >
          Closed (X)
        </button>
      </div>
      <div className="flex items-center max-md:flex-col max-md:gap-5 pt-3">
        <div className="w-1/2 max-md:w-full">
          <input
            type="text"
            placeholder="job search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border w-full h-10 px-3 rounded-lg"
          />
        </div>
        <div className="w-1/2 max-md:w-full flex items-center justify-center gap-3 max-md:flex-col">
          <div className="border w-52 max-md:w-full border-black p-2 rounded-lg whitespace-nowrap relative">
            <span className="font-bold cursor-pointer" onClick={toggleSortBy}>
              Sort by:
            </span>
            <span>{selectedSortBy}</span>
            <ul
              className={`${
                sortByVisible ? "absolute" : "hidden"
              } top-full border w-full left-0 border-black rounded-md mt-1 p-2`}
            >
              <li
                onClick={() => handleSortByClick("Date Posted")}
                className={`font-semibold hover:bg-slate-200 rounded-lg mb-2 p-2 ${
                  selectedSortBy === "Date Posted" ? "bg-slate-400" : ""
                } cursor-pointer`}
              >
                Date Posted
              </li>
              <li
                onClick={() => handleSortByClick("Title")}
                className={`font-semibold hover:bg-slate-200 rounded-lg mb-2 p-2 ${
                  selectedSortBy === "Title" ? "bg-slate-400" : ""
                } cursor-pointer`}
              >
                Title
              </li>
            </ul>
          </div>

          <div className="border w-52 max-md:w-full border-black p-2 rounded-lg whitespace-nowrap  relative">
            <span className="font-bold cursor-pointer" onClick={toggleOrder}>
              Order:
            </span>
            <span>{selectedOrder}</span>
            <ul
              className={`${
                orderVisible ? "absolute" : "hidden"
              } top-full border w-full left-0 border-black rounded-md mt-1 p-2 `}
            >
              <li
                onClick={() => handleOrderClick("Descending")}
                className={`font-semibold hover:bg-slate-200 rounded-lg mb-2 p-2 ${
                  selectedOrder === "Descending" ? "bg-slate-400" : ""
                }cursor-pointer`}
              >
                Descending
              </li>
              <li
                onClick={() => handleOrderClick("Ascending")}
                className={`font-semibold hover:bg-slate-200 rounded-lg mb-2 p-2 ${
                  selectedOrder === "Ascending" ? "bg-slate-400" : ""
                }cursor-pointer`}
              >
                Ascending
              </li>
            </ul>
          </div>
        </div>
      </div>

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

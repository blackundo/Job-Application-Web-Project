import { useState, useEffect } from "react";
import img from "../../../Assets/postJob.svg";
import Header from "./Header";
import axiosPrivate from "../../../api/axios";
import TableCollapsible from "../../TableCustom/TableCollapsible";
function Jobs() {
  const [sortByVisible, setSortByVisible] = useState(false);
  const [orderVisible, setOrderVisible] = useState(false);
  const [selectedSortBy, setSelectedSortBy] = useState("Date Posted");
  const [selectedOrder, setSelectedOrder] = useState("Descending");
  const [myJobs, setMyJobs] = useState([]);
  const [statusJobs, setStatusJobs] = useState("Open");

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

  useEffect(() => {
    async function getHiring() {
      await axiosPrivate
        .get("api/hiring/get")
        .then((res) => {
          const data = res.data;
          const transformedData = data?.map((job) => {
            return createData(
              job.id,
              job.dateEnd,
              job.dateSubmit,
              job.errollmentStatus,
              job.fieldName,
              job.hiringName,
              job.applicationLimit,
              job.maxSalary,
              job.minSalary,
              job.status,
              job.hiringContentID.id,
              job.hiringContentID.content,
              job.hiringContentID.title
            );
          });
          const filteredData =
            statusJobs === "Close"
              ? transformedData.filter((job) => job.status === "Close")
              : transformedData;

          setMyJobs(filteredData);
        })
        .catch((err) => console.log(err));
    }
    getHiring();
  }, [statusJobs]);

  const handleOnChangeStatusJobs = (e) => {
    setStatusJobs(e);
  };
  useEffect(() => {
    console.log(statusJobs);
  }, [statusJobs]);

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

      <div>
        <TableCollapsible rows={myJobs} />
      </div>
    </>
  );
}

export default Jobs;

function createData(
  id,
  dateEnd,
  dateSubmit,
  enrollmentStatus,
  fieldName,
  hiringName,
  applicationLimit,
  maxSalary,
  minSalary,
  status,
  hiringContentID,
  content,
  title
) {
  return {
    id,
    dateEnd,
    title,
    dateSubmit,
    enrollmentStatus,
    status,
    details: [
      {
        id: hiringContentID,
        hiringName: hiringName,
        FieldName: fieldName,
        maxSalary: maxSalary,
        minSalary: minSalary,
        applicationLimit: applicationLimit,
        content: content,
      },
    ],
  };
}

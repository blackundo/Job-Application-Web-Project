import { useState } from "react";

function HeaderJobCustom({
  setStatusJobs,
  statusJobs,
  query,
  setQuery,
  setPage,
  setPageSize,
  pageSize,
}) {
  const [sortByVisible, setSortByVisible] = useState(false);
  const [orderVisible, setOrderVisible] = useState(false);
  const [selectedSortBy, setSelectedSortBy] = useState("Date Posted");
  const [selectedOrder, setSelectedOrder] = useState("Descending");
  const handleOnChangeStatusJobs = (e) => {
    setStatusJobs(e);
  };
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
  const handlePageSizeChange = (e) => {
    setPageSize(e.target.value);
    setPage(0);
  };
  return (
    <div>
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
      <div className="py-3">
        <span> Number per Page: </span>
        <select
          onChange={handlePageSizeChange}
          value={pageSize}
          className="border"
        >
          <option value="All">all</option>
          <option value="1">1 per page</option>
          <option value="5">5 per page</option>
          <option value="10">10 per page</option>
          <option value="20">20 per page</option>
          <option value="25">25 per page</option>
        </select>
      </div>
    </div>
  );
}

export default HeaderJobCustom;

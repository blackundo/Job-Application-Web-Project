import { useState } from "react";
import img from "../../../Assets/postJob.svg";
import Header from "./Header";
function Jobs() {
  const [sortByVisible, setSortByVisible] = useState(false);
  const [orderVisible, setOrderVisible] = useState(false);
  const [selectedSortBy, setSelectedSortBy] = useState("Date Posted");
  const [selectedOrder, setSelectedOrder] = useState("Descending");

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
  return (
    <div className="h-[calc(100vh-6rem)]">
      <Header Title={"Jobs"} />
      <div className="border w-fit rounded-lg tabs flex items-center max-md:w-full">
        <button className="h-12 p-3 bg-blue-600 text-white font-bold rounded-l-lg max-md:w-1/2">
          Open and pause (X)
        </button>
        <button className="h-12 p-3  text-blue-600 font-bold rounded-r-lg max-md:w-1/2">
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
      <div className="flex flex-col items-center justify-center pt-10">
        <div className="w-96">
          <img src={img} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center px-5 gap-2">
          <strong className="text-2xl">
            Get 4x more resumes. Post your first job right on Indeed.
          </strong>
          <span className="text-center">
            Applying Indeed helps bring you 4x more resumes than redirecting
            applications to your careers website. The process is simpler.
            Recruit faster.
          </span>
          <button className="h-10 p-3 bg-blue-800 text-white font-bold rounded-lg flex items-center justify-center mt-3">
            Post a job
          </button>
        </div>
      </div>
    </div>
  );
}

export default Jobs;

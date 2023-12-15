import { FaBan } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import imageDefault from "../../../Assets/defaultCover.jpg";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import TabDetails from "../DetailsJobTab/TabDetails";
import TabSummary from "../DetailsJobTab/TabSummary";
function Details({ job, role, handleApplyJob }) {
  const [selectTab, setSelectTab] = useState("details");
  const handleOnChangeTab = (tabs) => {
    setSelectTab(tabs);
  };
  return (
    <>
      <div className="p-1">
        <div className="relative h-60">
          <img
            src={imageDefault}
            alt=""
            className="w-full object-cover h-3/4 absolute z-10 rounded-lg "
          />
          <div className="flex flex-col items-start justify-center gap-2 absolute z-50 top-2/4 backdrop-blur-sm w-full px-5 h-28 ">
            <div className="flex flex-col">
              <span className="font-bold text-[1.5rem] text-sky-400">
                DPD Technology
              </span>
            </div>
            <span>
              <strong>Location</strong>: Da Nang
            </span>
          </div>
        </div>

        <div>
          {role === "Candidate" && (
            <div className="flex items-center justify-start gap-3">
              {job?.status === "Close" && (
                <button
                  className="w-[19rem] h-[3.125rem]  bg-slate-400 rounded-lg text-[1.31rem] text-white font-bold cursor-not-allowed"
                  disabled
                >
                  Job Closed
                </button>
              )}
              {job?.status === "Applied" && (
                <button
                  className="w-[19rem] h-[3.125rem] bg-yellow-300 rounded-lg text-[1.31rem] text-white font-bold"
                  onClick={handleApplyJob}
                >
                  Applied
                </button>
              )}
              <button
                className="w-[19rem] h-[3.125rem] bg-[#1CB8FF] rounded-lg text-[1.31rem] text-white font-bold"
                onClick={handleApplyJob}
              >
                Apply on company site
              </button>

              <span
                className="text-3xl h-[3.25rem] w-[3.25rem] bg-[#E4E2E0] flex items-center
                 justify-center rounded-xl hover:text-rose-500 cursor-pointer"
              >
                <AiFillHeart />
              </span>
              <span
                className="text-3xl h-[3.25rem] w-[3.25rem] bg-[#E4E2E0] flex items-center
                 justify-center rounded-xl hover:text-red-500 cursor-pointer"
              >
                <FaBan />
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-around ">
        <span
          className={`${
            selectTab === "details" ? "border-b-2 border-black font-bold " : ""
          }  hover:cursor-pointer`}
          onClick={() => handleOnChangeTab("details")}
        >
          Detail Jobs
        </span>
        <span
          className={`${
            selectTab === "summary" ? "border-b-2 border-black font-bold " : ""
          } hover:cursor-pointer`}
          onClick={() => handleOnChangeTab("summary")}
        >
          Summary Company
        </span>
      </div>
      <AnimatePresence>
        <div className="h-[28rem]">
          {selectTab === "details" ? (
            <TabDetails job={job} role={role} />
          ) : (
            <TabSummary />
          )}
        </div>
      </AnimatePresence>
    </>
  );
}

export default Details;

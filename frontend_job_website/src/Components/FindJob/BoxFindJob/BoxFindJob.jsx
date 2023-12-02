import { BiSolidSearchAlt2 } from "react-icons/bi";
import BoxFilter from "../BoxFilter/BoxFilter";
import { useState } from "react";
import { useEffect } from "react";

function BoxFindJob({ setQuery, query }) {
  const [inputValue, setInputValue] = useState("");
  function handleSubmitFilters(filters) {
    setQuery((prev) => ({
      ...prev,
      ...filters,
    }));
  }
  const debounce = (fn, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const handleInputChange = debounce((value) => {
    setQuery((prev) => ({
      ...prev,
      query: value,
    }));
  }, 300);
  useEffect(() => {
    setInputValue(query.query);
  }, [query.query]);

  return (
    <div className="border-t border-slate-500 py-5 max-md:mt-[5.625rem] border-b ">
      <div className=" flex items-center justify-center py-3 max-md:w-full h-16">
        <div className=" border-2 border-black max-md:border max-md:rounded-md w-3/5  rounded-[0.875rem]">
          <div className="relative max-md:border-b border-slate-500 w-full h-16">
            <span className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-2xl">
              <BiSolidSearchAlt2 />
            </span>
            <input
              type="text"
              placeholder="Search by vacancies "
              className="w-full  absolute h-11 pl-10 outline-none top-1/2 -translate-y-1/2 text-[1rem]"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                handleInputChange(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <BoxFilter onSubmit={handleSubmitFilters} />
      {/* {isFindJobs && } */}
    </div>
  );
}

export default BoxFindJob;
{
  /* <div className="col-span-3 relative max-md:col-span-1 ">
            <span className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-2xl">
              <FaLocationDot />
            </span>
            <select
              name="Address"
              id="Address"
              className="w-full absolute h-11 pl-10 border-l border-gray-700  top-1/2 -translate-y-1/2 text-[1rem] max-md:border-none outline-none"
              onChange={(e) => {
                setQuery({
                  location: e.target.value,
                });
              }}
            >
              <option value="" className="bg-sky-200">
                All
              </option>
            </select>
          </div>
          <div className="col-span-2 flex items-center justify-end px-3 max-md:col-span-1 max-md:pt-5 max-md:border-t border-slate-400">
            <button
              className=" h-11 bg-blue-500 rounded-lg w-4/5 max-md:w-full"
              onClick={handleFindJob}
            >
              Advanced search
            </button>
          </div> */
}

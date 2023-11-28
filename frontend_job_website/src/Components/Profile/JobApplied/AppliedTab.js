import { useEffect, useState } from "react";
import { IoBusinessSharp } from "react-icons/io5";
import img from "../../../Assets/appliedCD.svg";
import axiosPrivate from "../../../api/axios";

const AppliedTab = () => {
  const [countItems, setCountItems] = useState(0);

  useEffect(() => {
    async function displayJobApplied() {
      await axiosPrivate
        .get("")
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    }
  }, []);

  if (countItems === 0) {
    return (
      <div className="flex items-center justify-center w-full">
        <img src={img} alt="" />
      </div>
    );
  }

  return (
    <>
      {[...Array(countItems)].map((_, index) => (
        <div
          className="flex items-center justify-start gap-5 w-full"
          key={index}
        >
          <span className="text-3xl">
            <IoBusinessSharp />
          </span>
          <div className="flex flex-col items-start justify-between w-full ">
            <div className="flex flex-col items-start justify-start">
              <span className="text-lg font-semibold">
                Internship business developer
              </span>
              <span className="text-[0.9rem]">Data Analytics</span>
              <small className="text-[0.6rem]">Da Nang</small>
              <small className="text-[0.6rem]">saved today</small>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <button className="p-2 rounded-lg bg-[#1CB8FF] w-32 text-white font-semibold">
              View details
            </button>
            <button className="p-2 rounded-lg bg-rose-600 w-32 text-white font-semibold">
              Cancel
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AppliedTab;

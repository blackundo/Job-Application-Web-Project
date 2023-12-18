import { useEffect, useState } from "react";
import styles from "./LabelDashboard.module.css";
import NumberCounter from "react-countup";
import { HiOutlineDocumentText } from "react-icons/hi";
import axiosPrivate from "../../../api/axios";
function LabelDashboard() {
  const [countLabel, setCountLabel] = useState(null);
  useEffect(() => {
    axiosPrivate
      .get("/api/admin/report")
      .then((res) => {
        console.log(res.data);
        setCountLabel(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //const { jobs, jobsClose: jobsClosed, jobsOpen } = countLabel;
  return (
    <>
      <div
        className={` col-span-2 border h-[9.625rem] bg-white shadow-lg rounded-lg w-full  pt-1 px-7`}
      >
        <div className="flex flex-col items-center justify-evenly h-full">
          <label htmlFor="" className="text-lg font-bold text-[#2B3674]">
            Total Jobs
          </label>
          <h1 className={`text-[#2B3674] text-[2rem] font-bold`}>
            <NumberCounter
              start={0}
              end={countLabel?.jobs || 10}
              duration={2}
              prefix="$"
            />
          </h1>
          <small className="text-gray-400/50">more details</small>
        </div>
      </div>
      <div
        className={` col-span-2 border h-[9.625rem] bg-white shadow-lg rounded-lg w-full  pt-1 px-7`}
      >
        <div className="flex flex-col items-center justify-evenly h-full">
          <label htmlFor="" className="text-lg font-bold text-[#2B3674]">
            Job Today
          </label>
          <h1 className={`text-[#1CB8FF] text-[2rem] font-bold`}>
            <NumberCounter start={200} end={556} duration={1.3} />
          </h1>
          <small className="text-gray-400/50">Metrics Today</small>
        </div>
      </div>
      <div
        className={` col-span-6 border h-[9.625rem] bg-white shadow-lg rounded-lg w-full  pt-1 px-7`}
      >
        <div className="flex flex-col items-start justify-evenly h-full">
          <div className="flex items-center justify-between w-full">
            <label htmlFor="" className="text-lg font-bold text-[#2B3674]">
              Job status
            </label>
            <span className="bg-[#E6EDF9] w-20 rounded-lg flex  items-center justify-evenly text-xl font-light text-[#A3AED0]">
              <HiOutlineDocumentText />
              Log
            </span>
          </div>
          <div className="flex items-center justify-evenly w-full">
            {/* <div className="text-[#00A15C]">
              <h1 className={` text-[2rem] font-bold`}>
                <NumberCounter start={95} end={156} duration={1} />
              </h1>
              <span className="">Job Done</span>
            </div> */}
            <div className="text-[#EA4300]">
              <h1 className={` text-[2rem] font-bold`}>
                <NumberCounter
                  start={0}
                  end={countLabel?.jobsClosed || 10}
                  duration={1.3}
                />
              </h1>
              <span className="">Job Close</span>
            </div>
            <div className="text-[#FFA800]">
              <h1 className={` text-[2rem] font-bold`}>
                <NumberCounter
                  start={0}
                  end={countLabel?.jobsOpen || 10}
                  duration={1.7}
                />
              </h1>
              <span className="">Job Doing</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LabelDashboard;

import { Link } from "react-router-dom";
import img from "../../../Assets/imgPostJobs.png";
import { FiAlertCircle, FiArrowRight } from "react-icons/fi";

function InformationJob() {
  return (
    <>
      <div>
        <div className="flex items-center justify-center">
          <img src={img} alt="" className="" />
        </div>
        <span>
          Job postings in <strong>VietNamese</strong> in{" "}
          <strong>vietnam</strong>
        </span>
      </div>
      <div className="border-t mt-3">
        <div className="pb-3 pt-6 flex flex-col items-start justify-center gap-2">
          <label htmlFor="" className="text-sm font-semibold">
            Title Job <span>*</span>
          </label>
          <input
            type="text"
            name="titleJob"
            className="w-full border h-10 rounded-lg px-2"
            placeholder="Title Job"
          />
        </div>
        <div className="py-5 flex flex-col items-start justify-center gap-2">
          <label htmlFor="" className="text-sm font-semibold">
            The number of people recruited fot job <span>*</span>
          </label>
          <input
            type="number"
            name="people"
            className="w-full border h-10 rounded-lg px-2"
            placeholder="The number of people"
          />
        </div>
        <div className="py-5 flex flex-col items-start justify-center gap-2 border-t">
          <div className="flex flex-col items-start justify-center">
            <label htmlFor="" className="text-sm font-semibold">
              Where would you live to advertise this job <span>*</span>
            </label>
            <small>Enter your location</small>
          </div>
          <input
            type="text"
            name="location"
            className="w-full border h-10 rounded-lg px-3"
            placeholder="Location"
          />
        </div>
      </div>
      <div className="border border-red-400 p-2 m-0">
        <div className="flex items-center justify-start gap-3">
          <FiAlertCircle className="fill-red-600 text-white text-2xl" />
          <span className="text-[0.875rem] font-semibold ">
            You need to pay attention to the items above to continue
          </span>
        </div>
        <ul className="list-disc pl-16 text-sm font-light">
          <li className="">Title job</li>
        </ul>
      </div>
      <div className="pt-16 flex items-center justify-end">
        <Link
          to={"details"}
          className="h-12 p-3 bg-[#1CB8FF] text-white font-bold rounded-lg flex items-center justify-between gap-2 hover:scale-110 transition-all"
        >
          Continue
          <FiArrowRight className="text-xl " />
        </Link>
      </div>
    </>
  );
}

export default InformationJob;

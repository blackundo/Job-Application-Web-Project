import { FiAlertCircle, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import img from "../../../Assets/jobdetails.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function DetailsJobs() {
  const navigate = useNavigate();
  const jobs = useSelector((state) => state.job);
  const dispatch = useDispatch();
  const location = useLocation();

  const details = location.state?.fDetails || "";
  console.log(details);
  const [moreDetails, setMoreDetails] = useState({
    ...details,
    hours: 0,
    salaryMax: 0,
    salaryMin: 0,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMoreDetails({
      ...moreDetails,
      [name]: value,
    });
  };
  const handleNextPage = () => {
    dispatch({
      type: "SET_DETAILS",
      payload: moreDetails,
    });
  };
  return (
    <>
      <div className="flex items-center justify-center">
        <img src={img} alt="" />
      </div>
      <div className="pt-14 flex flex-col items-start justify-center">
        <strong className="text-[0.9rem]">
          Type of employment <span className="text-red-600">*</span>
        </strong>
        <div>
          <div className="flex items-start justify-center gap-2 pt-2">
            <button className="bg-slate-600 border border-slate-600 text-white p-2 rounded-2xl w-28 text-sm">
              Full-Time
            </button>
            <button className="border border-slate-600 text-slate-800 p-2 rounded-2xl w-28 text-sm">
              Part-time
            </button>
            <button className="border border-slate-600 text-slate-800 p-2 rounded-2xl w-28 text-sm">
              internships
            </button>
          </div>
          <span className="flex items-center justify-start gap-2 pt-2 text-red-600 font-normal text-sm">
            <FiAlertCircle className="fill-red-600 text-white text-lg" />
            Please select
          </span>
        </div>
      </div>
      <div>
        <div className="py-5 flex flex-col items-start justify-center gap-2 border-t">
          <div className="flex flex-col items-start justify-center">
            <label htmlFor="" className="text-sm font-semibold">
              How many hours per week <span>*</span>
            </label>
          </div>
          <input
            type="number"
            name="hours"
            className="w-full border h-10 rounded-lg px-3"
            placeholder="Hours"
            min={0}
            value={moreDetails.hours}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <span className="text-xl font-semibold">Salary</span>
          <div className="flex items-center justify-around pt-2">
            <div className="flex flex-col items-start justify-center gap-1">
              <span className="px-2 font-bold">Minimum</span>
              <div className="relative">
                <input
                  type="number"
                  placeholder="1000"
                  name="salaryMin"
                  min={0}
                  className="h-10 border px-3 rounded-l-lg"
                  value={moreDetails.salaryMin}
                  onChange={handleInputChange}
                />
                <button className="h-10 border w-10 absolute top-0 left-full bg-slate-400 rounded-r-lg text-white font-bold">
                  $
                </button>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <span className="px-2 font-bold">Maximal</span>
              <div className="relative">
                <input
                  type="number"
                  placeholder="1000"
                  name="salaryMax"
                  min={0}
                  className="h-10 border px-3 rounded-l-lg"
                  value={moreDetails.salaryMax}
                  onChange={handleInputChange}
                />
                <button className="h-10 border w-10 absolute top-0 left-full bg-slate-400 rounded-r-lg text-white font-bold">
                  $
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-16 flex items-center justify-between">
        <button
          className="h-12 p-3  text-[#1CB8FF] border font-bold rounded-lg flex items-center justify-between gap-2 hover:scale-110 transition-all"
          onClick={() => navigate(-1)}
        >
          <FiArrowLeft className="text-xl " />
          Back
        </button>
        <button onClick={handleNextPage}>test</button>
        <Link
          to={"/company/post_jobs/description"}
          className="h-12 p-3 bg-[#1CB8FF] text-white font-bold rounded-lg flex items-center justify-between gap-2 hover:scale-110 transition-all"
        >
          Continue
          <FiArrowRight className="text-xl " />
        </Link>
      </div>
    </>
  );
}

export default DetailsJobs;

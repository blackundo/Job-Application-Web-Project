import { FaBan, FaSuitcase } from "react-icons/fa";
import { AiFillFlag, AiFillHeart } from "react-icons/ai";
import imageDefault from "../../../Assets/defaultCover.jpg";
function Details({ job, role, handleApplyJob, cover }) {
  return (
    <>
      <div className=" p-3 ">
        <div className="relative h-52">
          <img
            src={imageDefault}
            alt=""
            className="w-full object-cover h-3/4 absolute z-10 rounded-lg "
          />
          <div className="flex flex-col items-start justify-center gap-2 absolute z-50 top-2/3 backdrop-blur-xl w-full px-5 ">
            <div className="flex flex-col">
              <span className="font-bold text-[1.5rem]">
                {job.company_name}
              </span>
              <span className="text-[1.3rem] font-bold ">{job.hiringName}</span>
            </div>
            <span>location: {job.location}</span>
          </div>
        </div>

        <div>
          <span>Summary</span>
          {role === "Candidate" && (
            <div className="flex items-center justify-start gap-3">
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
      <div className=" h-[28rem]">
        <div className="border-t-4 border-slate-700/40 pt-1">
          <span className="p-3 font-bold text-[1.5rem]">Job Details</span>
          <div className=" p-3  flex items-center justify-evenly gap-2">
            {/* <span className="text-[#2D2D2D] font-sans ">
                  {job.description}
                </span> */}
            <div>
              <div className="flex items-center justify-center gap-2">
                <FaSuitcase />
                <span>Job type</span>
              </div>
              <div>
                <span className="h-[1.68rem]  bg-[#D9D9D9] text-[#5A5A5A] p-1 text-[0.875rem] rounded-sm ">
                  Full-time
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2">
                <FaSuitcase />
                <span>Salary</span>
              </div>
              <div className="flex items-center justify-start gap-3">
                <span className="h-[1.68rem]  bg-sky-300 text-black p-1 text-[0.875rem] rounded-lg ">
                  {job.minSalary} $
                </span>
                -
                <span className="h-[1.68rem]  bg-[#D9D9D9] text-[#5A5A5A] p-1 text-[0.875rem] rounded-lg ">
                  {job.maxSalary} $
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2">
                <FaSuitcase />
                <span>Start Date - End Date</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <span className="h-[1.68rem]  bg-[#D9D9D9] text-[#5A5A5A] p-1 text-[0.875rem] rounded-sm ">
                  {job.dateSubmit}
                </span>
                -
                <span className="h-[1.68rem]  bg-[#D9D9D9] text-[#5A5A5A] p-1 text-[0.875rem] rounded-sm ">
                  {job.dateEnd}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className=" border-t-2 border-slate-700/40 overflow-y-auto h-full pb-[12rem] px-4">
          <span className="text-2xl font-bold">
            {job.hiringContentID.title}
          </span>
          <span>{job.experience_years}</span>
          <br />
          <span>{job.education_level}</span>
          <br />
          <p>{job.job_description}</p>
          <div
            className={`ql-editor prose prose-lg`}
            dangerouslySetInnerHTML={{
              __html: job.hiringContentID.content,
            }}
          />

          <div>
            {role === "Candidate" && (
              <div
                className="flex items-center justify-start px-3 h-[3.25rem] border w-[12.18rem] text-[1.3rem] 
            font-bold mx-3 rounded-lg bg-[#E4E2E0] gap-3 mt-3 hover:bg-red-500/60 hover:text-white transition-colors"
              >
                <AiFillFlag />
                <button>Report Job</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;

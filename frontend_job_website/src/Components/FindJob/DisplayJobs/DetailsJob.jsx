import { FaBan, FaSuitcase } from "react-icons/fa";
import { AiFillFlag, AiFillHeart } from "react-icons/ai";
import styles from "./DetailsJob.module.css";
function DetailsJob({ job, load }) {
  // const urlDecodeData = decodeURIComponent(job?.image_company);
  const acc = JSON.parse(localStorage.getItem("Profile"));
  const role = acc?.user?.role?.roleName ?? null;
  return (
    <div className="col-span-7 border-2 border-slate-600 w-full h-[46rem] pt-2 rounded-2xl  sticky top-4 max-md:hidden overflow-y-hidden ">
      {!load && job === null ? (
        <div className="flex items-center justify-center h-1/2 text-2xl">
          <button
            type="button"
            className=" flex items-center justify-center "
            disabled
          >
            <svg
              className="animate-spin -ml-1 mr-3 h-10 w-10 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Processing...
          </button>
        </div>
      ) : (
        <>
          <div className=" p-3 ">
            <div className="relative h-52">
              {/* <img
                src={`${urlDecodeData}`}
                alt=""
                className="w-full  object-cover h-3/4 absolute z-10 rounded-lg "
              /> */}
              <div className="flex flex-col items-start justify-center gap-2 absolute z-50 top-1/2 backdrop-blur-xl w-full px-5 ">
                <div className="flex flex-col">
                  <span className="font-bold text-[1.5rem]">
                    {job.company_name}
                  </span>
                  <span className="text-[1.125rem]">{job.hiringName}</span>
                </div>
                <span>location: {job.location}</span>
              </div>
            </div>

            <div>
              <span>Summary</span>
              {role === "Candidate" && (
                <div className="flex items-center justify-start gap-3">
                  <button className="w-[19rem] h-[3.125rem] bg-[#1CB8FF] rounded-lg text-[1.31rem] text-white font-bold">
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
      )}
    </div>
  );
}

export default DetailsJob;

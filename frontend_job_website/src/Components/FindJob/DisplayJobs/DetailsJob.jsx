import { FaBan, FaSuitcase } from "react-icons/fa";
import { AiFillFlag, AiFillHeart } from "react-icons/ai";

function DetailsJob({ job, load }) {
  const urlDecodeData = decodeURIComponent(job?.image_company);

  return (
    <div className="col-span-7 border-2 border-slate-600 w-full h-[59rem] pt-2 rounded-2xl  sticky top-4 max-md:hidden overflow-y-hidden ">
      {load && job === null ? (
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
              <img
                src={`${urlDecodeData}`}
                alt=""
                className="w-full  object-cover h-3/4 absolute z-10 rounded-lg "
              />
              <div className="flex flex-col items-start justify-center gap-2 absolute z-50 top-1/2 backdrop-blur-xl w-full px-5 ">
                <div className="flex flex-col">
                  <span className="font-bold text-[1.5rem]">
                    {job.company_name}
                  </span>
                  <span className="text-[1.125rem]">{job.NameHR}</span>
                </div>
                <span>location: {job.location}</span>
              </div>
            </div>

            <div>
              <span>Summary</span>
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
            </div>
          </div>
          <div className=" h-[28rem]">
            <div className="border-t-4 border-slate-700/40 pt-1">
              <div className=" p-3  flex flex-col items-start justify-center gap-2">
                <span className="font-bold text-[1.5rem]">Job Details</span>
                <span className="text-[#2D2D2D] font-sans ">
                  {job.description}
                </span>
                <div>
                  <div className="flex items-center justify-center gap-2">
                    <FaSuitcase />
                    <span>Job type</span>
                  </div>
                  <div>
                    <span className="h-[1.68rem]  bg-[#D9D9D9] text-[#5A5A5A] p-1 text-[0.875rem] rounded-sm ">
                      {job.Type}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-2">
                    <FaSuitcase />
                    <span>Salary</span>
                  </div>
                  <div>
                    <span className="h-[1.68rem]  bg-[#D9D9D9] text-[#5A5A5A] p-1 text-[0.875rem] rounded-sm ">
                      {Number(Math.floor(job.salary / 100))} $
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-2">
                    <FaSuitcase />
                    <span>Start Date - End Date</span>
                  </div>
                  <div>
                    <span className="h-[1.68rem]  bg-[#D9D9D9] text-[#5A5A5A] p-1 text-[0.875rem] rounded-sm ">
                      {job.start_date}
                    </span>
                    -
                    <span className="h-[1.68rem]  bg-[#D9D9D9] text-[#5A5A5A] p-1 text-[0.875rem] rounded-sm ">
                      {job.end_date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="description border-t-2 border-slate-700/40 overflow-y-auto h-full pb-[5rem] px-4">
              <span className="text-2xl font-bold">{job.job_title}</span>
              <span>{job.experience_years}</span>
              <br />
              <span>{job.education_level}</span>
              <br />
              <p>{job.job_description}</p>

              <div>
                <div
                  className="flex items-center justify-start px-3 h-[3.25rem] border w-[12.18rem] text-[1.3rem] 
            font-bold mx-3 rounded-lg bg-[#E4E2E0] gap-3 mt-3 hover:bg-red-500/60 hover:text-white transition-colors"
                >
                  <AiFillFlag />
                  <button>Report Job</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default DetailsJob;

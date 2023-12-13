import { motion } from "framer-motion";
import { FaSuitcase } from "react-icons/fa";
import { AiFillFlag } from "react-icons/ai";
function TabDetails({ job, role }) {
  return (
    <>
      <motion.div
        className="border-t border-slate-700/40 pt-2"
        key="details"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
      >
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
      </motion.div>

      <motion.div
        className=" border-t-2 border-slate-700/40 overflow-y-auto h-full pb-[12rem] px-4"
        key="details"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-2xl font-bold">{job.hiringContentID.title}</span>
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
      </motion.div>
    </>
  );
}

export default TabDetails;

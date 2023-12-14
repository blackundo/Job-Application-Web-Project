import { AiOutlineMore } from "react-icons/ai";
import { Link } from "react-router-dom";
function ListJob({ i, handleChooseJob }) {
  const mobile = window.innerWidth <= 768;
  return (
    <Link
      to={`${mobile ? "detailsMb" : ""}`}
      className="box border-[3px] border-slate-700 px-4 rounded-2xl py-2 cursor-pointer hover:bg-blue-500/30 transition-colors max-h-[17rem] w-full"
      onClick={() => handleChooseJob(i.id)}
    >
      <div className="flex items-start justify-between pb-2">
        <div className="flex flex-col">
          <div className=" flex flex-col">
            <span className="font-bold text-[1.5rem]">{i.hiringName}</span>
            <span className="text-[1.125rem]">{i.hiringContentID.title}</span>
          </div>
          <div className="flex items-center justify-start gap-2 ">
            <span>{i.location}</span>
            {i.fieldName?.split(",").map((field, index) => (
              <span
                key={index}
                className="h-[1.68rem]  bg-[#D9D9D9] text-[#5A5A5A] p-1 text-[0.875rem] rounded-lg "
              >
                {field}
              </span>
            ))}
          </div>
        </div>
        <AiOutlineMore className="text-3xl font-bold" />
      </div>
      <div className="flex items-center justify-start gap-3">
        <span className="h-[1.68rem]  bg-sky-300 text-black p-1 text-[0.875rem] rounded-lg ">
          {i.minSalary} $
        </span>
        -
        <span className="h-[1.68rem]  bg-[#D9D9D9] text-[#5A5A5A] p-1 text-[0.875rem] rounded-lg ">
          {i.maxSalary} $
        </span>
      </div>
      <div>
        <div className="flex flex-col items-start justify-center gap-1 pt-2">
          <div className="flex items-center justify-center gap-2">
            {/* <span className="font-normal">Date End:</span> */}
            <span className="text-black bg-slate-200 p-1 rounded-lg">
              {i.dateSubmit}
            </span>
            <span>-</span>
            <span className="text-black bg-slate-200 p-1 rounded-lg">
              {i.dateEnd}
            </span>
          </div>
          <span className="cursor-pointer hover:font-bold">More</span>
        </div>
      </div>
    </Link>
  );
}

export default ListJob;

import img from "../../../Assets/img2.svg";
function Interview() {
  return (
    <div className="h-[calc(100vh-6rem)]">
      <strong className="text-2xl">Interview</strong>
      <div className="flex items-start justify-center gap-6 h-full pt-5">
        <div className="border w-full rounded-lg p-2  h-full">
          <strong>Interview</strong>
        </div>
        <div className="border w-full rounded-lg p-2 flex flex-col items-center justify-center h-full">
          <strong className="text-slate-600 text-2xl text-center w-2/3 ">
            You don't have an upcoming interview
          </strong>
          <span className="w-[90%] text-center">
            All interviews that have been scheduled will show up here.
          </span>
          <img src={img} alt="" className="w-80" />
        </div>
      </div>
    </div>
  );
}

export default Interview;

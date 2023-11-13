import Header from "./Header";
import img from "../../../Assets/img2.svg";
function Candidate() {
  return (
    <div className="h-[calc(100vh-6rem)]">
      <Header Title={"Candidate"} />
      <div className="flex flex-col items-center justify-center pt-10 ">
        <div className="w-52">
          <img src={img} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center px-5 gap-2">
          <strong className="text-2xl">There are no applicants</strong>
          <span className="text-center">
            You don't have any jobs posted directly on Indeed. Post jobs today
            to view and seamlessly manage your candidates here
          </span>
          <button className="h-10 p-3 bg-blue-800 text-white font-bold rounded-lg flex items-center justify-center mt-3">
            Post a job
          </button>
        </div>
      </div>
    </div>
  );
}

export default Candidate;

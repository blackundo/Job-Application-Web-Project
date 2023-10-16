import Chart from "./Chart";
import "./Popular.css";
function Popular() {
  return (
    <>
      <div className="max-md:overflow-hidden">
        <span>Popular Vacancies and salaries</span>
        <div className="tabVacancies grid grid-cols-[repeat(15,minmax(0,1fr))] max-sm:grid-cols-4 grid-rows-2 gap-3  place-content-center place-items-center sideShowPopular">
          <span className="col-span-3 max-md:col-span-5 max-sm:col-span-2 border  border-black  w-full text-center rounded-lg bg-blue-100 font-semibold cursor-pointer">
            SEO specialist
          </span>
          <span className="col-span-3 max-md:col-span-5 max-sm:col-span-2  text-slate-400 border  w-full text-center border-slate-200 px-3 rounded-lg">
            Copywriter
          </span>
          <span className="col-span-3 max-md:col-span-5 max-sm:hidden text-slate-400 border  w-full text-center border-slate-200 px-3 rounded-lg">
            AI Specialist
          </span>
          <span className="col-span-3 max-md:hidden text-slate-400 border  w-full text-center border-slate-200 px-3 rounded-lg">
            UX/UI designer
          </span>
          <span className="col-span-3 max-md:hidden  text-slate-400 border  w-full text-center border-slate-200 px-3 rounded-lg">
            Front-end
          </span>
          <span className="col-span-5  max-md:hidden text-slate-400 border  w-full text-center border-slate-200 px-3 rounded-lg">
            Back-end
          </span>
          <span className="col-span-5  max-md:hidden text-slate-400 border  w-full text-center border-slate-200 px-3 rounded-lg">
            Webflow developer
          </span>
          <span className="underline col-span-5 max-md:col-start-5 max-md:col-span-8 max-sm:col-start-2 max-sm:col-span-2 text-center font-bold">
            See all vacancies
          </span>
        </div>
        <div className="py-10 flex items-start justify-center w-full">
          <Chart />
        </div>
      </div>
    </>
  );
}

export default Popular;

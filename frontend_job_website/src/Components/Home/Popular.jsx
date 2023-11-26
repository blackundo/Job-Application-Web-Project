import "./Popular.css";
import chart from "../../Assets/chart.svg";
import { motion } from "framer-motion";
function Popular() {
  const transition = {
    type: "spring",
    duration: 0.8,
  };

  return (
    <>
      <div className="max-md:overflow-hidden max-sm:px-5">
        <motion.div
          initial={{ x: "15rem", opacity: 0 }}
          whileInView={{ x: "0rem", opacity: 1 }}
          transition={{ ...transition, bounce: 0.6 }}
        >
          <span className="font-semibold text-2xl max-sm:text-xl">
            Popular Vacancies and salaries
          </span>
        </motion.div>

        <motion.div
          className="tabVacancies grid grid-cols-[repeat(15,minmax(0,1fr))] max-md:grid-cols-[repeat(12,minmax(0,1fr))] max-sm:grid-cols-2  gap-3  place-content-center place-items-center sideShowPopular pt-7"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={transition}
        >
          <span className="col-span-3 max-md:col-span-3 max-sm:col-span-1 border  border-black  w-full text-center rounded-lg bg-blue-100 font-semibold cursor-pointer">
            SEO specialist
          </span>
          <span className="col-span-3 max-md:col-span-3 max-sm:col-span-1  text-slate-400 border  w-full text-center border-slate-200 px-3 rounded-lg">
            Copywriter
          </span>
          <span className="col-span-3 max-md:col-span-3 max-sm:col-span-1  text-slate-400 border  w-full text-center border-slate-200 px-3 rounded-lg">
            AI Specialist
          </span>
          <span className="col-span-3 max-md:col-span-3 max-sm:col-span-1 text-slate-400 border  w-full text-center border-slate-200 px-3 rounded-lg">
            UX/UI designer
          </span>
          <span className="col-span-3 max-md:col-span-4 max-sm:col-span-1 text-slate-400 border  w-full text-center border-slate-200 px-3 rounded-lg">
            Front-end
          </span>
          <span className="col-span-5  max-md:col-span-4 max-sm:col-span-1 text-slate-400 border  w-full text-center border-slate-200 px-3 rounded-lg">
            Back-end
          </span>
          <span className="col-span-5  max-md:col-span-4 max-sm:col-span-1 text-slate-400 border  w-full text-center border-slate-200 px-3 rounded-lg">
            Webflow developer
          </span>
          <span className="underline col-span-5  max-md:col-start-5 max-md:col-span-4  max-sm:col-span-1 text-center font-bold ">
            See all vacancies
          </span>
        </motion.div>
        <div className="py-10 flex items-start justify-center w-full">
          <motion.img
            src={chart}
            alt=""
            className="w-full"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ ...transition, duration: 1.5 }}
          />
          {/* <Chart /> */}
        </div>
      </div>
    </>
  );
}

export default Popular;

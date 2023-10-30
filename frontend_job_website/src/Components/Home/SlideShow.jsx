import slideImg from "../../Assets/slideShowImage1.svg";
import { BiSearchAlt } from "react-icons/bi";
import "./SlideShow.css";
import { motion } from "framer-motion";

function SlideShow() {
  return (
    <>
      <div className=" grid grid-cols-6 mt-10 gap-3 slideShow max-md:grid-cols-2 max-md:gap-3 max-sm:grid-cols-1 place-items-center px-[1.5rem] ">
        <div className=" col-span-3 flex flex-col items-start  justify-center  max-md:items-center max-md:col-span-1">
          <motion.div
            className="py-4"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="font-semibold text-4xl py-3 max-md:text-[2rem]">
              <p>Where IT</p> <p>Dreams Become</p>
              <p>Professional Realities.</p>
            </div>
            <span className="max-sm:w-full flex max-sm:items-center max-sm:justify-center">
              Find your dream job today !
            </span>
          </motion.div>
          <motion.div
            className="mx-4 rounded-lg border  border-black relative w-[250px] h-10"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, bounce: 1 }}
          >
            <input
              type="text"
              placeholder="Search by Vacancies"
              className="rounded-lg outline-none absolute w-full h-9 text-sm px-3"
            />
            <BiSearchAlt className="absolute top-1/2 right-2 -translate-y-1/2" />
          </motion.div>
        </div>
        <div className="col-span-3  items-center justify-center pl-10 flex max-md:col-span-1">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, bounce: 1 }}
            src={slideImg}
            alt=""
            className="w-96"
          />
        </div>
      </div>
    </>
  );
}

export default SlideShow;

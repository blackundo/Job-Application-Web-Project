import img1 from "../../Assets/liImg.svg";
import img2 from "../../Assets/liImg2.svg";
import img3 from "../../Assets/liImg3.svg";
import { motion } from "framer-motion";

function Introduce() {
  const transition = {
    type: "spring",
    duration: 0.8,
  };

  return (
    <>
      <div className="py-10 max-sm:px-5">
        <motion.div
          initial={{ x: "15rem", opacity: 0 }}
          whileInView={{ x: "0rem", opacity: 1 }}
          transition={{ ...transition, bounce: 0.6 }}
        >
          <span className=" font-semibold text-2xl max-sm:text-xl ">
            Your Can Trust Us
          </span>
        </motion.div>
        <div className="lg:w-3/4 py-5 max-sm:w-full">
          <motion.div
            className="flex gap-9 py-4 max-sm:flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={transition}
          >
            <img
              src={img1}
              alt=""
              className="max-md:w-[5.13rem] max-sm:w-[6.4rem] w-16"
            />
            <div className="flex flex-col gap-3">
              <span className="font-bold text-lg max-sm:flex items-center justify-center">
                We carefully screen all employee
              </span>
              <p className="font-normal max-sm:text-lg">
                On our platform, you will not find dubious vacacies from
                marriage angencices or call centers. Only conscientious
                employers.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex gap-9 py-4 max-sm:flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={transition}
          >
            <img
              src={img2}
              alt=""
              className="max-md:w-[5.13rem] max-sm:w-[6.4rem] w-16"
            />
            <motion.div
              className="flex flex-col gap-3"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={transition}
            >
              <span className="font-bold text-lg max-sm:flex items-center justify-center">
                We carefully screen all employee
              </span>
              <p className="font-normal max-sm:text-lg">
                On our platform, you will not find dubious vacacies from
                marriage angencices or call centers. Only conscientious
                employers.More than 2500 people found the job they dreamed of,
                according to a survey conducted in 2022
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex gap-9 py-4 max-sm:flex-col items-center max-sm:justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={transition}
          >
            <img
              src={img3}
              alt=""
              className="max-md:w-[5.13rem] max-sm:w-[6.4rem] w-16"
            />
            <div className="flex flex-col gap-3">
              <span className="font-bold text-lg max-sm:flex items-center justify-center">
                We carefully screen all employee
              </span>
              <p className="font-normal max-sm:text-lg">
                Every day, about 150 vacancies are published on our platform - a
                huge selection is provided
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Introduce;

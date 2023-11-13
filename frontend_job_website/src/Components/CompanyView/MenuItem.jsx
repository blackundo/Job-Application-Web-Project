import { AiOutlineCalendar, AiOutlinePlus } from "react-icons/ai";
import { BiBarChart } from "react-icons/bi";
import { BsFillPeopleFill, BsTools } from "react-icons/bs";
import { FaSuitcase } from "react-icons/fa";
import styles from "./MenuItem.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const items = [
  {
    icon: <AiOutlinePlus />,
    title: "New Create",
    toPath: "createjob",
  },
  {
    icon: <FaSuitcase />,
    title: "Jobs",
    toPath: "jobs",
  },
  {
    icon: <BsFillPeopleFill />,
    title: "Candidate",
    toPath: "candidate",
  },
  {
    icon: <AiOutlineCalendar />,
    title: "Interview",
    toPath: "interview",
  },
  {
    icon: <BiBarChart />,
    title: "Analysis",
    toPath: "analysis",
  },
  {
    icon: <BsTools />,
    title: "Tools",
    toPath: "tools",
  },
];

function MenuItem({ open }) {
  return (
    <div
      className={`flex flex-col ${styles.menu} gap-4 p-1 items-start justify-center w-full`}
    >
      <AnimatePresence>
        {items.map((item, index) => {
          return (
            <motion.div
              key={index}
              className="h-10 text-white cursor-pointer hover:bg-slate-400 rounded-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <Link to={item.toPath}>{item.icon}</Link>
              {open && (
                <motion.span
                  initial={{ width: 0, opacity: 1 }}
                  animate={{ width: "100%", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="whitespace-nowrap overflow-hidden"
                >
                  <Link to={item.toPath}>{item.title}</Link>
                </motion.span>
              )}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default MenuItem;

import { AiOutlineCalendar, AiOutlinePlus } from "react-icons/ai";
import { BiBarChart } from "react-icons/bi";
import { BsFillPeopleFill, BsTools } from "react-icons/bs";
import { FaSuitcase } from "react-icons/fa";
import styles from "./MenuItem.module.css";
import { AnimatePresence, motion } from "framer-motion";

const items = [
  {
    icon: <AiOutlinePlus />,
    title: "New Create",
  },
  {
    icon: <FaSuitcase />,
    title: "Jobs",
  },
  {
    icon: <BsFillPeopleFill />,
    title: "Candidate",
  },
  {
    icon: <AiOutlineCalendar />,
    title: "Interview",
  },
  {
    icon: <BiBarChart />,
    title: "Analysis",
  },
  {
    icon: <BsTools />,
    title: "Tools",
  },
];

function MenuItem({ open }) {
  return (
    <div className={`flex flex-col ${styles.menu} gap-4 p-1`}>
      <AnimatePresence>
        {items.map((item, index) => {
          return (
            <motion.div
              key={index}
              className="h-10 text-white cursor-pointer"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            >
              <span>{item.icon}</span>
              {open && (
                <motion.span
                  initial={{ height: 0, opacity: 1, width: "100px" }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0, width: "100px" }}
                  transition={{ duration: 0.2 }}
                >
                  {item.title}
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

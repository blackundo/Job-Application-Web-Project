import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SavedTab from "./SavedTab";
import AppliedTab from "./AppliedTab";
import InterviewsTab from "./InterviewsTab";

function JobApplied() {
  const [selectedTab, setSelectedTab] = useState("saved");

  const handleSelectedTab = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <div className="py-7">My jobs</div>
      <motion.div
        className="tabs flex items-center justify-start gap-5  border-b border-black "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span
          className={`${
            selectedTab === "saved" ? "border-b-2 border-black font-bold" : ""
          } cursor-pointer`}
          onClick={() => handleSelectedTab("saved")}
        >
          Saved (X)
        </span>
        <span
          className={`${
            selectedTab === "applied" ? "border-b-2 border-black font-bold" : ""
          } cursor-pointer`}
          onClick={() => handleSelectedTab("applied")}
        >
          Applied (X)
        </span>
        <span
          className={`${
            selectedTab === "interviews"
              ? "border-b-2 border-black font-bold"
              : ""
          } cursor-pointer`}
          onClick={() => handleSelectedTab("interviews")}
        >
          interviews (X)
        </span>
      </motion.div>
      <AnimatePresence mode="wait">
        <motion.div
          className="pt-6 flex flex-col items-start justify-start gap-7 h-[30rem] overflow-y-scroll"
          key={selectedTab}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {selectedTab === "saved" && <SavedTab />}
          {selectedTab === "applied" && <AppliedTab />}
          {selectedTab === "interviews" && <InterviewsTab />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default JobApplied;

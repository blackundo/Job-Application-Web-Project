import { motion } from "framer-motion";

function TabSummary() {
  return (
    <motion.div
      key="summary"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="border-t border-slate-700/40 pt-2"
    >
      <span>Summary company</span>
    </motion.div>
  );
}

export default TabSummary;

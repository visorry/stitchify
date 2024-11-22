import React from "react";
import { motion } from "framer-motion";

interface FilterTagProps {
  children: React.ReactNode;
  active: boolean;
  onClick?: () => void;
}

const FilterTag: React.FC<FilterTagProps> = ({ children, active, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm font-medium ${
      active
        ? "bg-black text-white dark:bg-white dark:text-black"
        : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300"
    }`}
  >
    {children}
  </motion.button>
);

export default FilterTag;

"use client";
import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <motion.div className="bg-gray-200 mt-[10rem] mb-[10rem] h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-80"
    initial={{ opacity: 0, y: 100 }}
    transition={{ delay: 0.3 }}
    animate={{ opacity: 1, y: 0 }}
    ></motion.div>
  )
}
export default SectionDivider
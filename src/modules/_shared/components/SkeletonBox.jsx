import { motion } from "motion/react";

export default function SkeletonBox({ className }) {
  return (
    <motion.div
      className={`${className} rounded bg-gray-300`}
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 0.8 }}
      transition={{ repeat: Infinity, duration: 0.7, repeatType: "reverse", delay: 1 }}
    />
  );
}

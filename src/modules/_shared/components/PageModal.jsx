import { motion } from "motion/react";

export default function PageModal({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] grid h-full w-full items-center justify-center bg-black/30 backdrop-blur-sm"
    >
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
        {children}
      </motion.div>
    </motion.div>
  );
}

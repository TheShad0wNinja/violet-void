import React from "react";
import { motion } from "framer-motion";

function WhiteTextInputBox({
  name,
  placeholder,
  value,
  onChange,
  condition,
  errormessage,
  Itemscenter = false,
  fullwidth = false
}) {
  return (
    <motion.div
      className={`mt-5 flex w-full flex-col ${Itemscenter ? "items-center" : "items-start"} justify-center`}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${fullwidth ? "w-[65%]" : "w-full"} rounded-md border border-white p-2 text-white placeholder-white`}
      />
      {condition && <p className="mt-2 w-[65%] text-sm text-red-500">{errormessage}</p>}
    </motion.div>
  );
}

export default WhiteTextInputBox;

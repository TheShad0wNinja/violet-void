import React from "react";
import { Field, ErrorMessage } from "formik";
import { motion } from "framer-motion";

function WhiteDobBox({
  datevalue,
  dateonchange,
  monthvalue,
  monthonchange,
  yearvalue,
  yearonchange,
  condition,
  errormessage
}) {
  return (
    <motion.div
      className="mt-4 flex w-full items-center justify-center"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1] 
      }}
    >
      <div className="w-[65%] items-center justify-center">
        <label className="text-center">Date of Birth (dd/mm/yyyy)</label>
        <div className="mt-3 flex gap-2">
          <input
            type="text"
            name="day"
            placeholder="Day"
            value={datevalue}
            onChange={dateonchange}
            className="place flex w-1/4 rounded-md border border-white p-2 text-center text-white placeholder-white"
          ></input>
          <input
            type="text"
            name="month"
            placeholder="Month"
            value={monthvalue}
            onChange={monthonchange}
            className="place flex w-1/2 rounded-md border border-white p-2 text-center text-white placeholder-white"
          ></input>{" "}
          <input
            type="text"
            name="year"
            placeholder="Year"
            value={yearvalue}
            onChange={yearonchange}
            className="place flex w-1/4 rounded-md border border-white p-2 text-center text-white placeholder-white"
          ></input>
        </div>
        {condition && <p className="mt-2 text-sm text-red-500">{errormessage}</p>}
      </div>
    </motion.div>
  );
}

export default WhiteDobBox;

import React from "react";
import { Field, ErrorMessage } from "formik";

function WhiteDobBox({ datevalue, dateonchange, monthvalue, monthonchange,yearvalue,yearonchange }) {
  return (
    <div className="mt-4 w-full flex items-center justify-center">
      <div className="w-[65%]  items-center justify-center">
        <label className="text-center " >Date of Birth</label>
        <div className="flex mt-3 gap-2 ">
          <input
            type="text"
            name="Date"
            placeholder="Date"
            value={datevalue}
            onChange={dateonchange}
            className="place flex w-1/4 rounded-md border text-center border-white p-2 text-white placeholder-white"
          ></input>
          <input
            type="text"
            name="Month"
            placeholder="Month"
            value={monthvalue}
            onChange={monthonchange}
            className="place flex w-1/2 rounded-md border text-center border-white p-2 text-white placeholder-white"
          ></input>{" "}
          <input
            type="text"
            name="Year"
            placeholder="Year"
            value={yearvalue}
            onChange={yearonchange}
            className="place flex w-1/4 rounded-md border text-center border-white p-2 text-white placeholder-white"
          ></input>
        </div>
      </div>
    </div>
  );
}

export default WhiteDobBox;

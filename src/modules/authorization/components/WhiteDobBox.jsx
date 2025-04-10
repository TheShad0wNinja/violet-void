import React from "react";
import { Field, ErrorMessage } from "formik";

function WhiteDobBox({ datevalue, dateonchange, monthvalue, monthonchange,yearvalue,yearonchange,condition,errormessage }) {
  return (
    <div className="mt-4 w-full flex items-center justify-center">
      <div className="w-[65%]  items-center justify-center">
        <label className="text-center " >Date of Birth (dd/mm/yyyy)</label>
        <div className="flex mt-3 gap-2 ">
          <input
            type="text"
            name="day"
            placeholder="Day"
            value={datevalue}
            onChange={dateonchange}
            className="place flex w-1/4 rounded-md border text-center border-white p-2 text-white placeholder-white"
          ></input>
          <input
            type="text"
            name="month"
            placeholder="Month"
            value={monthvalue}
            onChange={monthonchange}
            className="place flex w-1/2 rounded-md border text-center border-white p-2 text-white placeholder-white"
          ></input>{" "}
          <input
            type="text"
            name="year"
            placeholder="Year"
            value={yearvalue}
            onChange={yearonchange}
            className="place flex w-1/4 rounded-md border text-center border-white p-2 text-white placeholder-white"
          ></input>
          
        </div>
        {condition && (
        <p className="text-sm mt-2 text-red-500">{errormessage}</p>
      )}
      </div>
    </div>
  );
}

export default WhiteDobBox;

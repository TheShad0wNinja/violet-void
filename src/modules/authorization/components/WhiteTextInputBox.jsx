import React from "react";
import { Field, ErrorMessage } from "formik";

function WhiteTextInputBox({ name, placeholder, value, onchange }) {
  return (
    <div className="flex justify-center items-center mt-5 w-full">
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onchange}
        className="place border border-white text-white placeholder-white p-2 rounded-md w-[65%]"
      ></input>
    </div>
  );
}

export default WhiteTextInputBox;

import React from "react";

function WhiteTextInputBox({ name, placeholder, value, onChange, condition, errormessage }) {
  return (
    <div className="mt-5  w-full flex flex-col items-center justify-center"> {/* Use flex column */}
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value} // Ensure value is coming from Formik state
        onChange={onChange} // Ensure this is set to formik.handleChange
        className="w-[65%] rounded-md border border-white p-2 text-white placeholder-white" // Centered input
      />
      {condition && ( // Only show error if condition is met
        <p className="mt-2 w-[65%] text-sm text-red-500">{errormessage}</p> // Add margin-top for space between input and error
      )}
    </div>
  );
}

export default WhiteTextInputBox;

import React from "react";
import AOS from "aos";

function WhiteTextInputBox({ name, placeholder, value, onChange, condition, errormessage }) {
  return (
    <div className="mt-5  w-full flex flex-col items-center justify-center" data-aos-duration="1500"  data-aos="zoom-in"> 
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value} 
        onChange={onChange} 
        className="w-[65%] rounded-md border border-white p-2 text-white placeholder-white" 
      />
      {condition && ( 
        <p className="mt-2 w-[65%] text-sm text-red-500">{errormessage}</p> 
      )}
    </div>
  );
}

export default WhiteTextInputBox;

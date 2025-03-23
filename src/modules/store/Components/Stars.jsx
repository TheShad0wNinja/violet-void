import React from "react";
import StarChecked from "@modules/_shared/Assets/starLighter.png";
import StarUnchecked from "@modules/_shared/Assets/starDarker.png";

const Stars = () => {
  return (
    <div className="flex gap-1 justify-center items-center">

      <div className="w-5.5 h-5.5">
      <img className="object-cover" src={StarChecked} />
      </div>
      <div className="w-5.5 h-5.5">
      <img className="object-cover" src={StarChecked} />
      </div><div className="w-5.5 h-5.5">
      <img className="object-cover" src={StarChecked} />
      </div><div className="w-5.5 h-5.5">
      <img className="object-cover" src={StarChecked} />
      </div><div className="w-5.5 h-5.5">
      <img className="object-cover" src={StarChecked} />
      </div>
    </div>
  );
};

export default Stars;

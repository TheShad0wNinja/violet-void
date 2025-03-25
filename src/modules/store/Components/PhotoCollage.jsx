import React, { useState } from "react";
import RRD21 from "../../_shared/Assets/GamePhotos/RRD21.jpg";
import RRD22 from "../../_shared/Assets/GamePhotos/RRD22.jpg";

function PhotoCollage() {
  const images = [RRD21, RRD22, RRD21, RRD22];

  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="relative h-[35rem] mt-6  ">
      <div
        style={{ backgroundImage: `url(${images[selectedIndex]})` }} /* Background*/
        className="bg-cover bg-center w-full h-full  grayscale-50 justify-center items-center flex"
      ></div>
      <div className="flex absolute inset-5 gap-5">
        <div
          style={{ backgroundImage: `url(${images[selectedIndex]})` }} /*blown up image */
          className="w-[70%] h-[100%] bg-cover bg-center "
        ></div>

        <div className="w-[25%] h-[100%] flex flex-col gap-4">
          {images.map((img, index) => (
            <button
              key={index}
              style={{ backgroundImage: `url(${img})` }} // Corrected: Now uses the correct image
              className={`w-full h-[40%] bg-cover bg-center border-2 border-transparent transition ${
                selectedIndex === index ? "grayscale-0 border-white" : "grayscale-75"
              }`}
              onClick={() => setSelectedIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PhotoCollage;

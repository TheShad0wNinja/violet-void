import React, { useState } from "react";
import RRD21 from "../../_shared/Assets/GamePhotos/RRD21.jpg";
import RRD22 from "../../_shared/Assets/GamePhotos/RRD22.jpg";
import { motion } from "framer-motion";


function PhotoCollage({images}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const handleChangeImage = (index) => {
    setFade(true);
    setTimeout(() => {
      setSelectedIndex(index);
      setFade(false);
    }, 300);
  };

  return (
    <motion.div
            initial={{ scale: 0.8, y: 30, opacity: 0 }}
            whileInView={{ scale: 1, y: 0, opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: [0.16, 1, 0.3, 1]
            }} className="relative w-full max-w-5xl  mt-6">
      {/* Background Image */}
      <div
        style={{ backgroundImage: `url(${images[selectedIndex]})` }}
        className={`bg-cover bg-center w-full h-[25rem] md:h-[35rem] grayscale-50 flex justify-center items-center transition-opacity duration-300 ${fade ? "opacity-0" : "opacity-100"}`}
      ></div>

      {/* Image and Thumbnails */}
      <div className="absolute inset-0 flex flex-col md:flex-row justify-center items-center p-4 gap-4">
        {/* Large Image */}
        <div
          style={{ backgroundImage: `url(${images[selectedIndex]})` }}
          className={`bg-cover bg-center w-full h-[20rem] md:h-full md:w-3/4 transition-opacity duration-500 ${fade ? "opacity-0" : "opacity-100"}`}
        ></div>

        {/* Thumbnails */}
        <div className="flex md:flex-col  flex-row w-full md:w-1/4 gap-2">
          {images.map((img, index) => (
            <button
              key={index}
              style={{ backgroundImage: `url(${img})` }}
              className={`w-1/4 md:w-full h-28 md:h-30 cursor-pointer bg-cover bg-center border-2 border-transparent transition-all duration-300 ${selectedIndex === index ? "grayscale-0 border-white" : "grayscale-75"} hover:grayscale-0 hover:border-white`}
              onClick={() => handleChangeImage(index)}
            ></button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default PhotoCollage;

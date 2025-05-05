import React, { useState } from "react";
import { IconStar, IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react";

const Stars = ({ rating , maxStars = 5 }) => {
  const totalStars = 5; // Displayed stars
  const scaledRating = (rating / maxStars) * totalStars; // Convert rating to 5-star scale
  const [selectedRating, setSelectedRating] = useState(scaledRating); // Supports decimals
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  // const handleClick = (index, isHalf) => {
  //   setSelectedRating(index + (isHalf ? 0.5 : 1));
  // };

  return (
    <div className="flex gap-1.5 justify-center items-center">
      <h1 className="text-lg md:text-2xl sm-lg font-semibold text-accent mr-1">
        {/* {isHovered ? (hoverIndex + 1).toFixed(1)  */}
         {selectedRating.toFixed(1)}
      </h1>

      {[...Array(totalStars)].map((_, index) => {
        const isHalfStar = selectedRating > index && selectedRating < index + 1;
        return (
          <div key={index} className="relative w-4 h-4 md:w-5 md:h-5">
            <button
              className="absolute left-0 w-1/2 h-full cursor-pointer "
              // onClick={() => handleClick(index, true)}
              // onMouseEnter={() => {
              //   setHoverIndex(index - 0.5);
              //   setIsHovered(true);
              // }}
              // onMouseLeave={() => {
              //   setHoverIndex(null);
              //   setIsHovered(false);
              // }}
            />
            <button
              className="absolute right-0 w-1/2 h-full cursor-pointer"
              // onClick={() => handleClick(index, false)}
              // onMouseEnter={() => {
              //   setHoverIndex(index);
              //   setIsHovered(true);
              // }}
              // onMouseLeave={() => {
              //   setHoverIndex(null);
              //   setIsHovered(false);
              // }}
            />
            <div className="text-accent">
              {isHalfStar ? <IconStarHalfFilled /> : index < selectedRating || index <= hoverIndex ? <IconStarFilled /> : <IconStar />  }
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stars;

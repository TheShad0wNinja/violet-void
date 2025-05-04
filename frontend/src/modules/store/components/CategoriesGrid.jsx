import React from "react";
import { getGameCategories } from "../utils/mockData";
import { Link } from "react-router";

const CategoriesGrid = () => {
  const categories = getGameCategories(); // Get actual categories data

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-3 md:gap-4">
      {categories.map((category) => (
        <Link to="">
        <div
          key={category.id}
          className="group relative h-20 w-full cursor-pointer overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02] md:h-25"
        >
          {/* Background Image */}
          <img
            src={category.image}
            alt={category.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/30" />
          
          {/* Category Name */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center">
            <span className="text-lg font-bold text-white md:text-xl">
              {category.name}
            </span>
            <span className="mt-1 text-sm text-gray-200">
              {category.count} games
            </span>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoriesGrid;
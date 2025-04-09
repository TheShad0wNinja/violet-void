import { PurpleHolder } from "@modules/_shared/App";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function GenreHolder({ tags,features }) {
  return (
    <div data-aos="fade-up" className="bg-secondary-900 mt-8 flex h-fit w-full rounded-2xl p-4">
      <div className="w-1/2">
        <h1 className="mb-2 text-2xl font-bold">Genre</h1>
        <div className="flex flex-wrap gap-2.5">
          {tags.map((game, index) => (
            <PurpleHolder key={tags[index]} propName={tags[index]}></PurpleHolder>
          ))}
        </div>
      </div>
      <div className="w-1/2">
        <h1 className="mb-2 text-2xl font-bold">Features</h1>
        <div className="flex flex-wrap gap-2.5">
        {features.map((game, index) => (
            <PurpleHolder key={features[index]} propName={features[index]}></PurpleHolder>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GenreHolder;

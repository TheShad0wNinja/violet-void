import {PurpleHolder} from "@modules/_shared/App";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function GenreHolder() {
  return (
    <div data-aos="fade-up" className="w-full h-fit  mt-8  bg-secondary-900  flex  rounded-2xl  p-4 ">
      <div className="w-1/2">
        <h1 className="text-2xl font-bold mb-2">Genre</h1>
        <div className="flex flex-wrap gap-2.5">
          <PurpleHolder propName={"Adventure"}></PurpleHolder>
          <PurpleHolder propName={"Action"}></PurpleHolder>
          <PurpleHolder propName={"Survival Horror"}></PurpleHolder>
          <PurpleHolder propName={"Action"}></PurpleHolder>
          <PurpleHolder propName={"Adventure"}></PurpleHolder>
          <PurpleHolder propName={"Survival Horror"}></PurpleHolder>
        </div>
      </div>
      <div className="w-1/2">
        <h1 className="text-2xl font-bold  mb-2">Features</h1>
        <div className="flex flex-wrap gap-2.5">
          <PurpleHolder propName={"Adventure"}></PurpleHolder>
          <PurpleHolder propName={"Action"}></PurpleHolder>
          <PurpleHolder propName={"Survival Horror"}></PurpleHolder>
          <PurpleHolder propName={"Action"}></PurpleHolder>
          <PurpleHolder propName={"Adventure"}></PurpleHolder>
          <PurpleHolder propName={"Survival Horror"}></PurpleHolder>
        </div>
      </div>
    </div>
  );
}

export default GenreHolder;

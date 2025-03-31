import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function GameRequirements() {
  return (
    <div data-aos="fade-up" className="h-fit mt-8 bg-secondary-900 flex rounded-2xl p-4">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8 mt-8 mb-8 w-[95%] ">
        <div className="ml-4">
          <h1 className="text-xl font-semibold mb-2">Minimum</h1>
          <div className="grid grid-cols-2 gap-y-2 mt-3">
            <h1 className="text-md text-text-dark w-auto">OS</h1>
            <h1 className="text-md text-text-dark w-auto ">Windows 10</h1>

            <h1 className="text-md text-text-dark w-auto">Processor</h1>
            <h1 className="text-md text-text-dark w-auto ">Intel Core i5-2300 | AMD FX-6350</h1>

            <h1 className="text-md text-text-dark w-auto">Memory</h1>
            <h1 className="text-md text-text-dark w-auto ">8 GB RAM</h1>

            <h1 className="text-md text-text-dark w-auto">Graphics</h1>
            <h1 className="text-md text-text-dark w-auto ">
              NVIDIA GeForce GTX 650 Ti, 2 GB | AMD Radeon R7 360, 2 GB
            </h1>

            <h1 className="text-md text-text-dark w-auto">DirectX</h1>
            <h1 className="text-md text-text-dark w-auto ">Version 12</h1>
            <h1 className="text-md text-text-dark w-auto">Storage</h1>
            <h1 className="text-md text-text-dark w-auto ">10 GB available space</h1>
          </div>
        </div>

        <div className="ml-4">
          <h1 className="text-xl font-semibold mb-2">Recommended</h1>
          <div className="grid grid-cols-2 gap-y-2 mt-3">
          <h1 className="text-md text-text-dark w-auto">OS</h1>
            <h1 className="text-md text-text-dark w-auto ">Windows 10</h1>

            <h1 className="text-md text-text-dark w-auto">Processor</h1>
            <h1 className="text-md text-text-dark w-auto ">Intel Core i5-2300 | AMD FX-6350</h1>

            <h1 className="text-md text-text-dark w-auto">Memory</h1>
            <h1 className="text-md text-text-dark w-auto ">8 GB RAM</h1>

            <h1 className="text-md text-text-dark w-auto">Graphics</h1>
            <h1 className="text-md text-text-dark w-auto ">
              NVIDIA GeForce GTX 650 Ti, 2 GB | AMD Radeon R7 360, 2 GB
            </h1>

            <h1 className="text-md text-text-dark w-auto">DirectX</h1>
            <h1 className="text-md text-text-dark w-auto ">Version 12</h1>
            <h1 className="text-md text-text-dark w-auto">Storage</h1>
            <h1 className="text-md text-text-dark w-auto ">10 GB available space</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameRequirements;

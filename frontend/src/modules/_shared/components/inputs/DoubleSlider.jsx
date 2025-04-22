import { useMemo } from "react";

export default function DoubleSlider({
  maxRange,
  minRange,
  currentMin,
  currentMax,
  setCurrentRange,
  rangeLabel,
  isMoney,
  step = 10
}) {
  const getPercentage = value => Math.round(((value - minRange) / (maxRange - minRange)) * 100);

  const minPercent = useMemo(() => getPercentage(currentMin), [currentMin]);
  const maxPercent = useMemo(() => getPercentage(currentMax), [currentMax]);

  const handleSliderChange = (isMin, value) => {
    if (isMin) {
      const newValue = Math.min(value, currentMax);
      setCurrentRange(newValue, currentMax);
    } else {
      const newValue = Math.max(currentMin, value);
      setCurrentRange(currentMin, newValue);
    }
  };

  return (
    <>
      <div className="mb-2.5 flex flex-nowrap justify-between select-none">
        <h3>{rangeLabel} range</h3>
        <p>{`${isMoney ? "$" : ""}${currentMin} - ${isMoney ? "$" : ""}${currentMax}`}</p>
      </div>
      <div className="relative w-full">
        {/* Min Thumb */}
        <input
          className="accent-secondary-500 pointer-events-none absolute top-1/2 z-30 w-full -translate-y-1/2 appearance-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:cursor-grab"
          type="range"
          min={minRange}
          value={currentMin}
          max={maxRange}
          name="min"
          step={step}
          onChange={e => handleSliderChange(true, e.currentTarget.value)}
        />

        {/* Max Thumb */}
        <input
          className="accent-secondary-500 pointer-events-none absolute top-1/2 z-40 w-full -translate-y-1/2 appearance-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:cursor-grab"
          type="range"
          min={minRange}
          value={currentMax}
          max={maxRange}
          name="max"
          step={step}
          onChange={e => handleSliderChange(false, e.currentTarget.value)}
        />

        {/* Slider Empty Track */}
        <div className="absolute top-1/2 h-0.5 w-full -translate-y-1/2 rounded-full bg-white"></div>

        {/* Slider Filled Track */}
        <div
          className="bg-secondary-600 absolute top-1/2 z-10 h-1 w-full -translate-y-1/2 rounded-full"
          style={{ width: `${maxPercent - minPercent}%`, left: `${minPercent}%` }}
        ></div>
      </div>
    </>
  );
}

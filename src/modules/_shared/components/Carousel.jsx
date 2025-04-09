import { useEffect, useState } from "react";

/**
 * A customizable carousel component for displaying a collection of items.
 * @param {Object} props - The component props.
 * @param {Array} props.items - The array of items to display in the carousel.
 * @param {function} props.renderItem - Function to render each carousel item.
 * @param {number} [props.autoSlideInterval=3000] - Auto-slide interval in milliseconds (0 disables auto-slide).
 * @param {boolean} [props.showControls=true] - Whether to show navigation controls.
 * @param {boolean} [props.showIndicators=true] - Whether to show slide indicators.
 * @param {string} [props.controlClass=""] - Additional classes for navigation controls.
 * @param {string} [props.indicatorClass=""] - Additional classes for indicators.
 * @param {string} [props.itemClass=""] - Additional classes for carousel items.
 * @param {string} [props.containerClass=""] - Additional classes for carousel container.
 * @returns {JSX.Element} The Carousel component.
 *
 * @example
 *
 *	<Carousel
 *		items={carouselItems}
 *		renderItem={(item) => (
 *			<div className={`h-64 flex items-center justify-center ${item.color} text-white text-4xl font-bold`}>
 *					{item.text}
 *			</div>
 *		)}
 *		autoSlideInterval={5000}
 *		showControls={true}
 *		showIndicators={true}
 *		containerClass="rounded-xl shadow-lg"
 *		itemClass=""
 *		controlClass="bg-black/50 text-white"
 *		indicatorClass=""
 *	/>
 */
export default function Carousel({
  items,
  renderItem,
  autoSlideInterval = 3000,
  showControls = true,
  showIndicators = true,
  controlClass = "",
  indicatorClass = "",
  itemClass = "",
  containerClass = ""
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const goToIndex = index => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoSlideInterval) return;
    const timer = setInterval(goToNext, autoSlideInterval);
    return () => clearInterval(timer);
  }, [currentIndex, autoSlideInterval]);

  return (
    <div className={`relative overflow-hidden ${containerClass}`}>
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className={`w-full flex-shrink-0 ${itemClass}`}>
            {renderItem(item, index)}
          </div>
        ))}
      </div>

      {showControls && (
        <>
          <button
            onClick={goToPrev}
            className={`absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-white/30 p-2 hover:bg-white/50 ${controlClass}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className={`absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-white/30 p-2 hover:bg-white/50 ${controlClass}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {showIndicators && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`h-2 w-2 rounded-full transition-all ${indicatorClass} ${
                index === currentIndex ? "w-4 bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

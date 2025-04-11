import { useEffect, useMemo, useState } from "react";

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
 * @param {number} [props.itemsPerPage=1] - Number of items to show per slide/page.
 * @param {boolean} [props.infiniteLoop=false] - Whether the carousel should fill all the spots or not
 * @returns {JSX.Element} The Carousel component.
 *
 * @example
 * // Single item per page
 * <Carousel
 *   items={carouselItems}
 *   renderItem={(item) => (<div>{item.name}</div>)}
 * />
 *
 * @example
 * // Multiple items per page
 * <Carousel
 *   items={carouselItems}
 *   itemsPerPage={3}
 *   renderItem={(item) => (<div className="w-1/3">{item.name}</div>)}
 *   itemClass="flex justify-center"
 * />
 */
export default function Carousel({
  items: originalItems,
  renderItem,
  autoSlideInterval = 3000,
  showControls = true,
  showIndicators = true,
  controlClass = "",
  indicatorClass = "",
  itemClass = "",
  containerClass = "",
  itemsPerPage = 1,
  infiniteLoop = false
}) {
  const items = useMemo(
    () => (infiniteLoop ? duplicateItemsForInfiniteLoop(originalItems, itemsPerPage) : originalItems),
    [infiniteLoop, originalItems]
  );
  const totalPages = Math.ceil(originalItems.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const goToNext = () => {
    setCurrentPage(prevPage => (prevPage === totalPages - 1 ? 0 : prevPage + 1));
  };

  const goToPrev = () => {
    setCurrentPage(prevPage => (prevPage === 0 ? totalPages - 1 : prevPage - 1));
  };

  const goToPage = page => {
    setCurrentPage(page);
  };

	console.log(items)

  useEffect(() => {
    if (!autoSlideInterval) return;
    const timer = setInterval(goToNext, autoSlideInterval);
    return () => clearInterval(timer);
  }, [currentPage, autoSlideInterval]);

  // Get items for current page
  const getPageItems = page => {
    const startIndex = page * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  };


  return (
    <div className={`relative overflow-hidden ${containerClass}`}>
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentPage * 100}%)` }}
      >
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <div key={pageIndex} className="flex w-full flex-shrink-0">
            {getPageItems(pageIndex).map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${itemClass}`}
                style={{ width: `${100 / itemsPerPage}%` }}
              >
                {renderItem(item, pageIndex * itemsPerPage + itemIndex)}
              </div>
            ))}
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
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`h-2 w-2 rounded-full transition-all ${indicatorClass} ${
                index === currentPage ? "w-4 bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function duplicateItemsForInfiniteLoop(items, itemsPerPage) {
  if (items.length % itemsPerPage === 0) 
		return items;

	const itemsLeft = itemsPerPage - (items.length % itemsPerPage);
  return [...items, ...items.slice(0, itemsLeft)];
}

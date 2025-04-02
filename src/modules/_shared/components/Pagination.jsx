import { useState } from "react";

/**
 * A customizable pagination component that displays page navigation controls.
 *
 * @param {Object} props - The component props
 * @param {number} props.totalItems - The total number of items to paginate
 * @param {number} [props.itemsPerPage=10] - Number of items to display per page
 * @param {function} props.onPageChange - Callback fired when page changes
 * @param {number} [props.maxVisiblePages=2] - Maximum number of visible page buttons (excluding navigation)
 * @returns {JSX.Element} The pagination component
 *
 * @example
 * <Pagination
 *   totalItems={100}
 *   itemsPerPage={10}
 *   onPageChange={(page) => console.log('Page changed to:', page)}
 *   maxVisiblePages={5}
 * />
 */
export default function Pagination({
  totalItems,
  itemsPerPage = 10,
  onPageChange,
  maxVisiblePages = 2
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = page => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    onPageChange(page);
  };

  const getPageNumbers = () => {
    const pages = [];

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="mt-6 grid grid-cols-4 grid-rows-2 items-stretch justify-center gap-2 sm:flex">
      <div className="col-span-2 row-start-2 flex flex-wrap justify-end gap-0.5">
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          className="hover:bg-secondary-700 cursor-pointer rounded-md px-3.5 py-2 disabled:opacity-50"
        >
          «
        </button>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="hover:bg-secondary-700 cursor-pointer rounded-md px-3.5 py-2 disabled:opacity-50"
        >
          ‹
        </button>
      </div>
      {/* First & Previous buttons */}

      {/* Page numbers */}
      <div className="col-span-4 row-start-1 flex flex-wrap items-stretch justify-center gap-2">
        {getPageNumbers().map(page => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`cursor-pointer rounded-md px-3.5 py-2 ${
              currentPage === page
                ? "bg-secondary-500 text-white"
                : "bg-secondary-800 hover:bg-secondary-700"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next & Last buttons */}
      <div className="col-span-2 row-start-2 flex flex-wrap justify-start gap-0.5">
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="hover:bg-secondary-700 cursor-pointer rounded-md px-3.5 py-2 disabled:opacity-50"
        >
          ›
        </button>
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="hover:bg-secondary-700 cursor-pointer rounded-md px-3.5 py-2 disabled:opacity-50"
        >
          »
        </button>
      </div>
    </div>
  );
}

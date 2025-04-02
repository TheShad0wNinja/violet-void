import { useSearchParams } from "react-router";

/**
 * A custom hook for managing URL search parameters as filters.
 * 
 * @function
 * @param {Object} [initialFilters={}] - Initial filter values (will be merged with URL params)
 * @returns {Object} An object containing filter utilities
 * @returns {Object} returns.filters - Current filter values (merged from URL and initialFilters)
 * @returns {Function} returns.setFilter - Function to update a single filter
 * @returns {Function} returns.setFilters - Function to update multiple filters
 * @returns {Function} returns.resetFilters - Function to reset filters to initial values
 * 
 * @example
 * // Basic usage
 * const { filters, setFilter, resetFilters } = useUrlFilters({
 *   sort: 'price',
 *   category: 'games'
 * });
 * 
 * // Update a single filter
 * setFilter('category', 'accessories');
 * 
 * // Update multiple filters
 * setFilters({ category: 'consoles', price: 'under-100' });
 * 
 * // Reset to initial filters
 * resetFilters();
 */
export default function useUrlFilters(initialFilters = {}) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilters = Object.fromEntries(searchParams.entries())

  const filters = {
    ...initialFilters,
    ...currentFilters
  };

  const updateFilters = newFilters => {
    const cleanedFilters = Object.fromEntries(
      Object.entries(newFilters).filter(
        ([_, value]) => value !== "" && value !== null && value !== undefined
      )
    );

    setSearchParams(cleanedFilters, {
      replace: true
    });
  };

  const setFilter = (key, value) => {
    updateFilters({ ...filters, [key]: value });
  };

  const setFilters = newFilters => {
    updateFilters({ ...filters, ...newFilters });
  };

  const resetFilters = () => {
    updateFilters(initialFilters);
  };

  return { filters, setFilter, setFilters, resetFilters };
}

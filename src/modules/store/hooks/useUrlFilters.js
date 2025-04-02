import { useSearchParams } from "react-router";

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

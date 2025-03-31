import { useReducer } from "react";
import { useSearchParams } from "react-router";

// Initial state

const ActionTypes = {
  SET_GENRES: "SET_GENRES",
  SET_PRICE_RANGE: "SET_PRICE_RANGE",
  SET_TYPES: "SET_TYPES",
  SET_SORT_BY: "SET_SORT_BY",
  RESET_FILTERS: "RESET_FILTERS"
};

// Reducer function
const filtersReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_GENRES:
      return {
        ...state,
        genres: action.payload
      };

    case ActionTypes.SET_PRICE_RANGE:
      return {
        ...state,
        priceRange: action.payload
      };

    case ActionTypes.SET_TYPES:
      return {
        ...state,
        types: action.payload
      };

    case ActionTypes.SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload
      };

    case ActionTypes.RESET_FILTERS:
      return {
        initialState
      };

    default:
      return state;
  }
};

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

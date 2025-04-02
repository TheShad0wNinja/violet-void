import { Button, Collapsible, DoubleSlider, Drawer, MultiSelectSearch, Select } from "@modules/_shared/App";
import useUrlFilters from "@modules/store/hooks/useUrlFilters";

const genreOptions = [
  { label: "Action", value: "action" },
  { label: "Adventure", value: "adventure" },
  { label: "RPG", value: "rpg" },
  { label: "Strategy", value: "strategy" },
  { label: "Simulation", value: "simulation" },
  { label: "Puzzle", value: "puzzle" },
  { label: "Platformer", value: "platformer" },
  { label: "Fighting", value: "fighting" },
  { label: "Survival", value: "survival" },
  { label: "Horror", value: "horror" },
  { label: "Battle Royale", value: "battle-royale" },
  { label: "MMORPG", value: "mmorpg" },
  { label: "Sports", value: "sports" },
  { label: "Racing", value: "racing" },
  { label: "Sandbox", value: "sandbox" },
  { label: "Stealth", value: "stealth" },
  { label: "Idle/Clicker", value: "idle-clicker" },
  { label: "Educational", value: "educational" },
  { label: "Rhythm", value: "rhythm" },
  { label: "Visual Novel", value: "visual-novel" },
  { label: "Party", value: "party" },
  { label: "Trivia", value: "trivia" },
  { label: "Metroidvania", value: "metroidvania" },
  { label: "Shooter", value: "shooter" },
  { label: "MOBA", value: "moba" },
  { label: "Roguelike", value: "roguelike" },
  { label: "Card/Deck-building", value: "card-deck-building" },
  { label: "Open World", value: "open-world" },
  { label: "Tower Defense", value: "tower-defense" }
];

const typeOptions = [
  { label: "Games", value: "games" },
  { label: "Add-on", value: "add-on" },
  { label: "Bundle", value: "bundle" },
  { label: "Demo", value: "demo" }
];

const sortByOptions = [
  {
    label: "Name A-Z",
    value: "name-asc"
  },
  {
    label: "Name Z-A",
    value: "name-desc"
  },
  {
    label: "Price Low-High",
    value: "price-asc"
  },
  {
    label: "Price High-Low",
    value: "price-desc"
  }
];

const initalFilters = {
  genres: "",
  priceMin: 0,
  priceMax: 400,
  types: "",
  sortBy: "name-asc"
};

export default function FilterDrawer({ isOpen, setIsOpen }) {
  const { filters, setFilter, setFilters, resetFilters } = useUrlFilters(initalFilters);

  const selectedGenres = filters.genres ? filters.genres.split(",") : [];
  const selectedTypes = filters.types ? filters.types.split(",") : [];

  const handleGenreSelect = items => {
    setFilter("genres", items.join(","));
  };

  const handleTypesSelect = items => {
    setFilter("types", items.join(","));
  };

  return (
    <Drawer header="Filter" isOpen={isOpen} setIsOpen={setIsOpen} position="right">
      <div className="grid grid-cols-1 items-start justify-center gap-6">
        <Collapsible header="Genre">
          <MultiSelectSearch
            setSelectedItems={handleGenreSelect}
            selectedItems={selectedGenres}
            options={genreOptions}
          />
        </Collapsible>
        <Collapsible header="Price">
          <DoubleSlider
            rangeLabel={"Price"}
            isMoney={true}
            currentMin={Number(filters.priceMin)}
            currentMax={Number(filters.priceMax)}
            setCurrentRange={(min, max) => setFilters({ priceMin: min, priceMax: max })}
            minRange={0}
            maxRange={400}
          />
        </Collapsible>
        <Collapsible header="Types">
          <MultiSelectSearch
            setSelectedItems={handleTypesSelect}
            selectedItems={selectedTypes}
            options={typeOptions}
          />
        </Collapsible>
        <Collapsible header="Sort By">
          <Select
            value={filters.sortBy}
            setValue={val => setFilter("sortBy", val)}
            options={sortByOptions}
          />
        </Collapsible>
        <Button onClick={() => resetFilters()}>Reset Filters</Button>
      </div>
    </Drawer>
  );
}

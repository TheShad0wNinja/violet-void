import { useMemo, useState } from "react";

export default function MultiSelectSearch({
  options = [],
  selectedItems,
  setSelectedItems,
  placeholder = "Search..."
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredOptions = options.filter(
    option =>
      !selectedItems.includes(option.value) &&
      option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const mappedOptions = useMemo(
    () => options.reduce((obj, option) => ({ ...obj, [option.value]: option.label }), {}),
    [options]
  );

  const handleSelect = item => {
    if (!selectedItems.includes(item.value)) {
      setSelectedItems([...selectedItems, item.value]);
    }
    setSearchQuery("");
    setIsOpen(true);
  };

  // Remove selected item
  const removeItem = item => {
    setSelectedItems(selectedItems.filter(i => i !== item));
  };

  return (
    <div className="relative w-full">
      <div className="border-accent flex flex-wrap gap-2 rounded-lg border p-2">
        {/* Selected items */}
        {selectedItems.map(item => (
          <button
            key={item}
            className="bg-secondary-700 text-secondary-50 flex cursor-pointer flex-nowrap items-center justify-center gap-2 rounded-md px-2 py-1 text-sm"
            onClick={() => removeItem(item)}
          >
            {mappedOptions[item]}
            <span className="block">x</span>
          </button>
        ))}

        {/* Search input */}
        <input
          type="text"
          value={searchQuery}
          onChange={e => {
            setSearchQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none"
        />
      </div>

      {/* Dropdown options */}
      {isOpen && (
        <div className="bg-secondary-600 absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md">
          {filteredOptions.map(option => (
            <button
              key={option.value}
              onClick={() => handleSelect(option)}
              className="w-full cursor-pointer p-2 text-left hover:bg-gray-900"
            >
              {option.label}
            </button>
          ))}

          {filteredOptions.length === 0 && (
            <div className="p-2 text-gray-900">No options found</div>
          )}
        </div>
      )}
    </div>
  );
}

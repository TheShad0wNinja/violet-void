import { useState } from "react";
import { IconX } from "@tabler/icons-react";
import { Link } from "react-router";

const SearchComponent = ({ data = [], searchKeys = [], placeholder = "Search...", className }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter(item => {
    const keysToSearch = Array.isArray(searchKeys) ? searchKeys : [];

    if (keysToSearch.length === 0) {
      return Object.values(item).some(
        value => typeof value === "string" && value.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return keysToSearch.some(
      key => item[key] && item[key].toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          className="border-primary focus:ring-accent w-full rounded-lg border px-4 py-2 focus:ring-2 focus:outline-none"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button
            className="hover:text-accent absolute top-2.5 right-3"
            onClick={() => setSearchTerm("")}
          >
            <IconX />
          </button>
        )}

        {searchTerm && (
          <div className="bg-secondary-800 border-accent w absolute right-0 z-10 mt-2 max-h-96 overflow-y-auto rounded-lg border">
            {filteredData.length > 0 ? (
              <ul className="divide-accent divide-y">
                {filteredData.map((item, index) => (
                  <li key={index} className="hover:bg-primary p-3 duration-200">
                    <Link to={`/community/` + item.title} className="block h-full w-full">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-accent p-4">No results found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;

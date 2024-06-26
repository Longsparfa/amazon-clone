import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { createSearchParams, useNavigate } from "react-router-dom";

import { callAPI } from "../utils/CallApi";

const MobileSearch = () => {
  const [suggestions, setSuggestions] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: `${searchTerm}`,
      })}`,
    });

    setSearchTerm("");
    setCategory("All");
  };

  const getSuggestion = () => {
    callAPI(`data/suggestions.json`).then((suggestionResults) => {
      setSuggestions(suggestionResults);
    });
  };

  useEffect(() => {
    getSuggestion();
  }, []);

  return (
    <div className="p-1 sm:hidden">
      <div className="flex items-center h-10 bg-amazonclone-yellow rounded ">
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 bg-gray-300 text-black border text-xs xl:text-sm"
        >
          <option>All</option>
          <option>Deals</option>
          <option>Amazon</option>
          <option>Fashion</option>
          <option>Computers</option>
          <option>Home</option>
          <option>Mobile</option>
        </select>
        <input
          className="flex w-[50%] sm:grow items-center h-[100%] rounded-l text-black "
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSubmit} className="w-[48px] ">
          <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900" />
        </button>
      </div>
      {suggestions && (
        <div className="bg-white text-black w-full z-40 absolute">
          {suggestions
            .filter((suggestion) => {
              const currentSearchTerm = searchTerm.toLowerCase();

              const title = suggestion.title.toLowerCase();

              return (
                currentSearchTerm &&
                title.startsWith(currentSearchTerm) &&
                title !== currentSearchTerm
              );
            })
            .slice(0, 10)
            .map((suggestion) => {
              return (
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setSearchTerm(suggestion.title);
                  }}
                  key={suggestion.id}
                >
                  {suggestion.title}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default MobileSearch;

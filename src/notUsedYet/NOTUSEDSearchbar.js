import React, { useState } from "react";
import "../scss/searchbar.scss";
import { IoSearchCircleSharp } from "react-icons/io5";

export default function Searchbar() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="searchbar-container mw">
      <div className="searchbar">
        <input
          className="search-input"
          type="text"
          value={searchValue}
          placeholder="search..."
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <IoSearchCircleSharp className="search-btn" />
      </div>
    </div>
  );
}

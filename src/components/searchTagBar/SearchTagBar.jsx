import React from "react";
import "../searchBar/SearchBar.scss";
import "./SearchTagBar.scss";
export default function SearchTagBar({ searchTag, setSearchTag }) {
  console.log("<SearchTagBar /> rendederd");
  return (
    <div className="searchBar searchTagBar">
      <input
        type="text"
        placeholder="Search by tag"
        value={searchTag}
        onChange={(e) => setSearchTag(e.target.value)}
      />
    </div>
  );
}

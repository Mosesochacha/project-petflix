import React from "react";
import "../homepage.css";

function SearchForm({
  searchValue,
  setSearchValue,
  setSearchType,
  searchType,
}) {
  return (
    <form
      className="formSearch"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <select
        className="searchTyped"
        name="searchTyped"
        value={searchType}
        onChange={(e) => {
          setSearchType(e.target.value);
        }}
      >
        <optgroup label="Search By:">
          <option value="breed">Breed</option>
          <option value="type">Type</option>
        </optgroup>
      </select>
      <input
        className="searchTyped"
        type="search"
        name="search"
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </form>
  );
}

export default SearchForm;

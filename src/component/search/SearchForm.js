import React from "react";

function SearchForm({
  searchValue,
  setSearchValue,
  setSearchType,
  searchType,
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <select
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
        type="search"
        name="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </form>
  );
}

export default SearchForm;
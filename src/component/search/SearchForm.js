import React from "react";

function SearchForm({ searchValue, setSearchValue }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="search"
        name="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <input type="submit" value="Search..." />
    </form>
  );
}

export default SearchForm;

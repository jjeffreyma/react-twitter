import React, { Component } from 'react';

const SearchBar = ({ searchString, handleSearchSubmit }) => {
  const onSearchSubmit = (event) => {
    event.preventDefault();
    handleSearchSubmit(event.target.search.value);
  }

  return (
    <div className="form-search">
      <form onSubmit={onSearchSubmit}>
        <input placeholder="Enter search..." name="search" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SearchBar;
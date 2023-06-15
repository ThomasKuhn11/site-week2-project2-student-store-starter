import * as React from "react";
import "./Search.css";

export default function Search({ searchValue, handleSearchChange, handleSearch }) {
  //create a submit button and call hadle search when clicked

  function handleOnClick(event) {
    //alert(searchValue)
    event.preventDefault();
    handleSearch();
    
    
  }

  return (
    <form>
      <div className="search-bar">
        <input type="text" name="search" placeholder="Search"
        value={searchValue}
        onChange={handleSearchChange}
        ></input>

        <button type="submit" onClick={handleOnClick}>
          <i className="material-icons">search</i>
        </button>
      </div>
    </form>
  );
}

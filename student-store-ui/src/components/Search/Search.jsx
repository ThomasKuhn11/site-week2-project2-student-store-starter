import * as React from "react";
import "./Search.css";

export default function Search({ searchValue, handleChange, handleSearch }) {
  //create a submit button and call hadle search when clicked

  function handleOnClick(event) {
    //alert(searchValue)
    event.preventDefault();
    handleSearch(event);
    
    
  }

  return (
    <form>
      <div className="search-bar">
        <input type="text" name="search" placeholder="Search"
        value={searchValue}
        onChange={handleChange}
        ></input>

        <button type="submit" onClick={handleOnClick}>
          <i className="material-icons">search</i>
        </button>
      </div>
    </form>
  );
}

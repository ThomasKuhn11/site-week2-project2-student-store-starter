import * as React from "react";
import "./SubNav.css";

import { useState } from "react";

import Search from "../Search/Search"

import Grid from "../Grid/Grid"

export default function SubNav({products, searchValue, handleChange, handleSearch, handleFilter}) {


  return (
    <nav className="sub-navbar">
      <div className="content">
        <div className="row">
          <Search searchValue={searchValue}
                  handleChange={handleChange}
                  handleSearch ={handleSearch}
                  />
                  
    
          <div className="links">
            <span className="help">
              <i className="material-icons">help</i>Help
            </span>
            <div className="cart">
              <a href="/">
                My Cart<i className="material-icons">shopping_cart</i>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="hamburger-menu">
            <i className="material-icons">menu</i>
          </div>
          <ul className="category-menu">
            <li className="">
              <button onClick = {() => handleFilter('')}>All Categories</button>
            </li>
            <li className="">
              <button onClick = {() => handleFilter('clothing') } >Clothing</button>
            </li>
            <li className="">
              <button onClick = {() => handleFilter('food') }>Food</button>
            </li>
            <li className="">
              <button  onClick = {() => handleFilter('accessories') }>Accessories</button>
            </li>
            <li className="">
              <button onClick = {() => handleFilter('tech') }>Tech</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

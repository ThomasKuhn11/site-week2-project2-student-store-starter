import * as React from "react";
import "./SubNav.css";

import { useState } from "react";

import Search from "../Search/Search"

import Grid from "../Grid/Grid"

export default function SubNav({products}) {

    const [searchValue, setSearchValue] = useState('');
    //const [searchNew, setSearchNew] = useState([])
  
    const handleSearchChange = (event) => {
        //console.log("-------", event.taget.value)
        setSearchValue(event.target.value)


        // let query = products?.filter( (product) => product.name.includes(searchValue))
        //setSearchNew(products?.filter( (product) => product.name.includes(searchValue)))

        //alert(searchValue)
        //compare search value and find the ones I want 
        //use the filter to select items that have the key word value
        //filter the products array to only the ones with input from search bar

        //capture values from filter and render them again like done before 

    }


    const handleSearch = () => {
        alert(searchValue)

        let query = products?.filter( (product) => product.name.includes(searchValue))
        console.log(query)
        //I already use this products variable on the first rendering. I mapped it.
        //Can I keep using it?
        //shoulf I make new one

        //setProduts to this query
        //setProducts(query)

    }

  return (
    <nav className="sub-navbar">
      <div className="content">
        <div className="row">
          <Search searchValue={searchValue}
                  handleSearchChange={handleSearchChange}
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
          <ul className="category-menu open">
            <li className="">
              <button>All Categories</button>
            </li>
            <li className="">
              <button>Clothing</button>
            </li>
            <li className="is-active">
              <button>Food</button>
            </li>
            <li className="">
              <button>Accessories</button>
            </li>
            <li className="">
              <button>Tech</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

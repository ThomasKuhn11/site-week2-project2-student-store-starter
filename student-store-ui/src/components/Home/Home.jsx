import * as React from "react";
import "./Home.css";
import { useState, useEffect } from "react";

import SubNav from "../SubNav/SubNav";
import Grid from "../Grid/Grid";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import axios from "axios";

import About from "../About/About";
import Contact from "../Contact/Contact";

import Footer from "../Footer/Footer";

import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

export default function Home({cart, setCart, total, setTotal}) {

  
  let url = "https://codepath-store-api.herokuapp.com/store";

  const [products, setProducts] = useState([]);

  const [searchValue, setSearchValue] = useState();

  const [newSearch, setNewSearch] = useState(products); //[]

  const [filtered, setFiltered] = useState("");

  const [cat, setCat] = useState("");

  //called everytime search bar is changed
  const handleChange = (event) => {
    setSearchValue(event.target.value);

  };

  //called when submit is pressed
  const handleSearch = (event) => {
    if (cat.length > 0) {
      setFiltered(
        products
          ?.filter((product) => product.category == cat)
          .filter((product) =>
            product.name.toLowerCase().includes(searchValue.toLowerCase())
          )
      );
    } else {
      setFiltered(
        products?.filter((product) =>
          product.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }
  };

  function handleFilter(cat) {
    setCat(cat);
    console.log(cat);
    //alert(cat)
    setFiltered(
      products?.filter((item) => {
        if (cat == "") return item;
        return item.category == cat;
      })
    );
    console.log(filtered);
  }

  useEffect(() => { //'http://localhost:3008/'
    axios.get('http://localhost:3001/store').then((response) => {
      console.log(response.data.products)
      setProducts(response.data.products);
    });
  }, []);

  return (
    <div className="home">
      <div className="welcome">
        <h1>Welcome to my store!</h1>
        <p>We have all kinds of items. Click and start exploring!</p>
      </div>
      <SubNav
        products={products}
        searchValue={searchValue}
        handleChange={handleChange}
        handleSearch={handleSearch}
        handleFilter={handleFilter}
      />

      <Grid products={filtered ? filtered : products} cart={cart} setCart={setCart} total={total} setTotal={setTotal} />

      <div id="extraInfo">
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

import * as React from "react"
import "./Home.css"
import { useState, useEffect } from "react";

import SubNav from "../SubNav/SubNav"
import Grid from "../Grid/Grid"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import axios from 'axios';

import About from "../About/About"
import Contact from "../Contact/Contact"

import Footer from "../Footer/Footer"


export default function Home() {

  let url = 'https://codepath-store-api.herokuapp.com/store'

  const[products, setProducts] = useState([]);

  const [searchValue, setSearchValue] = useState('');

  const [newSearch, setNewSearch] = useState([])

  const [filtered, setFiltered] = useState('')

  //use state for filtered here
  //filtered = all products by default //use useEffect() for this
  //each


  const handleChange = (event) => {
      setSearchValue(event.target.value)

      //new stuffffffffffffffffffffff
      setFiltered(products?.filter( products => {
        if (event.target.value == '') return products;
        return products.name.toLowerCase().includes(event.target.value.toLowerCase)
      }))
      //setFiltered()

  }


  const handleSearch = () => {
      //alert(searchValue)

      setNewSearch(products?.filter( (product) => product.name.toLowerCase().includes(searchValue.toLowerCase())))

  }

  function handleFilter(cat) {
    //alert(cat)
    setFiltered(products?.filter(item => {
      if (cat == '') return item
      return item.category ==cat

    }))
    console.log(filtered)

  }


  // function displayNow() {
  //   if (newSearch !== '') return newSearch
  //   else if (filtered) return filtered
  //   else return products
  // }

  useEffect(() => {
    axios.get(url)
    .then((response)=> {     
      setProducts(response.data.products)
      
    })
  }, [] );


  return (
    <div className="home">
      <div class='welcome'> 
            <h1>Welcome to my store!</h1>
            <p>We have all kinds of items. Click and start exploring!</p>
          </div>
          <SubNav products={products} 
                  searchValue={searchValue}
                  handleChange={handleChange}
                  handleSearch ={handleSearch} 
                  handleFilter={handleFilter} />

           {/* <Grid products={displayNow()}/> */}
          <Grid products={newSearch ? newSearch: products}/>
          {/* <Grid products={filtered ? filtered: products}/> */}
          

      {/* <Link to="/about">Route Click</Link> */}
{/*       
      {
        products.map(product => createProduct(product))
      } */}

      <div id="extraInfo">

      <About/>
      <Contact/>
      <Footer/>


      </div>

    

  </div>    
  )
}

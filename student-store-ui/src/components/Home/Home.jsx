import * as React from "react"
import "./Home.css"
import { useState, useEffect } from "react";

import SubNav from "../SubNav/SubNav"
import Grid from "../Grid/Grid"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import axios from 'axios';



export default function Home() {

  let url = 'https://codepath-store-api.herokuapp.com/store'

  const[products, setProducts] = useState([]);
  //already using this in order to render the inicial items

  //handle search here
  //use query value to see

  //let query = []

//   const handleSearch = () => {

//     //setSeach
        
//     query = products?.filter( (product) => product.name.includes(searchValue))
//     console.log(query)
//     //I already use this products variable on the first rendering. I mapped it.
//     //Can I keep using it?
//     //shoulf I make new one

//     //setProduts to this query
//     //setProducts(query)

// }


  useEffect(() => {
    axios.get(url)
    .then((response)=> {     
      setProducts(response.data.products)
      
    })
  }, [] );


  return (
    <div className="home">
      <div class='title'> 
            <h1>Welcome to my store!</h1>
            <p>We have all kinds of click on the items and start exploring</p>
          </div>
          <SubNav products={products}  />
          {/* <Grid products={query ? query: products}/> */}
          <Grid products={products}/>

          <div class="About Us">
            <h1>About Us</h1> <br/>

          </div>
          <div class="Contact Us">
            <h1>Contact Us</h1>

          </div>

      {/* <Link to="/about">Route Click</Link> */}
{/*       
      {
        products.map(product => createProduct(product))
      } */}
     </div>    
  )
}

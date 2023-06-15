import * as React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"

import SubNav from "../SubNav/SubNav"


//not part of project
import { useEffect, useState } from "react"
import axios from 'axios'


export default function App() {

  let url = 'https://codepath-store-api.herokuapp.com/store'

  const[products, setProducts] = useState([]);
  //already using this in order to render the inicial items



  useEffect(() => {
    axios.get(url)
    .then((response)=> {     
      setProducts(response.data.products)
      
    })
  }, [] );


  return (
    <div className="app">
      <BrowserRouter>

      {/* <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        
      </Routes> */}
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          {/* <Sidebar /> */}
          <div class='title'> 
            <h1>Welcome to my store!</h1>
            <p>We have all kinds of click on the items and start exploring</p>
          </div>
          <SubNav products={products}/>
          <Home products={products}/>
          <div class="About Us">
            <h1>About Us</h1>

          </div>
          <div class="Contact Us">
            <h1>Contact Us</h1>

          </div>
     
        </main>
      </BrowserRouter>
    </div>
  )
}

import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";

import SubNav from "../SubNav/SubNav";
import NotFound from "../NotFound/NotFound";



//not part of project
import { useEffect, useState } from "react";
import axios from "axios";
import About from "../About/About";
import ProductDetails from "../ProductDetails/ProductDetails";

export default function App() {
//make use state to talk between side bar and grid

//cart usestate(an array that has all cart items) here and pass it down the sidebar

const [cart, setCart] = useState([]); //array of items(json?)


// const [cart, setCart] = useState({
//   cartItem: [{
//     id: null,
//     quantity: 0
//   }],
//   totalPrice: 0
// }) 


const [total, setTotal] = useState(0);

//everytime user clicks + and - should add to shopping cart
//if item is already in the cart just increment the count
//else add the item to my cart


  return (
    <div className="app">
      <BrowserRouter>
        <Sidebar cart={cart}/>
        <Navbar />
        <main>
          <Routes>
            <Route path="" element={<Home cart={cart} setCart={setCart} total={total} setTotal={setTotal}/>} />

            <Route path="products/:id" element={<ProductDetails />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

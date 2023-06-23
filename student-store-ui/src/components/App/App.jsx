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


const [cart, setCart] = useState([]); 


const [total, setTotal] = useState(0);


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

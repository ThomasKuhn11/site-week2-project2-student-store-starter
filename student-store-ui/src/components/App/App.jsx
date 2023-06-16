import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";

import SubNav from "../SubNav/SubNav";

//not part of project
import { useEffect, useState } from "react";
import axios from "axios";
import About from "../About/About";

export default function App() {
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
          <Sidebar />

          <Home />

        </main>
      </BrowserRouter>
    </div>
  );
}

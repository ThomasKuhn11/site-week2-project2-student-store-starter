import * as React from "react"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
        <div className="site">
          
            <h1 alt="my logo" id="siteName">Thomas.Kuhn11</h1>
            
        </div>
              <ul className="links">
                <li><a href="/">Home</a></li>
                <li><a href="/#About">About Us</a></li>
                <li><a href="/#Contact">Contact Us</a></li>
                <li><a href="/#Buy">Buy Now</a></li></ul>
        </div>
    </nav>
  )
}

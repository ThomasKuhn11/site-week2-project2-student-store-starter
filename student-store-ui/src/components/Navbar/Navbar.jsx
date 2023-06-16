import * as React from "react"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div class="content">
        <div class="site">
          
            <h1 alt="codepath logo" id="siteName">Thomas.Kuhn11</h1>
            
        </div>
              <ul class="links">
                <li><a href="/">Home</a></li>
                <li><a href="/#About">About Us</a></li>
                <li><a href="/#Contact">Contact Us</a></li>
                <li><a href="/#Buy">Buy Now</a></li></ul>
        </div>
    </nav>
  )
}

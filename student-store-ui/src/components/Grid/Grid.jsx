import * as React from "react"
import "./Grid.css"

export default function Grid({products}) {
    //console.log(products)
  
    function createProduct(info) {
      return (
        <div className="product">
              <img className="foodImages" src={info.image} />
              <div className="mainInfo">
                <p>{info.name}</p>
                <p>{info.price}</p>
              </div>
              
            </div>
      )
    }  
    return (
      <div className="Grid">
        {/* <Link to="/about">Route Click</Link> */}
        
        {
          products.map(product => createProduct(product))
        }
       </div>    
    )
  }
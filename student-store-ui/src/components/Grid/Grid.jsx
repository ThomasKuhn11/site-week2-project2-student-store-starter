import * as React from "react"
import "./Grid.css"

import { Link } from "react-router-dom"

export default function Grid({products}) {
    //console.log(products)
  
    function createProduct(info) {
      return (
        <Link to={"products/" + info.id}>

            <div className="product">
              <img className="foodImages" src={info.image} />
              <div className="mainInfo">
                <p>{info.name}</p>
                <p>{"$"+info.price.toFixed(2)}</p>
              </div>
              
            </div>
        
        </Link>
  
      )
    }  
    return (
      <div className="Grid">
        {products.map((product) => createProduct(product))}
      </div>
    );
  }
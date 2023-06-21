import * as React from "react";
import { Link } from "react-router-dom";

import { useState } from "react";

import "./ProductCard.css";


export default function ProductCard({info}) {

  //need to make a shopping cart component and everytime
  //make addToshoppingCart and removeFromShoppingCart
    


    const [count, setCount] = useState(0);


    const increment = () => {
      setCount(count + 1);
  
    }
  
    const decrement = () => {
      if (count !== 0) {
        setCount(count - 1);
      }
      
  
    }

    return (
                
        <div className="product">
        <Link to={"products/" + info.id}>
          <img className="foodImages" src={info.image} />
        </Link>
        <div className="productInfo">
          <div className="mainInfo">
            <p>{info.name}</p>
            <p>{"$" + info.price.toFixed(2)}</p>
          </div>
          <div className="actions">
            <div className="buttons">
              <button onClick={increment} className="add">
                <i className="material-icons">add</i>
              </button>
              <button onClick={decrement} className="remove">
                <i className="material-icons">remove</i>
              </button>
            </div>
            <span className="quantity">
              <span className="amt">{count}</span>
            </span>
          </div>
        </div>
      </div>

    );

}
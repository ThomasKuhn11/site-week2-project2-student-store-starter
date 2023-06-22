import * as React from "react";
import { Link } from "react-router-dom";

import { useState } from "react";

import "./ProductCard.css";


export default function ProductCard({info, cart, setCart}) {

  //need to make a shopping cart component and everytime
  //make addToshoppingCart and removeFromShoppingCart
    


    const [count, setCount] = useState(0);


    const increment = () => {
       //alert(count)

        setCount(count + 1);

        //check if item is alredy in cart. 
        if (!(cart.some(item => item.id === info.id))) {
          //item not in cart so add
          setCart([...cart, {id: info.id, name: info.name, price: info.price, count: count}]);
        } 
        else {
          //item already in cart so just increment count
          //find index and change the count
      
          const updatedItems = cart.map(item => {
            if (item.id === info.id) {
              // Update the count property of the item with the matching id
              return { ...item, count: count };
            }
            return item;
          });
          setCart(updatedItems);

          

        }
      console.log(cart)
      
  
    }
  
    const decrement = () => {
      //alert(count)

      if (count !== 0) {
        setCount(count - 1);
        //alert(count)

        if (count === 1) {
          const updatedItems = cart.filter(item => item.id !== info.id);
          setCart(updatedItems);
        }

        // const updatedItems = cart.map(item => {
        //   if (item.id === info.id) {
        //     // Update the count property of the item with the matching id
        //     return { ...item, count: count };
        //   }
        //   return item;
        // });
        // setCart(updatedItems);

            
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
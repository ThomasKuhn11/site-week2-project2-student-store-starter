import * as React from "react";
import "./Grid.css";

import { useState } from "react";

import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

export default function Grid({ products, cart, setCart, total, setTotal}) {
  console.log(products)





  function createProduct(info, cart, setCart) {
    
    return (
      
       <ProductCard info={info} cart={cart} setCart={setCart} total={total} setTotal={setTotal}/>

    );
  }
  return (
    <div className="Grid">
      {products?.map((product) => createProduct(product, cart, setCart))}

      {/* {products.map((product) => <ProductCard product={product}/> )} */}
    </div>
  );
}

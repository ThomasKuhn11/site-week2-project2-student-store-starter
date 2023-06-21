import * as React from "react";
import "./Grid.css";

import { useState } from "react";

import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

export default function Grid({ products }) {
  console.log(products)
  



  function createProduct(info) {
    return (
       <ProductCard info={info}/>

    );
  }
  return (
    <div className="Grid">
      {products?.map((product) => createProduct(product))}

      {/* {products.map((product) => <ProductCard product={product}/> )} */}
    </div>
  );
}

import { useParams } from "react-router-dom";

import {useState, useEffect} from 'react'

import axios from "axios";

import "./ProductDetails.css"



export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProducts] = useState({});


    useEffect(() => {
        axios.get(`https://codepath-store-api.herokuapp.com/store/${id}`)
        .then((response)=> {     
          setProducts(response.data.product)
          
        })
      }, [] );

      return (

        <div className="cardDetails">
            <div className="product">
              <img className="foodImages" src={product.image} />
              <div className="mainInfo">
                <h1>{product.name}</h1>
                <h2>{"$"+product.price}</h2>
                <p>{product.description}</p>
              </div>

              </div>
        </div>

        
      )

}
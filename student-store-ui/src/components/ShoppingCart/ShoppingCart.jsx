import * as React from "react";
import "./ShoppingCart.css";

export default function ShoppingCart({ cart }) {

    const calculateSubTotal = () => {
        // Calculate the total of all items in the cart
        const total = cart.reduce((accumulator, item) => {
          const itemTotal = item.quantity * item.price;
          return accumulator + itemTotal;
        }, 0);
        return total;
    };

    

    const subTotal = calculateSubTotal();

    const tax = subTotal * 0.08;

    const total = tax + subTotal;

 

    const buildList = cart.map((item) => (
        <div className="product-row" key={item.id}>
          <span className="flex-2 cart-product-name">{item.name}</span>
          <span className="center cart-product-quantity">{item.quantity}</span>
          <span className="center cart-product-price">${item.price}</span>
          <span className="center cart-product-subtotal">
            ${item.quantity * item.price}
          </span>
        </div>
      ));

      

      //const total that uses map to get total of each item
      


  if (cart.length === 0) {
    return (
      <>
        <div className="notification">
          No items added to cart yet. Start shopping now!
        </div>
      </>
    );
  } else {
    return (
      <div className="CartTable">
        <div className="header">
          <div className="header-row">
            <span className="flex-2">Name</span>
            <span className="center">Quantity</span>
            <span className="center">Unit Price</span>
            <span className="center">Cost</span>
          </div>
          {buildList}
        </div>
        <div className="receipt">
          <div className="receipt-subtotal">
            <span className="label">Subtotal</span>
            <span className="center subtotal">${subTotal}</span>
          </div>
          <div className="receipt-taxes">
            <span className="label">Taxes and Fees</span>
            <span className="center">${tax.toFixed(2)}</span>
          </div>
          <div className="receipt-total">
            <span className="label">Total</span>
            <span className="center total-price">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    );
  }
}

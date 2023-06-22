import * as React from "react";

export default function ShoppingCart({ cart }) {

    const buildList = cart.map((item) => (
        <div key={item.id}>
          <span className="flex-2 cart-product-name">{item.name}</span>
          <span className="center cart-product-quantity">{item.quantity}</span>
          <span className="center cart-product-price">${item.price}</span>
          <span className="center cart-product-subtotal">
            ${item.quantity * item.price}
          </span>
        </div>
      ));



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
      <div class="CartTable">
        <div class="header">
          <div class="header-row">
            <span class="flex-2">Name</span>
            <span class="center">Quantity</span>
            <span class="center">Unit Price</span>
            <span class="center">Cost</span>
          </div>
          <div class="product-row"></div>
          {buildList}
        </div>
        <div class="receipt">
          <div class="receipt-subtotal">
            <span class="label">Subtotal</span>
            <span></span>
            <span></span>
            <span class="center subtotal">xxx</span>
          </div>
          <div class="receipt-taxes">
            <span class="label">Taxes and Fees</span>
            <span></span>
            <span></span>
            <span class="center">xxx</span>
          </div>
          <div class="receipt-total">
            <span class="label">Total</span>
            <span></span>
            <span></span>
            <span class="center total-price">xxx</span>
          </div>
        </div>
      </div>
    );
  }
}

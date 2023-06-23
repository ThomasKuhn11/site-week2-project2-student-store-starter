import * as React from "react";
import "./Sidebar.css";

import { useState } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function Sidebar({ cart }) {
  const [isOpen, setIsOpen] = useState(false);

  const [receipt, setReceipt] = useState("");

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");


  const handleCheckout = () => {
    // Create the receipt using the entered information
    const receiptData = {
      name,
      email,
      // Other receipt details...
    };

    // Set the receipt state with the created receipt data
    setReceipt(receiptData);
  };

  const handleOpenClose = () => {
    if (isOpen === true) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  
  const showPurchase = cart.map((item) => (   
      <li>{item.quantity} total {item.name} purchased at a cost of ${item.quantity * item.price}</li>   
  ));


  if (isOpen === false) {
    return (
      <section className="sidebarClosed">
        <div className="wrapper">
          <button
            onClick={handleOpenClose}
            className="toggle-button button closed"
          >
            <i className="material-icons md-48">arrow_forward</i>
          </button>
          <div className="shopping-cart">
            <div className="cart-icons">
              <span className="cart-icon icon button">
                <i className="material-icons md-48">add_shopping_cart</i>
              </span>
              <span className="cart-icon icon button">
                <i className="material-icons md-48">monetization_on</i>
              </span>
              <span className="cart-icon icon button">
                <i className="material-icons md-48">fact_check</i>
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="sidebarOpen">
        <div className="wrapper">
          <button
            onClick={handleOpenClose}
            className="toggle-button button open"
          >
            <i className="material-icons md-48">arrow_forward</i>
          </button>
          <div className="shopping-cart">
            <div className="open">
              <h3 className="">
                Shopping Cart{" "}
                <span className="button">
                  <i className="material-icons md-48">add_shopping_cart</i>
                </span>
              </h3>
              <div className="notification">
                <ShoppingCart cart={cart} />
              </div>
              <div className="checkout-form">
                <h3 className="">
                  Payment Info{" "}
                  <span className="button">
                    <i className="material-icons md-48">monetization_on</i>
                  </span>
                </h3>
                <div className="input-field">
                  <label className="label">Name</label>
                  <div className="control ">
                    <input
                      name="name"
                      className="checkout-form-input"
                      type="text"
                      placeholder="Student Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div className="input-field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      name="email"
                      className="checkout-form-input"
                      type="email"
                      placeholder="student@codepath.org"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <label className="checkbox">
                      <input name="termsAndConditions" type="checkbox"></input>
                      <span className="label">
                        I agree to the terms and conditions
                        
                      </span>
                    </label>
                  </div>
                </div>
                <p className="is-danger"></p>
                <div className="field">
                  <div className="control">
                    <button
                      className="button checkout-button"
                      onClick={handleCheckout}
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
              <div className="checkout-success">
                <h3>
                  Checkout Info{" "}
                  <span className="icon button">
                    <i className="material-icons md-48">fact_check</i>
                  </span>
                </h3>
                <div className="content">
                  {receipt ? (
                    <div className="card">
                      <h2>Receipt:</h2>
                      <p>Thank you for your purchase {receipt.name}!</p>
                      <p>A confirmation email has been sent to {receipt.email}.</p>
                      
                      <ul className="purchase">
                      {showPurchase}

                      </ul>
                      <div className="homeLink"><a href="/">Home</a></div>
                    </div>
                    
                  ) : (
                    <div className="defaultMessage">
          
                      <p>
                        A confirmation email will be sent to you so that you can
                        confirm this order. Once you have confirmed the order,
                        it will be delivered to your dorm room.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

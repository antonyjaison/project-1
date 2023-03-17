import React from "react";
import CartCard from "../CartCard/CartCard";
import "./CartDetails.css";

const CartDetails = () => {
  return (
    <div className="container cartDetails_wrapper">
      <h1>Your cart</h1>

      <div className="cart_card_section">
        <div className="cart_card">
          <CartCard />
        </div>
        <div className="cart_card">
          <CartCard />
        </div>
        <div className="cart_card">
          <CartCard />
        </div>
      </div>

      <div className="checkout_section">
        <h1>Checkout</h1>

        <div className="checkout_card">
          <p>Order details : </p>

          <div className="cart_item_details">
            <div className="card_product">
              <p>1. The kitchen chair</p>
              <p>Price : $49.99 x 1</p>
            </div>
            <div className="card_qty">
              <p>Qty : 1</p>
              <p>149.99</p>
            </div>
          </div>
          <div className="cart_item_details">
            <div className="card_product">
              <p>1. The kitchen chair</p>
              <p>Price : $49.99 x 1</p>
            </div>
            <div className="card_qty">
              <p>Qty : 1</p>
              <p>149.99</p>
            </div>
          </div>

          <div className="cart_item_details">
            <p>Grand total : </p>
            <p>$147.99</p>
          </div>
        </div>
        <button className="checkout_button">Proceed to checkout</button>
      </div>
    </div>
  );
};

export default CartDetails;

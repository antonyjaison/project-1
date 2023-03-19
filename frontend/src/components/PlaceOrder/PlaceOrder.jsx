import React from "react";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  return (
    <div className="place_order_wrapper">
      <div className="order_section">
        <div className="order_heading">
          <h1>Your delivery address</h1>
        </div>
        <hr className="order_line" />

        <div className="order_address">
          <p>Country : Angamaly</p>
          <p>State : Angamaly</p>
          <p>City : Angamaly</p>
          <p>Pincode : Angamaly</p>
          <p>Landmark : Angamaly</p>
        </div>
        <button className="order_place_button">Place order</button>
      </div>
    </div>
  );
};

export default PlaceOrder;

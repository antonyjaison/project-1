import React from "react";
import "./ProductDetails.css";

const ProductDetails = () => {
  return (
    <div className="container productDetails_wrapper">
      <div className="row">
        <div className="col-lg-5 product_image">
          <img src="./images/cardImg.png" alt="" />
        </div>
        <div className="col-lg-7 product_details_section">
          <h1>The Kitchen Chair</h1>
          <p>
            Designed to withstand daily use, spills, and stains, and can be
            easily cleaned and maintained. Designed while considering the
            overall style and design of your kitchen, as well as your personal
            preferences for comfort and durability.
          </p>
          <p>Starts at <span>$49.99</span></p>
          <button className="buy_button">Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

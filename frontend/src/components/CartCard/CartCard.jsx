import React from "react";
import "./CartCard.css";

const CartCard = () => {
  const option = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="cartCard_wrapper">
      <div className="cart_product_details">
        <img src="./images/cardImg.png" alt="" />
        <div className="cart_details">
          <div className="cart_card_heading">
            <h2>The Kitchen Chair</h2>
            <div className="quantity">
              <label htmlFor="">Qty : </label>
              <select name="quantity" id="quantity">
                {option.map((num) => (
                  <option value={num}>{num}</option>
                ))}
              </select>
            </div>
          </div>

          <p className="cart_price">$49.99</p>
        </div>
      </div>

      <p className="cart_remove">Remove</p>
    </div>
  );
};

export default CartCard;

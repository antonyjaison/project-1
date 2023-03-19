import React from "react";
import "./CartCard.css";

const CartCard = ({ count, product,removeFromCart }) => {
  const option = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="cartCard_wrapper">
      <div className="cart_product_details">
        <img src={product.image} alt="" />
        <div className="cart_details">
          <div className="cart_card_heading">
            <h2>{product.name}</h2>
            <div className="quantity">
              <label htmlFor="">Qty : </label>
              <select name="quantity" value={count} id="quantity">
                {option.map((num) => (
                  <option value={num}>{num}</option>
                ))}
              </select>
            </div>
          </div>

          <p className="cart_price">Rs. {product.price}</p>
        </div>
      </div>

      <p onClick={removeFromCart} className="cart_remove">Remove</p>
    </div>
  );
};

export default CartCard;

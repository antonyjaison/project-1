import React from "react";
import OrderItems from "../OrderItems/OrderItems";
import "./CartCard.css";

const CartCard = ({ count, product, removeFromCart, isOrderItem, status }) => {
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
              {!isOrderItem ? (
                <select name="quantity" value={count} id="quantity">
                  {option.map((num) => (
                    <option value={num}>{num}</option>
                  ))}
                </select>
              ) : (
                <span>{count}</span>
              )}
            </div>
          </div>

          <p className="cart_price">Rs. {product.price}</p>
          {isOrderItem && <p className="cart_price">Order status : {status}</p>}
        </div>
      </div>
      {!isOrderItem && (
        <p onClick={removeFromCart} className="cart_remove">
          Remove
        </p>
      )}
    </div>
  );
};

export default CartCard;

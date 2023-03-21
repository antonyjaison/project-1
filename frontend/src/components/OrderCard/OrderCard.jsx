import React from "react";
import "./OrderCard.css";

const OrderCard = ({ id, products, status }) => {
  let totalPrice = 0;
  products.forEach((pro) => {
    totalPrice += pro.product.price * pro.count;
  });

  console.log(products);
  return (
    <div className="CartCard_wrapper">
      <div className="cart_product_details  order_card">
        <img src={products[0].product.image} alt="" />
        <div className="cart_details">
          <div className="cart_card_heading">
            <h4 className="mt-2">Order ID: {id}</h4>
          </div>
          <p className="cart_price">Rs. {totalPrice.toFixed(2)}</p>
          <p className="cart_price mt-2">Order status : {status}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;

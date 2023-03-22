import React from "react";
import "./CartCard.css";
import { useSelector } from "react-redux";
import { useState } from "react";

const CartCard = ({ count, product, removeFromCart, refetchCart }) => {
  const option = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user.user);
  const updateProduct = async (e) => {
    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/cart/${product._id}`,
        {
          method: "PATCH",
          mode: "cors",
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            count: Number(e.target.value) ?? 1,
          }),
        }
      );
      if (res.ok) {
        console.log("updated");
        refetchCart();
      }
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <div className="cartCard_wrapper">
      <div className="cart_product_details">
        <img src={product.image} alt="" />
        <div className="cart_details">
          <div className="cart_card_heading">
            <h2>{product.name}</h2>
            <div className="quantity">
              <label htmlFor="">Qty : </label>
              <select
                className="select"
                disabled={loading}
                onChange={updateProduct}
                name="quantity"
                value={count}
                id="quantity"
              >
                {option.map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <p className="cart_price">£ {product.price}</p>
        </div>
      </div>
      <button onClick={removeFromCart} className="cart_remove">
        Remove
      </button>
    </div>
  );
};

export default CartCard;

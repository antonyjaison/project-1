import React, { useState } from "react";
import "./PlaceOrder.css";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router";

const PlaceOrder = ({
  country,
  city,
  landmark,
  pincode,
  state,
  setplaceOrderSection,
}) => {
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  let orderItems = [];

  cartProducts.forEach((item) => {
    orderItems.push({
      id: item.product._id,
      count: item.count,
    });
  });

  const userData = localStorage.getItem("userData");
  const token = JSON.parse(userData).token;

  const placeOrder = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:4000/order/", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(orderItems),
    });
    if (res.ok) {
      const json = await res.json();
      setplaceOrderSection(false);
      setLoading(false);
      navigate(`/order/${userData._id}`);
    }
  };

  return (
    <div className="place_order_wrapper">
      <div className="order_section">
        <div className="order_heading">
          <h1>Your delivery address</h1>
          <div className="closebutton">
            <p onClick={() => setplaceOrderSection(false)}>x</p>
          </div>
        </div>
        <hr className="order_line" />

        <div className="order_address">
          <p>Country : {country}</p>
          <p>State : {state}</p>
          <p>City : {city}</p>
          <p>Pincode : {pincode}</p>
          <p>Landmark : {landmark}</p>
        </div>
        <button onClick={() => placeOrder()} className="order_place_button">
          {loading ? (
            <ClipLoader size={20} color="#000" loading={loading} />
          ) : (
            "Place order"
          )}
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;

import React, { useEffect, useState, useRef } from "react";
import CartCard from "../CartCard/CartCard";
import Address from "../Address/Address";
import "./CartDetails.css";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../features/cartSlice";

const CartDetails = () => {
  const userData = localStorage.getItem("userData");
  const token = JSON.parse(userData).token;
  const [addressSection, setAddressSection] = useState(false);
  const mainWrapperRef = useRef();

  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  console.log(cartProducts);

  var count = 0;

  useEffect(() => {
    const fetchCartItems = async () => {
      const res = await fetch(`http://localhost:4000/cart/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const json = await res.json();
        dispatch(addToCart(json.inventory));
      }
    };
    fetchCartItems();
  }, []);

  var total = 0;
  cartProducts.forEach((item) => {
    var oneItemPrice = item.count * item.product.price;
    total = oneItemPrice + total;
  });

  const removeFromCart = async (id) => {
    try {
      const res = await fetch(`http://localhost:4000/cart/${id}`, {
        method: "delete",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        dispatch(deleteFromCart(id));
        console.log("deleted");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const placeOrder = async () => {
    const res = await fetch("http://localhost:4000/user/address", {
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const json = await res.json();

    if (!json.addressFind) {
      setAddressSection(true);
      // mainWrapperRef.current.style.backgroundColor='#7f7f7f'
    }
  };

  return (
    <>
      <div
        ref={mainWrapperRef}
        className="main_wrapper"
      >
        <div className="container cartDetails_wrapper">
          {cartProducts.length > 0 ? (
            <>
              <h1>Your cart</h1>

              <div className="cart_card_section">
                {cartProducts.map((item) => (
                  <div className="cart_card">
                    <CartCard
                      key={item._id}
                      count={item.count}
                      product={item.product}
                      removeFromCart={() => removeFromCart(item._id)}
                    />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="empty_cart">
                <h1>Cart is empty</h1>
              </div>
            </>
          )}

          {cartProducts.length > 0 && (
            <>
              <div className="checkout_section">
                <h1>Checkout</h1>

                <div className="checkout_card">
                  <p>Order details : </p>

                  {cartProducts.map((item) => {
                    return (
                      <div className="cart_item_details">
                        <div className="card_product">
                          <p>
                            {++count}. {item.product.name}
                          </p>
                          <p>
                            Price : Rs. {item.product.price} x {item.count}
                          </p>
                        </div>
                        <div className="card_qty">
                          <p>Qty : {item.count}</p>
                          <p>{item.count * item.product.price} /-</p>
                        </div>
                      </div>
                    );
                  })}

                  <div className="cart_item_details">
                    <p>Grand total : </p>
                    <p>Rs. {total} /-</p>
                  </div>
                </div>
                <button
                  onClick={() => placeOrder()}
                  className="checkout_button"
                >
                  Proceed to checkout
                </button>
              </div>
            </>
          )}
        </div>
        {addressSection && (
          <>
            <div className="address_wrapper">
              <Address />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDetails;

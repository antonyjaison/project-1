import React, { useEffect, useState } from "react";
import CartCard from "../CartCard/CartCard";
import "./OrderItems.css";
import ClipLoader from "react-spinners/ClipLoader";

const OrderItems = () => {
  const userData = localStorage.getItem("userData");
  const token = JSON.parse(userData).token;
  const id = JSON.parse(userData).userData._id;
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      const res = await fetch(`http://localhost:4000/order/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const json = await res.json();
        console.log(json);
        setOrders(json);
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);
  return (
    <>
      <div className="container">
        {loading ? (
          <div className="loader">
            <ClipLoader
              aria-label="Loading Spinner"
              color="#000"
              loading={loading}
              size={60}
            />
          </div>
        ) : (
          <>
            <div className="my_order_items">
              {orders.length > 0 ? (
                <>
                  <div className="row">
                    <h1>My Orders</h1>
                    {orders.map((order) => (
                      <div key={order.product._id} className="col-lg-6 mt-3">
                        <CartCard
                          isOrderItem={true}
                          count={order.product.count}
                          product={order.product.product}
                          status={order.status}
                        />
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <h1>You have no orders</h1>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default OrderItems;

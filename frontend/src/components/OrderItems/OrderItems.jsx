import React, { useEffect, useState } from "react";
import CartCard from "../CartCard/CartCard";
import "./OrderItems.css";
import ClipLoader from "react-spinners/ClipLoader";
import OrderModal from "../OrderModal/OrderModal";
import OrderCard from "../OrderCard/OrderCard";

const OrderItems = () => {
  const userData = localStorage.getItem("userData");
  const token = JSON.parse(userData).token;
  const id = JSON.parse(userData).userData._id;
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currOrder, setCurrOrder] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/order/`, {
        method: "GET",
        mode: "cors",
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
                      <div
                        onClick={() => {
                          setCurrOrder(order);
                          setModal(true);
                        }}
                        key={order._id}
                        className="col-lg-6 mt-3"
                      >
                        <OrderCard
                          id={order._id}
                          products={order.order_items}
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
      {modal && currOrder && (
        <OrderModal order={currOrder} closeModal={() => setModal(false)} />
      )}
    </>
  );
};

export default OrderItems;

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../../Loading/Loading";
import "./OrdersTab.css";

const OrdersTab = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orderLoading, setOrderLoading] = useState(false);
  const user = useSelector((state) => state.user.user);

  const fetchOrders = async () => {
    setLoading(true);
    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/order/`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (res.ok) {
      const json = await res.json();
      setOrders(json);
    }
    setLoading(false);
  };

  const handleOrderChange = async (e, id) => {
    setOrderLoading(true);
    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/order/${id}`, {
      method: "PATCH",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        status: e.target.value,
      }),
    });
    await fetchOrders();
    setOrderLoading(false);
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) return <Loading />;

  if (orders.length === 0)
    return (
      <h2 className="mt-3 text-center text-lg text-danger">
        No Orders Available
      </h2>
    );
  return (
    <div className="orders_tab">
      {orders.map((order) => (
        <div key={order._id} className="card my-2 mx-4">
          <div className="card-body">
            <span>
              Order ID: <h3 className="card-title">{order._id}</h3>
            </span>
            <p className="card-text">
              {order.user_id.name} &nbsp;&nbsp;&nbsp;(id: {order.user_id._id})
            </p>
            <select
              className="mt-3"
              onChange={(e) => handleOrderChange(e, order._id)}
              name="orderStatus"
              value={order.status}
              id="orderStatus"
              disabled={orderLoading}
            >
              <option value="PENDING">PENDING</option>
              <option value="STARTED">STARTED</option>
              <option value="SHIPPED">SHIPPED</option>
              <option value="CANCELLED">CANCELLED</option>
              <option value="COMPLETED">COMPLETED</option>
            </select>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrdersTab;

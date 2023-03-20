import React, { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import OrderItems from "../components/OrderItems/OrderItems";

const OrderPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar isDark={true} />
      <OrderItems />
      <Footer />
    </div>
  );
};

export default OrderPage;

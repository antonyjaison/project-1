import React, { useEffect } from "react";
import CartDetails from "../components/CartDetails/CartDetails";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const CartPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar isDark={true} />
      <CartDetails />
      <Footer />
    </div>
  );
};

export default CartPage;

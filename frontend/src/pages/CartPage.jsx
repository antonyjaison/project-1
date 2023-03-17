import React from "react";
import CartDetails from "../components/CartDetails/CartDetails";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const CartPage = () => {
  return (
    <div>
      <Navbar isDark={true} />
      <CartDetails />
      <Footer/>
    </div>
  );
};

export default CartPage;

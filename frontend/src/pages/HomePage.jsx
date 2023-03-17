import React from "react";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import ProductCard from "../components/ProductCard/ProductCard";
import ProductsSection from "../components/ProductsSection/ProductsSection";

const HomePage = () => {
  return (
    <div>
      <Banner heading="The best collection of chairs is here" />
      <ProductsSection />
      <Footer />
    </div>
  );
};

export default HomePage;

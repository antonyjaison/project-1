import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductsSection.css";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";

const ProductsSection = () => {
  const products = useSelector((state) => state.product.products);
  console.log(products);

  return (
    <>
      <div className="products_wrapper">
        <div className="product_collection">
          <div className="container collection_heading">
            <h2>New Collection</h2>
            <p>View all</p>
          </div>
          {products ? (
            <div id="collections" className="container products">
              {products.map((product) => {
                return (
                  <div key={product._id} className="p_card">
                    <ProductCard {...product} />
                  </div>
                );
              })}
            </div>
          ) : (
            <ClipLoader
              aria-label="Loading Spinner"
              color="#000"
              loading={loading}
              size={20}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ProductsSection;

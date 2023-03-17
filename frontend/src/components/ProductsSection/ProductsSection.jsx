import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductsSection.css";

const ProductsSection = () => {
  return (
    <>
      <div className="products_wrapper">
        <div className="product_collection">
          <div className="container collection_heading">
            <h2>New Collection</h2>
            <p>View all</p>
          </div>
          <div className="container products">
            <div className="p_card">
              <ProductCard />
            </div>
            <div className="p_card">
              <ProductCard />
            </div>
            <div className="p_card">
              <ProductCard />
            </div>
            <div className="p_card">
              <ProductCard />
            </div>
            <div className="p_card">
              <ProductCard />
            </div>
          </div>
        </div>

        <div className="product_collection">
          <div className="container collection_heading">
            <h2>New Collection</h2>
            <p>View all</p>
          </div>
          <div className="container products">
            <div className="p_card">
              <ProductCard />
            </div>
            <div className="p_card">
              <ProductCard />
            </div>
            <div className="p_card">
              <ProductCard />
            </div>
            <div className="p_card">
              <ProductCard />
            </div>
            <div className="p_card">
              <ProductCard />
            </div>
          </div>
        </div>


        <div className="product_collection">
          <div className="container collection_heading">
            <h2>New Collection</h2>
            <p>View all</p>
          </div>
          <div className="container products">
            <div className="p_card">
              <ProductCard />
            </div>
            <div className="p_card">
              <ProductCard />
            </div>
            <div className="p_card">
              <ProductCard />
            </div>
            <div className="p_card">
              <ProductCard />
            </div>
            <div className="p_card">
              <ProductCard />
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default ProductsSection;

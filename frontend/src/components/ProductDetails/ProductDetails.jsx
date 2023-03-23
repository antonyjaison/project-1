import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../features/userSlice";
import { useLayoutEffect } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [productDetails, setProductDetails] = useState([]);
  const userData = localStorage.getItem("userData");
  const token = JSON.parse(userData).token;
  const [loading, setLoading] = useState(false);
  const inventory = useSelector((state) => state.cart.cartProducts);

  const isInventory = inventory.find((pro) => pro.product._id === id)
    ? true
    : false;
  const [canAdd, setCanAdd] = useState(isInventory);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/product/${id}`
      );
      if (res.ok) {
        const json = await res.json();
        setProductDetails(json);
      }
    };
    fetchProductDetails();
  }, []);

  const addToCart = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/cart/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const json = await res.json();
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container">
        <div className="productDetails_wrapper">
          <div className="row">
            {/* check the product details is available or not if not the spinner will load*/}
            {productDetails ? (
              <>
                <div className="col-lg-6 col-md-7 col-12 product_image">
                  <div className="image">
                    <img src={productDetails.image} alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-5 col-12 product_details_section">
                  <h1>{productDetails.name}</h1>
                  <p>{productDetails.description}</p>
                  <p>
                    Starts at <span>£ {productDetails.price}</span>
                  </p>
                  <button
                    disabled={canAdd}
                    onClick={() => {
                      addToCart();
                      setCanAdd(true);
                    }}
                    className="buy_button"
                  >
                    {loading ? (
                      <ClipLoader
                        aria-label="Loading Spinner"
                        color="#z000"
                        loading={loading}
                        size={20}
                      />
                    ) : canAdd ? (
                      "Added to cart"
                    ) : (
                      "Add to Cart"
                    )}
                  </button>
                </div>
              </>
            ) : (
              <ClipLoader
                aria-label="Loading Spinner"
                color="#z000"
                loading={loading}
                size={20}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

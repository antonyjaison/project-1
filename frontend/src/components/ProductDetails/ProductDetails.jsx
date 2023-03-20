import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../features/userSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [productDetails, setProductDetails] = useState([]);
  const userData = localStorage.getItem("userData");
  const token = JSON.parse(userData).token;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const res = await fetch(`http://localhost:4000/product/${id}`);
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
      const res = await fetch(`http://localhost:4000/cart/${id}`, {
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
                    Starts at <span>Rs. {productDetails.price}</span>
                  </p>
                  <button onClick={() => addToCart()} className="buy_button">
                    {loading ? (
                      <ClipLoader
                        aria-label="Loading Spinner"
                        color="#z000"
                        loading={loading}
                        size={20}
                      />
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

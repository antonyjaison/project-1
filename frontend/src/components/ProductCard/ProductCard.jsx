import React from "react";
import "./ProductCard.css";
import { getProductDetails } from '../../features/productSlice';
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

const ProductCard = ({ _id, image, name, price, description }) => {
  const navigate = useNavigate()
  

  const handleClick = () => {
    navigate(`/product/${_id}`)

  }
  return (
    <div onClick={handleClick} className="card_wrapper">
      <img src={image} alt="chair" />
      <div className="product_details">
        <h3>{name}</h3>
        <p>Rs. {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;

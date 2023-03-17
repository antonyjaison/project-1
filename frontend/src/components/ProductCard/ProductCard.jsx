import React from 'react'
import './ProductCard.css'


const ProductCard = ({image,name,price}) => {
  return (
    <div className='card_wrapper'>
        <img src="./images/cardImg.png" alt="chair" />
        <div className="product_details">
            <h3>Kitchen chair</h3>
            <p>$49.99</p>
        </div>
    </div>
  )
}

export default ProductCard
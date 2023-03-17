import React from 'react'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import ProductDetails from '../components/ProductDetails/ProductDetails'

const ProductPage = () => {
  return (
    <div>
        <Banner heading='All new Kitchen Chair'/>
        <ProductDetails/>
        <Footer/>
    </div>
  )
}

export default ProductPage
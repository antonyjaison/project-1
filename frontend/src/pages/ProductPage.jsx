import React,{useEffect} from 'react'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import ProductDetails from '../components/ProductDetails/ProductDetails'

const ProductPage = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <div>
        <Banner heading='All new Kitchen Chair' bannerImg="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNoYWlyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
        <ProductDetails/>
        <Footer/>
    </div>
  )
}

export default ProductPage
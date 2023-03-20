import React from 'react'
import Address from '../components/Address/Address'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Login from '../components/Login/Login'

const LoginPage = () => {
  return (
    <div>
        <Banner bannerImg="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNoYWlyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
        <Login/>
        <Footer/>
    </div>
  )
}

export default LoginPage
import React from 'react'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories'
import Products from '../components/Products'

const Home = () => {
  return (
    <div className="container">
        <Navbar/>
        <Categories/>
        <Products/>
    </div>
  )
}

export default Home
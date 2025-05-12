import { useState } from 'react'
import Counter from './app/components/counter'
import Allproducts from './app/components/allproducts'
import SpecificProduct from './app/components/specificProduct'
import Jobs from './app/components/jobs'
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './app/components/Home'
import "./App.css"

const App: React.FC = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/products" element={<Allproducts />} />
        <Route path="/product/:id" element={<SpecificProduct />} />
        <Route path = "/jobs" element = {<Jobs />} />

      
      </Routes>

      
    </>
  )
}

export default App

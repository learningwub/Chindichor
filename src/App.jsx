import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import Contact from './page/Contact'
import Products from './page/Products'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/product" element={<Products />}/>
      </Routes>
    </div>
  )
}

export default App

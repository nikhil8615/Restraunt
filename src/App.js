import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import Placeorder from './Pages/Placeorder/Placeorder'
import Footer from './Components/Footer/Footer';
import { useState } from 'react';
import Loginpage from './Components/LoginPage/Loginpage';

const App = () => {
  const [showLogin,setShowLogin] = useState(false);
  return (
    <>
    {showLogin?<Loginpage setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>  
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Placeorder />} />
        </Routes>
      </div>
      <Footer />

    </>
  )
}

export default App

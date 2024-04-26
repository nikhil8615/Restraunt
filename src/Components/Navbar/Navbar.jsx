import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { Storecontext } from '../../Context/Storecontext'

const Navbar = ({setShowLogin}) => {
    const [menu,setMenu] = useState("menu")
    const {getTotalCartAmount} = useContext(Storecontext);
  return (
    <div>
      <div className='navbar'>
        <Link to={"/"}><img src={assets.logo} className='logo'/></Link>
        <ul className='navbar-menu'>
          <Link to='/' onClick={() =>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
          <a href='#explore-menu' onClick={()=>setMenu("menu1")} className={menu==="menu1"?"active":""}>menu</a>
          <a href='#appdownload' onClick={()=>setMenu("mobile")} className={menu==="mobile"?"active":""}>mobile-app</a>
          <a href='#footer' onClick={()=>setMenu("contact")} className={menu==="contact"?"active":""}>contact-us</a>
        </ul>
        <div className='navbar-right'>
          <img src={assets.search_icon} />
          <div className='navbar-search-icon'>
            <Link to={"/cart"}><img src={assets.basket_icon}/></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
          </div>
          <button onClick={()=>setShowLogin(true)}>sign in</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar

import React from 'react';
import foodlogo from '../Assets/food_logo.png'
import "./Header.css"

const Header = () => {
    // logo
    // nav items
  return (
    <div className='heading'>
        
         <div className='logo-container'>
             <img src={foodlogo} alt='logo' className='logo'/>
         </div>

         <div className='navItems'>
               <ul >
                <li>Home</li>
                <li>Contact us</li>
                <li>About us</li>
                <li>🛒Cart</li>
               </ul>
         </div>
    </div>
  )
}

export default Header
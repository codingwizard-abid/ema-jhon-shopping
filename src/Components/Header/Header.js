import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
   return (
      <div className='header'>
         <nav className="nav-container">
            <a href="/home" className="logo">
               <img src={logo} alt="site logo"/>
            </a>
            <ul className="menu">
               <li><a href="/shop">Shop</a></li>
               <li><a href="/order">Order</a></li>
               <li><a href="/inventory">Inventory</a></li>
               <li><a href="/about">About</a></li>
            </ul>
         </nav>
      </div>
   );
};

export default Header;
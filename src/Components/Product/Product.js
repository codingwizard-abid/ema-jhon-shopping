import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
const Product = ({addToCart, products}) => {
   const {name, seller, price, ratings, img} = products;
   
   return (
      <div className='single-card'>
         <img src={img} alt={name} />
         <div className="product-description">
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <div className='small-texts'>
               <small>Manufacturer: {seller}</small> <br />
               <small>Rating: {ratings} stars</small>
            </div>
         </div>
         <button onClick={()=>addToCart(products)} className='cart-btn'>Add to Cart <FontAwesomeIcon icon={faShoppingCart}/></button>
      </div>
   );
};

export default Product;
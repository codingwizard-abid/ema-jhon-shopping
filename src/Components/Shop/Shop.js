import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
   const [products, setProducts] = useState([]);
   const [cart, setCart] = useState([]);
   useEffect(()=>{
      fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
   },[])

   const handleCartClick = (product)=>{
      const newCart = [...cart, product];
      setCart(newCart);
   };

   return (
      <div className="container">
         <div className="shop-container">
            <div className="shop-items">
            {
               products.map(product => <Product key={product.id} products={product} addToCart={handleCartClick}></Product>)
            }
            </div>
            <div className="cart-info">
               <Cart cart={cart}></Cart>
            </div>
         </div>
      </div>
   );
};

export default Shop;

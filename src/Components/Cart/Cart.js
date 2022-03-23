import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
   let total = 0;
   let shipping = 0;
   for(let product of cart){
      total += product.price;
      shipping +=product.shipping;
   }
   let tax = (total * 0.1).toFixed(2);
   let grandTotal = (total + shipping + parseFloat(tax)).toFixed(2);
   return (
      <div className='cart'>
         <h2 style={{textAlign:'center'}}>Cart Summery</h2>
         <p>Selected Items: {cart.length}</p>
         <p>Total Price: ${total}</p>
         <p>Total Shipping: {shipping}</p>
         <p>Tax: {tax}</p>
         <h4>Grand Total: {grandTotal}</h4>
      </div>
   );
};

export default Cart;
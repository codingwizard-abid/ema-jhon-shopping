import React from 'react';

const Cart = (props) => {
   return (
      <div>
         <h2 style={{textAlign:'center'}}>Cart Summery</h2>
         <p>Selected Items: {props.cart.length}</p>
      </div>
   );
};

export default Cart;
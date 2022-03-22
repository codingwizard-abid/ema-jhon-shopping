import React from 'react';

const Cartpage = (props) => {
   const {cartItems} = props;
   return (
      <div className='cart-summery'>
         <h2>Selected Items: {cartItems.length}</h2>
      </div>
   );
};

export default Cartpage;
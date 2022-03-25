import React from 'react';
import CartContext from '../../context/CartContext';
import { useContext } from 'react';


const Cart = () => {
const { itemsCart } = useContext (CartContext)

    return (
        <div className='text-center'>
      {
        itemsCart > 0 ?
          <>
          <h2>Carrito</h2>
          
          </>
        :
        <>
          <h2>Su carrito esta vacío</h2>
         
        </>
      }
    </div>
    );
}

export default Cart;

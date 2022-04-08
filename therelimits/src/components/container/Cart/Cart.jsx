import React from 'react';
import CartContext from '../../context/CartContext';
import { useContext } from 'react';
import ItemCart from './ItemCart';
import { Link } from 'react-router-dom';
import CartForm from './CartForm';
import { sendOrder } from '../../../firebase/FromFb';
import { Timestamp } from 'firebase/firestore';

const Cart = () => {
const { itemsCart, clearCart, getTotalPrice} = useContext (CartContext)
  function handleSubmit(buyer){
    let itemsForOrder = itemsCart.map((item) => {
      return { 
        id: item.id, 
        nombre: item.nombre, 
        qty: item.qty, 
        precio: item.precio 
      }})

    const order = {
      buyer: buyer,
      items: [...itemsForOrder],
      total: getTotalPrice(),
      timestamp : Timestamp.fromDate(new Date())        
      }
      sendOrder(order)
  }

    return (
        <div className='text-center'>
          <h2>Carrito de compras</h2>
      {
        itemsCart.length === 0 ?    
        <>      
        <p>Su carrito esta vacío</p>
        <br />
        <h3>:(</h3>
        <br />
        <Link to="/" ><button>Volver al catalogo</button></Link>
        </>                   
        :
        <>
        
      {itemsCart.map((producto) => {
        return <ItemCart item ={producto}/>
      })}   
      <div>Total $ {getTotalPrice()} </div>
      <button onClick={clearCart}>Vaciar carrito</button>
      <Link to="/">
      <button>Seguir comprando</button>
      </Link>
      <div className="container" style={ {marginTop:"50px"} }>
        <CartForm onSubmit={handleSubmit}></CartForm>
      </div>
      
      </>
      }
    </div>
    );
}

export default Cart;

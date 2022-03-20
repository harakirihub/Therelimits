import React, { createContext } from 'react';
import { useState } from 'react';

const CartContext = createContext()

export function CartContextProvider ({children})  {
    const [itemsCart, setItemsCart ] = useState([]) 
    
    function addItem (item, qty) {
        if(isItemInCart(item.id)){
            let index = itemsCart.findIndex(i => i.id === item.id)
            let copyCart =[... itemsCart] 
            copyCart[index].qty += qty
            setItemsCart(copyCart)
        } else { 

        const itemToAdd = { ...item, qty}
        setItemsCart ([...itemsCart, itemToAdd])
    }
}

    function isItemInCart(id){
        itemsCart.some(everyItem => everyItem.id === id)
        }
        function clearCart(){
            setItemsCart([])
        }
    
    return (
        <>
        <CartContext.Provider value={{addItem, itemsCart}}>
            {children}
        </CartContext.Provider>
        </>
    );
}

export default CartContext


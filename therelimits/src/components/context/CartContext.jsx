import React, { createContext } from 'react';
import { useState } from 'react';

const CartContext = createContext()

export function CartContextProvider ({children})  {
    const [itemsCart, setItemsCart ] = useState([]) 
    function addItem (item, qty) {
        const itemToAdd = { ...item, qty}
        setItemsCart ([...itemsCart, itemToAdd])
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


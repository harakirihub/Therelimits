import React, { createContext } from 'react';

const CartContext = createContext()

export function CartContextProvider ({children})  {
    const prueba = "hola"
    
    return (
        <>
        <CartContext.Provider value={{prueba: prueba}}>
            {children}
        </CartContext.Provider>
        </>
    );
}

export default CartContext


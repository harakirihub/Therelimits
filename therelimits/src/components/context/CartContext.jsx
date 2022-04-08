import React, { createContext } from 'react';
import { useState } from 'react';

const CartContext = createContext()

export function CartContextProvider ({children})  {
    const [itemsCart, setItemsCart ] = useState([]) 
    
    function addItem (item, qty) {
        if(isItemInCart(item.id)){
            let index = itemsCart.findIndex(i => i.id === item.id)
            let copyCart =[...itemsCart] 
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

function getItemInCart(id){
    return itemsCart.find(cadaitem => cadaitem.id === id)
}

function countItemsInCart(){
    let totalItems = 0
    itemsCart.forEach( item => totalItems += item.qty)
    return totalItems
}

function getTotalPrice(){
    let totalPrice = 0
    itemsCart.forEach( item => totalPrice += item.qty * item.precio )
    return totalPrice
}

function removeItem(idDelete){
    setItemsCart(itemsCart.filter ( item => item.id !== idDelete))
}

    return (
        <>
        <CartContext.Provider value={{addItem, clearCart, removeItem, countItemsInCart, getTotalPrice, itemsCart}}>
            {children}
        </CartContext.Provider>
        </>
    );
}

export default CartContext


import React, { useContext } from "react"
import  CartContext  from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"

function ItemDetail ({item}) {
const [isInCart, setIsInCart] = useState(false);

    const { addItem, clearCart } = useContext(CartContext)
    function addToCart(qty){
        addItem(item, qty)
        setIsInCart(true)
    }
    
    return (
        <>
        <div className="col-md-3" >
            <div className="p-3 mb-5 bg-body rounded card mx-2">
                <div className="card-body">
                    <h3 className="card-title"> {item.nombre} </h3>
                    <img className="card-img-top" src={item.img} />
                    <h2> {item.precio} </h2>
                {
                    isInCart ?
                    <button type="button" className="btn btn-info px-4 cart-button">Terminar compra</button> 
                    :
                    <ItemCount addToCart={addToCart} stock={item.stock} />
                }

                <button onClick={clearCart} > Vaciar carrito</button>
                </div>     
        </div>
        </div>
        </>
    )
}

export default ItemDetail
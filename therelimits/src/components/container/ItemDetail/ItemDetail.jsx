import React, { useContext } from "react"
import  CartContext  from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"

function ItemDetail ({item}) {
const [isInCart, setIsInCart] = useState(false);
    const { addItem } = useContext(CartContext)
    function addToCart(qty){
        addItem(item, qty)
        setIsInCart(true) 
    }
    return (
        <>
        <div className="col-md-5 container-md text-center" >
            <div className="p- mb-5 rounded card">
                <div className="card-body-bg">
                    <h3 className="card-title"> {item.nombre} </h3>
                    <img className="card-img-top" src={item.img} />
                    <h2>${item.precio} </h2>
                {
                    isInCart ?
                    <>
                    <h5>Tu producto esta en el carrito de compras</h5>
                    <button type="button" className="btn btn-info px-4 cart-button">            
                        <Link to="/cart">Ver carrito</Link></button> 
                    </>    
                    :
                    <ItemCount addToCart={addToCart} stock={item.stock} />
                }
                <button type="button" className="btn px-2">
                    <Link to="/">Seguir comprando</Link>
                    </button>
                </div>     
        </div>
        </div>
        </>
    )
}

export default ItemDetail
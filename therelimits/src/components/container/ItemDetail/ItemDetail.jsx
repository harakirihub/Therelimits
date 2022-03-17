import React, { useContext } from "react"
import  CartContext  from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"


function ItemDetail ({item}) {

    const { addItem } = useContext(CartContext)
    function addToCart(qty){
        addItem(item, qty)
    }
    
    return (
        <>
        <div className="col-md-3" >
            <div className="p-3 mb-5 bg-body rounded card mx-2">
                <div className="card-body">
                    <h3 className="card-title"> {item.nombre} </h3>
                    <img className="card-img-top" src={item.img} />
                    <h2> {item.precio} </h2>
                    <ItemCount addToCart={addToCart} stock={item.stock} />
                </div>     
        </div>
        </div>
        </>
    )
}

export default ItemDetail
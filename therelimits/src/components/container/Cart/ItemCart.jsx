import { Link } from "react-router-dom"

function ItemCart ({item}) {
    return (
<> 
<div className="container bg-light">
    <div className="row border">
        <div className="col-sm">
            <p className="card-title mt-1"> {item.nombre} </p></div>
        <div className="col-sm">
            <p className="card-title mt-1">{item.precio}</p></div>
            <div className="col-sm">
            <p className="card-title mt-1"> x{item.qty}</p></div>
        <div className="col-sm">
        <Link className="btn btn-sm btn-secondary text-decoration-none" to={`/item/${item.id}` }>Detalle</Link>
        </div>
    </div>   
</div>
</>
)
}

export default ItemCart

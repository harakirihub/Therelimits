import { Link } from "react-router-dom"

function Item ({item}) {
    return (
        <div className="card text-center pb-4" >
            <div className="card-body" >
                    <h3 className="card-title"> {item.nombre} </h3>
                    <img className="card-img" src={item.img} />                   
            </div> 
        <h3> ${item.precio} </h3>   
        <Link className="btn btn-primary" to={`/item/${item.id}` }>Detalle</Link>
        </div>
    )}
export default Item
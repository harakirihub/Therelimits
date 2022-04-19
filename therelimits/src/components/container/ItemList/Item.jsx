import { Link } from "react-router-dom"

function Item ({item}) {
    return (
        <div className="card text-center col-lg " style={ {marginTop:"40px"} }>
            <div className=" card-body " >
                <div className="card-img">
                    <h3 className="card-title"> {item.nombre} </h3>
                    <img className="card-img img-thumbnail" src={item.img} style={{height:"50%", width:"100%"}} />
                    <h3> ${item.precio} </h3>
                </div>
        <Link className="btn btn-primary" to={`/item/${item.id}` }>Detalle</Link>                
            </div>
        </div>
    )}
export default Item
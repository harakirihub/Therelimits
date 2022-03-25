import { Link } from "react-router-dom"

function Item ({item}) {
    return (
        <div className="col-md-3" style={{paddingTop:"30px"}}>
            <div className="p-3 mb-5 bg-body rounded card mx-2" >
                <div className="card-body" style={{height:"500px"}}>
                    <h3 className="card-title"> {item.nombre} </h3>
                    <img className="card-img-top" src={item.img} style={{height:"75%"}} />
                    <h2> {item.precio} </h2>
                </div>

        <Link className="btn btn-primary" to={`/item/${item.id}` }>Detalle</Link>
        
        
        </div>
        </div>

    )
}

export default Item
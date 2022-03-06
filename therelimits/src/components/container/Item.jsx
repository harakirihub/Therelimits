import { Link } from "react-router-dom"

function Item ({nombre, precio, img, id}) {
    return (
        <div className="col-md-3" >
            <div className="p-3 mb-5 bg-body rounded card mx-2">
                <div className="card-body">
                    <h3 className="card-title"> {nombre} </h3>
                    <img className="card-img-top" src={img} />
                    <h2> {precio} </h2>
                </div>

        <Link className="btn btn-primary" to={`/item/${id}` }>Detalle</Link>
        
        
        </div>
        </div>

    )
}

export default Item
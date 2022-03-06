
function ItemDetail ({nombre, precio, img}) {
    return (
        <div className="col-md-3" >
            <div className="p-3 mb-5 bg-body rounded card mx-2">
                <div className="card-body">
                    <h3 className="card-title"> {nombre} </h3>
                    <img className="card-img-top" src={img} />
                    <h2> {precio} </h2>
                </div>     
        </div>
        </div>

    )
}

export default ItemDetail
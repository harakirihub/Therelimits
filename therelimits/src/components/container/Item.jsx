
const Item =(props) => {
    return (
        <div style={{border : 'solid black', width: '50%'}}>
            <h3>{props.producto.nombre} </h3>
            <h2>{props.producto.precio} </h2>
            {props.children}
        </div>
    )
}

export default Item
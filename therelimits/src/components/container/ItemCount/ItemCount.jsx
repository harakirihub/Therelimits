import React, {useState} from 'react';



function ItemCount  ({stock}) {
    const [count, setCount]=useState(1)
    function suma(){
    if (count < stock){ setCount(count + 1)
    }
}
    function resta() {
    if ( count > 1 ) {setCount( count - 1)
    }
}

    return (
       <>
<div className="container">
    <div className="border-primary container mt-5">
        <div className="btn-group" role="group" aria-label="Basic outiled example">
            <button onClick={suma} type="button" className="btn btn-outline-primary"> + </button>
            <span className="my-auto px-5">{count} </span>
            <button onClick={resta} type="button" className="btn btn-outline-primary"> - </button>
        </div>

    </div>
    <div className="container">
        <div className="text-center d-flex flex-column">
            <button type="button" className="mt-4 btn btn-success cart button px-2">Agregar al carrito</button>
            <small className="text-muted mt-2">Stock disponible: {stock} </small>
        </div>
    </div>

</div>
       </>
    );
}

export default ItemCount;

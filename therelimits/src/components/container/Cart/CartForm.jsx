import React from 'react'
import { useState } from 'react';

function CartForm({onSubmit}) {
const [ buyer, setBuyer] = useState({
    name:'',
    phone:'',
    mail:''
})

    function handleInput(event){
            const target = event.target
            const value = target.value
            const nameInput = target.name
            setBuyer({
                ...buyer,
                [nameInput]: value
            })
          }

        function handleSubmitEvent(evt){
          evt.preventDefault()
          onSubmit(buyer)
        }
        

return (
    <form className='container-md border '>
    <br />
    <div>Para finalizar la compra por favor dejanos tu informacion!</div>
    <br />
    <div className='mb-3 container col '>
      <>
        <div className="mb-3 row" >
          <label htmlFor="name" className="form-label">Nombre completo</label>
          <input type="text" onChange={evt => handleInput(evt)} value={buyer.name} name="name"/>
        </div>
      </>
      <>
        <div className="mb-3 row">
          <label htmlFor="phone" className="form-label">Telefono</label>
          <input type="text" onChange={evt => handleInput(evt)} value={buyer.phone} name="phone" />
        </div>
      </>
      <>
        <div className="mb-3 row">
          <label htmlFor="mail" className="form-label">Mail</label>
          <input type="text" onChange={evt => handleInput(evt)} value={buyer.mail}  name="mail" />
        </div>
      </>
      <div className="form-text">Esta informacion es privada y no se compartira</div>
      
        <button className='mb-3'onClick={handleSubmitEvent}>
          Crear orden
        </button>
    </div>

    
</form>
)
}

export default CartForm
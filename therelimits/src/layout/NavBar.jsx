import { Link } from "react-router-dom"
import React from "react"
import CartWidget from "./CartWidget"


function NavBar(){ 

return ( 

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid" >
    <Link className="navbar-brand" to="/">Therelimits tienda de ropa</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/category/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
      </ul>
      <form className="d-flex">
        <Link to="/cart">
        <CartWidget/>
        </Link>
      </form>
    </div>
  </div>
</nav>)  }

export default NavBar
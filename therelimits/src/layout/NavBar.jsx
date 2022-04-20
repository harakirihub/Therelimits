import { Link } from "react-router-dom"
import React from "react"
import CartWidget from "./CartWidget"
import { NavDropdown} from 'react-bootstrap'

function NavBar(){ 

return ( 

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid" >
    <Link className="navbar-brand" to="/">Therelimits</Link>

    <div className=" navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <NavDropdown title="Categorias" id="basic-nav-dropdown">
          <NavDropdown.Item >
            <Link to="/categoria/prendas"> Prendas </Link>
            </NavDropdown.Item>
          <NavDropdown.Item >
            <Link to="/categoria/accesorios"> Accesorios </Link>
            </NavDropdown.Item>
        </NavDropdown>
      </ul>      
      <form className="d-flex">
        <Link to="/cart">
        <CartWidget/>
        </Link>
      </form>
    </div>
  </div>
</nav>


)  }

export default NavBar
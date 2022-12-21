import CarWidget from "./cartWidget";
import {NavLink} from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

function Nav(){

return(
<nav className="navbar navbar-expand-lg">
<div className="container-fluid">
  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    
        <NavLink className="nav-link"  aria-current="page" exact to="/">Home</NavLink>

        <Dropdown>

        <Dropdown.Toggle variant="success" id="dropdown-basic">
        Categorias
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu">

      <Dropdown.Item className="dropdown-item"><NavLink className="nav-link" activeClassName="active"  aria-current="page" exact to="/category/PSN">PSN</NavLink></Dropdown.Item> 
  
      <Dropdown.Item><NavLink className="nav-link" activeClassName="active"  aria-current="page" exact to="/category/XBOX">XBOX</NavLink></Dropdown.Item> 

        </Dropdown.Menu>

        </Dropdown>
      
        <NavLink className="nav-link" ><CarWidget/></NavLink>
      
    </ul>

  </div>
</div>
</nav>

)

}

export default Nav;




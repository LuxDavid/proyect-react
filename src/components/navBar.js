import CarWidget from "./cartWidget";
import {Link} from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

function Nav(){

return(
<nav className="navbar navbar-expand-lg">
<div className="container-fluid">
  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    
        <Link className="nav-link"  aria-current="page" exact to="/">Home</Link>

        <Dropdown>

        <Dropdown.Toggle variant="success" id="dropdown-basic">
        Categorias
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu">

      <Dropdown.Item className="dropdown-item"><Link className="nav-link" activeClassName="active"  aria-current="page" exact to="/category/PSN">PSN</Link></Dropdown.Item> 
  
      <Dropdown.Item><Link className="nav-link" activeClassName="active"  aria-current="page" exact to="/category/XBOX">XBOX</Link></Dropdown.Item> 

        </Dropdown.Menu>

        </Dropdown>
      
        <Link className="nav-link" ><CarWidget/></Link>
      
    </ul>

  </div>
</div>
</nav>

)

}

export default Nav;




import CarWidget from "./cartWidget";
import {Link} from "react-router-dom";

function Nav(){

return(
  <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        
       
          <Link className="nav-link" aria-current="page" to="/category/PSN">PSN</Link>
        
        
          <Link className="nav-link" aria-current="page" to="/category/XBOX">XBOX</Link>
        
        
          <Link className="nav-link" ><CarWidget/></Link>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-warning" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


)

}

export default Nav;





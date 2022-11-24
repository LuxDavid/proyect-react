import CarWidget from "./cartWidget";
import {Link} from "react-router-dom";

function Nav(){

return(
  <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/category/PSN">PSN</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/category/XBOX">XBOX</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" ><CarWidget/></Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-warning" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


)

}

export default Nav;





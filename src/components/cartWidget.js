import Image from '../carrito2.jpg';
import {Link} from "react-router-dom";


function CarWidget(){

  

return(

<Link to="/cart"><img src={Image} className="carrito" alt="Carrito"/></Link>
);

}

export default CarWidget


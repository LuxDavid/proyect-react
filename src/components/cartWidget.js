import Image from '../carrito2.jpg';
import {Link} from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
function CarWidget(){

const { productsAdd } = useContext(CartContext);
const count = productsAdd.length;
return(
<div>
<Link to="/cart"><img src={Image} className="carrito" alt="Carrito"/></Link>
{count > 0 && <span className='prods-in-cart'>{count}</span>}
</div>
);

}

export default CarWidget


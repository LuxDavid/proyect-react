import Layout from "../components/Layout";
import { useContext} from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import Button from 'react-bootstrap/Button';
import EmptyCart from '../assets/images/carritoVacio.png';
import ItemCart from "../components/ItemCart";
import ListGroup from 'react-bootstrap/ListGroup';
import '../App.css';
// import Delet from '../assets/images/eliminar.png';
import { TrashWidget } from "../components/TrashWidget";



function Cart(){

const navigate = useNavigate();

const {productsAdd,vaciarCarrito,totalAmount}=useContext(CartContext);

// function TrashWidget({itemId}){

// <button onClick={()=>removerProducto(itemId)}><img src={Delet} alt="Eliminar"/></button>
  
// }


return(
<Layout>

{productsAdd.length === 0 ? (
  <div className="cartVacio">
<img src={EmptyCart} alt='Carrito triste'/>
<h1>¡Parece que todavia no has agregado nada a tu carrito!</h1>
<div className="d-grid gap-2"><Button variant="primary" size="lg" className="agregar" onClick={() => navigate("/")}>Buscar productos</Button></div>
</div>

):

<ListGroup as="ol" className="listCarrito">
    
{productsAdd.map((product)=>{

const quantityAdded = product.quantityAdded;

return(

<>
<ItemCart product={product.item} quantityAdded={quantityAdded}/>
<div><TrashWidget itemId={product.item.id}/></div>
</>


);

})}

<div className="checkoutPrice">
  <span className="pago">Total a pagar:${totalAmount}</span>
</div>

<Button variant="primary" size="lg" className="irCheckout" onClick={()=>{vaciarCarrito() 
  navigate("/")}}>
  <p className="check">Finalizar Compra</p>
  </Button>

</ListGroup>




  
}






</Layout>

);
}

export default Cart


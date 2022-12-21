import problem from '../assets/images/triste.jpg';

function ItemError(){

return(

<div className="item-error">
<h1>Lo sentimos no contamos con ese producto</h1>
<h2>¡Te invitamos a regresar a nuestro inicio de productos y dar un vistaso a nuestros productos disponibles!</h2>
<img className='error-image' src={problem}/>

</div>

);


}

export default ItemError


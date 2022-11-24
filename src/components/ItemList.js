import Item from "./Item";

function ItemList({products}){

return(
<div className=" contenedor-cards d-flex p-3 m-3" >
{products.map((product)=>(<Item product={product}/>))}
</div>

);

}

export default ItemList
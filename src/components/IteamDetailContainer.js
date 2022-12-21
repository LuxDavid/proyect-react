import ItemDetail from "./ItemDetail";
import GetItem from "../hooks/getItem";
import ItemError from "./itemError";

const ItemDetailContainer=()=>{

const item =GetItem();

if (!item) {
return <ItemError />;
}

return( 

<ItemDetail item={item}/>

);
};

export default ItemDetailContainer
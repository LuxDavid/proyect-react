import ItemDetail from "./ItemDetail";
import Loading from "./Loading";
import GetItem from "../hooks/getItem";


const ItemDetailContainer=()=>{

const item =GetItem();

if (!item) {
return <Loading />;
}

return( 

<ItemDetail item={item}/>

);
};

export default ItemDetailContainer
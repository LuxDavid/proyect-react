import ItemList from "./ItemList";
import Loading from "./Loading";
import GetItem from '../hooks/getItem';


const ItemListContainer = () => {
  
const games=GetItem();

 if(!games){
  
  return <Loading/>
  
 }

 return <ItemList products={games} />
  
  };
  
  export default ItemListContainer;
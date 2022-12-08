import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Items } from "../mocks/Items-mock";
import Loading from "./Loading";

const ItemDetailContainer=()=>{

const [game, setGame]=useState(null); 
const {id}=useParams();

useEffect(()=>{

new Promise((resolve) =>
    
setTimeout(()=>{ 
      
resolve(Items);

},1000)

).then((data)=>{
    
const coincidencia=data.find((juego)=>juego.id === id);
setGame(coincidencia);
}

);

},[id]);

if (!game) {
    return <Loading />;
      }

return( 



<ItemDetail item={game}/>


);
};

export default ItemDetailContainer
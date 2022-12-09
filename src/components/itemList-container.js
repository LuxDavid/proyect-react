import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Items } from "../mocks/Items-mock";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const ItemListContainer = () => {
    const { category } = useParams();
    const [games, setGames] = useState([]);

    useEffect(() => {

      new Promise((resolve) =>
        setTimeout(() => {
          resolve(Items);
        }, 1000)
      ).then((data) => {
      
        if (category) {
          const categories = data.filter(
            (product) => product.category === category

          );

        setGames(categories);
        } else {
          setGames(data);
        }
      });

    
    }, [category]);

    
   
    if (games.length === 0) {
      return <Loading />;
    }
    
    return (
  <ItemList products={games} />

        
    );
  };
  
  export default ItemListContainer;
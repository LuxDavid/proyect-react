import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { item } from "../mocks/item-mock";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const { category } = useParams();
    const [games, setGames] = useState([]);
  
    useEffect(() => {
      new Promise((resolve) =>
        setTimeout(() => {
          resolve(item);
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
  

  
    return (
    
        <ItemList products={games} />

        
    );
  };
  
  export default ItemListContainer;
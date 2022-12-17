import { createContext, useState,useEffect } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {

const [productsAdd, setProductsAdd] = useState([]);
const [totalAmount, setTotalAmount] = useState(0);

/*-------------------------------------------------------------------*/
useEffect(() => {
  const amount = productsAdd.map((product) => parseInt(product.item.price) * product.quantityAdded)
  .reduce((partialSum, a) => partialSum + a, 0);
  setTotalAmount(amount);
}, [productsAdd]);

/*--------------------------------------------------------------------*/
    function agregarProducto(item, cantidad) {

      const isAlreadyAdded = inCart(item.id);
      if (isAlreadyAdded) {
        setProductsAdd((prevState) =>
          prevState.map((productAdded) =>
            productAdded.item.id === item.id
              ? {
                  ...productAdded, quantityAdded: productAdded.quantityAdded + cantidad,
                
                }
              : productAdded
          )
        );
      } else {
        setProductsAdd((prevState) =>
          prevState.concat({ item, quantityAdded: cantidad })
        );
      }
}

/*--------------------------------------------------------------------*/

function removerProducto(itemId) {

    setProductsAdd((prevState) =>
        prevState.filter((product) => product.id !== itemId)
    );

}

/*--------------------------------------------------------------------*/
    function vaciarCarrito() {

    setProductsAdd([]);
    setTotalAmount(0);

    }

/*--------------------------------------------------------------------*/
  
function inCart(itemId) {

return Boolean(productsAdd.find((product) => product.item.id === itemId));

}
/*--------------------------------------------------------------------*/
    return (
  <CartContext.Provider
  value={{
    agregarProducto, 
    removerProducto, 
    vaciarCarrito, 
    inCart, 
    productsAdd,
    totalAmount}}
  
  
  >
    {children}
  </CartContext.Provider>
    );

} 
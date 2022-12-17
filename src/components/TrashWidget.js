import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import Eliminar from '../assets/images/eliminar.png';

export const TrashWidget = ({ itemId }) => {
  const { removerProducto } = useContext(CartContext);
  return (
    <button onClick={() => removerProducto(itemId)} className="eliminarProducto">

    <img src={Eliminar} alt="Eliminar Producto" className="eliminarIcon"/>

    </button>
  );
};

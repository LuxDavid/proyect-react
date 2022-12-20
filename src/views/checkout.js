import Layout from "../components/Layout";

  //--------------------------------------------------------------------------------
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";

  //--------------------------------------------------------------------------------
import { addDoc, doc, collection, getFirestore, updateDoc } from 'firebase/firestore';


function Checkout() {

    const navigate = useNavigate();

    const [updateProduct, setUpdateProduct] = useState(false);

    const { productsAdd, vaciarCarrito, totalAmount } = useContext(CartContext);

    const productoTotal = (cantidad, precio) =>{return cantidad * precio};

  //--------------------------------------------------------------------------------

    const finalizarCompra = (e) => {

        e.preventDefault();

        const nombre = e.target[0].value;

        const correoElectronico = e.target[0].value;

        const numeroTelefonico = e.target[0].value;

        const montoTotal = productsAdd
      .map((product) =>
        productoTotal(product.quantityAdded, product.item.price)
      )
      .reduce((previousValue, currentValue) => previousValue + currentValue);
//-------------------------------------------------------------------------------------------
        const dataBase = getFirestore();

        const ordenes = collection(dataBase, 'Orders');

        const realizarOrden = { comprador: { nombre, correoElectronico, numeroTelefonico }, productsAdd, montoTotal};


addDoc(ordenes,realizarOrden).then(()=>setUpdateProduct(true))
    .catch((err)=>{console.log(err)})
    .finally(() => {});
}

//--------------------------------------------------------------------------------------------

useEffect(()=>{

    if(updateProduct){

    const dataBase = getFirestore();
    
    productsAdd.forEach(prod => {
    
    const refProduct=doc(dataBase,'Items',prod.item.id);

    const prodActualizado={stock: prod.item.stock - prod.quantityAdded,};
    
    updateDoc(refProduct,prodActualizado)
    
    .then(()=>{
    
    vaciarCarrito();
    alert("Muchas gracias por su compra");
    navigate("/");
    
    }).catch((err)=>console.log(err))
    
    
    });
    
    }
    
    },[updateProduct]);


    return (

        <Layout>

            {/* <div className="containerForm"> */}

                <form onSubmit={finalizarCompra}>

                    <input className="checkInput" placeholder="Escribe tu nombre completo" required></input>
                    
                    <input className="checkInput" type={'email'} placeholder="Escribe tu correo electronico" required></input>

                    <input className="checkInput" type={"number"} placeholder="Ingresa tu numero telefonico" required></input>

                    <button type={"submit"}>Comprar</button>

                    <div className="checkoutPrice">

                        <span className="pago">Total a pagar:{totalAmount}</span>

                    </div>

                </form>

            {/* </div> */}

        </Layout>
    );

}

export default Checkout
import Layout from "../components/Layout";

  //--------------------------------------------------------------------------------
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import Swal from 'sweetalert2';

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

        const mensajeCompra=(mensaje,segundoMensaje)=>{

          Swal.fire(
            mensaje,
            segundoMensaje
          )
        }

        const nombre = e.target[0].value;

        const checkNombre=e.target[1].value;

        const correoElectronico = e.target[2].value;

        const checkCorreo=e.target[3].value;

        const numeroTelefonico = e.target[4].value;

        const checkNumero=e.target[5].value;

        const montoTotal = productsAdd
      .map((product) =>
        productoTotal(product.quantityAdded, product.item.price)
      )
      .reduce((previousValue, currentValue) => previousValue + currentValue);

//-------------------------------------------------------------------------------------------
        const dataBase = getFirestore();

        const ordenes = collection(dataBase, 'Orders');

        const realizarOrden = { comprador: { nombre, correoElectronico, numeroTelefonico }, productsAdd, montoTotal};

if((nombre === checkNombre) && (correoElectronico === checkCorreo) && (numeroTelefonico === checkNumero)){

addDoc(ordenes,realizarOrden).then((res)=>{
 
  mensajeCompra('Te agradecemos tu compra', `Este es el id de tu producto :${res.id} para que puedas monitorear el estado de tu producto`);
  setUpdateProduct(true);
})

    .catch(()=>{})
   
}else{mensajeCompra('Asegurate de verificar tus datos =D')}



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
    navigate("/");
   
   
    
    
    }).catch((err)=>console.log(err))
    
    
    });
    
    }
    
    },[updateProduct]);


    return (

        <Layout>

            {/* <div className="containerForm"> */}

            

                <form onSubmit={finalizarCompra}>

                <div className="inputContainer">

                 <input className="checkInput" type={'text'} placeholder="Escribe tu nombre completo" required></input>

                 <input className="checkInput" type={'text'} placeholder="Vuelve a escribir tu nombre completo" required></input>
                    
                 <input className="checkInput" type={'email'} placeholder="Escribe tu correo electronico" required></input>

                 <input className="checkInput" type={'email'} placeholder="Vuelve a escribir tu correo electronico" required></input>

                    <input className="checkInput" type={"number"} placeholder="Ingresa tu numero telefonico" required></input>

                    <input className="checkInput" type={"number"} placeholder="Vuelve a ingregar tu numero telefonico" required></input>

                    <button type={"submit"} className="terminar">Comprar</button>

                    <div className="checkoutPrice">

                        <span className="pago">Total a pagar: ${totalAmount}</span>

                    </div>

                    </div>

                </form>

            {/* </div> */}

        </Layout>
    );

}

export default Checkout
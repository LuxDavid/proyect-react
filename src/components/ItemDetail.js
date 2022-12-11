import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import '../App.css';
import ItemCount from './ItemCount';

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ItemDetail({item}) {

const navigate= useNavigate();

const [count, setCount] = useState(1);

const [stockActual, setStockActual] = useState(item.stock);

const maximoStock = stockActual;

function countChange(valor){

  if (valor === "agregar" && count < maximoStock) setCount(count + 1);
  if (valor === "eliminar" && count > 1) setCount(count - 1);

}

function limit() {
  if (stockActual < count) alert("Por el momento no tenemos mas stock de este producto :(");
  else setStockActual(stockActual - count);
}

function finishBuy(){
navigate("/cart")
};

return (
 
  <div className=" contenedor-detail d-flex p-3 m-3" >

 <CardGroup >
    <Card className='detail'>
      <Card.Img variant="top" src={item.img}/>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text>${item.price}</Card.Text>
        <Button className='agregar' onClick={limit} disabled={stockActual === 0}>Agregar al carrito</Button>
        <div className='buttonContainer'>
        <Button className='finalizar' onClick={finishBuy}>Finalizar compra</Button>

        </div>

      {stockActual > 0 ? (<ItemCount count={count} countChange={countChange}/>) :<Card.Text>Sin stock</Card.Text> } 

      </Card.Body>

      <Card.Footer>
        <small className="text-muted">Disponibles: {stockActual}</small>
      </Card.Footer>
    </Card>
  </CardGroup>

</div>
  );
}

export default ItemDetail;
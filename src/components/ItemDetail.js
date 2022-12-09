import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import '../App.css';

function ItemDetail({item}) {


return (
 
  <div className=" contenedor-detail d-flex p-3 m-3" >

 <CardGroup >
    <Card className='detail'>
      <Card.Img variant="top" src={item.img}/>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text>${item.price}</Card.Text>
        <Button className='agregar'>Agregar al carrito</Button>
        <div>
        <Button className='cart-button' variant="primary" size="sm">+</Button>
        <input className='contador' type="text" value={1}/>
        <Button className='cart-button' size="sm">-</Button>

        </div>
        
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Disponibles: {item.stock}</small>
      </Card.Footer>
    </Card>
  </CardGroup>

</div>
  );
}

export default ItemDetail;
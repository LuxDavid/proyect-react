import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

function ItemDetail({item}) {


return (
 
  <div className=" contenedor-cards d-flex p-3 m-3" >

 <CardGroup>
    <Card>
      <Card.Img variant="top" src={item.img}/>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text>{item.price}</Card.Text>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{item.stock}</small>
      </Card.Footer>
    </Card>
  </CardGroup>

</div>
  );
}

export default ItemDetail;
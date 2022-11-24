import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

const Detail=({product})=>{

  return( <CardGroup>
    <Card>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>{product.price}</Card.Text>
        <Button variant="primary">Agregar al Carrito</Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{product.stock}</small>
      </Card.Footer>
    </Card>
  </CardGroup>);
   
  
  }

export default Detail
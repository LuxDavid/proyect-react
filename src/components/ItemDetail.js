import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Juego1 from '../assets/images/juegops4-1.jpg';

function ItemDetail() {

return (
  <div className=" contenedor-cards d-flex p-3 m-3" >
 <CardGroup>
    <Card>
      <Card.Img variant="top" src={Juego1} />
      <Card.Body>
        <Card.Title>God of war Ragnarok</Card.Title>
        <Card.Text>God of war Ragnarok edicion: PS4 original</Card.Text>
        <Card.Text>1200</Card.Text>
        <Button variant="primary">Agregar al Carrito</Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">10</small>
      </Card.Footer>
    </Card>
  </CardGroup>

  </div>
  );
}

export default ItemDetail;
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from '../carrito2.jpg';

function ItemList({greeting}){

return(

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Image} />
      <Card.Body>
        <Card.Title>{greeting}</Card.Title>
        <Card.Text>
        {greeting}
        </Card.Text>
        <Button variant="primary">{greeting}</Button>
      </Card.Body>
    </Card>

);
}

export default ItemList
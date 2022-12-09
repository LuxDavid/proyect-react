import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";

function Item({product}){

return(

<Card style={{ width: '18rem', height:'25rem'}}>
<Card.Img className='imagesCards' variant="top" src={product.img} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
        ${product.price}
        </Card.Text>
        <Button className='agregar'><Link className='rutas' to={`/item/${product.id}`}>Ver detalle del producto</Link></Button>
      </Card.Body>

   
</Card>

    
);
}

export default Item
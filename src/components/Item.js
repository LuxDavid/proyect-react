import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";
import { GetImg } from '../hooks/getImg';

function Item({product}){

const image=GetImg(product.img);

return(

<Card style={{ width: '18rem', height:'25rem'}}>
<Card.Img className='imagesCards' variant="top" src={image} />
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
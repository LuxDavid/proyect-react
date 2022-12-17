import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

function ItemCart({product, quantityAdded,}) {
    return (
     
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-end">
          <div className="ms-2 me-auto">
            <div className="fw-bold info">{product.name}</div>
          <div className='info-precio'>${product.price}</div>
          </div>
          <Badge bg="warning" >
            {quantityAdded }

          </Badge>
        </ListGroup.Item>
      
);
}

export default ItemCart
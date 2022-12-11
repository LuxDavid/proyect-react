import Button from 'react-bootstrap/Button';

const ItemCount =({count,countChange})=>{

return(

<div>


<Button className='cart-button' variant="primary" size="sm" onClick={()=>countChange('eliminar')}>-</Button>

   <input className='contador' type="text" value={count}/>

    <Button className='cart-button' size="sm" onClick={()=>countChange('agregar')}>+</Button>

</div>

);

}

export default ItemCount
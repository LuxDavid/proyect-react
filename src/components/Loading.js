import Spinner from 'react-bootstrap/Spinner';

function Loading() {
  return (
  <div className='spinner-contenedor'><Spinner className='spinner' animation="border" variant="light" /></div>

  );
}

export default Loading;
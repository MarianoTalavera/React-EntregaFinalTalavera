import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  const imgCarrito = "https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/green_shoppictcart_1484336527-1.png";

  return (
    <div>
      <Link style={{textDecoration:"none"}} to='/cart'>
        <img className='imgCarrito' src={imgCarrito} alt="Carrito de Compras" />
        {
          cantidadTotal > 0 && <strong className='itemsIndicador'> {cantidadTotal} </strong>
        }
      </Link>
    </div>
  )
}

export default CartWidget
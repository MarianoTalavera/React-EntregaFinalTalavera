import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>
        <img className='imgProducto' src={img} alt={nombre} />
        <h3>Té {nombre} </h3>
        <p>Precio: $ {precio.toFixed(2)} </p>
        <h3>ID: {id} </h3>
        <br />
        <Link className='miBtn' to={`/item/${id}`}> Detalles </Link>
    </div>
  )
}

export default Item
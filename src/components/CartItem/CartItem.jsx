import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext);

  return (
    <div>
        <p> {item.nombre} </p>
        <h3> Cantidad: {cantidad} </h3>
        <h3> Precio por bolsita de 100 gr: $ {item.precio.toFixed(2)} </h3>
        <br />
        <button className="miBtn" onClick={()=> eliminarProducto(item.id)}> Eliminar Té </button>
        <hr />
    </div>
  )
}

export default CartItem
import { CarritoContext } from "../../context/CarritoContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2> No hay tés en el carrito</h2>
                <Link className="miBtn" to='/'> Volver a inicio </Link>
            </>
        )
    }
    return (
        <div>
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <h3>Total: ${total.toFixed(2)} </h3>
            <h3>Cantidad total: {cantidadTotal} </h3>
            <button className="miBtn" onClick={() => vaciarCarrito()}> Vaciar carrito </button>
            <Link className="miBtn" to='/checkout'> Terminar Compra </Link>           
        </div>
    )
}

export default Cart
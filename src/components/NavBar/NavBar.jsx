import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
  const imgTe = "https://github.com/MarianoTalavera/React-Preentrega-1-Talavera/blob/main/public/logo0112.png?raw=true";
  return (
    <header>
        <Link to={"/"}>
          <img className="imgTe" src={imgTe} alt="" />
        </Link>

        <nav>
            <ul>
                <li>
                  <NavLink className="miBtn" activeClassName="active" to={"/categoria/2"}> Tés oscuros </NavLink>
                </li>

                <li>
                  <NavLink className="miBtn" activeClassName="active" to={"/categoria/3"}> Tés claros </NavLink>
                </li>
            </ul>
        </nav>

        <CartWidget />

    </header>
  )
}

export default NavBar
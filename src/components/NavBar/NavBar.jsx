import logo from "../../assets/logo.png"
import CartWidget from "./CartWidget"
import "./navbar.css"

const NavBar = () => {
  return (
    <nav className='navbar'>
        <div className='brand'>
            <img src={logo} alt="" />
        </div>

        <ul className="categories">
          <li>Cuadros</li>
          <li>Productos</li>
        </ul>
        <CartWidget/>
    </nav>
  )
}

export default NavBar
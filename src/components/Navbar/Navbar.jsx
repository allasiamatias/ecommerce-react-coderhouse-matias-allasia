import CartWidget from "../Cart/Cart"
import'./Navbar.css'
import { Link } from "react-router";

function Navbar(){
    return(
        <>
            <nav className="barra-navegacion">
                <div>
                    <Link to="/" >
                        <h3 className="logo">La Bodega</h3>
                    </Link>
                </div>
                <div>
                    <ul className="enlaces">
                        <Link to="/">Todos los Productos</Link>
                        <Link to="/categoria/vinos">Vinos</Link>
                        <Link to="/categoria/cervezas">Cervezas</Link>
                        <Link to="/categoria/destilados">Destilados</Link>
                    </ul>
                </div>
                <div className="carrito">
                    <CartWidget />
                </div>
            </nav>
        </>
    )
}

export default Navbar
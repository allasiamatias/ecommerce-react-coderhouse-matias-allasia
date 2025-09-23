import CartWidget from "../Cart/Cart"
import'./Navbar.css'

function Navbar(){
    return(
        <>
            <nav className="barra-navegacion">
                <div>
                    <h3 className="logo">La Bodega</h3>
                </div>
                <div>
                    <ul className="enlaces">
                        <a href="/">Todos los Productos</a>
                        <a href="/">Vinos</a>
                        <a href="/">Cervezas</a>
                        <a href="/">Destilados</a>
                        <CartWidget />
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
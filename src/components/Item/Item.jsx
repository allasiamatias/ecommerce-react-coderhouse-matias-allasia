import { Link } from 'react-router'
import './Item.css'

function Item(props){
    return(
        <div className="item">
            <img src={props.imagen} alt={props.titulo} className="item-imagen"/>
            <h2 className="item-titulo">{props.titulo}</h2>
            <h4 className="item-precio">$ {props.precio}</h4>
            <div className="detalle">
                <Link to= {`/detalle/${props.id}`} >
                    <button>Ampliar</button>
                </Link>
            </div>
        </div>
    )
}

export default Item
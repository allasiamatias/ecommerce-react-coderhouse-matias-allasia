import './ItemListContainer.css'

function ItemListContainer(props){
    return(
    <section className="container">
        <h1>{props.greeting}</h1>
    </section>
    )
}

export default ItemListContainer;
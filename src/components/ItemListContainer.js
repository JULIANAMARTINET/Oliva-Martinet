import Contador from "./ItemCount";

function ItemListContainer({ greeting }) {
    return (
        <div className="itemListContainer">
            <h2>{greeting}</h2>   
            <Contador stock={5} initial={1} /> 
        </div>
    )
}

export default ItemListContainer
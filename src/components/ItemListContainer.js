import ItemList from "./ItemList";
import { useState, useEffect } from "react";

function ItemListContainer({ greeting }) {
  const [listProductos, setListProductos] = useState([]);


useEffect(() => {
    fetch("./Api/productos.json")
       .then((res) => res.json())
       .then(data => setListProductos(data));  
    },[] );

  return (
    <div className="itemListContainer">
      <div className="portada">
        <h2>TEXTILES HECHOS A MANO</h2>
        <img src={greeting} alt="" />
        <p>ENVIOS A TODO EL PAIS</p>
      </div>
      <ItemList listProductos={listProductos} />
   
    </div>
  );
}

export default ItemListContainer;

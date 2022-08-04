import Contador from "./ItemCount";
import ItemList from "./ItemList";
import { productos } from "../productos/Productos";
import { useState, useEffect } from "react";

function ItemListContainer({ greeting }) {
  const [listProductos, setListProductos] = useState([]);

  const getInfo = (productos) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(productos);
      }, 2000);
    });
  };

  useEffect(() => {
    getInfo(productos).then((data) => setListProductos(data));
  }, []);

  return (
    <div className="itemListContainer">
      <div className="portada">
        <h2>TEXTILES HECHOS A MANO</h2>
        <img src={greeting} alt="" />
        <p>ENVIOS A TODO EL PAIS</p>
      </div>
      <ItemList listProductos={listProductos} />
      <Contador stock={5} initial={1} onAdd={2} />
    </div>
  );
}

export default ItemListContainer;

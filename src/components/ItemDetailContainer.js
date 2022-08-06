import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";

function ItemDetailContainer() {
  const [detail, setDetail ]= useState([]);


useEffect(() => {
    fetch("./Api/productos.json")
       .then((res) => res.json())
       .then(res => 
        setDetail(res.find(productos => productos.id === 1)))
    }, [] );

  return (
    <div className="itemDetailContainer">
        <ItemDetail detail={detail}/>
    </div>
  );
}

export default ItemDetailContainer;

    
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [detail, setDetail] = useState({});
 const {id} = useParams();

  useEffect(() => {
    fetch("./Api/productos.json")
      .then((res) => res.json())
      .then(res => setDetail(res.find(productos => productos.id === id)));
  }, [id] );

  return (
    <div className="itemDetailContainer">
      <ItemDetail detail={detail} />
    </div>
  );
}

export default ItemDetailContainer;

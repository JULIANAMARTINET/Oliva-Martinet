import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [detail, setDetail] = useState({});
 const {id} = useParams();

  useEffect(() => {
    fetch("https://mocki.io/v1/ec7f9bb7-9402-4a09-a305-5c7ad4d95b45")
      .then((res) => res.json())
      .then(res => setDetail(res.find(productos => productos.id === Number(id)))); 
  }, [id] );

  return (  
    <div className="itemDetailContainer">
      <ItemDetail detail={detail} />
    </div>
  );
}

export default ItemDetailContainer;

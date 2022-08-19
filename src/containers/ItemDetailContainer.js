import ItemDetail from "../components/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [detail, setDetail] = useState({});
 const {id} = useParams();

  useEffect(() => {
    fetch("https://mocki.io/v1/3e524c38-eee1-4a45-8f2a-a81169c6b04a")
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

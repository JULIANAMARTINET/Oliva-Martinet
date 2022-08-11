import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'  


function ItemListContainer() {

  const [listProductos, setListProductos] = useState([]);
  const {id} = useParams()

useEffect(() => {
    fetch("./Api/productos.json")
       .then((res) => res.json())
       .then(data => { 
       if(id){
        setListProductos(data.filter(item=>item.cat === id))
        console.log(data)
    }else{
        setListProductos(data)
    }
  })
},[id])
 
  return (
    <div className="itemListCont">
      <ItemList listProductos={listProductos} />
    </div>
  );
}

export default ItemListContainer;

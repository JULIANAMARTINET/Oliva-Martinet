import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'  


function ItemListContainer() {

  const [listProductos, setListProductos] = useState([]);
  const {id} = useParams()

useEffect(() => {
    fetch("https://mocki.io/v1/ec7f9bb7-9402-4a09-a305-5c7ad4d95b45")
       .then((res) => res.json())
       .then(data => { 
       if(id){
        setListProductos(data.filter(item=>item.cat === id))
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


import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'  


function ItemListContainer() {

  const [listProductos, setListProductos] = useState([]);
  const {id} = useParams()

useEffect(() => {
    fetch("https://mocki.io/v1/3e524c38-eee1-4a45-8f2a-a81169c6b04a")
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


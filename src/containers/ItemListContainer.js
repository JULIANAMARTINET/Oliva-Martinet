import ItemList from "../components/ItemList";
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'  
import { db}  from "../firebase"
import { collection, getDocs, query, where,} from "firebase/firestore"


function ItemListContainer() {
 const [listProductos, setListProductos] = useState([]);
  const {id} = useParams()
  
useEffect(() => {
  if(!id){
    const productosCollection = collection(db, "productos")
    const consulta = getDocs(productosCollection)

    consulta
    .then(res => {
        const productos = res.docs.map(doc=>{
            return {
                ...doc.data(),
                id: doc.id
            }
        })
        setListProductos(productos)
    })
    .catch(err=>{
        console.log(err)
    })
}else{
    const productosCollection = collection(db, "productos")
    const filtro = query(productosCollection,
        where("cat", "==", `${id}`))
        // where("stock",">",5))
    const consulta = getDocs(filtro)

    consulta
    .then(res=>{
        const productos = res.docs.map(doc=>{
            return {
                ...doc.data(),
                id: doc.id
            }
        })
        setListProductos(productos)
    })
    .catch(err=>{
console.log(err)
    })
}
}, [id])

 
  return (
    <div className="itemListCont">
      <ItemList listProductos={listProductos} />
    </div>
  );
}

export default ItemListContainer;


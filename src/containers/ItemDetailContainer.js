import ItemDetail from "../components/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db }  from "../firebase"
import { collection, getDoc, doc} from "firebase/firestore"

function ItemDetailContainer() {
  const [detail, setDetail] = useState({});
 const {id} = useParams();

  useEffect(() => {
   const productosCollection = collection(db, "productos")
   const referencia = doc(productosCollection, id)
   const consulta = getDoc(referencia)

     consulta
      .then(res => {
        setDetail(res.data())
      })
      .catch((err) => {
        console.log(err)
      })

  }, [id] );

  return (  
    <div className="itemDetailContainer">
      <ItemDetail detail={detail} />
    </div>
  );
}

export default ItemDetailContainer;

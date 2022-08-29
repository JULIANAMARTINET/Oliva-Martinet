import ItemDetail from "../components/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from '@mui/material';
import { db }  from "../firebase"
import { collection, getDoc, doc} from "firebase/firestore"

function ItemDetailContainer() {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(false)
  const {id} = useParams();

  useEffect(() => {
   const productosCollection = collection(db, "productos")
   const referencia = doc(productosCollection, id)
   const consulta = getDoc(referencia)

     consulta
      .then(res => {
        const producto = res.data()
        producto.id = id
        setDetail(producto)
        setLoading(true)
      })
      .catch((err) => {
        console.log(err)
      })

  }, [id] );

  return (  
     <> 
       {loading?
         <div className="itemDetailContainer">
           <ItemDetail detail={detail} />
         </div>
         :
                 <div className='text-center'>
                     <CircularProgress color="inherit" />
                 </div>
     
        }     
      </> 
   );}

export default ItemDetailContainer;

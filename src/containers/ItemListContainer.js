import ItemList from "../components/ItemList";
import { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { toast } from 'react-toastify';
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

function ItemListContainer() {

  const [listProductos, setListProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const consulta = () => {
        const productosCollection = collection(db, "productos");
        const categoria = query(productosCollection, where("cat", "==", `${id}`));
        const destacados = query(productosCollection, where("type", "==", "si"));
    
      if (!id) {
        return destacados
      }
      else if (id === "tienda"){
        return productosCollection
      }
      else {
        return categoria;
      }
    }

    getDocs(consulta())
      .then((res) => {
        const productos = res.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          }
        });
        setListProductos(productos);
        setLoading(true);
      })
      .catch((err) => {
        toast.error('Se produjo un error, intenta mas tarde', {
          position: "top-right",
          });
      });
  }, [id])

  return (
    <div className="itemListCont">
      {!loading && <CircularProgress color="inherit" />}
      {loading && <ItemList listProductos={listProductos} />}
    </div>
  );
}

export default ItemListContainer;

import Contador from "./ItemCount";
import { useCarrito } from "../context/CartContext";
import {useState} from "react"
import { toast } from 'react-toastify';

const ItemDetail = ({ detail }) => {

  const [cantidad, setCantidad] = useState(1)
  const {estaEnBolsa, agregarItem} = useCarrito()

  const alert = () => {
    toast.success(`Se agrego "${detail.nombre}" a tu bolsa de compras`,{
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }
  
  const onAdd = () => {
    estaEnBolsa(detail.id)
    agregarItem(detail, cantidad);
    alert()
  }

  return (
    <section className="cardDetail">
      <h3>{detail.nombre}</h3>
      <div className="row">
        <div className="column lg:w-1/2 md:w-2/2">
          <img src={detail.img} alt="producto" />
        </div>
        <div className="column lg:w-1/2 md:w-2/2">
          <p className="textDetail">{detail.detalle}</p>
          <p className="medidaDetail">
            Medidas {detail.medida}
          </p>
          <p className="precioDetail">$ {detail.precio}</p>
          <Contador stock={5} cantidad={cantidad} setCantidad={setCantidad} onAdd={onAdd} />
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;

import Contador from "./ItemCount";
import { useCarrito } from "../context/CartContext";
import {useState} from "react"
import Swal from 'sweetalert2'


const ItemDetail = ({ detail }) => {

  const [cantidad, setCantidad] = useState(1)
  const {estaEnBolsa, agregarItem} = useCarrito()

  const alert = () => {
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: `Se agrego "${detail.nombre}" a tu bolsa de compras`,
      showConfirmButton: false,
      timer: 2000
    })
  }
  
  const onAdd = () => {
    estaEnBolsa(detail.id)
    agregarItem(detail, cantidad);
    alert()
  }

  return (
    <section className="card-detail">
      <h3>{detail.nombre}</h3>
      <div className="row">
        <div className="column">
          <img src={detail.img} alt="producto" />
        </div>
        <div className="column">
          <p className="text-detail">{detail.detalle}</p>
          <p className="medida-detail">
            Medidas <br />
            {detail.medida}
          </p>
          <p>$ {detail.precio}</p>
          <Contador stock={5} cantidad={cantidad} setCantidad={setCantidad} onAdd={onAdd} />
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;

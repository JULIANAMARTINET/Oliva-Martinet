import React from "react";
import { useNavigate } from "react-router-dom";
import {useState} from "react"
import { useCarrito } from "../context/CartContext";

export const Checkout = () => {

  const [cliente, setCliente] = useState({
      nombre: "",
      apellido: "",
      tel: "",
      email: "",
      direccion: ""
  }
  )

  const [submit, setSubmit] = useState(false)

  const { cart, precioTotal } = useCarrito();

  const navigate = useNavigate();

  const handlerChangeInput = (e) => {
      setCliente({
          ...cliente,
          [e.target.name]: e.target.value,
      })
  }

  const handlerSubmit = (e) => {
       e.preventDefault()
       const orden = {
           items: cart,
           comprador: {...cliente},
           precio: precioTotal()
       }
         setSubmit(true)
         console.log(orden)
  }

  if (cart.length === 0) {
    setTimeout(() => {
      navigate("/");
    }, 4000);
    return (
      <div>
        <h1>No hay productos en carrito</h1>
        <h2>Seras redirijido a la Home en 4 seg</h2>
      </div>
    );
  }

  return (
    <div className="containerCheckout">
      <h2 className="tit_checkout">Datos de Facturación y Envío</h2>
      <form onSubmit={handlerSubmit} className="form">
            <div className="row_form">
                <div className="item_form">
                   <h3>Nombre</h3>
                   <input name="nombre" value={cliente.nombre} onChange={handlerChangeInput}/>
                </div>
                <div className="item_form">
                   <h3>Apellido</h3>
                   <input name="apellido" value={cliente.apellido} onChange={handlerChangeInput}/>
                </div>
            </div>
            <div className="row_form">
                <div className="item_form">
                   <h3>Telefono</h3>
                   <input name="tel" value={cliente.tel} onChange={handlerChangeInput}/>
                </div>
                <div className="item_form">
                   <h3>Email</h3>
                   <input placeholder="ej: maria@gmail.com" name="email" value={cliente.email} onChange={handlerChangeInput}/>
                </div>
           </div>
           <div>
               <h3>Dirección de envío</h3>
               <input name="direccion" value={cliente.direccion} onChange={handlerChangeInput}/>
           </div>
           <button type="submit" className="button">Confirmar Compra</button>
      </form>
      <hr />
         {
          submit && <div className="container_envio">
                       <h3 className="tit_envio">Su orden fue cargada con exito! </h3>
                       <p>Revise su casilla de correo {cliente.email}, para proceder al pago.</p>
                       <div className="detalle_envio">
                          <h4>Detalle de compra:</h4>
                          <p>Nombre: {cliente.nombre}</p>
                          <p>Apellido: {cliente.apellido}</p>
                          <p>Dirreccion de envio: {cliente.direccion}</p>
                          <p>Monto a pagar: ${precioTotal()}</p>
                       </div>
                    </div>
        }
    </div>
  );
};

export default Checkout
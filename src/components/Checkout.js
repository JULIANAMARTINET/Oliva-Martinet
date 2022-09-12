import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {useState} from "react"
import { useCarrito } from "../context/CartContext";
import { toast } from 'react-toastify';
import { db }  from "../firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"

export const Checkout = () => {

  const [submit, setSubmit] = useState(false)
  const [orderId, setOrderId] = useState()
  const { cart, precioTotal, vaciarBolsa} = useCarrito();
  const navigate = useNavigate();

  const [cliente, setCliente] = useState({
      nombre: "",
      apellido: "",
      tel: "",
      email: "",
      direccion: ""
  })

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
           precio: precioTotal(),
           comprador: {...cliente},
           date: serverTimestamp(),
       }
       const orderCollection = collection(db, " order")
       const consulta = addDoc(orderCollection, orden)

         setSubmit(true)
         consulta 
         .then(res => {
           setOrderId(res.id)
         })
         .catch(err => {
          toast.error('Se produjo un error, intenta mas tarde', {
            position: "top-right",
            });
         })
         vaciarBolsa()
  }

  if ((cart.length === 0) && (submit)) {
    
     return (
             <div className="containerEnvio"> 
                 <h3 className="titEnvio">Su orden fue cargada con exito! </h3>
                 <p>Revise su casilla de correo {cliente.email}, para proceder al pago.</p>
                 <div className="detalleEnvio">
                    <h4>Detalle de compra:</h4>
                    <p>Numero de orden: {orderId}</p> 
                    <p>Nombre: {cliente.nombre}</p>
                    <p>Apellido: {cliente.apellido}</p>
                    <p>Dirreccion de envio: {cliente.direccion}</p>
                 </div>
                 <Link to="/"><button className="button">Volver a la Home</button></Link>
            </div>
           )}

  else if (cart.length === 0) {
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

else {
  return (
    <div className="containerCheckout">
      <h2 className="titCheckout">Datos de Facturación y Envío</h2>
      <form onSubmit={handlerSubmit} className="form">
            <div className="rowForm">
                <div className="itemForm">
                   <h3>Nombre</h3>
                   <input name="nombre" value={cliente.nombre} onChange={handlerChangeInput}/>
                </div>
                <div className="itemForm">
                   <h3>Apellido</h3>
                   <input name="apellido" value={cliente.apellido} onChange={handlerChangeInput}/>
                </div>
            </div>
            <div className="rowForm">
                <div className="itemForm">
                   <h3>Telefono</h3>
                   <input name="tel" value={cliente.tel} onChange={handlerChangeInput}/>
                </div>
                <div className="itemForm">
                   <h3>Email</h3>
                   <input placeholder="ej: maria@gmail.com" name="email" value={cliente.email} onChange={handlerChangeInput}/>
                </div>
           </div>
               <div className="dirrecion">
                 <h3>Dirección de envío</h3>
                 <input className="lg:w-1/2 md:w-full" name="direccion" value={cliente.direccion} onChange={handlerChangeInput}/>
           </div>
           <button type="submit" className="button">Confirmar Compra</button>
      </form>
    </div>
  )}}

export default Checkout
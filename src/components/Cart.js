import { useCarrito } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, eliminarItem, vaciarBolsa, precioTotal } = useCarrito();


  if (cart.length > 0) {
    return (
      <div className="containerCarrito">
        <h2 className="titCarrito">Mi Bolsa de compras</h2>
         {cart.map((element, index) => {
            return (
             <article key={index} className="cart">

                   <div className="imgCarrito">
                       <img src={element.img} alt={element.name} />
                   </div>
                   <div>
                       <h3 className="titItem">{element.nombre}</h3>
                       <p>Precio: ${element.precio}</p>
                       <p>Cantidad: {element.cantidad}</p>
                   </div>
                   <div>
                       <button className="button" onClick={() => eliminarItem(element.id)}> X
                       </button>
                   </div>
              </article>)})}
              <h4 className="precioTotal">Precio Total: ${precioTotal()}  </h4>
           <section className="botonesCarrito">
                <button className="button" onClick={() => vaciarBolsa()}>
                   Vaciar Carrito
                </button>
                <div>
                    <Link to="/checkout"><button className="button">Ir al Checkout</button>
                    </Link>
                </div>
           </section>
      </div>
    );
  }

  return (
        <div className="containerCarrito">
            <h2 className="titCarrito">Mi Bolsa de compras</h2>
            <p>Aún no agregaste productos.</p>
            <Link to="/">
                <button className="button">Volver a la home</button>
            </Link>
      </div>
  );
}

export default Cart;

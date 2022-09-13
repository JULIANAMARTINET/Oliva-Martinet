import React from "react";

function Contador({ stock, setCantidad, onAdd, cantidad}) {

  const sumarContador = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1)
  }
}
  const restarContador = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1)
  }
}

  return (
      <div className="containerCount">
         <div className="contador">
             <button className="contadorSimbol" onClick={sumarContador}>
               +
             </button>
             <p> cant: {cantidad}</p>
             <button className="contadorSimbol" onClick={restarContador}>
               -
             </button>
         </div>
         <button className="addCarrito" onClick={() => {onAdd()}}>Añadir al Carrito</button>
      </div>
  );
}

export default Contador;

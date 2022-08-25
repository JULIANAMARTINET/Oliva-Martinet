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
    <>
      <div>
        <div className="contador">
          <button className="contador_simbol" onClick={sumarContador}>
            +
          </button>
          <p> cant: {cantidad}</p>
          <button className="contador_simbol" onClick={restarContador}>
            -
          </button>
        </div>
        <button className="addCarrito" onClick={() => {onAdd()}} > Añadir al Carrito </button>
      </div>
    </>
  );
}

export default Contador;

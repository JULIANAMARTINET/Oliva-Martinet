import { useState } from "react";


function Contador({ stock, initial, onAdd}) {
  const [contador, setCounter] = useState(initial);

  const sumarContador = () => {
    if (contador < stock) {
      const aux = contador + 1;
      setCounter(aux);
    } else {
      console.log("No more stock");
    }
  };

  const restarContador = () => {
    if (contador > initial) {
      const aux = contador - 1;
      setCounter(aux);
    }  
  };

  const confirmar = () => {
    console.log("onAdd")
  }

  return (
    <>
      <div>
        <div className="contador">
          <button className="contador_simbol" onClick={sumarContador}>
            +
          </button>
          <p> cant: {contador}</p>
          <button className="contador_simbol" onClick={restarContador}>
            -
          </button>
        </div>
        <button className="addCarrito" onClick={confirmar}>Añadir al Carrito</button>
      </div>
    </>
  );
}

export default Contador;

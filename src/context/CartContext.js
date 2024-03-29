import { createContext, useContext, useState } from "react";

const CartContext = createContext();
const { Provider } = CartContext;

export const useCarrito = () => {
  return useContext(CartContext);
};

const MyProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const estaEnBolsa = (id) => {
    return cart.some((x) => x.id === id);
  };

  const agregarItem = (item, cantidad) => {
    const newItem = {
      ...item,
      cantidad,
    };
    if (estaEnBolsa(newItem.id)) {
      const findProducto = cart.find((x) => x.id === newItem.id);
      const productoIndex = cart.indexOf(findProducto);
      const auxArray = [...cart];
      auxArray[productoIndex].cantidad += cantidad;
      setCart(auxArray)
    } else {
      setCart([...cart, newItem]);
    }
  };

  const eliminarItem = (id) => {
    return setCart(cart.filter((x) => x.id !== id));
  };

  const vaciarBolsa = () => {
    return setCart([]);
  };

  const cantUn = () => {
    return cart.reduce((acc, x) => (acc += x.cantidad), 0);
  };

  const precioTotal = () => {
    return cart.reduce((acc, x) => (acc += x.cantidad * x.precio), 0);
  };

  return (
    <Provider
      value={{
        cart,
        estaEnBolsa,
        agregarItem,
        vaciarBolsa,
        eliminarItem,
        cantUn,
        precioTotal,
      }}
    >
      {children}
    </Provider>
  );
};

export default MyProvider;

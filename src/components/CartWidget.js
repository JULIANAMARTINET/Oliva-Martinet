import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext";

const Bolsa = () => {

  const {cantUn} = useContext(CartContext)
  

    return (
      <>
      <Link to="/cart">
         <span>
           <img className="bolsa_icono" src="/icono/bolsa-compras.png" alt="bolsa de compras" />
         </span>
         {cantUn()}
         </Link>
      </>
    );
  }
  
  export default Bolsa;
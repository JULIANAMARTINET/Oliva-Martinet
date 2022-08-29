import { useCarrito } from "../context/CartContext";
import { Badge } from '@mui/material'

const Bolsa = () => {

  const {cantUn} = useCarrito()

    return (
    <div>
         <Badge badgeContent={cantUn()} color="primary">
           <span>
              <img className="bolsa_icono" src="/icono/bolsa-compras.png" alt="bolsa de compras" />
           </span>
         </Badge>
     </div>
    );
  }
  
  export default Bolsa;
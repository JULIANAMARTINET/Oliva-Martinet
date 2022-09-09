import Bolsa from "../CartWidget";
import { Link } from "react-router-dom";

  const List = ({open}) => {

  return (
     <ul open={open}
          className={`menu md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in"
          ${open ? 'active' : ''}`}>
            <li className="md:ml-8 text-xl md:my-0 my-7">
              <Link to="/aboutus" className="text-gray-800 hover:text-gray-400 duration-500">Sobre oliva</Link></li>
            <li className="md:ml-8 text-xl md:my-0 my-7 relative">
              <Link to="/tienda" className="text-gray-800 hover:text-gray-400 duration-500">Tienda</Link>
                    <ul className="lg:absolute p-2 rounded-md dropDown" >
                        <li className="flex p-1 font-medium text-gray-600 hover:text-black itemCat"><Link to="/cat/textiles" className="">Textiles</Link></li>
                        <li className="flex p-1 font-medium text-gray-600 hover:text-black itemCat"><Link to="/cat/almohadones" className="">Almohadones</Link></li>
                        <li className="flex p-1 font-medium text-gray-600 hover:text-black itemCat"><Link to="/cat/ptextiles" className="">Pequeños Textiles</Link></li>
                    </ul> 
            </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link to="/cart" className="text-gray-800 hover:text-gray-400 duration-500">
              <Bolsa />
            </Link>
          </li>
     </ul>
  )
};

export default List;
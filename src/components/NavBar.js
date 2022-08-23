import Bolsa from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = ({ type }) => {
 
 
  return (
    <div className="md:flex items-center justify-between py-2 md:px-10 px-7 navbar">
      <div
        className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
      >
        <span className="text-3xl text-indigo-600 mr-1 pt-2">
          <div>
            <Link to="/">
              <img
                className="logo"
                src="/img/logo.png"
                alt="logo oliva"
              />
            </Link>
          </div>
        </span>
      </div>
      <ul
        className="menu md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in"
      >
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link to="/" className="text-gray-800 hover:text-gray-400 duration-500">Sobre oliva</Link></li>
          <li className="md:ml-8 text-xl md:my-0 my-7 relative">
            <Link to="/tienda" className="text-gray-800 hover:text-gray-400 duration-500">Tienda</Link>
                  <ul className="lg:absolute p-2 rounded-md dropDown" >
                      <li className="flex p-1 font-medium text-gray-600 hover:text-black itemCat"><Link to="/cat/textiles" className="">Textiles</Link></li>
                      <li className="flex p-1 font-medium text-gray-600 hover:text-black itemCat"><Link to="/cat/almohadones" className="">Almohadones</Link></li>
                      <li className="flex p-1 font-medium text-gray-600 hover:text-black itemCat"><Link to="/cat/ptextiles" className="">Pequeños Textiles</Link></li>
                  </ul> 
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
             <Link to="/" className="text-gray-800 hover:text-gray-400 duration-500">Contacto</Link></li>
        <li className="md:ml-8 text-xl md:my-0 my-7">
          <Link to="/cart" className="text-gray-800 hover:text-gray-400 duration-500">
            <Bolsa />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

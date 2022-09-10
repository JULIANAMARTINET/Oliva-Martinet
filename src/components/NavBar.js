import Burger from "./Burger";
import { Link } from "react-router-dom";


const NavBar = ({ type }) => {
 
  return (
    <div className="navbar">
      <div className="textNavbar md:flex items-center justify-between">
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
        <Burger />
      </div>
    </div>
  );
};

export default NavBar;

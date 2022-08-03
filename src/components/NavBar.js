import Bolsa from "./CartWidget";

const NavBar = () => {
  const Links = [
    { name: "Sobre Oliva", link: "/" },
    { name: "Tienda", link: "/" },
    { name: "Contacto", link: "/" },
  ];
  //  let [open,setOpen]=useState(false);
  return (
    <div className="md:flex items-center justify-between py-4 md:px-10 px-7 navbar">
      <div
        className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
      >
        <span className="text-3xl text-indigo-600 mr-1 pt-2">
          <div>
            <img className="logo" src="./img/logo.png" alt="logo oliva" />
          </div>
        </span>
      </div>
      <ul
        className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in'}`}
      >
        {Links.map((link) => (
          <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
            <a
              href={link.link}
              className="text-gray-800 hover:text-gray-400 duration-500"
            >{link.name}</a>
          </li>
        ))}
        <li className="md:ml-8 text-xl md:my-0 my-7">
          <a href="*" className="text-gray-800 hover:text-gray-400 duration-500">
            <Bolsa />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

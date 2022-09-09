import { useState } from "react"
import List from "./List";

  const Burger = () => {
    const [open, setOpen] = useState(false)

  return (
    <>
      <div className="burger" open={open} onClick={() => setOpen(!open)}>
         <div></div>
         <div></div>
         <div></div>
     </div>
     <List open={open}/>
   </>
  );
};

export default Burger;


import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";

function App(){

    return (
        <>
          <NavBar />  
          <ItemListContainer greeting={"./img/logoPrincipal.png"} />
          <ItemDetailContainer />
    </> 
    )
  }

  export default App;
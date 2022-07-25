import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";

function Home(){
    return (
        <>
          <NavBar />  
          <ItemListContainer
                  greeting={"OLIVA"}
                />
    </> 
    )
  }

  export default Home;
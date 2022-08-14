 import ItemListContainer from "./ItemListContainer";

  const Home = () => {

  return (
      <>
         <div className="portada">
              <h2>TEXTILES HECHOS A MANO</h2>
              <img src={"/img/logoPrincipal.png"} alt="" />
              <p>ENVIOS A TODO EL PAIS</p>
         </div>
         { <ItemListContainer /> }
    </>
  );
};

export default Home;

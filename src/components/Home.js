 import ItemListContainer from "../containers/ItemListContainer";

  const Home = () => {


  return (
      <>
         <div className="portada">
              <h2>TEXTILES HECHOS A MANO</h2>
              <img src={"/img/logoPrincipal.png"} alt="" />
              <p>ENVIOS A TODO EL PAIS</p>
         </div>
         <h2 className="titHome">PRODUCTOS DESTACADOS</h2>
         { <ItemListContainer type="home"/> }
    </>
  );
};

export default Home;

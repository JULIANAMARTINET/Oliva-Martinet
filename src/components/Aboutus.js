const Aboutus = () => {
    return (
      <section className="containerAbout">
              <div className="detailAbout lg:w-2/3 md:w3/3">
                   <h2>LA HISTORIA DETRÁS DE OLIVA</h2>
                   <div className="row">
                        <div className="colUno lg:w-2/5 md:w-3/5">
                            <div className="textAbout">¡Hola! Soy To, Anto para algunos, Toe para otros. Soy costurera por vocación, amante de la naturaleza y la decoración. Soy cordobesa y emigre este año a Alemania, actualmente viviendo en Eppelheim.</div>
                            <div className="textAbout">Oliva es un proyecto que nace de mi deseo de crear, y que reúne muchos aspectos que me apasionan y disfruto de la vida. Las texturas, los colores y el oficio se funden para darle vida y realzar los espacios que nos rodean.</div>
                        </div>
                        <div className="colDos lg:w-3/5 md:w-3/5">
                            <div className="textAbout">Soy amante de los detalles y respeto profundamente la naturaleza, mi mayor fuente de inspiración. Elijo usar telas de algodón, sensibles al tacto, que no necesitan planchado. Esto le confiere una especial calidez a los espacios, creando ambientes más relajados. </div>
                            <div className="textAbout">Estoy innovando en teñir mis telas con tintes naturales, como la cáscara de cebolla o de palta, logrando reutilizar los desperdicios y dándole un color hermoso al textil. Al teñir con plantas, extraes el corazón de ellas, por lo que al usarlas, lo llevas siempre contigo. Dicen que propicia felicidad y protección a quien lo lleve, y doy fe de eso. Es indescriptible la magia que se crea al teñir con ellos. </div>
                        </div>
                   </div>
              </div>
              <div className="imgAbout lg:w-1/3 md:w-1/3">
                  <img src={"/img/aboutus.png"} alt="" />
              </div>
     </section>
    );
  };
  
  export default Aboutus;
  
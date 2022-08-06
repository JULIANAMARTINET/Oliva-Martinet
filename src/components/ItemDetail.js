import Contador from "./ItemCount";

const ItemDetail = ({ detail }) => {
  return (
    <section className="card-detail">
      <h3>{detail.nombre}</h3>
      <div className="row">
        <div className="column">
          <img src={detail.img} alt="producto" />
        </div>
        <div className="column">
          <p className="text-detail">{detail.detalle}</p>
          <p className="medida-detail">
            Medidas <br />
            {detail.medida}
          </p>
          <p>$ {detail.precio}</p>
          <Contador stock={5} initial={1} onAdd={2} />
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;

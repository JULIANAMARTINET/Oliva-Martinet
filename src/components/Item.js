
const Item = ({productos}) => {
  return (
        <div className="card">
          <img src={productos.img} alt="producto" />
          <p>{productos.nombre}</p>
          <p>$ {productos.precio}</p>
          <button>Ver detalle</button>
        </div>
  )}

export default Item;
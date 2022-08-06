
const Item = ({productos}) => {
  return (
        <article className="card">
            <img src={productos.img} alt="producto" />
            <p>{productos.nombre}</p>
            <p>$ {productos.precio}</p>
            <button>Ver detalle</button>
        </article>
  )}

export default Item;
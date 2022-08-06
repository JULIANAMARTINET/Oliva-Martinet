import Item from "./Item";

  const ItemList = ({listProductos}) => {

  return (
    <section className="card-container">
      {listProductos.map(productos => 
          <Item key={productos.id} productos={productos}/>
      )}
    </section>
  );
};

export default ItemList;

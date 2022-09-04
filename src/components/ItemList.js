import Item from "./Item";

  const ItemList = ({listProductos}) => { 

  return (
    <section className="container mx-auto text-center">
       <div className= " flex flex-row  flex-wrap justify-center">
      {listProductos.map(productos => 
          <Item key={productos.id} productos={productos}/>
      )}
      </div>
    </section>
  )}

export default ItemList;
